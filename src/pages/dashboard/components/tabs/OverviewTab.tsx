
import React from 'react';
import { Card } from '@/components/ui/card';
import NormalUserOverview from './overview/NormalUserOverview';
import MentorOverview from './overview/MentorOverview';
import AdminOverview from './overview/AdminOverview';

interface OverviewTabProps {
  userType: 'normal' | 'mentor' | 'admin';
}

const OverviewTab: React.FC<OverviewTabProps> = ({ userType }) => {
  return (
    <>
      {userType === 'normal' && <NormalUserOverview />}
      {userType === 'mentor' && <MentorOverview />}
      {userType === 'admin' && <AdminOverview />}
    </>
  );
};

export default OverviewTab;
