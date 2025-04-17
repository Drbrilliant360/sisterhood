
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MentorOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Mentee Management */}
      <Card className="md:col-span-2 border-sisterhood-primary/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Your Mentees</CardTitle>
              <CardDescription>Current mentees under your guidance</CardDescription>
            </div>
            <Badge className="bg-sisterhood-primary">5 Active</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://images.unsplash.com/photo-${i === 1 ? '1517841905240-472988babdf9' : i === 2 ? '1530785602389-07594beb8b73' : '1494790108377-be9c29b29330'}?q=80&w=1974&auto=format&fit=crop`} alt="Mentee profile" />
                  <AvatarFallback>{i === 1 ? 'JO' : i === 2 ? 'LN' : 'ZN'}</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {i === 1 ? 'Joy Okonkwo' : i === 2 ? 'Lina Ndiaye' : 'Zara Mensah'}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {i === 1 ? '3 months' : i === 2 ? '1 month' : '2 weeks'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {i === 1 ? 'Goals: Starting a healthcare business' : i === 2 ? 'Goals: Improving health education' : 'Goals: Learning health tech'}
                  </p>
                  <div className="flex mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-sisterhood-primary h-2.5 rounded-full" style={{ width: i === 1 ? '75%' : i === 2 ? '40%' : '25%' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2 min-w-[35px]">
                      {i === 1 ? '75%' : i === 2 ? '40%' : '25%'}
                    </span>
                  </div>
                </div>
                <Button variant="outline" className="ml-2 text-xs h-8">Message</Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-sisterhood-primary">
            View All Mentees
          </Button>
        </CardFooter>
      </Card>
      
      {/* Session Scheduling */}
      <Card className="border-sisterhood-primary/20">
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled mentoring sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 rounded-lg border border-gray-200 hover:border-sisterhood-primary/30 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium">
                    {i === 1 ? 'Today' : i === 2 ? 'Tomorrow' : 'May 18'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {i === 1 ? '3:00 PM' : i === 2 ? '11:00 AM' : '2:30 PM'}
                  </div>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://images.unsplash.com/photo-${i === 1 ? '1517841905240-472988babdf9' : i === 2 ? '1530785602389-07594beb8b73' : '1494790108377-be9c29b29330'}?q=80&w=1974&auto=format&fit=crop`} alt="Mentee profile" />
                    <AvatarFallback>{i === 1 ? 'JO' : i === 2 ? 'LN' : 'ZN'}</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <h4 className="text-sm font-medium">
                      {i === 1 ? 'Joy Okonkwo' : i === 2 ? 'Lina Ndiaye' : 'Zara Mensah'}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {i === 1 ? 'Business Plan Review' : i === 2 ? 'Initial Assessment' : 'Progress Check-in'}
                    </p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <Badge variant="outline" className="text-xs mr-1">
                    {i === 1 ? 'Video Call' : i === 2 ? 'In Person' : 'Video Call'}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {i === 1 ? '60 min' : i === 2 ? '45 min' : '30 min'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule New Session
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MentorOverview;
