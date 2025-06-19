
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const ContentRecommendations: React.FC = () => {
  const { toast } = useToast();

  const simulateApiCall = (feature: string) => {
    toast({
      title: "Processing Request",
      description: `Finding the best ${feature} for you...`,
      duration: 1500,
    });

    setTimeout(() => {
      toast({
        title: "Success!",
        description: `We've found great ${feature} matches based on your profile.`,
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="text-sisterhood-primary" />
          Personalized Content
        </CardTitle>
        <CardDescription>
          Get recommendations based on your interests and activity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">What topics interest you most?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Entrepreneurship', 'Health & Wellness', 'Safety', 'Leadership', 'Financial Literacy', 'Technology', 'Art & Culture', 'Education', 'Social Impact'].map(topic => (
                <Button 
                  key={topic} 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => toast({
                    title: "Topic Selected",
                    description: `${topic} added to your interests`,
                    duration: 2000,
                  })}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Content format preferences:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Articles', 'Videos', 'Podcasts', 'Courses', 'Events', 'Books', 'Community Discussions', 'Case Studies'].map(format => (
                <Button 
                  key={format} 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast({
                    title: "Format Selected",
                    description: `${format} added to your preferences`,
                    duration: 2000,
                  })}
                >
                  {format}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => simulateApiCall('content recommendations')}
          className="w-full"
        >
          Generate Recommendations
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentRecommendations;
