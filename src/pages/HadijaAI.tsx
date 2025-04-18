import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Image, Send, Mic, Brain, Users, FileText } from "lucide-react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const HadijaAI = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([
    { role: 'assistant', content: 'Hello! I\'m Hadija, your AI assistant. I\'m here to help you with anything related to entrepreneurship, mentorship, health, safety, or any other questions you might have.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const { toast } = useToast();

  const generateResponse = (userMessage: string) => {
    if (!userMessage.trim()) {
      toast({
        title: "Empty message",
        description: "Please enter a message before sending.",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    console.log("Generating response for:", userMessage);
    
    // Simulated AI response generation with more specific responses
    setTimeout(() => {
      let response = "";
      
      if (userMessage.toLowerCase().includes("mentor")) {
        response = "I can help you find a mentor or provide guidance on mentorship programs. Would you like to know more about our mentorship opportunities?";
      } else if (userMessage.toLowerCase().includes("business") || userMessage.toLowerCase().includes("entrepreneur")) {
        response = "I can provide information about starting a business, finding funding, or connecting with other entrepreneurs. What specific aspect would you like to learn more about?";
      } else if (userMessage.toLowerCase().includes("health")) {
        response = "I can share resources about women's health, wellness programs, and healthcare access. What specific health topic are you interested in?";
      } else {
        response = "I understand you're asking about " + userMessage + ". Could you please be more specific about what you'd like to know? I can help with mentorship, entrepreneurship, health, and safety topics.";
      }
      
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      setMessage('');
      
      console.log("Response generated:", response);
    }, 1500);
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory([...chatHistory, { role: 'user', content: message }]);
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

  const simulateApiCall = (feature: string) => {
    toast({
      title: "Processing Request",
      description: `Finding the best ${feature} for you...`,
      duration: 1500,
    });
    
    setTimeout(() => {
      toast({
        title: "Success!",
        description: `We've found great ${feature} matches based on your profile.`,
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-sisterhood-primary">Hadija AI</h1>
            <p className="text-sisterhood-neutral mt-2">Your intelligent assistant for mentorship, health, and entrepreneurship</p>
          </div>
          
          <Tabs defaultValue="chat" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <Bot size={18} />
                <span>Virtual Assistant</span>
              </TabsTrigger>
              <TabsTrigger value="matching" className="flex items-center gap-2">
                <Users size={18} />
                <span>Mentor Matching</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <FileText size={18} />
                <span>Content Recommendations</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="chat" className="space-y-4">
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
            </TabsContent>
            
            <TabsContent value="matching" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="text-sisterhood-primary" />
                    Smart Mentor Matching
                  </CardTitle>
                  <CardDescription>
                    Our AI analyzes your goals, personality, and learning style to find your ideal mentor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">What are your main goals?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {['Starting a business', 'Career growth', 'Skill development', 'Work-life balance', 'Leadership', 'Financial literacy'].map(goal => (
                          <Button 
                            key={goal} 
                            variant="outline" 
                            className="justify-start"
                            onClick={() => toast({
                              title: "Goal Selected",
                              description: `${goal} added to your profile`,
                              duration: 2000,
                            })}
                          >
                            {goal}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Describe your ideal mentor:</h3>
                      <Textarea 
                        placeholder="Tell us about your ideal mentor - their experience, communication style, availability, etc."
                        className="h-24"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => simulateApiCall('mentors')}
                    className="w-full"
                  >
                    Find My Mentor Match
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-sisterhood-primary" />
                    Personalized Content
                  </CardTitle>
                  <CardDescription>
                    Get recommendations based on your interests and activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">What topics interest you most?</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {['Entrepreneurship', 'Health & Wellness', 'Safety', 'Leadership', 'Financial Literacy', 'Technology', 'Art & Culture', 'Education', 'Social Impact'].map(topic => (
                          <Button 
                            key={topic} 
                            variant="outline" 
                            className="justify-start"
                            onClick={() => toast({
                              title: "Topic Selected",
                              description: `${topic} added to your interests`,
                              duration: 2000,
                            })}
                          >
                            {topic}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Content format preferences:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {['Articles', 'Videos', 'Podcasts', 'Courses', 'Events', 'Books', 'Community Discussions', 'Case Studies'].map(format => (
                          <Button 
                            key={format} 
                            variant="outline" 
                            size="sm"
                            onClick={() => toast({
                              title: "Format Selected",
                              description: `${format} added to your preferences`,
                              duration: 2000,
                            })}
                          >
                            {format}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => simulateApiCall('content recommendations')}
                    className="w-full"
                  >
                    Generate Recommendations
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HadijaAI;
