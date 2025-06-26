
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, ArrowLeft, MessageSquare, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AllMentors = () => {
  const navigate = useNavigate();
  const [mentors, setMentors] = useState<any[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const { user } = useAuth();
  const { toast } = useToast();

  // Mock mentor data for now
  useEffect(() => {
    const mockMentors = [
      {
        id: '1',
        full_name: 'Dr. Maria Addai',
        specialization: 'Healthcare',
        experience: 'Healthcare Professional with 10+ years experience in maternal health and community wellness.',
        years_experience: 10,
        location: 'Accra, Ghana',
        avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1974&auto=format&fit=crop',
        rating: 4.9,
        total_mentees: 15,
        specialties: ['Health', 'Wellness', 'Maternal Care'],
        languages: ['English', 'Twi'],
        availability: 'Available',
      },
      {
        id: '2',
        full_name: 'Blessing Nwosu',
        specialization: 'Business & Entrepreneurship',
        experience: 'Business Consultant and entrepreneur with 7+ years helping women start and grow their businesses.',
        years_experience: 7,
        location: 'Lagos, Nigeria',
        avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop',
        rating: 4.7,
        total_mentees: 23,
        specialties: ['Entrepreneurship', 'Finance', 'Marketing'],
        languages: ['English', 'Igbo'],
        availability: 'Available',
      },
      {
        id: '3',
        full_name: 'Fatima Ouattara',
        specialization: 'Safety & Security',
        experience: 'Safety expert and advocate with 8+ years experience in women\'s safety and self-defense training.',
        years_experience: 8,
        location: 'Ouagadougou, Burkina Faso',
        avatar_url: 'https://images.unsplash.com/photo-1531123414780-f74242c2b1b1?q=80&w=1974&auto=format&fit=crop',
        rating: 4.8,
        total_mentees: 12,
        specialties: ['Safety', 'Self Defense', 'Security'],
        languages: ['French', 'English'],
        availability: 'Busy',
      },
      {
        id: '4',
        full_name: 'Amina Hassan',
        specialization: 'Technology',
        experience: 'Software engineer and tech educator helping women break into the technology industry.',
        years_experience: 6,
        location: 'Nairobi, Kenya',
        avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
        rating: 4.6,
        total_mentees: 18,
        specialties: ['Programming', 'Tech Career', 'Digital Skills'],
        languages: ['English', 'Swahili'],
        availability: 'Available',
      },
      {
        id: '5',
        full_name: 'Sarah Mwangi',
        specialization: 'Agriculture',
        experience: 'Agricultural specialist with expertise in sustainable farming and agribusiness development.',
        years_experience: 12,
        location: 'Kampala, Uganda',
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        rating: 4.5,
        total_mentees: 9,
        specialties: ['Agriculture', 'Sustainability', 'Agribusiness'],
        languages: ['English', 'Swahili'],
        availability: 'Available',
      },
    ];

    setMentors(mockMentors);
    setFilteredMentors(mockMentors);
    setLoading(false);
  }, []);

  // Filter mentors based on search and specialty
  useEffect(() => {
    let filtered = mentors;

    if (searchTerm) {
      filtered = filtered.filter(mentor =>
        mentor.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.specialties.some((specialty: string) => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(mentor =>
        mentor.specialties.some((specialty: string) => 
          specialty.toLowerCase() === selectedSpecialty.toLowerCase()
        )
      );
    }

    setFilteredMentors(filtered);
  }, [searchTerm, selectedSpecialty, mentors]);

  const handleConnect = (mentorId: string, mentorName: string) => {
    if (!user) {
      toast({
        title: 'Please log in',
        description: 'You need to be logged in to connect with mentors.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Connection request sent!',
      description: `Your connection request has been sent to ${mentorName}.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading mentors...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-sisterhood-primary">All Mentors</h1>
            <p className="text-gray-600 mt-2">Connect with experienced mentors in various fields</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search mentors by name or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                  <SelectItem value="safety">Safety</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredMentors.length} of {mentors.length} mentors
            </p>
          </div>

          {/* Mentors Grid */}
          {filteredMentors.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No mentors found</h3>
                <p className="text-gray-600 text-center">
                  Try adjusting your search criteria or browse all mentors.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={mentor.avatar_url} alt={mentor.full_name} />
                        <AvatarFallback>
                          {mentor.full_name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{mentor.full_name}</CardTitle>
                          <Badge 
                            variant={mentor.availability === 'Available' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {mentor.availability}
                          </Badge>
                        </div>
                        <CardDescription className="font-medium text-sisterhood-primary">
                          {mentor.specialization}
                        </CardDescription>
                        <div className="flex items-center mt-1">
                          <div className="flex mr-2">
                            {renderStars(mentor.rating)}
                          </div>
                          <span className="text-sm text-gray-600">
                            {mentor.rating} ({mentor.total_mentees} mentees)
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {mentor.experience}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mentor.location}
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {mentor.years_experience}+ years experience
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.slice(0, 3).map((specialty: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleConnect(mentor.id, mentor.full_name)}
                        disabled={mentor.availability === 'Busy'}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
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

export default AllMentors;
