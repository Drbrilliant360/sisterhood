import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Calendar, 
  Heart, 
  MessageCircle, 
  UserCircle, 
  Users, 
  Bookmark,
  Clock,
  Star,
  CheckCircle2,
  Award,
  FileText,
  BookOpen,
  Video,
  Shield
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Dashboard = () => {
  const [userType, setUserType] = useState('normal'); // normal, mentor, admin
  
  // For demonstration, toggle between user types
  const toggleUserType = () => {
    if (userType === 'normal') setUserType('mentor');
    else if (userType === 'mentor') setUserType('admin');
    else setUserType('normal');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* User Type Toggle (for demo only) */}
          <div className="mb-6 flex justify-end">
            <Button onClick={toggleUserType} variant="outline" className="text-xs">
              Current View: {userType === 'normal' ? 'Normal User' : userType === 'mentor' ? 'Mentor' : 'Admin'}
              <span className="ml-2 text-[10px] opacity-70">(Demo Toggle)</span>
            </Button>
          </div>
          
          {/* Welcome Banner */}
          <div className="mb-8 african-pattern-bg rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="User profile" />
                  <AvatarFallback>ZN</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold">
                    {userType === 'normal' ? 'Welcome, Zara!' : 
                     userType === 'mentor' ? 'Welcome, Dr. Amina!' : 
                     'Welcome, Admin!'}
                  </h1>
                  <p className="text-white/80">
                    {userType === 'normal' ? 'Let\'s continue your journey' : 
                     userType === 'mentor' ? 'Your mentees are waiting for you' : 
                     'Manage your community effectively'}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-0">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="secondary" className="bg-white text-sisterhood-primary hover:bg-white/90 border-0">
                  <UserCircle className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Access Menu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Link to="/mentorship">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="p-3 bg-sisterhood-purple rounded-full mb-2">
                    <Users className="h-6 w-6 text-sisterhood-primary" />
                  </div>
                  <h3 className="font-medium">Mentorship</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/community">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="p-3 bg-sisterhood-pink rounded-full mb-2">
                    <MessageCircle className="h-6 w-6 text-sisterhood-secondary" />
                  </div>
                  <h3 className="font-medium">Community</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/resources">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="p-3 bg-sisterhood-orange rounded-full mb-2">
                    <BookOpen className="h-6 w-6 text-sisterhood-accent" />
                  </div>
                  <h3 className="font-medium">Resources</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/safety">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="p-3 bg-sisterhood-green rounded-full mb-2">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-medium">Safety</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
          
          {/* Daily Inspiration */}
          <Card className="mb-8 border-sisterhood-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-sisterhood-primary">
                <Heart className="mr-2 h-5 w-5" />
                Daily Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-xl text-gray-700 border-l-4 border-sisterhood-primary pl-4">
                "The most effective way to do it is to do it."
              </blockquote>
              <p className="mt-2 text-right text-gray-500">- Amelia Earhart</p>
            </CardContent>
          </Card>
          
          {/* User Specific Content */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              {userType === 'normal' && (
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
                                    Lagos, Nigeria
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
              )}
              
              {userType === 'mentor' && (
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
              )}
              
              {userType === 'admin' && (
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
              )}
            </TabsContent>
            
            {/* Activities Tab */}
            <TabsContent value="activities">
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
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
