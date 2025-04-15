
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  AlertTriangle, 
  Bell, 
  CheckCircle, 
  Clock, 
  Shield, 
  Users, 
  MapPin, 
  Flag, 
  Phone, 
  AlarmClock,
  Smartphone,
  Lock,
  MessageSquare,
  Info
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Safety = () => {
  const { toast } = useToast();
  const [emergencyMode, setEmergencyMode] = useState(false);
  
  const handleEmergencyButton = () => {
    setEmergencyMode(true);
    
    // In a real app, this would trigger emergency protocols
    toast({
      title: "EMERGENCY MODE ACTIVATED",
      description: "Your trusted contacts would be notified in a real scenario.",
      variant: "destructive",
      duration: 5000,
    });
    
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setEmergencyMode(false);
    }, 3000);
  };
  
  const handleSafetyAction = (action: string) => {
    toast({
      title: "Feature Coming Soon",
      description: `The ${action} feature is currently under development.`,
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Safety Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-sisterhood-accent mb-4">
              Safety Features
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your safety is our priority. Use these tools to stay protected and maintain peace of mind.
            </p>
          </div>
          
          {/* Emergency Button */}
          <div className={`p-6 rounded-lg mb-8 text-white ${emergencyMode ? 'bg-red-600 animate-pulse' : 'bg-sisterhood-accent'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center">
                  <AlertTriangle className="mr-2" size={24} />
                  Emergency Assistance
                </h2>
                <p className="md:max-w-lg">
                  {emergencyMode
                    ? "EMERGENCY MODE ACTIVE. Your trusted contacts are being notified with your location."
                    : "Press the emergency button to immediately alert your trusted contacts with your current location."}
                </p>
              </div>
              <Button
                onClick={handleEmergencyButton}
                className={`h-16 px-8 text-lg font-bold ${
                  emergencyMode 
                    ? 'bg-white text-red-600 hover:bg-gray-100' 
                    : 'bg-white text-sisterhood-accent hover:bg-gray-100'
                }`}
              >
                {emergencyMode ? "EMERGENCY ACTIVE" : "EMERGENCY"}
              </Button>
            </div>
          </div>
          
          {/* Safety Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Safety Check-In */}
            <Card className="border-sisterhood-accent/20">
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-sisterhood-orange/20 mr-3">
                    <AlarmClock size={20} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <CardTitle>Safety Check-In</CardTitle>
                    <CardDescription>Scheduled alerts for peace of mind</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Daily check-in</p>
                        <p className="text-sm text-gray-500">9:00 PM</p>
                      </div>
                    </div>
                    <Switch id="daily-check" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Travel check-in</p>
                        <p className="text-sm text-gray-500">Every 2 hours</p>
                      </div>
                    </div>
                    <Switch id="travel-check" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Bell size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Missed check-in alert</p>
                        <p className="text-sm text-gray-500">Alert trusted contacts</p>
                      </div>
                    </div>
                    <Switch id="missed-check" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-sisterhood-accent/30 text-sisterhood-accent"
                  onClick={() => handleSafetyAction('Safety Check-In')}
                >
                  Configure Check-Ins
                </Button>
              </CardFooter>
            </Card>
            
            {/* Trusted Contacts */}
            <Card className="border-sisterhood-accent/20">
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-sisterhood-orange/20 mr-3">
                    <Users size={20} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <CardTitle>Trusted Contacts</CardTitle>
                    <CardDescription>Your pre-set emergency network</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Amara Okafor",
                      relation: "Sister",
                      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
                    },
                    {
                      name: "Blessing Nwosu",
                      relation: "Friend",
                      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1974&auto=format&fit=crop"
                    },
                    {
                      name: "Zara Mensah",
                      relation: "Roommate",
                      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.relation}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Phone size={16} className="text-sisterhood-accent" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-sisterhood-accent/30 text-sisterhood-accent"
                  onClick={() => handleSafetyAction('Trusted Contacts')}
                >
                  Manage Contacts
                </Button>
              </CardFooter>
            </Card>
            
            {/* Location Sharing */}
            <Card className="border-sisterhood-accent/20">
              <CardHeader>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-sisterhood-orange/20 mr-3">
                    <MapPin size={20} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <CardTitle>Location Sharing</CardTitle>
                    <CardDescription>Optional for meetups and emergencies</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Emergency location</p>
                        <p className="text-sm text-gray-500">Share in emergency only</p>
                      </div>
                    </div>
                    <Switch id="emergency-location" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Trusted contacts</p>
                        <p className="text-sm text-gray-500">Share with trusted contacts</p>
                      </div>
                    </div>
                    <Switch id="trusted-location" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-gray-500 mr-2" />
                      <div>
                        <p className="font-medium">Safe arrival notification</p>
                        <p className="text-sm text-gray-500">Auto-notify upon arrival</p>
                      </div>
                    </div>
                    <Switch id="arrival-notify" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-sisterhood-accent/30 text-sisterhood-accent"
                  onClick={() => handleSafetyAction('Location Sharing')}
                >
                  Configure Sharing
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Safety Tools */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-sisterhood-accent mb-6">Safety Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Incident Reporting",
                  description: "Report safety concerns anonymously",
                  icon: <Flag size={24} className="text-sisterhood-accent" />,
                  bgColor: "bg-sisterhood-orange/10"
                },
                {
                  title: "Emergency Contacts",
                  description: "Quick access to important numbers",
                  icon: <Phone size={24} className="text-sisterhood-accent" />,
                  bgColor: "bg-sisterhood-orange/10"
                },
                {
                  title: "Safety Resources",
                  description: "Self-defense and safety guides",
                  icon: <Shield size={24} className="text-sisterhood-accent" />,
                  bgColor: "bg-sisterhood-orange/10"
                },
                {
                  title: "Safety Notifications",
                  description: "Stay updated on local safety alerts",
                  icon: <Bell size={24} className="text-sisterhood-accent" />,
                  bgColor: "bg-sisterhood-orange/10"
                }
              ].map((tool, index) => (
                <Card 
                  key={index} 
                  className={`${tool.bgColor} border-none hover:shadow-md transition-all cursor-pointer`}
                  onClick={() => handleSafetyAction(tool.title)}
                >
                  <CardContent className="flex items-center p-6">
                    <div className="p-3 bg-white rounded-full mr-4 shadow-sm">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sisterhood-accent">{tool.title}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Safety Tips */}
          <div>
            <h2 className="text-2xl font-semibold text-sisterhood-accent mb-6">Safety Tips</h2>
            <div className="bg-sisterhood-orange/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-sisterhood-accent mb-4">Staying Safe While Out</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="p-2 bg-white rounded-full mt-1 mr-3">
                    <Smartphone size={16} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Keep your phone charged</p>
                    <p className="text-sm text-gray-600">Always have at least 50% battery when going out alone.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-white rounded-full mt-1 mr-3">
                    <Users size={16} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Share your plans</p>
                    <p className="text-sm text-gray-600">Let someone know where you're going and when you'll be back.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-white rounded-full mt-1 mr-3">
                    <MapPin size={16} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Meet in public places</p>
                    <p className="text-sm text-gray-600">Choose well-lit, populated areas for first-time meetups.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-white rounded-full mt-1 mr-3">
                    <Lock size={16} className="text-sisterhood-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Trust your instincts</p>
                    <p className="text-sm text-gray-600">If something feels wrong, remove yourself from the situation.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <Info size={18} className="text-sisterhood-accent mr-2" />
                <p className="text-sm text-gray-600">
                  Find more detailed safety guidelines in our{" "}
                  <a href="/resources" className="text-sisterhood-accent font-medium hover:underline">
                    Safety Resources
                  </a>
                  {" "}section.
                </p>
              </div>
            </div>
          </div>
          
          {/* Community Safety Section */}
          <div className="mt-10 bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <h2 className="text-2xl font-bold text-sisterhood-accent mb-3">Community Safety</h2>
                <p className="text-gray-600 mb-4">
                  Our community is committed to creating safe spaces for all women. Join our safety forums to discuss concerns,
                  share experiences, and support each other.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-sisterhood-accent/30 text-sisterhood-accent" onClick={() => handleSafetyAction('Safety Forums')}>
                    <MessageSquare size={16} className="mr-2" />
                    Safety Forums
                  </Button>
                  <Button variant="outline" className="border-sisterhood-accent/30 text-sisterhood-accent" onClick={() => handleSafetyAction('Report Concern')}>
                    <Flag size={16} className="mr-2" />
                    Report a Concern
                  </Button>
                  <Button className="bg-sisterhood-accent hover:bg-sisterhood-accent/90" onClick={() => handleSafetyAction('Safety Workshop')}>
                    <Shield size={16} className="mr-2" />
                    Join Safety Workshop
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=1974&auto=format&fit=crop" 
                  alt="Community Safety" 
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Safety;
