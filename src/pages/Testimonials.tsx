import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Star, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define form schema
const formSchema = z.object({
  content: z.string().min(10, { message: 'Your testimonial must be at least 10 characters' }),
  rating: z.number().min(1).max(5),
});

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userProfiles, setUserProfiles] = useState<{[key: string]: any}>({});
  const [rating, setRating] = useState(5);
  const { user } = useAuth();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
      rating: 5,
    },
  });

  // Fetch testimonials and user profiles
  const fetchTestimonials = async () => {
    try {
      // Get approved testimonials using type assertion
      const { data, error } = await (supabase as any)
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);

      // Get user profiles for the testimonials
      if (data && data.length > 0) {
        const userIds = [...new Set(data.map((t: any) => t.user_id as string))];
        const { data: profiles, error: profilesError } = await supabase
          .from('profiles')
          .select('id, full_name, avatar_url')
          .in('id', userIds);

        if (profilesError) throw profilesError;

        const profilesMap = (profiles || []).reduce((acc: any, profile: any) => {
          acc[profile.id] = profile;
          return acc;
        }, {});

        setUserProfiles(profilesMap);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      toast({
        title: 'Error fetching testimonials',
        description: 'Please try again later',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please login to submit a testimonial',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Use type assertion to bypass TypeScript table recognition issue
      const { error } = await (supabase as any).from('testimonials').insert({
        user_id: user.id,
        content: values.content,
        rating: values.rating,
      });

      if (error) throw error;

      toast({
        title: 'Testimonial submitted successfully',
        description: 'Your testimonial will be published after review. Thank you for your feedback!',
      });

      // Reset form
      form.reset();
      setRating(5);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: 'Error submitting testimonial',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const StarRating = ({ value, onChange }: { value: number, onChange?: (value: number) => void }) => {
    const stars = Array(5).fill(0);
    
    return (
      <div className="flex">
        {stars.map((_, index) => {
          const ratingValue = index + 1;
          return (
            <Star
              key={index}
              className={`h-6 w-6 ${
                ratingValue <= value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              } ${onChange ? 'cursor-pointer' : ''} mr-1`}
              onClick={() => onChange && onChange(ratingValue)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-sisterhood-primary">Community Testimonials</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Read what other members of our Tanzanian and African community have to say about their experiences with SisterHood
            </p>
          </div>

          {/* Submit testimonial form */}
          {user && (
            <Card className="mb-12 border-sisterhood-primary/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
                <CardDescription>Tell us how SisterHood has helped you</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Testimonial</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your experience with our community..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Rating</FormLabel>
                          <FormControl>
                            <div>
                              <StarRating 
                                value={rating} 
                                onChange={(value) => {
                                  setRating(value);
                                  field.onChange(value);
                                }} 
                              />
                              <input type="hidden" {...field} value={rating} />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Rate your overall experience with SisterHood
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Submit Testimonial</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {/* Testimonials grid */}
          {loading ? (
            <div className="flex justify-center py-12">
              <p>Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-gray-50 max-w-2xl mx-auto">
              <h3 className="text-lg font-medium text-gray-900">No testimonials yet</h3>
              <p className="mt-2 text-gray-600">Be the first to share your experience</p>
              {!user && (
                <Button variant="outline" className="mt-4" asChild>
                  <a href="/login">Login to Submit</a>
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => {
                const profile = userProfiles[testimonial.user_id] || {};
                return (
                  <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage 
                            src={profile.avatar_url || ''} 
                            alt={profile.full_name || 'User'} 
                          />
                          <AvatarFallback>
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{profile.full_name || 'Community Member'}</CardTitle>
                          <StarRating value={testimonial.rating} />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 italic">"{testimonial.content}"</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
          
          {testimonials.length > 0 && !user && (
            <div className="text-center mt-10">
              <p className="mb-4 text-gray-600">Want to share your own experience?</p>
              <Button asChild>
                <a href="/login">Join SisterHood</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
