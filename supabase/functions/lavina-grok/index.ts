import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { chatHistory } = await req.json();
    console.log("Received chat history:", JSON.stringify(chatHistory));

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Prepare messages for Lovable AI Gateway
    const messages = [
      {
        role: "system",
        content: "You are Glory, a warm and wise African AI sister for SisterHood - a platform supporting Tanzanian and African women. You speak with warmth, using occasional Swahili greetings like 'Jambo', 'Karibu', 'Asante'. You understand African culture, challenges, and opportunities. You're knowledgeable about business, health, technology, education, and women's empowerment in Africa. Always be supportive, sisterly, and provide practical culturally-relevant advice. Use emojis occasionally to be friendly."
      },
      ...chatHistory.map(({ role, content }: { role: string; content: string }) => ({
        role,
        content,
      }))
    ];

    const body = {
      model: "google/gemini-3-flash-preview",
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    };

    console.log("Sending request to Lovable AI Gateway");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Lovable AI response status:", response.status);
    
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
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const json = await response.json();
    console.log("Lovable AI response received");

    const aiReply = json.choices?.[0]?.message?.content ?? "Sorry, I could not generate a response.";
    return new Response(JSON.stringify({ reply: aiReply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in lavina AI function:", err);
    return new Response(JSON.stringify({ error: err.message || "Error processing request" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
