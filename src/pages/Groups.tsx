
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GroupList from '@/components/groups/GroupList';
import GroupChat from '@/components/groups/GroupChat';
import { GroupProvider } from '@/contexts/GroupContext';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-sisterhood-primary">Support Groups</h1>
            <p className="text-sisterhood-neutral mt-2">Connect with other women in similar situations</p>
          </div>
          
          <GroupProvider>
            <Tabs defaultValue="browse" className="w-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="browse">Browse Groups</TabsTrigger>
                <TabsTrigger value="chat">Active Chat</TabsTrigger>
              </TabsList>

              <TabsContent value="browse" className="space-y-4">
                <GroupList />
              </TabsContent>
              
              <TabsContent value="chat" className="space-y-4">
                <GroupChat />
              </TabsContent>
            </Tabs>
          </GroupProvider>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Groups;
