
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowUp, 
  ArrowDown, 
  MessageCircle, 
  Users, 
  MapPin, 
  Search, 
  Filter,
  Eye,
  Shield,
  Star,
  Calendar,
  HeartHandshake,
  ThumbsUp,
  Clock,
  BadgeCheck
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Community = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handlePostAction = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature is still under development.",
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Community Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-sisterhood-primary mb-4">
              SisterHood Community
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded women, share experiences, and support each other 
              in a safe, respectful environment.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search discussions, groups or members..." 
                className="pl-10 border-sisterhood-primary/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center border-sisterhood-primary/30 text-sisterhood-primary"
            >
              <Filter size={18} className="mr-2" />
              Filters
            </Button>
            <Button className="bg-sisterhood-primary hover:bg-sisterhood-primary/90">
              Start a Discussion
            </Button>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Community Stats */}
              <Card className="border-sisterhood-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Community Stats</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2">
                      <div className="text-2xl font-bold text-sisterhood-primary">10k+</div>
                      <div className="text-xs text-gray-500">Members</div>
                    </div>
                    <div className="p-2">
                      <div className="text-2xl font-bold text-sisterhood-secondary">250+</div>
                      <div className="text-xs text-gray-500">Mentors</div>
                    </div>
                    <div className="p-2">
                      <div className="text-2xl font-bold text-sisterhood-accent">85+</div>
                      <div className="text-xs text-gray-500">Groups</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Popular Groups */}
              <Card className="border-sisterhood-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Popular Groups</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      {
                        name: "Women in Tech",
                        members: 1250,
                        icon: <Star size={16} className="text-yellow-500" />,
                        bgColor: "bg-sisterhood-purple"
                      },
                      {
                        name: "Entrepreneur Sisters",
                        members: 980,
                        icon: <HeartHandshake size={16} className="text-sisterhood-primary" />,
                        bgColor: "bg-sisterhood-pink"
                      },
                      {
                        name: "Health & Wellness",
                        members: 765,
                        icon: <Shield size={16} className="text-green-600" />,
                        bgColor: "bg-sisterhood-green"
                      },
                      {
                        name: "Lagos Connect",
                        members: 620,
                        icon: <MapPin size={16} className="text-sisterhood-accent" />,
                        bgColor: "bg-sisterhood-orange"
                      }
                    ].map((group, index) => (
                      <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${group.bgColor}`}>
                          {group.icon}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="font-medium">{group.name}</div>
                          <div className="text-xs text-gray-500">{group.members.toLocaleString()} members</div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-sisterhood-primary">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-sisterhood-primary">
                    View All Groups
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Upcoming Events */}
              <Card className="border-sisterhood-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      {
                        title: "Women in Business Workshop",
                        date: "May 15",
                        time: "10:00 AM",
                        location: "Lagos, Nigeria",
                        type: "In-Person"
                      },
                      {
                        title: "Health & Wellness Webinar",
                        date: "May 22",
                        time: "2:00 PM",
                        location: "Online",
                        type: "Virtual"
                      },
                      {
                        title: "Safety Training Session",
                        date: "Jun 05",
                        time: "11:00 AM",
                        location: "Accra, Ghana",
                        type: "In-Person"
                      }
                    ].map((event, index) => (
                      <div key={index} className="flex p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="bg-sisterhood-light rounded p-2 text-center min-w-[45px]">
                          <div className="text-xs text-gray-500">{event.date.split(' ')[0]}</div>
                          <div className="text-lg font-bold text-sisterhood-primary">{event.date.split(' ')[1]}</div>
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">{event.title}</div>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Clock size={12} className="mr-1" />
                            <span>{event.time}</span>
                            <Badge variant="secondary" className="ml-2 text-[10px]">
                              {event.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin size={12} className="mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-sisterhood-primary">
                    <Calendar size={16} className="mr-2" />
                    View Calendar
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs for Categories */}
              <Tabs defaultValue="all">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="all">All Topics</TabsTrigger>
                    <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
                    <TabsTrigger value="health">Health</TabsTrigger>
                    <TabsTrigger value="safety">Safety</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">Sort by:</span>
                    <select className="bg-transparent border-0 text-sm text-gray-500 focus:outline-none cursor-pointer">
                      <option>Newest</option>
                      <option>Popular</option>
                      <option>Trending</option>
                    </select>
                  </div>
                </div>
                
                <TabsContent value="all">
                  {/* Discussion Thread List */}
                  <div className="space-y-4">
                    {[
                      {
                        title: "Tips for first-time entrepreneurs seeking funding",
                        author: "Amara Okafor",
                        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
                        time: "2 hours ago",
                        category: "Entrepreneurship",
                        replies: 24,
                        upvotes: 45,
                        pinned: true,
                        preview: "Hello sisters! I recently secured funding for my small business and wanted to share some tips that helped me..."
                      },
                      {
                        title: "Mental health resources for women in high-stress jobs",
                        author: "Dr. Maria Addai",
                        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974&auto=format&fit=crop",
                        time: "Yesterday",
                        category: "Health",
                        replies: 18,
                        upvotes: 37,
                        verified: true,
                        preview: "As a healthcare professional, I've compiled some resources specifically for women dealing with workplace stress..."
                      },
                      {
                        title: "Safety measures when traveling alone as a woman",
                        author: "Fatima Ouattara",
                        avatar: "https://images.unsplash.com/photo-1531123414780-f74242c2b1b1?q=80&w=1974&auto=format&fit=crop",
                        time: "2 days ago",
                        category: "Safety",
                        replies: 32,
                        upvotes: 52,
                        preview: "I travel frequently for work and wanted to share some safety practices that have served me well over the years..."
                      },
                      {
                        title: "Experiences with traditional vs. modern business networking",
                        author: "Blessing Nwosu",
                        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop",
                        time: "3 days ago",
                        category: "Entrepreneurship",
                        replies: 15,
                        upvotes: 23,
                        preview: "I've been networking both in traditional business settings and digital communities. Here's what I've learned..."
                      }
                    ].map((post, index) => (
                      <Card key={index} className="border-sisterhood-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            {/* Voting */}
                            <div className="flex flex-col items-center mr-4">
                              <button onClick={handlePostAction} className="text-gray-400 hover:text-sisterhood-primary">
                                <ArrowUp size={20} />
                              </button>
                              <span className="my-1 font-medium">{post.upvotes}</span>
                              <button onClick={handlePostAction} className="text-gray-400 hover:text-sisterhood-accent">
                                <ArrowDown size={20} />
                              </button>
                            </div>
                            
                            {/* Post Content */}
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <Badge 
                                  className={`mr-2 ${
                                    post.category === "Entrepreneurship" ? "bg-sisterhood-primary" : 
                                    post.category === "Health" ? "bg-green-600" : 
                                    "bg-sisterhood-accent"
                                  }`}
                                >
                                  {post.category}
                                </Badge>
                                {post.pinned && (
                                  <Badge variant="outline" className="mr-2 border-yellow-400 text-yellow-600">
                                    Pinned
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className="text-xl font-semibold mb-2">
                                {post.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-3">
                                {post.preview}
                              </p>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={post.avatar} alt={post.author} />
                                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div className="ml-2 flex items-center">
                                    <span className="text-sm font-medium">{post.author}</span>
                                    {post.verified && (
                                      <BadgeCheck size={14} className="ml-1 text-sisterhood-primary" />
                                    )}
                                    <span className="text-xs text-gray-500 ml-2">
                                      {post.time}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <Button variant="ghost" size="sm" className="text-gray-500">
                                    <MessageCircle size={16} className="mr-1" />
                                    {post.replies}
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-gray-500">
                                    <Eye size={16} className="mr-1" />
                                    {Math.floor(post.upvotes * 3.5)}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="border-sisterhood-primary/30 text-sisterhood-primary">
                      Load More Discussions
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="entrepreneurship">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center p-8">
                        <h3 className="text-xl font-medium mb-2">Entrepreneurship Discussions</h3>
                        <p className="text-gray-600 mb-4">
                          Filtered discussions around business, funding, and entrepreneurship.
                        </p>
                        <Button className="bg-sisterhood-primary">
                          Coming Soon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="health">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center p-8">
                        <h3 className="text-xl font-medium mb-2">Health Discussions</h3>
                        <p className="text-gray-600 mb-4">
                          Filtered discussions around physical health, mental wellbeing, and healthcare.
                        </p>
                        <Button className="bg-sisterhood-primary">
                          Coming Soon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="safety">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center p-8">
                        <h3 className="text-xl font-medium mb-2">Safety Discussions</h3>
                        <p className="text-gray-600 mb-4">
                          Filtered discussions around personal safety, security, and protection.
                        </p>
                        <Button className="bg-sisterhood-primary">
                          Coming Soon
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Group Directory */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-sisterhood-primary">Group Directory</h2>
                  <Button variant="outline" size="sm" className="text-sisterhood-primary border-sisterhood-primary/30">
                    <Users size={16} className="mr-2" />
                    Create Group
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Women in Tech",
                      members: 1250,
                      description: "For women in technology to share experiences, opportunities, and mentorship.",
                      type: "Interest-Based",
                      bgColor: "bg-sisterhood-purple"
                    },
                    {
                      name: "Lagos Connect",
                      members: 620,
                      description: "Local connections and meetups for women in Lagos, Nigeria.",
                      type: "Location-Based",
                      bgColor: "bg-sisterhood-orange"
                    },
                    {
                      name: "Mental Health Support",
                      members: 430,
                      description: "A private support group for women dealing with mental health challenges.",
                      type: "Private Support",
                      bgColor: "bg-sisterhood-green"
                    },
                    {
                      name: "Entrepreneur Sisters",
                      members: 980,
                      description: "Resources, networking, and support for women entrepreneurs.",
                      type: "Interest-Based",
                      bgColor: "bg-sisterhood-pink"
                    }
                  ].map((group, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-sisterhood-primary/20">
                      <CardContent className="p-5">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full ${group.bgColor} flex items-center justify-center`}>
                            <Users size={20} className="text-white" />
                          </div>
                          <div className="ml-3">
                            <h3 className="font-semibold">{group.name}</h3>
                            <div className="flex items-center text-xs text-gray-500">
                              <Users size={12} className="mr-1" />
                              <span>{group.members.toLocaleString()} members</span>
                              <Badge 
                                variant="outline" 
                                className="ml-2 text-[10px]"
                              >
                                {group.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          {group.description}
                        </p>
                        <div className="mt-3 flex justify-end">
                          <Button variant="ghost" size="sm" className="h-8 text-sisterhood-primary">
                            Join Group
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="ghost" className="text-sisterhood-primary">
                    View All Groups
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
