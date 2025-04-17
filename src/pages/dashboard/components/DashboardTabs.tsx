
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewTab from './tabs/OverviewTab';
import ActivitiesTab from './tabs/ActivitiesTab';
import ResourcesTab from './tabs/ResourcesTab';

interface DashboardTabsProps {
  userType: 'normal' | 'mentor' | 'admin';
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ userType }) => {
  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activities">Activities</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewTab userType={userType} />
      </TabsContent>
      
      <TabsContent value="activities">
        <ActivitiesTab userType={userType} />
      </TabsContent>
      
      <TabsContent value="resources">
        <ResourcesTab userType={userType} />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
