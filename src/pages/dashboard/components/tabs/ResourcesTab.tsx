
import React from 'react';
import { Bookmark, Video, FileText, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ResourcesTabProps {
  userType: 'normal' | 'mentor' | 'admin';
}

const ResourcesTab: React.FC<ResourcesTabProps> = ({ userType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources For You</CardTitle>
        <CardDescription>
          {userType === 'normal' ? 'Personalized resources based on your interests' : 
           userType === 'mentor' ? 'Resources to help your mentoring journey' : 
           'Resources to help manage the community'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex p-4 rounded-lg border border-gray-200 hover:border-sisterhood-primary/40 hover:bg-gray-50 cursor-pointer">
              <div className="bg-gray-100 rounded p-3 flex items-center justify-center min-w-[48px] h-[48px]">
                {i % 3 === 0 ? (
                  <Video className="h-5 w-5 text-sisterhood-primary" />
                ) : i % 3 === 1 ? (
                  <FileText className="h-5 w-5 text-sisterhood-secondary" />
                ) : (
                  <BookOpen className="h-5 w-5 text-sisterhood-accent" />
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-medium">
                  {userType === 'normal' ? 
                    (i === 1 ? 'Finding the Right Mentor' : 
                     i === 2 ? 'Women\'s Health Basics' : 
                     i === 3 ? 'Starting Your Business' : 
                     'Personal Safety Guide') : 
                   userType === 'mentor' ? 
                    (i === 1 ? 'Effective Mentoring Techniques' : 
                     i === 2 ? 'Setting Goals With Mentees' : 
                     i === 3 ? 'Providing Constructive Feedback' : 
                     'Mentoring Across Cultures') : 
                    (i === 1 ? 'Community Moderation Best Practices' : 
                     i === 2 ? 'Handling Sensitive User Reports' : 
                     i === 3 ? 'Creating Engaging Content' : 
                     'Measuring Community Health')}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center">
                    <Badge variant="secondary" className="text-xs">
                      {i % 3 === 0 ? 'Video' : i % 3 === 1 ? 'Article' : 'Guide'}
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">
                      {i % 3 === 0 ? '12 min' : i % 3 === 1 ? '5 min read' : '10 pages'}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 p-0 text-sisterhood-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-sisterhood-primary">
          Browse All Resources
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourcesTab;
