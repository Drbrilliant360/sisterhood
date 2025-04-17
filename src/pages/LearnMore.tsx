
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  Shield, 
  Briefcase, 
  Activity, 
  MessageSquare,
  ArrowRight,
  Heart 
} from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Learn More About SisterHood</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our platform empowers women through community, resources, and mentorship.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Platform Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-sisterhood-primary mb-6">Our Platform</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SisterHood is a comprehensive platform designed specifically for women, focusing on three key pillars: 
                  entrepreneurship, health, and safety. We provide resources, community support, and mentorship to help 
                  women thrive in all aspects of their lives.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our user-friendly interface makes it easy to connect with mentors, access resources, join community 
                  discussions, and utilize safety tools - all in one place.
                </p>
                <div className="flex space-x-4">
                  <Link to="/register">
                    <Button className="bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                      Join Now
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="outline" className="border-sisterhood-primary text-sisterhood-primary hover:bg-sisterhood-primary/10">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1969&auto=format&fit=crop" 
                  alt="SisterHood Platform" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-primary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Mentorship</h3>
                <p className="text-gray-600 mb-6">
                  Connect with experienced mentors who can guide you through personal and professional challenges, 
                  share their expertise, and help you achieve your goals.
                </p>
                <Link to="/mentors" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Explore Mentors <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-secondary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Community</h3>
                <p className="text-gray-600 mb-6">
                  Join a vibrant community of women who share experiences, offer support, and create meaningful 
                  connections through forums, interest groups, and events.
                </p>
                <Link to="/community" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Join Community <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-accent text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Resources</h3>
                <p className="text-gray-600 mb-6">
                  Access a comprehensive library of resources covering entrepreneurship, health, and safety, 
                  including articles, guides, tools, and templates.
                </p>
                <Link to="/resources" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Explore Resources <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-primary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Entrepreneurship</h3>
                <p className="text-gray-600 mb-6">
                  Gain access to business planning tools, funding opportunities, marketing resources, and networking 
                  events to help you start and grow your business.
                </p>
                <Link to="/entrepreneurship" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-secondary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Health</h3>
                <p className="text-gray-600 mb-6">
                  Find resources on mental, physical, and reproductive health, including wellness tips, healthcare 
                  provider directories, and self-care practices.
                </p>
                <Link to="/health-resources" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-3 bg-sisterhood-accent text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-sisterhood-darkpurple">Safety</h3>
                <p className="text-gray-600 mb-6">
                  Access safety tools, emergency contacts, self-defense resources, and safety planning guides to 
                  help you stay safe in various situations.
                </p>
                <Link to="/safety" className="flex items-center text-sisterhood-primary font-medium hover:underline">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Digital Skills Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sisterhood-primary rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Digital Skills Training
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    Enhance your digital literacy and technical skills through our comprehensive Digital Skills platform. 
                    Learn coding, digital marketing, graphic design, and more.
                  </p>
                  <div>
                    <a 
                      href="https://ujuzi-digital-nexus.lovable.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="bg-white text-sisterhood-primary hover:bg-white/90">
                        Explore Digital Skills
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="bg-digital-skills bg-cover bg-center min-h-[300px]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1974&auto=format&fit=crop')"}}>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">What Our Members Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  "The mentorship program at SisterHood has been transformative for my business. My mentor helped me 
                  secure funding and navigate the challenges of scaling my company. I'm forever grateful for this platform."
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
                  "As a healthcare worker, I've found the health resources incredibly valuable for both myself and my patients. 
                  SisterHood has created a safe space to discuss women's health issues that are often overlooked."
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
                  "The safety features have made me feel more secure when I'm out alone. I love being able to connect with 
                  other women who share similar experiences and concerns. This community has become my second family."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">How do I get started with SisterHood?</h3>
                <p className="text-gray-600">
                  Simply create an account, complete your profile, and start exploring the platform. 
                  You can browse resources, connect with mentors, and join community discussions right away.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">Is SisterHood available in my country?</h3>
                <p className="text-gray-600">
                  SisterHood is currently available in most African countries, with plans to expand globally. 
                  Check our regional availability page for specific information about your country.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">How do I connect with a mentor?</h3>
                <p className="text-gray-600">
                  Browse our mentor directory, filter by expertise or industry, and send a connection request to 
                  your chosen mentor. Once accepted, you can schedule sessions through our platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">Is SisterHood free to use?</h3>
                <p className="text-gray-600">
                  SisterHood offers a free basic membership with access to community forums and essential resources. 
                  Premium membership, available for a monthly fee, provides additional features like unlimited mentor sessions, 
                  exclusive workshops, and priority support.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-sisterhood-darkpurple mb-2">How can I contribute to the SisterHood community?</h3>
                <p className="text-gray-600">
                  You can contribute by sharing your experiences in community forums, applying to become a mentor, 
                  participating in events, or submitting resources to our library. Every contribution helps strengthen our community.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-sisterhood-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Take the first step toward empowerment, connection, and growth with SisterHood.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <button className="bg-white text-sisterhood-primary px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Join Now
                </button>
              </Link>
              <Link to="/about">
                <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
