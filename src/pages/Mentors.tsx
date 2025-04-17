
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, BookOpen, Award, Clock } from 'lucide-react';

const Mentors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Our Mentors</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the accomplished women who are dedicated to helping you succeed.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Mentors */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Featured Mentors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Business Mentor" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-gray-500 text-sm ml-2">5.0 (42 reviews)</span>
                  </div>
                  <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">Sarah Johnson</h3>
                  <p className="text-sisterhood-primary font-medium mb-4">Business Development</p>
                  <p className="text-gray-600 mb-4">
                    Experienced entrepreneur with over 15 years in business development and startup consulting.
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <BookOpen size={16} className="mr-1" />
                      <span className="text-sm">42 Sessions</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Award size={16} className="mr-1" />
                      <span className="text-sm">Top Rated</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1974&auto=format&fit=crop" 
                  alt="Health Mentor" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-gray-500 text-sm ml-2">4.9 (38 reviews)</span>
                  </div>
                  <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">Dr. Amina Nkosi</h3>
                  <p className="text-sisterhood-primary font-medium mb-4">Health & Wellness</p>
                  <p className="text-gray-600 mb-4">
                    Medical doctor specializing in women's health with a passion for preventative healthcare.
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <BookOpen size={16} className="mr-1" />
                      <span className="text-sm">38 Sessions</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">Fast Response</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1853&auto=format&fit=crop" 
                  alt="Security Mentor" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-gray-500 text-sm ml-2">4.8 (45 reviews)</span>
                  </div>
                  <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">Maya Osei</h3>
                  <p className="text-sisterhood-primary font-medium mb-4">Personal Safety</p>
                  <p className="text-gray-600 mb-4">
                    Former security consultant with expertise in personal safety training and crisis management.
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                      <BookOpen size={16} className="mr-1" />
                      <span className="text-sm">45 Sessions</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Award size={16} className="mr-1" />
                      <span className="text-sm">Top Rated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/mentorship">
                <Button className="bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                  Find Your Mentor
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">How Mentorship Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-sisterhood-darkpurple">Browse Mentors</h3>
                <p className="text-gray-600">
                  Explore our diverse community of mentors and find the perfect match based on your interests and goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-sisterhood-darkpurple">Connect</h3>
                <p className="text-gray-600">
                  Schedule a session with your chosen mentor through our secure platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-sisterhood-darkpurple">Grow</h3>
                <p className="text-gray-600">
                  Learn from your mentor's experience and apply their guidance to achieve your goals.
                </p>
              </div>
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
                    Share your expertise and help other women grow professionally and personally.
                  </p>
                  <div>
                    <Link to="/become-mentor">
                      <Button className="bg-white text-sisterhood-primary hover:bg-white/90">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-mentor-image bg-cover bg-center min-h-[300px]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1974&auto=format&fit=crop')"}}>
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

export default Mentors;
