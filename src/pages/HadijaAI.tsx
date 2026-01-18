
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GloryChat from './lavina-ai/LavinaChat';
import MentorMatching from './lavina-ai/MentorMatching';
import ContentRecommendations from './lavina-ai/ContentRecommendations';

const GloryAI = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-sisterhood-primary">Glory AI</h1>
            <p className="text-sisterhood-neutral mt-2">Your intelligent African sister for mentorship, health, and entrepreneurship</p>
          </div>
          <Tabs defaultValue="chat" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <span>🗣️ Chat with Glory</span>
              </TabsTrigger>
              <TabsTrigger value="matching" className="flex items-center gap-2">
                <span>👩🏾‍🏫 Mentor Matching</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <span>📚 Content For You</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="space-y-4">
              <GloryChat />
            </TabsContent>
            <TabsContent value="matching" className="space-y-4">
              <MentorMatching />
            </TabsContent>
            <TabsContent value="content" className="space-y-4">
              <ContentRecommendations />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GloryAI;
