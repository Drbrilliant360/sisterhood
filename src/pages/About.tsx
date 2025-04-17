
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">About SisterHood</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering women through shared experiences, mentorship, and support networks.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-sisterhood-primary mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SisterHood was founded with a simple yet powerful mission: to create a platform where women can connect, 
                  learn, and grow together in a safe and supportive environment. We believe that when women support each other, 
                  incredible things happen.
                </p>
                <p className="text-lg text-gray-600">
                  Our platform focuses on three key areas: entrepreneurship, health, and safety. We provide resources, 
                  mentorship, and community support to help women thrive in these areas and beyond.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                  alt="Women entrepreneurs" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-sisterhood-darkpurple">Community</h3>
                <p className="text-gray-600 text-center">
                  We believe in the power of community and connection. When women come together, they can achieve amazing things.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-sisterhood-darkpurple">Empowerment</h3>
                <p className="text-gray-600 text-center">
                  We empower women with knowledge, skills, and resources to help them achieve their goals and dreams.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-sisterhood-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-sisterhood-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-sisterhood-darkpurple">Inclusivity</h3>
                <p className="text-gray-600 text-center">
                  We welcome women from all backgrounds, cultures, and walks of life. Diversity makes our community stronger.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-sisterhood-darkpurple">Amina Ibrahim</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1528492154487-d8ab804aa99f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Co-Founder" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-sisterhood-darkpurple">Zara Mensah</h3>
                <p className="text-gray-600">Co-Founder & COO</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop" 
                  alt="Lead Developer" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-sisterhood-darkpurple">Fatima Ndao</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-sisterhood-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Become part of a supportive network of women who are changing the world.
            </p>
            <Link to="/register">
              <Button className="bg-white text-sisterhood-primary font-semibold">
                Join SisterHood Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
