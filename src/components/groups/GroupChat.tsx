
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, Send, ArrowLeft, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useGroup, Message } from '@/contexts/GroupContext';
import { format } from 'date-fns';
import GroupMembers from './GroupMembers';

const GroupChat = () => {
  const { user } = useAuth();
  const { activeGroup, messages, loadingMessages, sendMessage, selectGroup } = useGroup();
  const [messageInput, setMessageInput] = useState('');
  const [showMembers, setShowMembers] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages come in
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      // Wait for the state to be updated and DOM to render
      setTimeout(() => {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }, 100);
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !user) return;
    
    sendMessage(messageInput);
    setMessageInput('');
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const formatTime = (timestamp: string) => {
    try {
      return format(new Date(timestamp), 'h:mm a');
    } catch (e) {
      return '';
    }
  };
  
  if (!activeGroup) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Users className="h-16 w-16 mb-4 text-sisterhood-primary/40" />
        <h3 className="text-xl font-medium mb-2">No Active Conversation</h3>
        <p className="text-gray-500 max-w-md">
          Join a group and start a conversation by selecting a group from the Browse Groups tab.
        </p>
      </div>
    );
  }
  
  if (showMembers) {
    return <GroupMembers onBack={() => setShowMembers(false)} />;
  }
  
  return (
    <Card className="h-[calc(80vh-2rem)]">
      <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => selectGroup(null)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <CardTitle className="text-lg">{activeGroup.name}</CardTitle>
            <CardDescription>{activeGroup.description}</CardDescription>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={() => setShowMembers(true)}
        >
          <Users className="h-4 w-4" />
          <span>Members</span>
        </Button>
      </CardHeader>
      
      <CardContent className="p-0 flex-grow h-[calc(80vh-10rem)] overflow-hidden">
        {loadingMessages ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sisterhood-primary mx-auto"></div>
              <p className="mt-2 text-sm text-gray-500">Loading messages...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto text-gray-300" />
              <p className="mt-2 text-gray-500">No messages yet</p>
              <p className="text-sm text-gray-400">Be the first to start the conversation!</p>
            </div>
          </div>
        ) : (
          <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
            <div className="flex flex-col space-y-4">
              {messages.map((message, index) => {
                const isCurrentUser = user?.id === message.user_id;
                // Group consecutive messages from the same user
                const showAvatar = index === 0 || messages[index - 1].user_id !== message.user_id;
                const showName = showAvatar;
                
                // Get the display name, default to "Anonymous" if no profile
                const displayName = message.profile?.full_name || "Anonymous";
                
                // Time formatting
                const messageTime = formatTime(message.created_at);
                
                return (
                  <div 
                    key={message.id} 
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[80%]`}>
                      {showAvatar && !isCurrentUser && (
                        <Avatar className="h-8 w-8 mr-2 mt-1">
                          {message.profile?.avatar_url ? (
                            <AvatarImage src={message.profile.avatar_url} />
                          ) : (
                            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
                          )}
                        </Avatar>
                      )}
                      
                      <div className={`flex flex-col ${isCurrentUser ? 'items-end' : 'items-start'}`}>
                        {showName && !isCurrentUser && (
                          <span className="text-xs text-gray-500 mb-1">{displayName}</span>
                        )}
                        
                        <div className="flex items-end gap-2">
                          {isCurrentUser && <span className="text-xs text-gray-500">{messageTime}</span>}
                          
                          <div 
                            className={`p-3 rounded-lg ${
                              isCurrentUser 
                                ? 'bg-sisterhood-primary text-white' 
                                : 'bg-gray-100'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          
                          {!isCurrentUser && <span className="text-xs text-gray-500">{messageTime}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </CardContent>
      
      <CardFooter className="p-2 border-t">
        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
          <Input
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-grow"
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={!messageInput.trim() || loadingMessages}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default GroupChat;
