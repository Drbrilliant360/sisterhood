
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Activity, BookOpen, Phone, MapPin, Calendar } from 'lucide-react';

const HealthResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Health Resources</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access important information and resources to support your physical and mental wellbeing.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Featured Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition-shadow">
                <div className="p-4 bg-sisterhood-light flex justify-center">
                  <Heart className="h-12 w-12 text-sisterhood-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Women's Health Guide</CardTitle>
                  <CardDescription>Comprehensive information on women's health</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    A comprehensive guide covering women's health topics relevant to African women, including reproductive health, preventative care, and common health issues.
                  </p>
                  <Button className="w-full">Download Guide</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <div className="p-4 bg-sisterhood-light flex justify-center">
                  <Activity className="h-12 w-12 text-sisterhood-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Mental Wellness Toolkit</CardTitle>
                  <CardDescription>Resources for mental health support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Tools and resources to support your mental wellbeing, including stress management techniques, self-care practices, and information on seeking professional help.
                  </p>
                  <Button className="w-full">Access Toolkit</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <div className="p-4 bg-sisterhood-light flex justify-center">
                  <BookOpen className="h-12 w-12 text-sisterhood-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Health Education Series</CardTitle>
                  <CardDescription>Learn about important health topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Educational articles and videos on various health topics, from nutrition and exercise to preventative healthcare and managing chronic conditions.
                  </p>
                  <Button className="w-full">View Series</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Healthcare Directory */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-8 text-center">Healthcare Directory</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Find women-focused healthcare providers in your area. Our directory includes doctors, clinics, and specialists who are sensitive to women's health needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Women's Health Clinics</CardTitle>
                  <CardDescription>Specialized healthcare for women</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-b pb-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Tanzania Women's Health Center</h4>
                          <p className="text-gray-600">Dar es Salaam, Tanzania</p>
                          <p className="text-gray-500 text-sm">Comprehensive women's healthcare services</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <MapPin className="h-3 w-3 mr-1" /> Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b pb-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Arusha Women's Clinic</h4>
                          <p className="text-gray-600">Arusha, Tanzania</p>
                          <p className="text-gray-500 text-sm">Reproductive health and general wellness</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <MapPin className="h-3 w-3 mr-1" /> Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Zanzibar Women's Health Initiative</h4>
                          <p className="text-gray-600">Zanzibar, Tanzania</p>
                          <p className="text-gray-500 text-sm">Complete women's health services</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <MapPin className="h-3 w-3 mr-1" /> Directions
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mental Health Providers</CardTitle>
                  <CardDescription>Professional mental health support</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-b pb-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Mind & Wellness Counseling</h4>
                          <p className="text-gray-600">Dar es Salaam, Tanzania</p>
                          <p className="text-gray-500 text-sm">Individual and group therapy sessions</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-3 w-3 mr-1" /> Book
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="border-b pb-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Women's Mental Health Center</h4>
                          <p className="text-gray-600">Mwanza, Tanzania</p>
                          <p className="text-gray-500 text-sm">Specialized in women's mental health issues</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-3 w-3 mr-1" /> Book
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-sisterhood-primary mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium">Healing Hearts Therapy</h4>
                          <p className="text-gray-600">Dodoma, Tanzania</p>
                          <p className="text-gray-500 text-sm">Trauma-informed therapy services</p>
                          <div className="flex mt-2">
                            <Button variant="outline" size="sm" className="mr-2">
                              <Phone className="h-3 w-3 mr-1" /> Call
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-3 w-3 mr-1" /> Book
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button>View Full Directory</Button>
            </div>
          </div>
        </section>
        
        {/* Health Events */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Upcoming Health Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Women's Health Screening Day</CardTitle>
                  <CardDescription>June 10, 2025 • 9:00 AM - 5:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Free health screenings for women including breast exams, blood pressure, and glucose testing.
                  </p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Tanzania Women's Health Center, Dar es Salaam</span>
                  </div>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mental Health Workshop</CardTitle>
                  <CardDescription>July 5, 2025 • 2:00 PM - 4:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn effective strategies for managing stress, anxiety, and improving your mental wellbeing.
                  </p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Mind & Wellness Counseling, Dar es Salaam</span>
                  </div>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Nutrition & Women's Health</CardTitle>
                  <CardDescription>July 22, 2025 • 10:00 AM - 12:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Explore the connection between nutrition and women's health with dietary recommendations for different life stages.
                  </p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Arusha Women's Clinic, Arusha</span>
                  </div>
                  <Button variant="outline" className="w-full">Register</Button>
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

export default HealthResources;
