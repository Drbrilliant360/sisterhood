
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft } from 'lucide-react';
import { useGroup } from '@/contexts/GroupContext';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistance } from 'date-fns';

interface GroupMembersProps {
  onBack: () => void;
}

const GroupMembers = ({ onBack }: GroupMembersProps) => {
  const { activeGroup, groupMembers, loadingMembers } = useGroup();

  if (!activeGroup) {
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const formatJoinedTime = (timestamp: string) => {
    try {
      return `Joined ${formatDistance(new Date(timestamp), new Date(), { addSuffix: true })}`;
    } catch (e) {
      return 'Recently joined';
    }
  };

  return (
    <Card className="h-[calc(80vh-2rem)]">
      <CardHeader className="py-3 px-4 border-b flex flex-row items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <CardTitle className="text-lg">{activeGroup.name} - Members</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4">
        {loadingMembers ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : groupMembers.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No members in this group yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {groupMembers.map(member => {
              const displayName = member.profile?.full_name || "Anonymous";
              
              return (
                <div key={member.id} className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    {member.profile?.avatar_url ? (
                      <AvatarImage src={member.profile.avatar_url} />
                    ) : (
                      <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{displayName}</p>
                      {member.is_admin && (
                        <span className="bg-sisterhood-primary/10 text-sisterhood-primary text-xs px-2 py-0.5 rounded">
                          Admin
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {formatJoinedTime(member.joined_at)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GroupMembers;
