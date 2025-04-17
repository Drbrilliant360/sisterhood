
import React from 'react';
import { Bell, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  userType: 'normal' | 'mentor' | 'admin';
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userType }) => {
  return (
    <div className="mb-8 african-pattern-bg rounded-2xl p-8 text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Avatar className="h-16 w-16 border-2 border-white">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="User profile" />
            <AvatarFallback>ZN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">
              {userType === 'normal' ? 'Welcome, Zara!' : 
               userType === 'mentor' ? 'Welcome, Dr. Amina!' : 
               'Welcome, Admin!'}
            </h1>
            <p className="text-white/80">
              {userType === 'normal' ? 'Let\'s continue your journey' : 
               userType === 'mentor' ? 'Your mentees are waiting for you' : 
               'Manage your community effectively'}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-0">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="secondary" className="bg-white text-sisterhood-primary hover:bg-white/90 border-0">
            <UserCircle className="mr-2 h-4 w-4" />
            My Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
