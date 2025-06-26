
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, ChevronRight, Clock, Code, Database, FileText, Laptop, MessageSquare, PenTool, Smartphone, UserPlus, ExternalLink } from "lucide-react";

const DigitalSkills = () => {
  const [activeTab, setActiveTab] = useState("courses");

  // Course categories data
  const courseCategories = [
    {
      title: "Basic Computer Skills",
      description: "Learn fundamental computer operations and file management",
      modules: ["Computer Basics", "File Management", "Internet Basics"],
      icon: <Laptop className="h-8 w-8 text-sisterhood-primary" />,
      progress: 65,
      enrolled: 1243
    },
    {
      title: "Office Productivity",
      description: "Master essential office software and tools",
      modules: ["Word Processing", "Spreadsheets", "Presentations"],
      icon: <FileText className="h-8 w-8 text-sisterhood-primary" />,
      progress: 40,
      enrolled: 987
    },
    {
      title: "Digital Marketing",
      description: "Develop skills in online marketing and social media",
      modules: ["Social Media Marketing", "Email Marketing", "Content Creation"],
      icon: <MessageSquare className="h-8 w-8 text-sisterhood-primary" />,
      progress: 80,
      enrolled: 1567
    },
    {
      title: "Web Development",
      description: "Learn website creation and management",
      modules: ["HTML/CSS Basics", "WordPress", "Website Management"],
      icon: <Code className="h-8 w-8 text-sisterhood-primary" />,
      progress: 25,
      enrolled: 2134
    },
    {
      title: "Mobile App Skills",
      description: "Develop competencies in mobile application usage and development",
      modules: ["Mobile Productivity", "App Monetization", "App Design Principles"],
      icon: <Smartphone className="h-8 w-8 text-sisterhood-primary" />,
      progress: 15,
      enrolled: 765
    },
    {
      title: "Data Skills",
      description: "Learn to collect, analyze, and visualize data",
      modules: ["Data Collection", "Basic Analysis", "Data Visualization"],
      icon: <Database className="h-8 w-8 text-sisterhood-primary" />,
      progress: 50,
      enrolled: 891
    }
  ];

  // Featured workshops data
  const featuredWorkshops = [
    {
      id: 1,
      title: "Introduction to Digital Marketing",
      date: "May 10, 2025",
      time: "10:00 AM - 12:00 PM",
      facilitator: "Sarah Johnson",
      spots: 15,
      spotsLeft: 7
    },
    {
      id: 2,
      title: "Building Your First Website",
      date: "May 15, 2025",
      time: "2:00 PM - 5:00 PM",
      facilitator: "Michael Chen",
      spots: 20,
      spotsLeft: 3
    },
    {
      id: 3,
      title: "Social Media for Business",
      date: "May 22, 2025",
      time: "1:00 PM - 3:00 PM",
      facilitator: "Amina Patel",
      spots: 25,
      spotsLeft: 12
    }
  ];

  // Success stories data
  const successStories = [
    {
      name: "Jane Muthoni",
      business: "Eco-Friendly Crafts",
      story: "After completing the Digital Marketing course, I was able to expand my business online and increase sales by 200% in just 3 months.",
      skills: ["Digital Marketing", "Social Media", "E-commerce"]
    },
    {
      name: "David Ochieng",
      business: "Tech Repair Shop",
      story: "The Web Development skills I gained helped me create a website for my repair shop, allowing customers to book appointments online.",
      skills: ["Web Design", "Customer Management", "Online Booking"]
    },
    {
      name: "Maria Achieng",
      business: "Virtual Assistant Services",
      story: "Mastering Office Productivity tools enabled me to offer professional virtual assistant services to clients worldwide.",
      skills: ["Office Tools", "Time Management", "Client Communication"]
    }
  ];

  // Community partners with URLs
  const communityPartners = [
    { name: "Microsoft Digital Skills", url: "https://www.microsoft.com/en-us/digitalliteracy" },
    { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage" },
    { name: "IBM SkillsBuild", url: "https://skillsbuild.org/" },
    { name: "Cisco Networking Academy", url: "https://www.netacad.com/" },
    { name: "Local Community College", url: "#" },
    { name: "Women Techmakers", url: "https://www.womentechmakers.com/" }
  ];

  // Handle course navigation - redirect to dashboard for full functionality
  const handleCourseSelect = () => {
    window.location.href = '/dashboard?tab=activities';
  };

  // Handle workshop registration
  const handleWorkshopRegistration = (workshopId: number) => {
    console.log(`Registering for workshop ${workshopId}`);
    alert(`Registration form for workshop ${workshopId} would open here. This feature will be implemented with a proper form and backend integration.`);
  };

  // Handle facilitator application
  const handleFacilitatorApplication = () => {
    console.log("Opening facilitator application");
    alert("Facilitator application form would open here. This feature will be implemented with a proper form and backend integration.");
  };

  // Handle story sharing
  const handleStorySharing = () => {
    console.log("Opening story sharing form");
    alert("Story sharing form would open here. This feature will be implemented with a proper form and backend integration.");
  };

  // Handle partner link clicks
  const handlePartnerClick = (url: string) => {
    if (url === "#") {
      alert("Contact information for Local Community College would be displayed here.");
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-sisterhood-primary">Digital Skills Hub</h2>
              <p className="text-sisterhood-neutral mt-1">
                Empowering women through technology education and skills development
              </p>
            </div>
            <div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                3 courses in progress
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="courses" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="success">Success Stories</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        {category.icon}
                        <Badge variant="outline" className="ml-2">
                          {category.enrolled} enrolled
                        </Badge>
                      </div>
                      <CardTitle className="mt-4">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {category.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="flex items-center space-x-2">
                              <div className="h-2 w-2 bg-sisterhood-primary rounded-full"></div>
                              <span>{module}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm">
                            <span>Your progress</span>
                            <span>{category.progress}%</span>
                          </div>
                          <Progress value={category.progress} className="h-2" />
                        </div>
                        
                        <Button className="w-full" onClick={handleCourseSelect}>
                          {category.progress > 0 ? "Continue Learning" : "Start Course"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-sisterhood-light border-sisterhood-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium">Ready to take your skills to the next level?</h3>
                      <p className="text-sisterhood-neutral">Check out our advanced course tracks and certification programs.</p>
                    </div>
                    <Button className="whitespace-nowrap" onClick={handleCourseSelect}>
                      View All Courses <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Workshops Tab */}
            <TabsContent value="workshops" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredWorkshops.map((workshop, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-sisterhood-primary text-white">Upcoming</Badge>
                        <Clock className="h-5 w-5 text-sisterhood-neutral" />
                      </div>
                      <CardTitle className="mt-2">{workshop.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <span className="font-medium min-w-20">Date:</span>
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="font-medium min-w-20">Time:</span>
                            <span>{workshop.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="font-medium min-w-20">Facilitator:</span>
                            <span>{workshop.facilitator}</span>
                          </div>
                          <div className="flex items-center text-sm text-amber-600">
                            <span className="font-medium min-w-20">Spots Left:</span>
                            <span>{workshop.spotsLeft} of {workshop.spots}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full" 
                          onClick={() => handleWorkshopRegistration(workshop.id)}
                        >
                          Register Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-sisterhood-light border-sisterhood-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium">Want to share your skills?</h3>
                      <p className="text-sisterhood-neutral">Apply to become a workshop facilitator and help empower other women.</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="whitespace-nowrap border-sisterhood-primary text-sisterhood-primary"
                      onClick={handleFacilitatorApplication}
                    >
                      Apply as Facilitator <UserPlus className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Success Stories Tab */}
            <TabsContent value="success" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="mb-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Success Story
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{story.name}</CardTitle>
                      <CardDescription className="font-medium">{story.business}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-gray-700 italic">"{story.story}"</p>
                        
                        <div>
                          <p className="text-sm font-medium mb-2">Skills Gained:</p>
                          <div className="flex flex-wrap gap-2">
                            {story.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="flex items-center">
                                <Check className="mr-1 h-3 w-3" /> {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-sisterhood-light border-sisterhood-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium">Have a success story to share?</h3>
                      <p className="text-sisterhood-neutral">Tell us how digital skills have transformed your career or business.</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="whitespace-nowrap border-sisterhood-primary text-sisterhood-primary"
                      onClick={handleStorySharing}
                    >
                      Share Your Story <PenTool className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Partners & Resources</CardTitle>
                    <CardDescription>Access free and discounted learning resources from our community partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {communityPartners.map((partner, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          className="h-auto py-6 flex flex-col items-center justify-center text-center hover:bg-gray-50"
                          onClick={() => handlePartnerClick(partner.url)}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{partner.name}</span>
                            <ExternalLink className="h-4 w-4" />
                          </div>
                          <span className="text-xs mt-1 text-gray-500">Free Resources</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Free Learning Resources</CardTitle>
                    <CardDescription>Access high-quality learning materials to enhance your digital skills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="mr-2 h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Digital Skills Handbook</div>
                          <div className="text-xs text-gray-500">PDF Download (5MB)</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="mr-2 h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Social Media Quick Guide</div>
                          <div className="text-xs text-gray-500">PDF Download (3MB)</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="mr-2 h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Computer Basics Cheatsheet</div>
                          <div className="text-xs text-gray-500">PDF Download (2MB)</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="justify-start h-auto py-4">
                        <FileText className="mr-2 h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Email Marketing Templates</div>
                          <div className="text-xs text-gray-500">ZIP Download (8MB)</div>
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalSkills;
