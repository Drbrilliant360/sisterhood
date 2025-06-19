
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

interface LavinaChatProps {
  defaultHistory?: Array<ChatMessage>
}

const LavinaChat: React.FC<LavinaChatProps> = ({
  defaultHistory = [
    { role: 'assistant', content: "Hello! I'm Lavina, your AI assistant. I'm here to help you with anything related to entrepreneurship, mentorship, health, safety, or any other questions you might have." }
  ]
}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<ChatMessage>>(defaultHistory);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Built-in response generation using pattern matching and predefined responses
  const generateBuiltInResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Health-related responses
    if (lowerMessage.includes('health') || lowerMessage.includes('wellness') || lowerMessage.includes('medical')) {
      return "For health and wellness, I recommend maintaining a balanced diet, regular exercise, and adequate sleep. Always consult with healthcare professionals for specific medical concerns. Would you like tips on any particular aspect of health?";
    }
    
    // Safety-related responses
    if (lowerMessage.includes('safety') || lowerMessage.includes('security') || lowerMessage.includes('protection')) {
      return "Your safety is paramount. For personal safety, always trust your instincts, stay aware of your surroundings, and have emergency contacts readily available. For digital safety, use strong passwords and be cautious with personal information online. What specific safety concerns can I help you with?";
    }
    
    // Entrepreneurship responses
    if (lowerMessage.includes('business') || lowerMessage.includes('entrepreneur') || lowerMessage.includes('startup')) {
      return "Starting a business requires careful planning, market research, and financial preparation. Key steps include validating your idea, creating a business plan, securing funding, and building a strong network. What aspect of entrepreneurship would you like to explore further?";
    }
    
    // Mentorship responses
    if (lowerMessage.includes('mentor') || lowerMessage.includes('guidance') || lowerMessage.includes('advice')) {
      return "Mentorship is invaluable for personal and professional growth. A good mentor provides guidance, shares experience, and helps you navigate challenges. Consider what specific areas you'd like mentorship in, and don't hesitate to reach out to potential mentors in your field.";
    }
    
    // Education and skills
    if (lowerMessage.includes('learn') || lowerMessage.includes('skill') || lowerMessage.includes('education')) {
      return "Continuous learning is essential for personal growth. Focus on developing both technical skills relevant to your field and soft skills like communication and leadership. Online courses, workshops, and hands-on practice are great ways to build new competencies.";
    }
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! It's wonderful to connect with you. I'm here to support you on your journey. Whether you need advice on health, safety, business, or personal development, I'm ready to help. What's on your mind today?";
    }
    
    // Questions about capabilities
    if (lowerMessage.includes('what can you') || lowerMessage.includes('help me') || lowerMessage.includes('can you')) {
      return "I'm designed to assist you with a wide range of topics including health and wellness, personal safety, entrepreneurship, career development, and general life guidance. I can provide advice, share resources, and help you think through challenges. What specific area would you like support with?";
    }
    
    // Default response for general queries
    return "That's an interesting question! While I focus primarily on health, safety, entrepreneurship, and mentorship, I'm here to help however I can. Could you tell me more about what specific guidance or support you're looking for? This will help me provide you with the most relevant assistance.";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    const userMessage = message;
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
    setMessage('');
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const aiResponse = generateBuiltInResponse(userMessage);
      setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      setIsLoading(false);
    }, 1000);
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
          Chat with Lavina
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

export default LavinaChat;
