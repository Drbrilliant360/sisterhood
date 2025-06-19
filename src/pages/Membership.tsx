
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

// Define form schema
const formSchema = z.object({
  reason: z.string().min(30, { message: 'Please provide a detailed reason for joining (at least 30 characters)' }),
  background: z.string().optional(),
  expectations: z.string().optional(),
});

const Membership = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: '',
      background: '',
      expectations: '',
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please login to apply for membership',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('membership_applications' as any).insert({
        user_id: user.id,
        reason: values.reason,
        background: values.background || null,
        expectations: values.expectations || null,
        full_name: user.user_metadata?.full_name || 'Unknown',
        email: user.email || 'unknown@example.com',
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-sisterhood-primary">Join Our Sisterhood</h1>
              <p className="text-gray-600 mt-2">
                Apply to become a member of our supportive community of women in Tanzania and across Africa
              </p>
            </div>
            
            {!user ? (
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Required</CardTitle>
                  <CardDescription>
                    You need to be logged in to apply for membership
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
                    Thank you for applying to join our community
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
                  <CardTitle>Membership Application</CardTitle>
                  <CardDescription>
                    Tell us about yourself and why you want to join SisterHood
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why do you want to join SisterHood?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us why you're interested in joining our community..." 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Please share your motivation and what you hope to gain from our community
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="background"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Background (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share a bit about your personal or professional background..." 
                                className="min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              This helps us understand your context and how we can better support you
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="expectations"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Expectations (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="What specific support, resources, or connections are you looking for?" 
                                className="min-h-[100px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Let us know what you're hoping to gain from our community
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
            
            {/* Membership Benefits */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-sisterhood-primary mb-6">Membership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mentorship Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Connect with experienced mentors who can guide you through personal and professional challenges specific to women in Africa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Exclusive Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Access our library of resources including educational materials, templates, guides, and more tailored to the African context.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Join a supportive network of women who understand the unique challenges faced by women in Tanzania and across Africa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Safety Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Get access to safety information, emergency contacts, and support systems specific to your location in Africa.
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

export default Membership;
