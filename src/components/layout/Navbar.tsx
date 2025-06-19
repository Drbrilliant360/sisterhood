
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Menu, X, User, MessageCircle, BookOpen, Bell, Shield, Bot } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was a problem signing out. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
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
                Lavina AI
              </span>
            </Link>
            
            <Link to="/digital-skills" className="text-gray-700 hover:text-sisterhood-primary px-3 py-2 font-medium">
              Digital Skills
            </Link>

            {user ? (
              <Button onClick={handleSignOut} variant="outline" className="ml-4 border-sisterhood-primary text-sisterhood-primary hover:bg-sisterhood-primary/10">
                Sign Out
              </Button>
            ) : (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sisterhood-primary">Account</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[350px] bg-white p-4 shadow-lg rounded-md">
                      <Tabs defaultValue="login">
                        <TabsList className="w-full mb-4 bg-gray-100">
                          <TabsTrigger value="login" className="flex-1">Login</TabsTrigger>
                          <TabsTrigger value="register" className="flex-1">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                          <NavigationMenuLink asChild>
                            <Link to="/login" className="w-full block">
                              <Button className="w-full bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                                Go to Login
                              </Button>
                            </Link>
                          </NavigationMenuLink>
                        </TabsContent>
                        <TabsContent value="register">
                          <NavigationMenuLink asChild>
                            <Link to="/register" className="w-full block">
                              <Button className="w-full bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                                Go to Register
                              </Button>
                            </Link>
                          </NavigationMenuLink>
                        </TabsContent>
                      </Tabs>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>
          
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
                Lavina AI
              </span>
            </Link>
            
            <Link to="/digital-skills" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
              Digital Skills
            </Link>
            
            {user ? (
              <button 
                onClick={handleSignOut}
                className="w-full text-left bg-red-50 text-red-600 block px-3 py-2 rounded-md font-medium"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-sisterhood-primary block px-3 py-2 font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-sisterhood-primary text-white block px-3 py-2 rounded-md font-medium">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
