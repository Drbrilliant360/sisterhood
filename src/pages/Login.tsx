
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would connect this to your backend authentication
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Welcome back to SisterHood!",
        duration: 3000,
      });
      
      // You would normally navigate to dashboard here
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter valid credentials",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sisterhood-light">
        <div className="w-full max-w-md">
          <Card className="shadow-xl border-sisterhood-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto h-14 w-14 rounded-full bg-sisterhood-primary flex items-center justify-center mb-2">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <CardTitle className="text-2xl font-bold text-sisterhood-primary">
                Welcome Back!
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Sign in to continue to SisterHood
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-sisterhood-primary/30 focus:border-sisterhood-primary focus:ring-sisterhood-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-sisterhood-primary hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-sisterhood-primary/30 focus:border-sisterhood-primary focus:ring-sisterhood-primary"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember-me" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember-me" className="text-sm">Remember me</Label>
                </div>
                
                <Button type="submit" className="w-full bg-sisterhood-primary hover:bg-sisterhood-primary/90">
                  Sign In
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                      <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                      <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" />
                      <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                      <path fill="#FBBC05" d="M5.277 14.268a7.12 7.12 0 0 1-.411-2.368c0-.819.145-1.605.411-2.368L1.24 6.65a11.934 11.934 0 0 0 0 10.947l4.037-3.329Z" />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                      <path fill="#1877F2" d="M24 12.073c0-5.97-4.323-10.9-10-11.94v5.499a5.552 5.552 0 0 1 2.93 4.883 5.57 5.57 0 0 1-2.93 4.882v5.499C19.677 22.974 24 18.043 24 12.073Z" />
                      <path fill="#1877F2" d="M13.293 22.336v-5.499A5.57 5.57 0 0 1 10.36 12a5.552 5.552 0 0 1 2.933-4.883V1.618C7.616 2.657 3.293 7.588 3.293 13.558c0 5.97 4.323 10.9 10 11.939v-3.161Z" />
                      <path fill="#FFFFFF" d="M13.293 22.336v-5.499A5.57 5.57 0 0 1 10.36 12a5.552 5.552 0 0 1 2.933-4.883V1.618C7.616 2.657 3.293 7.588 3.293 13.558c0 5.97 4.323 10.9 10 11.939v-3.161Z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-sisterhood-primary font-medium hover:underline">
                  Sign up
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

export default Login;
