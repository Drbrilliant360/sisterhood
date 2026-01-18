
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Users, Search, UserPlus, UserMinus, MessageCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useGroup, Group } from '@/contexts/GroupContext';
import { Skeleton } from '@/components/ui/skeleton';

const GroupList = () => {
  const { user } = useAuth();
  const { groups, loadingGroups, joinGroup, leaveGroup, fetchGroups, selectGroup } = useGroup();
  const [searchTerm, setSearchTerm] = useState('');
  const [userGroupIds, setUserGroupIds] = useState<string[]>([]);
  const [loadingUserGroups, setLoadingUserGroups] = useState(true);
  
  // Filter groups based on search term
  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (group.description && group.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Fetch user's groups
  const fetchUserGroups = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('group_members')
        .select('group_id')
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      const ids = data.map(item => item.group_id);
      setUserGroupIds(ids);
    } catch (error) {
      console.error('Error fetching user groups:', error);
    } finally {
      setLoadingUserGroups(false);
    }
  };
  
  useEffect(() => {
    fetchGroups();
    fetchUserGroups();
  }, [user]);
  
  const handleJoinGroup = async (groupId: string) => {
    await joinGroup(groupId);
    fetchUserGroups(); // Refresh the list of joined groups
  };
  
  const handleLeaveGroup = async (groupId: string) => {
    await leaveGroup(groupId);
    fetchUserGroups(); // Refresh the list of joined groups
  };
  
  const handleEnterChat = (group: Group) => {
    selectGroup(group);
  };
  
  // Categories for groups (for display purposes)
  const categories = [
    { name: 'All', value: '' },
    { name: 'Business', value: 'business' },
    { name: 'Health', value: 'health' },
    { name: 'Safety', value: 'safety' },
    { name: 'Education', value: 'education' },
    { name: 'Support', value: 'support' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search groups..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto flex-nowrap pb-2 w-full md:w-auto">
          {categories.map(category => (
            <Badge 
              key={category.value} 
              variant={searchTerm === category.value ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSearchTerm(category.value)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
      
      {loadingGroups ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Card key={i} className="h-64">
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-9 w-full" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {filteredGroups.length === 0 ? (
            <div className="text-center p-8 border border-dashed rounded-lg">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No groups found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or check back later for new groups.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => {
                const isUserMember = userGroupIds.includes(group.id);
                return (
                  <Card key={group.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        {group.is_private && (
                          <Badge variant="outline" className="text-xs">
                            Private
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <Users size={14} />
                        {group.memberCount || 0} members
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm line-clamp-3">
                        {group.description || 'No description available.'}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2 flex gap-2">
                      {loadingUserGroups ? (
                        <Button disabled className="flex-1">Loading...</Button>
                      ) : isUserMember ? (
                        <>
                          <Button 
                            onClick={() => handleEnterChat(group)}
                            className="flex-1 bg-sisterhood-primary hover:bg-sisterhood-primary/90"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Chat
                          </Button>
                          <Button 
                            onClick={() => handleLeaveGroup(group.id)} 
                            variant="outline" 
                            className="flex-1"
                          >
                            <UserMinus className="mr-2 h-4 w-4" />
                            Leave
                          </Button>
                        </>
                      ) : (
                        <Button 
                          onClick={() => handleJoinGroup(group.id)} 
                          className="w-full"
                        >
                          <UserPlus className="mr-2 h-4 w-4" />
                          Join Group
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GroupList;
