
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GROK_API_KEY = Deno.env.get('GROK_API_KEY');

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

    if (!GROK_API_KEY) {
      throw new Error('GROK_API_KEY is not configured');
    }

    // Prepare messages for Grok API
    const messages = [
      {
        role: "system",
        content: "You are Lavina, a comprehensive AI assistant for SisterHood - a platform supporting Tanzanian and African women in entrepreneurship, health, and personal development. You provide detailed, thoughtful, and culturally sensitive responses. You're knowledgeable about business, health, technology, education, relationships, and African women's empowerment. Always be supportive, encouraging, and provide practical advice."
      },
      ...chatHistory.map(({ role, content }: { role: string; content: string }) => ({
        role,
        content,
      }))
    ];

    const body = {
      model: "grok-beta",
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    };

    console.log("Sending request to Grok with body:", JSON.stringify(body));

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Grok response status:", response.status);
    
    const json = await response.json();
    console.log("Grok response:", JSON.stringify(json));

    if (!response.ok) {
      throw new Error(json.error?.message || json.error || "Grok API error");
    }

    const aiReply = json.choices?.[0]?.message?.content ?? "Sorry, I could not generate a response.";
    return new Response(JSON.stringify({ reply: aiReply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in lavina-grok function:", err);
    return new Response(JSON.stringify({ error: err.message || "Error processing request" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
