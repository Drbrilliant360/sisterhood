
import React from 'react';
import { FileText, CheckCircle2, Award } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AdminOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Verification Dashboard */}
      <Card className="md:col-span-2 border-sisterhood-primary/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Mentor Verification Requests</CardTitle>
              <CardDescription>New mentors awaiting approval</CardDescription>
            </div>
            <Badge className="bg-sisterhood-accent">8 Pending</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://images.unsplash.com/photo-${i === 1 ? '1573496359142-b8d87734a5a2' : i === 2 ? '1580489944761-15a19d654956' : '1531123414780-f74242c2b1b1'}?q=80&w=1974&auto=format&fit=crop`} alt="Mentor profile" />
                  <AvatarFallback>{i === 1 ? 'MA' : i === 2 ? 'BN' : 'FO'}</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {i === 1 ? 'Dr. Maria Addai' : i === 2 ? 'Blessing Nwosu' : 'Fatima Ouattara'}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {i === 1 ? 'Healthcare' : i === 2 ? 'Business' : 'Safety'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {i === 1 ? 'Medical Doctor • 10+ years experience' : i === 2 ? 'Business Consultant • 7+ years experience' : 'Safety Expert • 8+ years experience'}
                  </p>
                  <div className="flex mt-1">
                    <Badge variant="secondary" className="text-xs mr-1">
                      {i === 1 ? 'Documents Uploaded' : i === 2 ? 'References Provided' : 'Credentials Verified'}
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="text-xs h-8 w-8 p-0" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="default" className="text-xs h-8 bg-green-600 hover:bg-green-700">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full text-sisterhood-primary">
            View All Requests
          </Button>
        </CardFooter>
      </Card>
      
      {/* Analytics Overview */}
      <Card className="border-sisterhood-primary/20">
        <CardHeader>
          <CardTitle>Platform Analytics</CardTitle>
          <CardDescription>Key metrics overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">New Users</div>
                <div className="text-sm font-bold text-green-600">+24%</div>
              </div>
              <div className="text-2xl font-bold mt-1">128</div>
              <div className="text-xs text-gray-500">Last 7 days</div>
            </div>
            
            <div className="p-3 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Active Mentorships</div>
                <div className="text-sm font-bold text-green-600">+12%</div>
              </div>
              <div className="text-2xl font-bold mt-1">85</div>
              <div className="text-xs text-gray-500">Current ongoing</div>
            </div>
            
            <div className="p-3 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Community Posts</div>
                <div className="text-sm font-bold text-green-600">+36%</div>
              </div>
              <div className="text-2xl font-bold mt-1">256</div>
              <div className="text-xs text-gray-500">Last 7 days</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Award className="mr-2 h-4 w-4" />
            Detailed Analytics
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminOverview;
