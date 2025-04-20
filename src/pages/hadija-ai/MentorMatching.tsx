
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const MentorMatching: React.FC = () => {
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
          <Brain className="text-sisterhood-primary" />
          Smart Mentor Matching
        </CardTitle>
        <CardDescription>
          Our AI analyzes your goals, personality, and learning style to find your ideal mentor
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">What are your main goals?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {['Starting a business', 'Career growth', 'Skill development', 'Work-life balance', 'Leadership', 'Financial literacy'].map(goal => (
                <Button 
                  key={goal} 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => toast({
                    title: "Goal Selected",
                    description: `${goal} added to your profile`,
                    duration: 2000,
                  })}
                >
                  {goal}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Describe your ideal mentor:</h3>
            <Textarea 
              placeholder="Tell us about your ideal mentor - their experience, communication style, availability, etc."
              className="h-24"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => simulateApiCall('mentors')}
          className="w-full"
        >
          Find My Mentor Match
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MentorMatching;
