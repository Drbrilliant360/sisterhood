
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-sisterhood-light to-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-sisterhood-primary mb-6">
                Empowering Women Across Tanzania and Africa
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                SisterHood is dedicated to creating a safe, supportive community where women can connect, 
                learn, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">Join Our Community</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/membership">Learn About Membership</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-sisterhood-primary mb-8">Our Mission</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  In Tanzania and across Africa, women face unique challenges that require tailored support and resources. 
                  SisterHood was founded with a clear mission: to create a platform where women can access the tools, 
                  knowledge, and community they need to thrive.
                </p>
                <p>
                  We believe that when women support each other, extraordinary things happen. Our platform brings together 
                  experienced mentors, valuable resources, and a vibrant community to help women overcome obstacles 
                  and achieve their full potential.
                </p>
                <p>
                  Whether you're seeking professional guidance, personal support, or simply a safe space to connect with 
                  like-minded women, SisterHood is here for you. Our community spans across Tanzania and other African 
                  countries, embracing diversity while addressing the shared experiences that unite us all.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center text-sisterhood-primary mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Mentorship Program</CardTitle>
                  <CardDescription>Connect with experienced mentors who understand your context</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>One-on-one guidance from experienced professionals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Regular check-ins and personalized advice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Mentors from diverse fields and backgrounds across Africa</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/mentors">Meet Our Mentors</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Community Support</CardTitle>
                  <CardDescription>Join a network of supportive women</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Private discussion groups on various topics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Regular virtual and in-person meetups across Tanzania</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Peer-to-peer advice and encouragement</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/community">Explore Community</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Safety Resources</CardTitle>
                  <CardDescription>Access critical information and support</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Emergency contacts across different regions in Africa</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Self-defense resources and workshops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Confidential support for vulnerable situations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/safety">Safety Resources</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center text-sisterhood-primary mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sisterhood-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Join SisterHood</h3>
                <p className="text-gray-600">
                  Create an account and complete your profile to become part of our community
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sisterhood-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Connect & Explore</h3>
                <p className="text-gray-600">
                  Browse resources, join community discussions, and connect with mentors
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sisterhood-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Grow & Contribute</h3>
                <p className="text-gray-600">
                  Develop your skills, share your knowledge, and help others in the community
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/register">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-sisterhood-light">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center text-sisterhood-primary mb-12">What Our Members Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-6">
                    "SisterHood has been transformative for my business. The mentorship I received helped me secure funding for my small enterprise in Dar es Salaam. I'm now employing three other women!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-sisterhood-secondary flex items-center justify-center text-white font-medium">FF</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Fatima Faraji</h4>
                      <p className="text-sm text-gray-500">Small Business Owner, Tanzania</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-6">
                    "The safety resources provided by SisterHood were invaluable during my relocation to a new city. I felt prepared and empowered, knowing I had access to local support networks."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-sisterhood-primary flex items-center justify-center text-white font-medium">HK</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Halima Kimaro</h4>
                      <p className="text-sm text-gray-500">Graduate Student, Tanzania</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-6">
                    "Finding a community of like-minded women has been life-changing. I've made connections across several African countries and learned so much from their diverse perspectives."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-sisterhood-accent flex items-center justify-center text-white font-medium">NM</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Neema Mazengo</h4>
                      <p className="text-sm text-gray-500">Healthcare Worker, Tanzania</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-sisterhood-primary text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Our Sisterhood?</h2>
              <p className="text-xl opacity-90 mb-8">
                Connect with women across Tanzania and Africa, access resources, and become part of a supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-sisterhood-primary hover:bg-gray-100" asChild>
                  <Link to="/register">Join Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
