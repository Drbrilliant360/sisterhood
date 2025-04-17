
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, BookOpen, Shield } from 'lucide-react';

const QuickAccessMenu = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Link to="/mentorship">
        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="p-3 bg-sisterhood-purple rounded-full mb-2">
              <Users className="h-6 w-6 text-sisterhood-primary" />
            </div>
            <h3 className="font-medium">Mentorship</h3>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/community">
        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="p-3 bg-sisterhood-pink rounded-full mb-2">
              <MessageCircle className="h-6 w-6 text-sisterhood-secondary" />
            </div>
            <h3 className="font-medium">Community</h3>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/resources">
        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="p-3 bg-sisterhood-orange rounded-full mb-2">
              <BookOpen className="h-6 w-6 text-sisterhood-accent" />
            </div>
            <h3 className="font-medium">Resources</h3>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/safety">
        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="p-3 bg-sisterhood-green rounded-full mb-2">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium">Safety</h3>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default QuickAccessMenu;
