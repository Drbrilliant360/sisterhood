
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Loader2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Define form schema
const formSchema = z.object({
  goals: z.string().min(10, { message: 'Please describe your goals in at least 10 characters' }),
  idealMentor: z.string().min(10, { message: 'Please describe your ideal mentor in at least 10 characters' })
});

const MentorMatching: React.FC = () => {
  const { toast } = useToast();
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals: '',
      idealMentor: ''
    },
  });

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

  const handleSubmitApplication = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to apply for the mentorship program",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('mentor_applications').insert({
        user_id: user.id,
        specialization: 'Mentee', // Indicates this is a mentee application
        experience: values.goals,
        motivation: values.idealMentor,
        years_experience: 0 // Not applicable for mentees
      });

      if (error) throw error;

      toast({
        title: "Application submitted!",
        description: "Your mentorship application has been received. We'll match you with a mentor soon.",
      });
      
      setIsApplying(false);
      form.reset();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error submitting application",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      
      {isApplying ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitApplication)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your main goals?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what you hope to achieve with a mentor's guidance..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
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
            
            <CardFooter className="flex gap-2 justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsApplying(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      ) : (
        <>
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
              onClick={() => setIsApplying(true)}
              className="w-full"
            >
              Apply Now
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default MentorMatching;
