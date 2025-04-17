
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define form schema
const formSchema = z.object({
  specialization: z.string().min(2, { message: 'Specialization is required' }),
  experience: z.string().min(30, { message: 'Please provide details about your experience (at least 30 characters)' }),
  years_experience: z.coerce.number().min(1, { message: 'Years of experience is required' }).max(50),
  motivation: z.string().min(30, { message: 'Please share your motivation for becoming a mentor (at least 30 characters)' }),
});

const BecomeMentor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialization: '',
      experience: '',
      years_experience: undefined,
      motivation: '',
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please login to apply as a mentor',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('mentor_applications').insert({
        user_id: user.id,
        specialization: values.specialization,
        experience: values.experience,
        years_experience: values.years_experience,
        motivation: values.motivation,
      });

      if (error) throw error;

      toast({
        title: 'Application submitted successfully',
        description: 'We\'ll review your application and get back to you soon.',
      });

      // Show success state
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Error submitting application',
        description: 'Please try again',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const specializations = [
    "Healthcare",
    "Mental Health",
    "Business & Entrepreneurship",
    "Education",
    "Technology",
    "Safety & Self-Defense",
    "Financial Literacy",
    "Leadership",
    "Legal Rights",
    "Career Development",
    "Agriculture",
    "Arts & Creative Industries",
    "Environmental Sustainability",
    "Other"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-sisterhood-primary">Become a Mentor</h1>
              <p className="text-gray-600 mt-2">
                Share your knowledge and experience to empower other women in Tanzania and across Africa
              </p>
            </div>
            
            {!user ? (
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Required</CardTitle>
                  <CardDescription>
                    You need to be logged in to apply as a mentor
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild>
                    <a href="/login">Login or Sign Up</a>
                  </Button>
                </CardFooter>
              </Card>
            ) : submitted ? (
              <Card className="border-sisterhood-primary/20">
                <CardHeader>
                  <CardTitle className="text-sisterhood-primary">Application Submitted!</CardTitle>
                  <CardDescription>
                    Thank you for applying to become a mentor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-sisterhood-light p-4 rounded-lg text-center my-4">
                    <p className="text-gray-700">
                      We've received your application and will review it shortly. You'll be notified once your application has been processed.
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    While you wait, feel free to explore our resources and public content. If you don't hear back within 5 business days, please contact us at <a href="mailto:bryankachocho17@gmail.com" className="text-sisterhood-primary hover:underline">bryankachocho17@gmail.com</a> or call <a href="tel:+255716183812" className="text-sisterhood-primary hover:underline">+255 716 183 812</a>.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" asChild>
                    <a href="/dashboard">Go to Dashboard</a>
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Mentor Application</CardTitle>
                  <CardDescription>
                    Tell us about your expertise and why you want to mentor others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Area of Expertise</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your primary area of expertise" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {specializations.map((spec) => (
                                  <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              Choose the primary area where you can offer mentorship
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="years_experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years of Experience</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min="1" 
                                max="50" 
                                placeholder="e.g., 5" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              How many years of experience do you have in this field?
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional Experience</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your professional background and relevant experience..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Share details about your background, achievements, and expertise
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why do you want to be a mentor?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share why you want to mentor other women in our community..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Explain your motivation for becoming a mentor and how you hope to impact others
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
            
            {/* What Makes a Good Mentor */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-sisterhood-primary mb-6">What Makes a Good Mentor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Experience & Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Demonstrated knowledge and practical experience in your field, particularly as it relates to the African context.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Empathy & Patience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Ability to understand challenges faced by women in Tanzania and across Africa, and patience to guide them through their journey.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Communication Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Strong ability to explain concepts clearly and provide constructive feedback in a supportive manner.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Commitment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Willingness to dedicate time regularly to support mentees and foster their growth over time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BecomeMentor;
