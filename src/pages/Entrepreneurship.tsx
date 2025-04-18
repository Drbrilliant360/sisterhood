
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Coins, LineChart, Award, Users, BookOpen, CreditCard, Wallet } from 'lucide-react';
import PricingBadge from '@/components/PricingBadge';

const Entrepreneurship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Entrepreneurship Support</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resources, training, and mentorship to help women in Tanzania and across Africa build successful businesses.
              </p>
            </div>
          </div>
        </section>
        
        {/* Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Our Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-sisterhood-light rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 text-sisterhood-primary" />
                    </div>
                    <PricingBadge type="free" />
                  </div>
                  <CardTitle>Business Development</CardTitle>
                  <CardDescription>For new and early-stage entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Learn the fundamentals of starting and running a successful business, from idea validation to launch.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Business plan development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Market research guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Legal and registration support</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-sisterhood-light rounded-full flex items-center justify-center mb-4">
                      <Coins className="h-6 w-6 text-sisterhood-primary" />
                    </div>
                    <PricingBadge type="paid" price={20} />
                  </div>
                  <CardTitle>Funding & Investment</CardTitle>
                  <CardDescription>Access to capital for growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Connect with investors, learn about funding opportunities, and prepare your business for investment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Pitch deck preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Investor introduction events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Grant application support</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full">Subscribe</Button>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <CreditCard className="h-3 w-3" /> PayPal
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <Wallet className="h-3 w-3" /> M-Pesa
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <Wallet className="h-3 w-3" /> Tigo Pesa
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-sisterhood-primary/20 hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-sisterhood-light rounded-full flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-sisterhood-primary" />
                    </div>
                    <PricingBadge type="premium" />
                  </div>
                  <CardTitle>Business Growth</CardTitle>
                  <CardDescription>Scale your existing business</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Strategic guidance to help established businesses expand operations and increase profitability.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Operational optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Market expansion strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 rounded-full p-1 mr-2 mt-0.5">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>Digital transformation</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full">Subscribe - $50/month</Button>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <CreditCard className="h-3 w-3" /> PayPal
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <Wallet className="h-3 w-3" /> M-Pesa
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                        <Wallet className="h-3 w-3" /> Tigo Pesa
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=2070&auto=format&fit=crop" 
                    alt="Entrepreneur Success Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">From Market Stall to National Brand</h3>
                  <p className="text-gray-600 mb-4">
                    "With mentorship from SisterHood, I transformed my small market stall selling handmade soaps into a national brand now available in stores across Tanzania."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-sisterhood-secondary flex items-center justify-center text-white font-medium">JM</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Joyce Makundi</h4>
                      <p className="text-sm text-gray-500">Founder, TanzaClean</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop" 
                    alt="Entrepreneur Success Story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Securing Investment for Tech Startup</h3>
                  <p className="text-gray-600 mb-4">
                    "Through SisterHood's investment program, I connected with investors who believed in my vision and secured $150,000 in seed funding for my educational technology startup."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-sisterhood-primary flex items-center justify-center text-white font-medium">FN</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Faith Nyambura</h4>
                      <p className="text-sm text-gray-500">CEO, EduConnect Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-8 text-center">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Pitch Night: Tanzania Edition</CardTitle>
                    <PricingBadge type="paid" price={5} />
                  </div>
                  <CardDescription>May 15, 2025 • 6:00 PM - 9:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Present your business idea to a panel of investors and industry experts for a chance to win funding and support.
                  </p>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Digital Marketing Workshop</CardTitle>
                    <PricingBadge type="free" />
                  </div>
                  <CardDescription>June 2, 2025 • 10:00 AM - 3:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn practical digital marketing strategies to grow your business online with limited resources.
                  </p>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Women Founders Network</CardTitle>
                    <PricingBadge type="premium" />
                  </div>
                  <CardDescription>Monthly • First Thursday • 5:30 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A monthly networking event for women entrepreneurs to connect, share experiences, and build valuable relationships.
                  </p>
                  <Button variant="outline" className="w-full">Join Network</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/events">
                <Button>View All Events</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Entrepreneurship;
