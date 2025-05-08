
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Define types
type GroupMember = {
  id: string;
  user_id: string;
  group_id: string;
  is_admin: boolean;
  joined_at: string;
  profile?: {
    full_name: string;
    avatar_url: string | null;
  };
};

export type Group = {
  id: string;
  name: string;
  description: string | null;
  created_by: string;
  is_private: boolean;
  category: string | null;
  created_at: string;
  updated_at: string;
  memberCount?: number;
};

export type Message = {
  id: string;
  content: string;
  group_id: string;
  user_id: string;
  created_at: string;
  profile?: {
    full_name: string;
    avatar_url: string | null;
  };
};

interface GroupContextType {
  groups: Group[];
  activeGroup: Group | null;
  groupMembers: GroupMember[];
  messages: Message[];
  loadingGroups: boolean;
  loadingMessages: boolean;
  loadingMembers: boolean;
  joinGroup: (groupId: string) => Promise<void>;
  leaveGroup: (groupId: string) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  selectGroup: (group: Group | null) => void;
  fetchGroups: () => Promise<void>;
  fetchGroupMembers: (groupId: string) => Promise<void>;
  fetchMessages: (groupId: string) => Promise<void>;
}

const GroupContext = createContext<GroupContextType | undefined>(undefined);

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingGroups, setLoadingGroups] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [loadingMembers, setLoadingMembers] = useState(false);
  
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchGroups = async () => {
    if (!user) return;
    
    setLoadingGroups(true);
    try {
      const { data: allGroups, error: groupsError } = await supabase
        .from('chat_groups')
        .select('*, group_members(user_id)');
      
      if (groupsError) throw groupsError;

      // Transform data to include member count
      const processedGroups = allGroups.map((group: any) => ({
        ...group,
        memberCount: group.group_members?.length || 0
      }));
      
      setGroups(processedGroups);
    } catch (error: any) {
      console.error('Error fetching groups:', error);
      toast({
        title: 'Error',
        description: 'Could not load groups. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoadingGroups(false);
    }
  };

  const fetchGroupMembers = async (groupId: string) => {
    if (!groupId) return;
    
    setLoadingMembers(true);
    try {
      const { data, error } = await supabase
        .from('group_members')
        .select(`
          *,
          profile:profiles(full_name, avatar_url)
        `)
        .eq('group_id', groupId);
      
      if (error) throw error;
      
      setGroupMembers(data || []);
    } catch (error: any) {
      console.error('Error fetching group members:', error);
      toast({
        title: 'Error',
        description: 'Could not load group members. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoadingMembers(false);
    }
  };

  const fetchMessages = async (groupId: string) => {
    if (!groupId) return;
    
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select(`
          *,
          profile:profiles(full_name, avatar_url)
        `)
        .eq('group_id', groupId)
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      
      setMessages(data || []);
      
      // Subscribe to new messages
      const channel = supabase
        .channel('messages_changes')
        .on('postgres_changes', 
          {
            event: 'INSERT',
            schema: 'public',
            table: 'messages',
            filter: `group_id=eq.${groupId}`
          }, 
          async (payload) => {
            // Fetch the profile info for the new message
            const { data: profiles } = await supabase
              .from('profiles')
              .select('full_name, avatar_url')
              .eq('id', payload.new.user_id)
              .single();
            
            const newMessage = {
              ...payload.new,
              profile: profiles
            };
            
            setMessages(current => [...current, newMessage]);
          }
        )
        .subscribe();
      
      return () => {
        supabase.removeChannel(channel);
      };
    } catch (error: any) {
      console.error('Error fetching messages:', error);
      toast({
        title: 'Error',
        description: 'Could not load messages. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoadingMessages(false);
    }
  };

  const joinGroup = async (groupId: string) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to join this group.',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Check if the user is already a member
      const { data: existingMember } = await supabase
        .from('group_members')
        .select('*')
        .eq('group_id', groupId)
        .eq('user_id', user.id)
        .single();

      if (existingMember) {
        toast({
          title: 'Already a Member',
          description: 'You are already a member of this group.',
        });
        return;
      }

      const { error } = await supabase
        .from('group_members')
        .insert({
          group_id: groupId,
          user_id: user.id,
          is_admin: false,
        });

      if (error) throw error;

      toast({
        title: 'Group Joined',
        description: 'You have successfully joined the group!',
      });

      // Refresh the groups list
      fetchGroups();
    } catch (error: any) {
      console.error('Error joining group:', error);
      toast({
        title: 'Error',
        description: 'Failed to join the group. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const leaveGroup = async (groupId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('group_members')
        .delete()
        .eq('group_id', groupId)
        .eq('user_id', user.id);

      if (error) throw error;

      if (activeGroup?.id === groupId) {
        setActiveGroup(null);
      }

      toast({
        title: 'Left Group',
        description: 'You have successfully left the group.',
      });

      // Refresh the groups list
      fetchGroups();
    } catch (error: any) {
      console.error('Error leaving group:', error);
      toast({
        title: 'Error',
        description: 'Failed to leave the group. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  const sendMessage = async (content: string) => {
    if (!user || !activeGroup) return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          content,
          group_id: activeGroup.id,
          user_id: user.id,
        });

      if (error) throw error;
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send your message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const selectGroup = (group: Group | null) => {
    setActiveGroup(group);
    if (group) {
      fetchGroupMembers(group.id);
      fetchMessages(group.id);
    } else {
      setGroupMembers([]);
      setMessages([]);
    }
  };

  const value = {
    groups,
    activeGroup,
    groupMembers,
    messages,
    loadingGroups,
    loadingMessages,
    loadingMembers,
    joinGroup,
    leaveGroup,
    sendMessage,
    selectGroup,
    fetchGroups,
    fetchGroupMembers,
    fetchMessages,
  };

  return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>;
};

export const useGroup = () => {
  const context = useContext(GroupContext);
  if (context === undefined) {
    throw new Error('useGroup must be used within a GroupProvider');
  }
  return context;
};
