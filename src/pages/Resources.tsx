
import React, { useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Headphones, 
  Bookmark, 
  Share2, 
  Eye, 
  Download, 
  ChevronDown,
  Star,
  Briefcase,
  Building2,
  DollarSign,
  Scale,
  Activity,
  Heart,
  Brain,
  Apple,
  Shield,
  AlertTriangle,
  Phone,
  Map
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Resources = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleResourceAction = (action: string) => {
    toast({
      title: action === 'bookmark' ? "Bookmarked!" : "Shared!",
      description: action === 'bookmark' ? "Resource added to your favorites" : "Link copied to clipboard",
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Resources Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-sisterhood-primary mb-4">
              Resource Library
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access a wealth of knowledge and tools designed specifically for women's empowerment, 
              entrepreneurship, health, and safety.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search for resources..." 
              className="pl-10 border-sisterhood-primary/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Resource Categories */}
          <Tabs defaultValue="all">
            <TabsList className="w-full grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {/* Featured Resources */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-sisterhood-primary mb-6">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Women Entrepreneurs: Funding Guide",
                      description: "Comprehensive guide to funding options available for women entrepreneurs in Africa.",
                      type: "Guide",
                      category: "Entrepreneurship",
                      icon: <FileText className="h-6 w-6 text-sisterhood-primary" />,
                      bgColor: "bg-sisterhood-purple",
                      popular: true
                    },
                    {
                      title: "Women's Health: Complete Wellness",
                      description: "A complete guide covering physical, mental, and reproductive health.",
                      type: "Video Course",
                      category: "Health",
                      icon: <Video className="h-6 w-6 text-green-600" />,
                      bgColor: "bg-sisterhood-green",
                      new: true
                    },
                    {
                      title: "Personal Safety & Self-Defense",
                      description: "Practical techniques and strategies for personal safety and self-defense.",
                      type: "Workshop Recording",
                      category: "Safety",
                      icon: <Video className="h-6 w-6 text-sisterhood-accent" />,
                      bgColor: "bg-sisterhood-orange",
                      popular: true
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer h-full border-sisterhood-primary/20">
                      <CardHeader className={`rounded-t-lg ${resource.bgColor} p-4`}>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-white text-gray-800">
                            {resource.category}
                          </Badge>
                          {resource.popular && (
                            <Badge className="bg-yellow-500">
                              Popular
                            </Badge>
                          )}
                          {resource.new && (
                            <Badge className="bg-green-600">
                              New
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="mb-4">
                          <div className="p-3 rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center mb-3">
                            {resource.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                          <p className="text-gray-600 text-sm">{resource.description}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Badge variant="outline" className="mr-2">
                            {resource.type}
                          </Badge>
                          <div className="flex items-center ml-auto">
                            <Eye size={14} className="mr-1" />
                            <span>{(index + 1) * 254}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4 flex justify-between">
                        <Button variant="ghost" size="sm" onClick={() => handleResourceAction('bookmark')}>
                          <Bookmark size={16} className="mr-1" />
                          Save
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleResourceAction('share')}>
                          <Share2 size={16} className="mr-1" />
                          Share
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Recent Resources */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-sisterhood-primary">Recent Resources</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">Filter by:</span>
                    <select className="bg-transparent border border-gray-300 rounded-md text-sm text-gray-500 focus:outline-none px-2 py-1 cursor-pointer">
                      <option>All Types</option>
                      <option>Articles</option>
                      <option>Videos</option>
                      <option>Podcasts</option>
                      <option>Guides</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Financial Planning for Women Entrepreneurs",
                      description: "Learn essential financial planning strategies specifically tailored for women entrepreneurs.",
                      type: "Article",
                      readTime: "8 min read",
                      category: "Entrepreneurship",
                      author: "Amara Okafor",
                      date: "May 12, 2023",
                      icon: <FileText size={20} className="text-sisterhood-primary" />
                    },
                    {
                      title: "Reproductive Health: What Every Woman Should Know",
                      description: "Expert insights on reproductive health, wellness practices, and preventive care.",
                      type: "Video",
                      readTime: "15 min video",
                      category: "Health",
                      author: "Dr. Maria Addai",
                      date: "May 10, 2023",
                      icon: <Video size={20} className="text-green-600" />
                    },
                    {
                      title: "Safety Planning: Creating Your Emergency Network",
                      description: "Step-by-step guide to establishing a reliable emergency network for personal safety.",
                      type: "Guide",
                      readTime: "12 min read",
                      category: "Safety",
                      author: "Fatima Ouattara",
                      date: "May 8, 2023",
                      icon: <FileText size={20} className="text-sisterhood-accent" />
                    },
                    {
                      title: "Marketing Strategies for Small Women-Owned Businesses",
                      description: "Effective and affordable marketing strategies to help your small business grow.",
                      type: "Podcast",
                      readTime: "25 min listen",
                      category: "Entrepreneurship",
                      author: "Blessing Nwosu",
                      date: "May 5, 2023",
                      icon: <Headphones size={20} className="text-sisterhood-secondary" />
                    }
                  ].map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-sisterhood-primary/20">
                      <CardContent className="p-5">
                        <div className="flex items-start">
                          <div className="p-3 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            {resource.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center mb-1">
                              <Badge 
                                className={`mr-2 ${
                                  resource.category === "Entrepreneurship" ? "bg-sisterhood-primary" : 
                                  resource.category === "Health" ? "bg-green-600" : 
                                  "bg-sisterhood-accent"
                                }`}
                              >
                                {resource.category}
                              </Badge>
                              <Badge variant="outline" className="mr-2">
                                {resource.type}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {resource.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                              <div>
                                By <span className="text-sisterhood-primary">{resource.author}</span> • {resource.date}
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-8" onClick={() => handleResourceAction('bookmark')}>
                                  <Bookmark size={14} className="mr-1" />
                                  Save
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8" onClick={() => handleResourceAction('share')}>
                                  <Share2 size={14} className="mr-1" />
                                  Share
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
                    Load More Resources
                    <ChevronDown size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
              
              {/* Popular Categories */}
              <div>
                <h2 className="text-2xl font-semibold text-sisterhood-primary mb-6">Popular Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Business Planning",
                      count: 24,
                      category: "Entrepreneurship",
                      icon: <Briefcase size={20} className="text-sisterhood-primary" />,
                      bgColor: "bg-sisterhood-purple/20"
                    },
                    {
                      title: "Mental Health",
                      count: 18,
                      category: "Health",
                      icon: <Brain size={20} className="text-green-600" />,
                      bgColor: "bg-sisterhood-green/20"
                    },
                    {
                      title: "Self Defense",
                      count: 15,
                      category: "Safety",
                      icon: <Shield size={20} className="text-sisterhood-accent" />,
                      bgColor: "bg-sisterhood-orange/20"
                    },
                    {
                      title: "Funding Opportunities",
                      count: 12,
                      category: "Entrepreneurship",
                      icon: <DollarSign size={20} className="text-sisterhood-primary" />,
                      bgColor: "bg-sisterhood-purple/20"
                    },
                    {
                      title: "Reproductive Health",
                      count: 20,
                      category: "Health",
                      icon: <Heart size={20} className="text-green-600" />,
                      bgColor: "bg-sisterhood-green/20"
                    },
                    {
                      title: "Emergency Planning",
                      count: 14,
                      category: "Safety",
                      icon: <AlertTriangle size={20} className="text-sisterhood-accent" />,
                      bgColor: "bg-sisterhood-orange/20"
                    }
                  ].map((category, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg ${category.bgColor} flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer border border-gray-200`}
                    >
                      <div className="flex items-center">
                        <div className="p-2 bg-white rounded-full mr-3">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{category.title}</h3>
                          <div className="text-xs text-gray-500">
                            {category.count} resources
                          </div>
                        </div>
                      </div>
                      <Badge className={`${
                        category.category === "Entrepreneurship" ? "bg-sisterhood-primary" : 
                        category.category === "Health" ? "bg-green-600" : 
                        "bg-sisterhood-accent"
                      }`}>
                        {category.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="entrepreneurship">
              <div className="bg-sisterhood-purple/10 rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-3/5 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-2xl font-bold text-sisterhood-primary mb-3">Entrepreneurship Resources</h2>
                    <p className="text-gray-600 mb-4">
                      Access tools, guides, and expert insights to help you start and grow your business.
                      From business planning to funding opportunities and legal resources, find everything
                      you need to succeed as a woman entrepreneur.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-sisterhood-primary/20 text-sisterhood-primary hover:bg-sisterhood-primary/30 cursor-pointer">
                        <Briefcase size={12} className="mr-1" />
                        Business Planning
                      </Badge>
                      <Badge className="bg-sisterhood-primary/20 text-sisterhood-primary hover:bg-sisterhood-primary/30 cursor-pointer">
                        <DollarSign size={12} className="mr-1" />
                        Funding
                      </Badge>
                      <Badge className="bg-sisterhood-primary/20 text-sisterhood-primary hover:bg-sisterhood-primary/30 cursor-pointer">
                        <Scale size={12} className="mr-1" />
                        Legal
                      </Badge>
                      <Badge className="bg-sisterhood-primary/20 text-sisterhood-primary hover:bg-sisterhood-primary/30 cursor-pointer">
                        <Building2 size={12} className="mr-1" />
                        Growth
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full md:w-2/5">
                    <img 
                      src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1968&auto=format&fit=crop" 
                      alt="Entrepreneurship" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-2">Entrepreneurship Resources</h3>
                <p className="text-gray-600 mb-4">
                  This section will feature business planning tools, funding opportunities, legal resources,
                  and growth strategies for women entrepreneurs.
                </p>
                <Button className="bg-sisterhood-primary">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="health">
              <div className="bg-sisterhood-green/10 rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-3/5 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-2xl font-bold text-green-600 mb-3">Health Resources</h2>
                    <p className="text-gray-600 mb-4">
                      Discover comprehensive resources on mental health, reproductive health, and wellness practices.
                      Expert advice and practical guides to support your physical and emotional wellbeing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 cursor-pointer">
                        <Brain size={12} className="mr-1" />
                        Mental Health
                      </Badge>
                      <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 cursor-pointer">
                        <Heart size={12} className="mr-1" />
                        Reproductive Health
                      </Badge>
                      <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 cursor-pointer">
                        <Activity size={12} className="mr-1" />
                        Physical Wellness
                      </Badge>
                      <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 cursor-pointer">
                        <Apple size={12} className="mr-1" />
                        Nutrition
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full md:w-2/5">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1970&auto=format&fit=crop" 
                      alt="Health and Wellness" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-2">Health Resources</h3>
                <p className="text-gray-600 mb-4">
                  This section will feature mental health resources, reproductive health information,
                  and wellness tips for women's overall health.
                </p>
                <Button className="bg-sisterhood-primary">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="safety">
              <div className="bg-sisterhood-orange/10 rounded-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-3/5 mb-6 md:mb-0 md:pr-8">
                    <h2 className="text-2xl font-bold text-sisterhood-accent mb-3">Safety Resources</h2>
                    <p className="text-gray-600 mb-4">
                      Access essential safety tools, emergency contact information, and self-defense resources.
                      Learn how to protect yourself and create safety plans for various situations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-sisterhood-accent/20 text-sisterhood-accent hover:bg-sisterhood-accent/30 cursor-pointer">
                        <Shield size={12} className="mr-1" />
                        Self Defense
                      </Badge>
                      <Badge className="bg-sisterhood-accent/20 text-sisterhood-accent hover:bg-sisterhood-accent/30 cursor-pointer">
                        <Phone size={12} className="mr-1" />
                        Emergency Contacts
                      </Badge>
                      <Badge className="bg-sisterhood-accent/20 text-sisterhood-accent hover:bg-sisterhood-accent/30 cursor-pointer">
                        <AlertTriangle size={12} className="mr-1" />
                        Safety Planning
                      </Badge>
                      <Badge className="bg-sisterhood-accent/20 text-sisterhood-accent hover:bg-sisterhood-accent/30 cursor-pointer">
                        <Map size={12} className="mr-1" />
                        Travel Safety
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full md:w-2/5">
                    <img 
                      src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop" 
                      alt="Safety" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-2">Safety Resources</h3>
                <p className="text-gray-600 mb-4">
                  This section will feature self-defense resources, emergency contacts,
                  safety planning tools, and travel safety guides.
                </p>
                <Button className="bg-sisterhood-primary">
                  Coming Soon
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
