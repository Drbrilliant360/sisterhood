
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Phone, MapPin, FileText, Users, BookOpen } from 'lucide-react';

const SafetyTools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sisterhood-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-sisterhood-primary mb-4">Safety Tools & Training</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Resources and tools to help women stay safe and secure in various situations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Emergency Contacts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-8 text-center">Emergency Contacts</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Important numbers to call in case of emergency. Save these contacts to your phone for quick access.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Emergency Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-semibold">Police Emergency</p>
                        <p className="text-xl font-bold">112</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-semibold">Ambulance</p>
                        <p className="text-xl font-bold">115</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-semibold">Fire Department</p>
                        <p className="text-xl font-bold">114</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-purple-700">
                    <Shield className="mr-2 h-5 w-5" />
                    Women's Support Hotlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-semibold">Gender-Based Violence Hotline</p>
                        <p className="text-xl font-bold">+255-800-110-016</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-semibold">Women's Legal Aid</p>
                        <p className="text-xl font-bold">+255-800-751-818</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-semibold">SisterHood Crisis Support</p>
                        <p className="text-xl font-bold">+255-716-183-812</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-blue-700">
                    <MapPin className="mr-2 h-5 w-5" />
                    Safe Shelters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Women's Safe House - Dar es Salaam</p>
                        <p className="text-gray-600">Confidential location. Call for assistance:</p>
                        <p className="font-medium">+255-744-312-899</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Hope Center - Arusha</p>
                        <p className="text-gray-600">Confidential location. Call for assistance:</p>
                        <p className="font-medium">+255-762-114-003</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
              <Button className="bg-sisterhood-primary">
                <FileText className="mr-2 h-4 w-4" />
                Download Emergency Contacts Card
              </Button>
            </div>
          </div>
        </section>
        
        {/* Safety Training */}
        <section className="py-16 bg-sisterhood-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Safety Training Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Self-Defense Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Self-Defense Basics</CardTitle>
                  <CardDescription>Learn practical self-defense techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    A foundational course teaching essential self-defense moves and strategies for women of all ages and physical abilities.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>4-week program, 2 sessions per week</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>No prior experience needed</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>Both in-person and virtual options</span>
                    </li>
                  </ul>
                  <Button className="w-full">Join Program</Button>
                </CardContent>
              </Card>
              
              <Card>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1541971297127-c4e7d610b451?q=80&w=1976&auto=format&fit=crop" 
                    alt="Digital Safety"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Digital Safety Workshop</CardTitle>
                  <CardDescription>Protect yourself online</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Learn how to secure your digital presence, including social media safety, password management, and protecting personal information.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>One-day intensive workshop</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>Practical, hands-on exercises</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>Take-home security checklist</span>
                    </li>
                  </ul>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
              
              <Card>
                <div className="h-48 bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1974&auto=format&fit=crop" 
                    alt="Situational Awareness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Situational Awareness</CardTitle>
                  <CardDescription>Recognize and avoid potential dangers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Develop skills to identify potential threats in your environment and learn strategies to avoid dangerous situations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>2-week program, weekly sessions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>Real-world scenario practice</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-sisterhood-primary mr-2"></span>
                      <span>Taught by security professionals</span>
                    </li>
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Safety Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-sisterhood-primary mb-12 text-center">Safety Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-sisterhood-light rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-sisterhood-primary" />
                  </div>
                  <CardTitle>Safety Guides & Checklists</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Home Safety Checklist</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Travel Safety Guide</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Public Transportation Safety</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">Workplace Safety Guide</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-sisterhood-light rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-sisterhood-primary" />
                  </div>
                  <CardTitle>Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Understanding Legal Rights</span>
                      <Button variant="outline" size="sm">Read</Button>
                    </li>
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Recognizing Red Flags</span>
                      <Button variant="outline" size="sm">Read</Button>
                    </li>
                    <li className="flex items-center justify-between border-b pb-3">
                      <span className="font-medium">Safety Planning Guidelines</span>
                      <Button variant="outline" size="sm">Read</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="font-medium">Community Safety Networks</span>
                      <Button variant="outline" size="sm">Read</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Safety App */}
        <section className="py-16 bg-sisterhood-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">SisterHood Safety App</h2>
                <p className="text-xl opacity-90 mb-6">
                  Our mobile app puts safety tools right at your fingertips, allowing you to:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-3 mt-1" />
                    <span>Send emergency alerts to trusted contacts with your location</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-3 mt-1" />
                    <span>Access safety resources and emergency contacts offline</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-3 mt-1" />
                    <span>Connect with nearby SisterHood members when traveling</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-3 mt-1" />
                    <span>Record and document incidents securely</span>
                  </li>
                </ul>
                <div className="flex space-x-4">
                  <Button className="bg-white text-sisterhood-primary hover:bg-white/90">
                    Download for Android
                  </Button>
                  <Button className="bg-white text-sisterhood-primary hover:bg-white/90">
                    Download for iOS
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-3xl shadow-lg max-w-xs">
                  <div className="bg-gray-100 rounded-2xl p-4 h-[500px] flex items-center justify-center">
                    <span className="text-gray-500 text-center">App screenshot placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetyTools;
