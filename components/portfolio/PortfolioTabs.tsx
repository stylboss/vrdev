import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Calendar, Home } from "lucide-react";
import PortfolioProjects from "./PortfolioProjects";

const PortfolioTabs = () => (
  <Tabs defaultValue="all">
    <TabsList className="mb-8">
      <TabsTrigger value="all">All Projects</TabsTrigger>
      <TabsTrigger value="residential" className="flex items-center gap-1">
        <Home className="h-4 w-4" />
        Residential
      </TabsTrigger>
      <TabsTrigger value="commercial" className="flex items-center gap-1">
        <Building2 className="h-4 w-4" />
        Commercial
      </TabsTrigger>
      <TabsTrigger value="events" className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        Events
      </TabsTrigger>
    </TabsList>
    <TabsContent value="all">
      <PortfolioProjects category="all" count={9} />
    </TabsContent>
    <TabsContent value="residential">
      <PortfolioProjects category="residential" count={6} />
    </TabsContent>
    <TabsContent value="commercial">
      <PortfolioProjects category="commercial" count={6} />
    </TabsContent>
    <TabsContent value="events">
      <PortfolioProjects category="events" count={6} />
    </TabsContent>
  </Tabs>
);

export default PortfolioTabs;
