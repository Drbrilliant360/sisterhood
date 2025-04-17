
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NormalUserOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Mentor Match */}
      <Card className="md:col-span-2 border-sisterhood-primary/20">
        <CardHeader>
          <CardTitle>Suggested Mentors</CardTitle>
          <CardDescription>Based on your interests and goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://images.unsplash.com/photo-${i === 1 ? '1573496359142-b8d87734a5a2' : i === 2 ? '1580489944761-15a19d654956' : '1531123414780-f74242c2b1b1'}?q=80&w=1974&auto=format&fit=crop`} alt="Mentor profile" />
                  <AvatarFallback>{i === 1 ? 'MA' : i === 2 ? 'BN' : 'FO'}</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {i === 1 ? 'Dr. Maria Addai' : i === 2 ? 'Blessing Nwosu' : 'Fatima Ouattara'}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm ml-1">{i === 1 ? '4.9' : i === 2 ? '4.7' : '4.8'}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {i === 1 ? 'Healthcare Professional • 10+ years exp.' : i === 2 ? 'Business Consultant • 7+ years exp.' : 'Safety Expert • 8+ years exp.'}
                  </p>
                  <div className="flex mt-1">
                    <Badge variant="outline" className="text-xs mr-1">
                      {i === 1 ? 'Health' : i === 2 ? 'Entrepreneurship' : 'Safety'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {i === 1 ? 'Wellness' : i === 2 ? 'Finance' : 'Self Defense'}
                    </Badge>
                  </div>
                </div>
                <Button variant="secondary" className="ml-2 text-xs h-8">Connect</Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-sisterhood-primary">
            View All Mentors
          </Button>
        </CardFooter>
      </Card>
      
      {/* Upcoming Events */}
      <Card className="border-sisterhood-primary/20">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Local meetups and webinars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="bg-sisterhood-light rounded p-2 text-center min-w-[50px]">
                  <div className="text-xs text-gray-500">
                    {i === 1 ? 'May' : i === 2 ? 'May' : 'Jun'}
                  </div>
                  <div className="text-lg font-bold text-sisterhood-primary">
                    {i === 1 ? '15' : i === 2 ? '22' : '05'}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">
                    {i === 1 ? 'Women in Business Workshop' : i === 2 ? 'Health & Wellness Webinar' : 'Safety Training Session'}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {i === 1 ? '10:00 AM - 12:00 PM' : i === 2 ? '2:00 PM - 3:30 PM' : '11:00 AM - 1:00 PM'}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {i === 1 ? 'In-Person' : i === 2 ? 'Online' : 'In-Person'}
                    </Badge>
                    {i !== 2 && (
                      <span className="text-xs text-gray-500 ml-2">
                        Dar es Salaam, Tanzania
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-sisterhood-primary">
            View All Events
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NormalUserOverview;
