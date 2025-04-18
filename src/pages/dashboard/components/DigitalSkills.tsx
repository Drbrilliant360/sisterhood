
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DigitalSkills = () => {
  const skillCategories = [
    {
      title: "Basic Computer Skills",
      description: "Learn fundamental computer operations and file management",
      modules: ["Computer Basics", "File Management", "Internet Basics"]
    },
    {
      title: "Office Productivity",
      description: "Master essential office software and tools",
      modules: ["Word Processing", "Spreadsheets", "Presentations"]
    },
    {
      title: "Digital Marketing",
      description: "Develop skills in online marketing and social media",
      modules: ["Social Media Marketing", "Email Marketing", "Content Creation"]
    },
    {
      title: "Web Development",
      description: "Learn website creation and management",
      modules: ["HTML/CSS Basics", "WordPress", "Website Management"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sisterhood-primary">Digital Skills Training</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-sisterhood-primary rounded-full"></div>
                    <span>{module}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-4 w-full">Start Learning</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DigitalSkills;
