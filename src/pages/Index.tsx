
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Heart, 
  BookOpen, 
  Shield, 
  Briefcase, 
  Activity, 
  MessageSquare, 
  Calendar
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="hero-title">
            Empowering Women Through Community and Mentorship
          </h1>
          <p className="hero-subtitle">
            Connect with mentors, access resources, and join a supportive community 
            focused on entrepreneurship, health, and safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <button className="primary-button">
                Join the Sisterhood
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white text-sisterhood-primary px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-sisterhood-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">How SisterHood Empowers You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="feature-card" style={{"--bg-start": "#F2FCE2", "--bg-end": "#E5DEFF"} as React.CSSProperties}>
              <div className="p-3 bg-sisterhood-primary text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-sisterhood-darkpurple">Mentorship</h3>
              <p className="text-gray-600">
                Connect with experienced mentors who can guide you on your personal and professional journey.
              </p>
            </div>
            
            <div className="feature-card" style={{"--bg-start": "#FFDEE2", "--bg-end": "#FDE1D3"} as React.CSSProperties}>
              <div className="p-3 bg-sisterhood-secondary text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-sisterhood-darkpurple">Entrepreneurship</h3>
              <p className="text-gray-600">
                Access resources, tools, and guidance to help you start and grow your business.
              </p>
            </div>
            
            <div className="feature-card" style={{"--bg-start": "#D3E4FD", "--bg-end": "#E5DEFF"} as React.CSSProperties}>
              <div className="p-3 bg-sisterhood-accent text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-sisterhood-darkpurple">Health</h3>
              <p className="text-gray-600">
                Find resources on mental, physical, and reproductive health to support your wellbeing.
              </p>
            </div>
            
            <div className="feature-card" style={{"--bg-start": "#FEF7CD", "--bg-end": "#FEC6A1"} as React.CSSProperties}>
              <div className="p-3 bg-sisterhood-primary text-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-sisterhood-darkpurple">Safety</h3>
              <p className="text-gray-600">
                Access safety tools, emergency contacts, and resources to keep you and your loved ones secure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sisterhood-primary mb-6">
                Join Our Vibrant Community
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Connect with like-minded women from diverse backgrounds, share experiences, 
                and build lasting relationships in a safe and supportive environment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-sisterhood-purple p-1 rounded-full mr-3 mt-1">
                    <MessageSquare size={18} className="text-sisterhood-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Discussion Forums</h3>
                    <p className="text-gray-600">Participate in topic-based conversations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sisterhood-purple p-1 rounded-full mr-3 mt-1">
                    <Users size={18} className="text-sisterhood-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interest Groups</h3>
                    <p className="text-gray-600">Join groups that match your interests</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-sisterhood-purple p-1 rounded-full mr-3 mt-1">
                    <Calendar size={18} className="text-sisterhood-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Events & Meetups</h3>
                    <p className="text-gray-600">Attend virtual and local gatherings</p>
                  </div>
                </li>
              </ul>
              <Link to="/community">
                <Button className="bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                  Explore Community
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?q=80&w=1974&auto=format&fit=crop" 
                alt="Women in community" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 p-2 bg-white rounded-lg shadow-lg w-40 animate-float hidden md:block">
                <div className="flex items-center p-2">
                  <Heart className="text-red-500 mr-2" size={16} />
                  <span className="text-sm font-medium">250+ Mentors</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 p-2 bg-white rounded-lg shadow-lg w-48 animate-float hidden md:block" style={{animationDelay: "2s"}}>
                <div className="flex items-center p-2">
                  <Users className="text-sisterhood-primary mr-2" size={16} />
                  <span className="text-sm font-medium">10k+ Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Library Preview */}
      <section className="py-20 african-pattern-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Resource Library
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Access a wealth of knowledge and tools designed specifically for women's empowerment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-sisterhood-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-sisterhood-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Entrepreneurship</h3>
              <p className="text-gray-600 mb-4">
                Business planning tools, funding opportunities, and legal resources.
              </p>
              <Link to="/resources" className="text-sisterhood-primary font-medium hover:underline">
                Explore Resources →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-sisterhood-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="text-sisterhood-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Health</h3>
              <p className="text-gray-600 mb-4">
                Mental health resources, reproductive health information, and wellness tips.
              </p>
              <Link to="/resources" className="text-sisterhood-primary font-medium hover:underline">
                Explore Resources →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-sisterhood-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-sisterhood-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Safety</h3>
              <p className="text-gray-600 mb-4">
                Self-defense resources, emergency contacts, and safety planning tools.
              </p>
              <Link to="/resources" className="text-sisterhood-primary font-medium hover:underline">
                Explore Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-sisterhood-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Amara Okafor</h4>
                  <p className="text-sm text-gray-500">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SisterHood connected me with a mentor who helped me secure funding for my business. 
                The resources and community support have been invaluable to my journey."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Fatima Ndao</h4>
                  <p className="text-sm text-gray-500">Healthcare Worker</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The health resources provided by SisterHood have helped me take better care of myself 
                and educate others in my community about important health issues."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Zara Mensah</h4>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The safety features have made me feel more secure, and the community forums 
                have connected me with wonderful women who inspire me daily."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-sisterhood-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Sisterhood?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Become part of a community that empowers, supports, and uplifts women through every stage of life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <button className="bg-white text-sisterhood-primary px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Join Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
