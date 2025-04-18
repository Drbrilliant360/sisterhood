
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import ResourcesTab from "./tabs/ResourcesTab";
import ActivitiesTab from "./tabs/ActivitiesTab";
import DigitalSkills from "./DigitalSkills";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface DashboardTabsProps {
  userType: "normal" | "mentor" | "admin";
}

const DashboardTabs = ({ userType }: DashboardTabsProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const tabParam = searchParams.get("tab");
  
  // Set default tab value based on URL parameter or default to "overview"
  const defaultTab = tabParam && ["overview", "resources", "activities", "digital-skills"].includes(tabParam) 
    ? tabParam 
    : "overview";

  // Handle tab change
  const handleTabChange = (value: string) => {
    navigate(`/dashboard?tab=${value}`, { replace: true });
  };

  return (
    <Tabs defaultValue={defaultTab} className="space-y-4" onValueChange={handleTabChange}>
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
        <ResourcesTab userType={userType} />
      </TabsContent>
      
      <TabsContent value="activities">
        <ActivitiesTab userType={userType} />
      </TabsContent>
      
      <TabsContent value="digital-skills">
        <DigitalSkills />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
