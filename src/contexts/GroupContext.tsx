import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Define types
type GroupMember = {
  id: string;
  user_id: string;
  group_id: string;
  role: string;
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
  created_by: string | null;
  is_private: boolean;
  created_at: string;
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
        .select('*');
      
      if (groupsError) throw groupsError;

      // Fetch member counts separately
      const groupsWithCounts = await Promise.all(
        (allGroups || []).map(async (group) => {
          const { count } = await supabase
            .from('group_members')
            .select('*', { count: 'exact', head: true })
            .eq('group_id', group.id);
          
          return {
            ...group,
            memberCount: count || 0
          };
        })
      );
      
      setGroups(groupsWithCounts);
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
      // First get the group members
      const { data: membersData, error: membersError } = await supabase
        .from('group_members')
        .select('*')
        .eq('group_id', groupId);
      
      if (membersError) throw membersError;

      // Then get profiles for each member
      const membersWithProfiles = await Promise.all(
        (membersData || []).map(async (member) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', member.user_id)
            .single();
          
          return {
            ...member,
            profile: profile || { full_name: 'Anonymous', avatar_url: null }
          };
        })
      );
      
      setGroupMembers(membersWithProfiles);
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

  const fetchMessages = async (groupId: string): Promise<void> => {
    if (!groupId) return;
    
    setLoadingMessages(true);
    try {
      // First get the messages
      const { data: messagesData, error: messagesError } = await supabase
        .from('messages')
        .select('*')
        .eq('group_id', groupId)
        .order('created_at', { ascending: true });
      
      if (messagesError) throw messagesError;

      // Then get profiles for each message
      const messagesWithProfiles = await Promise.all(
        (messagesData || []).map(async (message) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('id', message.user_id)
            .single();
          
          return {
            ...message,
            profile: profile || { full_name: 'Anonymous', avatar_url: null }
          };
        })
      );
      
      setMessages(messagesWithProfiles);
      
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
              profile: profiles || { full_name: 'Anonymous', avatar_url: null }
            } as Message;
            
            setMessages(current => [...current, newMessage]);
          }
        )
        .subscribe();
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
          role: 'member',
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
