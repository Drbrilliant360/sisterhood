
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Bot, Image, Send, Mic } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';

type ChatMessage = {
  role: string,
  content: string
};

interface LavinaChatProps {
  defaultHistory?: Array<ChatMessage>
}

const LavinaChat: React.FC<LavinaChatProps> = ({
  defaultHistory = [
    { role: 'assistant', content: "Hello! I'm Lavina, your comprehensive AI assistant powered by Grok. I'm here to help you with any questions or topics you'd like to explore. Whether it's about entrepreneurship, health, technology, science, arts, personal development, or any other subject, I'm ready to provide detailed and thoughtful responses tailored to support African women's empowerment. What would you like to discuss today?" }
  ]
}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<ChatMessage>>(defaultHistory);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    const userMessage = message;
    
    // Add user message to chat history
    const newChatHistory = [...chatHistory, { role: 'user', content: userMessage }];
    setChatHistory(newChatHistory);
    setMessage('');
    
    try {
      // Call the Grok edge function
      const { data, error } = await supabase.functions.invoke('lavina-grok', {
        body: { chatHistory: newChatHistory }
      });

      if (error) {
        console.error('Error calling Grok function:', error);
        throw error;
      }

      if (data?.reply) {
        setChatHistory(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        throw new Error('No response received from AI');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get response from Lavina. Please try again.",
        variant: "destructive",
      });
      
      // Add error message to chat
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment." 
      }]);
    } finally {
      setIsLoading(false);
    }
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
          Chat with Lavina (Powered by Grok)
        </CardTitle>
        <CardDescription>
          Your intelligent AI assistant powered by Grok - ask me anything and get real-time, thoughtful responses
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
                className={`max-w-4/5 rounded-lg p-3 ${
                  chat.role === 'user' 
                    ? 'bg-sisterhood-primary text-white' 
                    : 'bg-sisterhood-light border border-sisterhood-primary/20'
                }`}
              >
                <div className="whitespace-pre-wrap">{chat.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-4/5 rounded-lg p-3 bg-sisterhood-light border border-sisterhood-primary/20">
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
            placeholder="Ask me anything - I'm powered by Grok AI..."
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

export default LavinaChat;
