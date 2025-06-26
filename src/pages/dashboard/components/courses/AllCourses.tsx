
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Laptop, FileText, MessageSquare, Code, Smartphone, Database, ArrowLeft } from "lucide-react";
import BasicComputerSkillsCourse from './BasicComputerSkillsCourse';
import OfficeProductivityCourse from './OfficeProductivityCourse';

const AllCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const courseCategories = [
    {
      id: "basic-computer",
      title: "Basic Computer Skills",
      description: "Learn fundamental computer operations and file management",
      modules: ["Computer Basics", "File Management", "Internet Basics"],
      icon: <Laptop className="h-8 w-8 text-sisterhood-primary" />,
      progress: 65,
      enrolled: 1243,
      level: "Beginner",
      duration: "4 weeks",
      hasFullContent: true
    },
    {
      id: "office-productivity",
      title: "Office Productivity",
      description: "Master essential office software and tools",
      modules: ["Word Processing", "Spreadsheets", "Presentations"],
      icon: <FileText className="h-8 w-8 text-sisterhood-primary" />,
      progress: 40,
      enrolled: 987,
      level: "Beginner",
      duration: "6 weeks",
      hasFullContent: true
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Develop skills in online marketing and social media",
      modules: ["Social Media Marketing", "Email Marketing", "Content Creation"],
      icon: <MessageSquare className="h-8 w-8 text-sisterhood-primary" />,
      progress: 80,
      enrolled: 1567,
      level: "Intermediate",
      duration: "8 weeks",
      hasFullContent: false
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Learn website creation and management",
      modules: ["HTML/CSS Basics", "WordPress", "Website Management"],
      icon: <Code className="h-8 w-8 text-sisterhood-primary" />,
      progress: 25,
      enrolled: 2134,
      level: "Intermediate",
      duration: "12 weeks",
      hasFullContent: false
    },
    {
      id: "mobile-app",
      title: "Mobile App Skills",
      description: "Develop competencies in mobile application usage and development",
      modules: ["Mobile Productivity", "App Monetization", "App Design Principles"],
      icon: <Smartphone className="h-8 w-8 text-sisterhood-primary" />,
      progress: 15,
      enrolled: 765,
      level: "Advanced",
      duration: "10 weeks",
      hasFullContent: false
    },
    {
      id: "data-skills",
      title: "Data Skills",
      description: "Learn to collect, analyze, and visualize data",
      modules: ["Data Collection", "Basic Analysis", "Data Visualization"],
      icon: <Database className="h-8 w-8 text-sisterhood-primary" />,
      progress: 50,
      enrolled: 891,
      level: "Intermediate",
      duration: "8 weeks",
      hasFullContent: false
    }
  ];

  const filterCoursesByLevel = (level: string) => {
    return courseCategories.filter(course => course.level === level);
  };

  const renderCourseContent = () => {
    switch (selectedCourse) {
      case 'basic-computer':
        return <BasicComputerSkillsCourse />;
      case 'office-productivity':
        return <OfficeProductivityCourse />;
      default:
        return (
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Course Content Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                This course is currently being developed. Full content with interactive lessons, 
                quizzes, and exercises will be available soon.
              </p>
              <Badge className="bg-yellow-100 text-yellow-800">In Development</Badge>
            </CardContent>
          </Card>
        );
    }
  };

  if (selectedCourse) {
    return (
      <div className="space-y-6">
        <Button 
          variant="outline" 
          onClick={() => setSelectedCourse(null)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Courses
        </Button>
        {renderCourseContent()}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-sisterhood-primary">All Digital Skills Courses</h2>
          <p className="text-sisterhood-neutral mt-1">
            Comprehensive learning paths for every skill level
          </p>
        </div>
        <div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {courseCategories.length} courses available
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    {category.icon}
                    <div className="flex flex-col items-end space-y-1">
                      <Badge variant="outline" className="text-xs">
                        {category.enrolled} enrolled
                      </Badge>
                      <Badge className={`text-xs ${
                        category.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        category.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {category.level}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Duration: {category.duration}</span>
                    <span>{category.modules.length} modules</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {category.modules.slice(0, 3).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center space-x-2 text-sm">
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
                    
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedCourse(category.id)}
                      disabled={!category.hasFullContent}
                    >
                      {category.hasFullContent ? 
                        (category.progress > 0 ? "Continue Learning" : "Start Course") :
                        "Coming Soon"
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="beginner" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterCoursesByLevel('Beginner').map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    {category.icon}
                    <Badge variant="outline" className="text-xs">
                      {category.enrolled} enrolled
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {category.modules.slice(0, 3).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center space-x-2 text-sm">
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
                    
                    <Button 
                      className="w-full"
                      onClick={() => setSelectedCourse(category.id)}
                      disabled={!category.hasFullContent}
                    >
                      {category.hasFullContent ? 
                        (category.progress > 0 ? "Continue Learning" : "Start Course") :
                        "Coming Soon"
                      }
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterCoursesByLevel('Intermediate').map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    {category.icon}
                    <Badge variant="outline" className="text-xs">
                      {category.enrolled} enrolled
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {category.modules.slice(0, 3).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center space-x-2 text-sm">
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
                    
                    <Button className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterCoursesByLevel('Advanced').map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    {category.icon}
                    <Badge variant="outline" className="text-xs">
                      {category.enrolled} enrolled
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {category.modules.slice(0, 3).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center space-x-2 text-sm">
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
                    
                    <Button className="w-full" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AllCourses;
