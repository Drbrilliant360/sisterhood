import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { goals, idealMentor } = await req.json();
    console.log("Finding mentor matches for goals:", goals);

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const prompt = `You are a mentor matching system for SisterHood, a platform supporting African women in entrepreneurship, health, and personal development.

A mentee is looking for a mentor with the following goals: ${goals}
They describe their ideal mentor as: ${idealMentor}

Generate 3 ideal mentor profile matches. For each mentor, provide:
1. name - A realistic African female name
2. expertise - Their area of expertise
3. experience - Years of experience and brief background
4. matchScore - A compatibility percentage (75-98)
5. bio - A 2-sentence bio
6. availability - Weekly availability

Format your response as a JSON array with objects containing: name, expertise, experience, matchScore, bio, availability.
Only return the JSON array, nothing else.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are a helpful mentor matching assistant. Always respond with valid JSON." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const json = await response.json();
    const content = json.choices?.[0]?.message?.content || "[]";
    
    let mentors;
    try {
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      mentors = JSON.parse(cleanContent);
    } catch (e) {
      console.error("Failed to parse mentors:", e);
      mentors = [];
    }

    return new Response(JSON.stringify({ mentors }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error finding mentors:", err);
    return new Response(JSON.stringify({ error: err.message || "Error processing request" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
