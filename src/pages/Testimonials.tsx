
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Star } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define form schema
const formSchema = z.object({
  rating: z.number().min(1).max(5),
  testimonial: z.string().min(10, { message: 'Testimonial must be at least 10 characters' }),
});

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 5,
      testimonial: '',
    },
  });

  // Fetch testimonials and profiles from Supabase
  const fetchTestimonials = async () => {
    try {
      // Use type assertion to bypass TypeScript table recognition issue
      const { data: testimonialsData, error: testimonialsError } = await (supabase as any)
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (testimonialsError) {
        console.error('Error fetching testimonials:', testimonialsError);
        setTestimonials([]);
        return;
      }
      
      setTestimonials(testimonialsData || []);
      
      // Fetch profiles for testimonial authors
      if (testimonialsData && testimonialsData.length > 0) {
        const userIds = testimonialsData.map((t: any) => t.user_id).filter((id: any): id is string => typeof id === 'string');
        
        if (userIds.length > 0) {
          const { data: profilesData, error: profilesError } = await supabase
            .from('profiles')
            .select('*')
            .in('id', userIds);
          
          if (!profilesError) {
            setProfiles(profilesData || []);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials([]);
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
        rating: values.rating,
        testimonial: values.testimonial,
      });

      if (error) throw error;

      toast({
        title: 'Testimonial submitted successfully',
        description: 'Thank you for sharing your experience!',
      });

      // Reset form and refresh testimonials
      form.reset();
      setShowForm(false);
      fetchTestimonials();
    } catch (error) {
      console.error('Error creating testimonial:', error);
      toast({
        title: 'Error submitting testimonial',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  // Get profile for a user
  const getProfile = (userId: string) => {
    return profiles.find(p => p.id === userId);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-sisterhood-primary">Community Testimonials</h1>
              <p className="text-gray-600 mt-2">Hear from our amazing community members about their experiences</p>
            </div>
            
            {user && (
              <Button 
                onClick={() => setShowForm(!showForm)} 
                variant={showForm ? "outline" : "default"}
              >
                {showForm ? "Cancel" : "Share Your Story"}
              </Button>
            )}
          </div>

          {showForm && (
            <Card className="mb-8 border-sisterhood-primary/20">
              <CardHeader>
                <CardTitle>Share Your Testimonial</CardTitle>
                <CardDescription>Tell us about your experience with SisterHood</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-1">
                              {Array.from({ length: 5 }, (_, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => field.onChange(i + 1)}
                                  className="focus:outline-none"
                                >
                                  <Star
                                    className={`h-6 w-6 ${i < field.value ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                </button>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="testimonial"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Testimonial</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your experience with SisterHood..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Tell us how SisterHood has impacted your life
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full md:w-auto">Submit Testimonial</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <p>Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">No testimonials yet</h3>
              <p className="mt-2 text-gray-600">Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => {
                const profile = getProfile(testimonial.user_id);
                return (
                  <Card key={testimonial.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={profile?.avatar_url} alt={profile?.full_name} />
                          <AvatarFallback>
                            {profile?.full_name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{profile?.full_name || 'Anonymous'}</h3>
                          <div className="flex items-center space-x-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{testimonial.testimonial}</p>
                      <p className="text-sm text-gray-400 mt-4">
                        {new Date(testimonial.created_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
