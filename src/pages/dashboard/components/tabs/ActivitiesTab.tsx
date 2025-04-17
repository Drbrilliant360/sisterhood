
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ActivitiesTabProps {
  userType: 'normal' | 'mentor' | 'admin';
}

const ActivitiesTab: React.FC<ActivitiesTabProps> = ({ userType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Your latest interactions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Activity Timeline */}
          <div className="relative border-l-2 border-gray-200 pl-6 pb-1">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-sisterhood-primary"></div>
            <div className="mb-8">
              <div className="flex items-center text-sm mb-1">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                <span className="text-gray-500">Today, 10:30 AM</span>
              </div>
              <h3 className="text-base font-medium">
                {userType === 'normal' ? 'You joined the "Women in Tech" group' : 
                 userType === 'mentor' ? 'You scheduled a session with Zara Mensah' : 
                 'You approved 3 new mentors'}
              </h3>
              <p className="text-gray-600 mt-1">
                {userType === 'normal' ? 'Connect with other women in technology and share experiences' : 
                 userType === 'mentor' ? 'Session scheduled for tomorrow at 2:30 PM' : 
                 'New mentors were added to the healthcare category'}
              </p>
            </div>
            
            <div className="absolute -left-[9px] top-[110px] h-4 w-4 rounded-full border-2 border-white bg-sisterhood-secondary"></div>
            <div className="mb-8">
              <div className="flex items-center text-sm mb-1">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                <span className="text-gray-500">Yesterday, 3:45 PM</span>
              </div>
              <h3 className="text-base font-medium">
                {userType === 'normal' ? 'You commented on a health resource' : 
                 userType === 'mentor' ? 'You completed a session with Joy Okonkwo' : 
                 'You addressed a reported community post'}
              </h3>
              <p className="text-gray-600 mt-1">
                {userType === 'normal' ? '"This article on women\'s health was very insightful..."' : 
                 userType === 'mentor' ? 'Progress noted: Business plan draft completed' : 
                 'Post was removed due to violation of community guidelines'}
              </p>
            </div>
            
            <div className="absolute -left-[9px] top-[220px] h-4 w-4 rounded-full border-2 border-white bg-sisterhood-accent"></div>
            <div>
              <div className="flex items-center text-sm mb-1">
                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                <span className="text-gray-500">May 10, 2023</span>
              </div>
              <h3 className="text-base font-medium">
                {userType === 'normal' ? 'You registered for an upcoming event' : 
                 userType === 'mentor' ? 'You added new resource materials' : 
                 'You updated the safety resources section'}
              </h3>
              <p className="text-gray-600 mt-1">
                {userType === 'normal' ? 'Women in Business Workshop on May 15' : 
                 userType === 'mentor' ? 'Added 3 new documents on healthcare entrepreneurship' : 
                 'Added new emergency contact information for multiple regions'}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-sisterhood-primary">
          View All Activities
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivitiesTab;
