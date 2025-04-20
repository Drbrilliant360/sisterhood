
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Bot, Image, Send, Mic } from "lucide-react";

type ChatMessage = {
  role: string,
  content: string
};

interface HadijaChatProps {
  defaultHistory?: Array<ChatMessage>
}

const HadijaChat: React.FC<HadijaChatProps> = ({
  defaultHistory = [
    { role: 'assistant', content: "Hello! I'm Hadija, your AI assistant. I'm here to help you with anything related to entrepreneurship, mentorship, health, safety, or any other questions you might have." }
  ]
}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<ChatMessage>>(defaultHistory);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Send chat to Supabase edge function, get response, and append to history
  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);
    try {
      const updatedHistory = [...chatHistory, { role: 'user', content: userMessage }];
      // Log request before sending
      console.log("Sending request to edge function:", JSON.stringify({ chatHistory: updatedHistory }));
      const resp = await fetch('https://dd663252-fb89-4232-8581-b2e75907a9c8.functions.supabase.co/hadija-openrouter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatHistory: updatedHistory }),
      });

      console.log("Response status:", resp.status);

      const data = await resp.json();
      console.log("Response data:", data);

      if (resp.ok && data.reply) {
        setChatHistory([...updatedHistory, { role: 'assistant', content: data.reply }]);
      } else {
        setChatHistory([...updatedHistory, { role: 'assistant', content: "Sorry, I couldn't answer that. Please try again later." }]);
        toast({
          title: "AI Error",
          description: data.error || "Could not generate a response. Please try again.",
          duration: 3200,
        });
      }
    } catch (e: any) {
      console.error("Error calling Hadija AI:", e);
      setChatHistory([...chatHistory, { role: 'user', content: message }, { role: 'assistant', content: "Sorry, I couldn't answer that. Please try again later." }]);
      toast({
        title: "Network Error",
        description: "Sorry, there was a problem talking to the AI: " + (e.message || "Unknown error"),
        duration: 3200,
      });
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatHistory(prev => ([...prev, { role: 'user', content: message }]));
    generateResponse(message);
  };

  const handleImageUpload = () => {
    toast({
      title: "Coming Soon!",
      description: "Image analysis will be available in the next update.",
      duration: 3000,
    });
  };

  const handleVoiceInput = () => {
    toast({
      title: "Coming Soon!",
      description: "Voice input will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="text-sisterhood-primary" />
          Chat with Hadija
        </CardTitle>
        <CardDescription>
          Your 24/7 AI assistant for health, safety, and business questions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto flex flex-col space-y-4">
          {chatHistory.map((chat, index) => (
            <div 
              key={index} 
              className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-3/4 rounded-lg p-3 ${
                  chat.role === 'user' 
                    ? 'bg-sisterhood-primary text-white' 
                    : 'bg-sisterhood-light border border-sisterhood-primary/20'
                }`}
              >
                {chat.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-3/4 rounded-lg p-3 bg-sisterhood-light border border-sisterhood-primary/20">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleImageUpload}
            title="Upload image"
          >
            <Image size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleVoiceInput}
            title="Voice input"
          >
            <Mic size={20} />
          </Button>
          <Input
            placeholder="Ask me anything about health, safety, or business..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} disabled={!message.trim() || isLoading}>
            <Send size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HadijaChat;
