import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Loader2, UserCheck, Star, Clock } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface MentorMatch {
  name: string;
  expertise: string;
  experience: string;
  matchScore: number;
  bio: string;
  availability: string;
}

const formSchema = z.object({
  goals: z.string().min(10, { message: 'Please describe your goals in at least 10 characters' }),
  idealMentor: z.string().min(10, { message: 'Please describe your ideal mentor in at least 10 characters' })
});

const MentorMatching: React.FC = () => {
  const { toast } = useToast();
  const [isSearching, setIsSearching] = useState(false);
  const [mentorMatches, setMentorMatches] = useState<MentorMatch[]>([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals: '',
      idealMentor: ''
    },
  });

  const goalOptions = ['Starting a business', 'Career growth', 'Skill development', 'Work-life balance', 'Leadership', 'Financial literacy'];

  const handleGoalSelect = (goal: string) => {
    const currentGoals = form.getValues('goals');
    if (currentGoals.includes(goal)) {
      form.setValue('goals', currentGoals.replace(goal + ', ', '').replace(goal, ''));
    } else {
      form.setValue('goals', currentGoals ? `${currentGoals}, ${goal}` : goal);
    }
  };

  const findMentors = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to find mentor matches",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    setIsSearching(true);
    try {
      const { data, error } = await supabase.functions.invoke('lavina-mentor-match', {
        body: { goals: values.goals, idealMentor: values.idealMentor }
      });

      if (error) throw error;

      if (data?.mentors) {
        setMentorMatches(data.mentors);
        toast({
          title: "Mentors Found!",
          description: `Found ${data.mentors.length} potential mentor matches based on your preferences.`,
        });
      }
    } catch (error: any) {
      console.error('Error finding mentors:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to find mentor matches. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
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
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(findMentors)}>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">What are your main goals?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                  {goalOptions.map(goal => (
                    <Button 
                      key={goal} 
                      type="button"
                      variant={form.watch('goals').includes(goal) ? "default" : "outline"} 
                      className="justify-start"
                      onClick={() => handleGoalSelect(goal)}
                    >
                      {goal}
                    </Button>
                  ))}
                </div>
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Or describe your goals in detail..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="idealMentor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe your ideal mentor:</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your ideal mentor - their experience, communication style, availability, etc."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding Perfect Matches...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Find My Mentor Match
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {mentorMatches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <UserCheck className="text-sisterhood-primary" />
            Your Mentor Matches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mentorMatches.map((mentor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <Avatar className="w-16 h-16 mx-auto mb-2">
                    <AvatarFallback className="text-lg bg-sisterhood-primary text-white">
                      {getInitials(mentor.name)}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <Badge variant="secondary">{mentor.expertise}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        Match Score
                      </span>
                      <span className="font-semibold">{mentor.matchScore}%</span>
                    </div>
                    <Progress value={mentor.matchScore} className="h-2" />
                  </div>
                  <p className="text-sm text-gray-600">{mentor.bio}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {mentor.availability}
                  </div>
                  <p className="text-xs text-gray-400">{mentor.experience}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Request Connection
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorMatching;
