
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sisterhood-darkpurple text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-sisterhood-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">SisterHood</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering women through shared experiences, mentorship, and support networks focused on entrepreneurship, health, and safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sisterhood-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sisterhood-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sisterhood-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sisterhood-primary transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sisterhood-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Our Mentors
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sisterhood-primary">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Mentorship Programs
                </Link>
              </li>
              <li>
                <Link to="/entrepreneurship" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Entrepreneurship Support
                </Link>
              </li>
              <li>
                <Link to="/health-resources" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Health Resources
                </Link>
              </li>
              <li>
                <Link to="/safety-tools" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Safety Tools & Training
                </Link>
              </li>
              <li>
                <Link to="/community-forums" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Community Forums
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sisterhood-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-sisterhood-primary" size={18} />
                <span className="text-gray-300">
                  123 Women Empowerment Street, Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-sisterhood-primary" size={18} />
                <span className="text-gray-300">+255 716 183 812</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-sisterhood-primary" size={18} />
                <span className="text-gray-300">bryankachocho17@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} SisterHood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

