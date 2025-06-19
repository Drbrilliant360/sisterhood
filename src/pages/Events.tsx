
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, MapPin, Clock, Users } from 'lucide-react';
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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

// Define form schema
const formSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  location: z.string().min(2, { message: 'Location is required' }),
  event_date: z.date({ required_error: 'Event date is required' }),
  image_url: z.string().optional(),
});

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      location: '',
      image_url: '',
    },
  });

  // Fetch events from Supabase using raw SQL
  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_events');

      if (error) {
        // Fallback: try direct query without RPC
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('events' as any)
          .select('*')
          .order('event_date', { ascending: true });
        
        if (fallbackError) {
          console.error('Events table might not exist yet:', fallbackError);
          setEvents([]);
          return;
        }
        setEvents(fallbackData || []);
        return;
      }
      
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please login to create an event',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase.from('events' as any).insert({
        title: values.title,
        description: values.description,
        location: values.location,
        event_date: values.event_date.toISOString(),
        image_url: values.image_url || null,
        created_by: user.id,
      });

      if (error) throw error;

      toast({
        title: 'Event created successfully',
        description: 'Your event has been added to the calendar',
      });

      // Reset form and refresh events
      form.reset();
      setShowForm(false);
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
      toast({
        title: 'Error creating event',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-sisterhood-primary">Community Events</h1>
              <p className="text-gray-600 mt-2">Upcoming events and activities for our sisterhood community in Tanzania and across Africa</p>
            </div>
            
            {user && (
              <Button 
                onClick={() => setShowForm(!showForm)} 
                variant={showForm ? "outline" : "default"}
              >
                {showForm ? "Cancel" : "Create Event"}
              </Button>
            )}
          </div>

          {showForm && (
            <Card className="mb-8 border-sisterhood-primary/20">
              <CardHeader>
                <CardTitle>Create New Event</CardTitle>
                <CardDescription>Share an event with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Women Entrepreneurship Workshop" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe what the event is about..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Dar es Salaam, Tanzania" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="event_date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Event Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date(new Date().setHours(0, 0, 0, 0))
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="image_url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URL (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/image.jpg" {...field} />
                          </FormControl>
                          <FormDescription>
                            Provide a URL to an image for the event
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full md:w-auto">Create Event</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <p>Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">No events scheduled</h3>
              <p className="mt-2 text-gray-600">Check back later or create a new event</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  {event.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image_url} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-sm mb-1">
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{format(new Date(event.event_date), 'PPP')}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{event.description}</p>
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="text-gray-600">{format(new Date(event.event_date), 'p')}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
