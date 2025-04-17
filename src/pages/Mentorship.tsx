
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Calendar, Award, Star, MessageCircle } from 'lucide-react';

const Mentorship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Mentorship Programs</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with experienced mentors who can guide you on your personal and professional journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* Available Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Available Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-sisterhood-primary" />
                    One-on-One Mentorship
                  </CardTitle>
                  <CardDescription>Personal guidance tailored to your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Connect with an experienced mentor who will provide personalized guidance based on your specific goals and challenges.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Weekly 1-hour sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Personalized action plans</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Direct messaging support</span>
                    </li>
                  </ul>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-sisterhood-primary" />
                    Group Mentorship
                  </CardTitle>
                  <CardDescription>Learn and grow with peers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Join a small group of women with similar goals and learn together under the guidance of an experienced mentor.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Bi-weekly group sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Peer learning opportunities</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Shared resources and networks</span>
                    </li>
                  </ul>
                  <Button className="w-full">Join a Group</Button>
                </CardContent>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 text-sisterhood-primary" />
                    Entrepreneurship Track
                  </CardTitle>
                  <CardDescription>Build and grow your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Specially designed for women entrepreneurs looking to start or scale their businesses in Africa.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Business plan development</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Market research guidance</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Funding opportunity insights</span>
                    </li>
                  </ul>
                  <Button className="w-full">Explore Program</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured Mentors */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Our Featured Mentors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Business Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Business Development Expert</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    15+ years experience in business development and entrepreneurship consulting across East Africa.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">5.0 (42 reviews)</span>
                  </div>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1974&auto=format&fit=crop" 
                    alt="Health Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Dr. Amina Nkosi</CardTitle>
                  <CardDescription>Healthcare Professional</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Healthcare specialist with focus on women's health issues and preventative care in Tanzania.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">4.9 (38 reviews)</span>
                  </div>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1853&auto=format&fit=crop" 
                    alt="Security Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Maya Osei</CardTitle>
                  <CardDescription>Safety & Security Expert</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Former security consultant specializing in women's safety training and crisis management.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">4.8 (45 reviews)</span>
                  </div>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/mentors">
                <Button>View All Mentors</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Become a Mentor */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sisterhood-primary rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Become a Mentor
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    Share your expertise and help other women in Tanzania and across Africa grow professionally and personally.
                  </p>
                  <div>
                    <Link to="/become-mentor">
                      <Button className="bg-white text-sisterhood-primary hover:bg-white/90">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-cover bg-center min-h-[300px]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1974&auto=format&fit=crop')"}}>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentorship;
