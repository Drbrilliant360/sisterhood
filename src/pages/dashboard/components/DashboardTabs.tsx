
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import ResourcesTab from "./tabs/ResourcesTab";
import ActivitiesTab from "./tabs/ActivitiesTab";
import DigitalSkills from "./DigitalSkills";

interface DashboardTabsProps {
  userType: "normal" | "mentor" | "admin";
}

const DashboardTabs = ({ userType }: DashboardTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="activities">Activities</TabsTrigger>
        <TabsTrigger value="digital-skills">Digital Skills</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewTab userType={userType} />
      </TabsContent>
      
      <TabsContent value="resources">
        <ResourcesTab />
      </TabsContent>
      
      <TabsContent value="activities">
        <ActivitiesTab />
      </TabsContent>
      
      <TabsContent value="digital-skills">
        <DigitalSkills />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
