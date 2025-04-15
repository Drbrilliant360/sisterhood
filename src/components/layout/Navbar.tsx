
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Menu, X, User, MessageCircle, BookOpen, Bell, Shield, Bot } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleComingSoon = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature is still under development.",
      duration: 3000,
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-sisterhood-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-sisterhood-primary">SisterHood</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Dashboard
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Community
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Resources
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Safety
            </Link>
            <Link to="/hadija-ai" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              <span className="flex items-center">
                <Bot size={16} className="mr-1" />
                Hadija AI
              </span>
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Register
            </Link>
            <Link to="/login">
              <Button className="ml-4 bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                Login
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-sisterhood-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Dashboard
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Community
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Resources
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Safety
            </Link>
            <Link to="/hadija-ai" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              <span className="flex items-center">
                <Bot size={16} className="mr-1" />
                Hadija AI
              </span>
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Register
            </Link>
            <Link to="/login" className="bg-sisterhood-primary text-white block px-3 py-2 rounded-md font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
