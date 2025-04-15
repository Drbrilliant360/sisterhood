import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const Register = () => {
  const [userType, setUserType] = useState('normal');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    interests: {
      entrepreneurship: false,
      health: false,
      safety: false,
    },
    termsAccepted: false,
  });
  
  const [mentorData, setMentorData] = useState({
    profession: '',
    experience: '',
    expertise: '',
    availability: '',
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMentorChange = (name: string, value: string) => {
    setMentorData({
      ...mentorData,
      [name]: value,
    });
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [interest]: checked,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords match",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (parseInt(formData.age) < 18) {
      toast({
        title: "Age Restriction",
        description: "You must be 18 or older to register",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    if (!formData.termsAccepted) {
      toast({
        title: "Terms & Conditions",
        description: "You must accept the terms and conditions",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create the user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            user_type: userType,
            age: parseInt(formData.age),
            interests: formData.interests,
            // Add mentor data if the user is a mentor
            ...(userType === 'mentor' ? {
              mentor_profession: mentorData.profession,
              mentor_experience: mentorData.experience,
              mentor_expertise: mentorData.expertise,
              mentor_availability: mentorData.availability,
            } : {})
          }
        }
      });
      
      if (authError) {
        throw authError;
      }
      
      toast({
        title: "Registration Successful",
        description: "Welcome to SisterHood! Please check your email to confirm your account.",
        duration: 5000,
      });
      
      // Navigate to login page
      navigate('/login');
      
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-sisterhood-light">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-sisterhood-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-sisterhood-primary flex items-center justify-center mb-2">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <CardTitle className="text-2xl font-bold text-sisterhood-primary">
                Join SisterHood
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Create your account and start your journey
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label>I want to join as:</Label>
                  <RadioGroup 
                    defaultValue="normal" 
                    value={userType}
                    onValueChange={(value) => setUserType(value)}
                    className="flex space-x-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Normal User</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mentor" id="mentor" />
                      <Label htmlFor="mentor">Mentor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="admin" id="admin" />
                      <Label htmlFor="admin">Admin</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Your age (must be 18+)"
                    min="18"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Areas of Interest</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="entrepreneurship" 
                        checked={formData.interests.entrepreneurship}
                        onCheckedChange={(checked) => 
                          handleInterestChange('entrepreneurship', checked as boolean)
                        }
                        disabled={isLoading}
                      />
                      <Label htmlFor="entrepreneurship">Entrepreneurship</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="health" 
                        checked={formData.interests.health}
                        onCheckedChange={(checked) => 
                          handleInterestChange('health', checked as boolean)
                        }
                        disabled={isLoading}
                      />
                      <Label htmlFor="health">Health</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="safety" 
                        checked={formData.interests.safety}
                        onCheckedChange={(checked) => 
                          handleInterestChange('safety', checked as boolean)
                        }
                        disabled={isLoading}
                      />
                      <Label htmlFor="safety">Safety</Label>
                    </div>
                  </div>
                </div>
                
                {userType === 'mentor' && (
                  <div className="space-y-6 border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-sisterhood-primary">Mentor Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        placeholder="Your current profession"
                        value={mentorData.profession}
                        onChange={(e) => handleMentorChange('profession', e.target.value)}
                        required={userType === 'mentor'}
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select 
                        value={mentorData.experience} 
                        onValueChange={(value) => handleMentorChange('experience', value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="4-6">4-6 years</SelectItem>
                          <SelectItem value="7-10">7-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise</Label>
                      <Select 
                        value={mentorData.expertise} 
                        onValueChange={(value) => handleMentorChange('expertise', value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger id="expertise">
                          <SelectValue placeholder="Select your area of expertise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                          <SelectItem value="health">Healthcare & Wellness</SelectItem>
                          <SelectItem value="safety">Safety & Security</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="arts">Arts & Culture</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Select 
                        value={mentorData.availability} 
                        onValueChange={(value) => handleMentorChange('availability', value)}
                        disabled={isLoading}
                      >
                        <SelectTrigger id="availability">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="evenings">Evenings</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, termsAccepted: checked as boolean})
                    }
                    required
                    disabled={isLoading}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-sisterhood-primary hover:underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-sisterhood-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-sisterhood-primary hover:bg-sisterhood-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-sisterhood-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
