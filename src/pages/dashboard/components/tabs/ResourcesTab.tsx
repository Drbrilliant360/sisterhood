
import React from 'react';
import { Bookmark, Video, FileText, BookOpen } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PricingBadge from '@/components/PricingBadge';

interface ResourcesTabProps {
  userType: 'normal' | 'mentor' | 'admin';
}

type Resource = {
  id: number;
  title: string;
  type: 'Video' | 'Article' | 'Guide';
  duration: string;
  iconType: number;
  pricingType: 'free' | 'paid' | 'premium';
  price?: number;
};

const ResourcesTab: React.FC<ResourcesTabProps> = ({ userType }) => {
  const resources: Resource[] = [
    {
      id: 1,
      title: userType === 'normal' ? 'Finding the Right Mentor' : 
             userType === 'mentor' ? 'Effective Mentoring Techniques' : 
             'Community Moderation Best Practices',
      type: 'Article',
      duration: '5 min read',
      iconType: 1,
      pricingType: 'free'
    },
    {
      id: 2,
      title: userType === 'normal' ? 'Women\'s Health Basics' : 
             userType === 'mentor' ? 'Setting Goals With Mentees' : 
             'Handling Sensitive User Reports',
      type: 'Guide',
      duration: '10 pages',
      iconType: 2,
      pricingType: 'free'
    },
    {
      id: 3,
      title: userType === 'normal' ? 'Starting Your Business' : 
             userType === 'mentor' ? 'Providing Constructive Feedback' : 
             'Creating Engaging Content',
      type: 'Video',
      duration: '12 min',
      iconType: 0,
      pricingType: 'paid',
      price: 5
    },
    {
      id: 4,
      title: userType === 'normal' ? 'Personal Safety Guide' : 
             userType === 'mentor' ? 'Mentoring Across Cultures' : 
             'Measuring Community Health',
      type: 'Guide',
      duration: userType === 'normal' ? '15 pages' : '20 pages',
      iconType: 2,
      pricingType: 'premium'
    },
  ];

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
          {resources.map((resource) => (
            <div key={resource.id} className="flex p-4 rounded-lg border border-gray-200 hover:border-sisterhood-primary/40 hover:bg-gray-50 cursor-pointer">
              <div className="bg-gray-100 rounded p-3 flex items-center justify-center min-w-[48px] h-[48px]">
                {resource.iconType === 0 ? (
                  <Video className="h-5 w-5 text-sisterhood-primary" />
                ) : resource.iconType === 1 ? (
                  <FileText className="h-5 w-5 text-sisterhood-secondary" />
                ) : (
                  <BookOpen className="h-5 w-5 text-sisterhood-accent" />
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{resource.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{resource.duration}</span>
                    <PricingBadge 
                      type={resource.pricingType} 
                      price={resource.price}
                    />
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
      <CardFooter className="flex justify-between">
        <Button variant="ghost" className="text-sisterhood-primary">
          Browse Free Resources
        </Button>
        <Button variant="outline" className="text-sisterhood-primary">
          Browse Premium Resources
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourcesTab;
