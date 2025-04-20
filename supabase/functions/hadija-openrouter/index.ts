
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENROUTER_API_KEY = "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";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    const { chatHistory } = await req.json();

    // Prepare messages as expected by OpenRouter.
    // Example: [{ role: "user"|"assistant", content: "..." }, ...]
    const messages = chatHistory.map(({ role, content }: { role: string; content: string }) => ({
      role,
      content,
    }));

    const body = {
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages,
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://dd663252-fb89-4232-8581-b2e75907a9c8.lovableproject.com", // Replace with your actual deployed domain if you have one.
        "X-Title": "SisterhoodAI-Hadija",
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.error ?? "OpenRouter error");
    }

    const aiReply = json.choices?.[0]?.message?.content ?? "Sorry, I could not generate a response.";
    return new Response(JSON.stringify({ reply: aiReply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Error processing request" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
