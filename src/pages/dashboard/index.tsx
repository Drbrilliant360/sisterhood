
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import DashboardHeader from './components/DashboardHeader';
import QuickAccessMenu from './components/QuickAccessMenu';
import DailyInspiration from './components/DailyInspiration';
import DashboardTabs from './components/DashboardTabs';

const Dashboard = () => {
  const [userType, setUserType] = useState('normal'); // normal, mentor, admin
  
  // For demonstration, toggle between user types
  const toggleUserType = () => {
    if (userType === 'normal') setUserType('mentor');
    else if (userType === 'mentor') setUserType('admin');
    else setUserType('normal');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* User Type Toggle (for demo only) */}
          <div className="mb-6 flex justify-end">
            <Button onClick={toggleUserType} variant="outline" className="text-xs">
              Current View: {userType === 'normal' ? 'Normal User' : userType === 'mentor' ? 'Mentor' : 'Admin'}
              <span className="ml-2 text-[10px] opacity-70">(Demo Toggle)</span>
            </Button>
          </div>
          
          <DashboardHeader userType={userType} />
          <QuickAccessMenu />
          <DailyInspiration />
          <DashboardTabs userType={userType} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
