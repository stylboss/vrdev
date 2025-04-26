import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Calendar, Home } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

export default function PortfolioTabs() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="mb-8">
        <TabsTrigger value="all">All Projects</TabsTrigger>
        <TabsTrigger value="residential" className="flex items-center gap-1">
          <Home className="h-4 w-4" /> Residential
        </TabsTrigger>
        <TabsTrigger value="commercial" className="flex items-center gap-1">
          <Building2 className="h-4 w-4" /> Commercial
        </TabsTrigger>
        <TabsTrigger value="events" className="flex items-center gap-1">
          <Calendar className="h-4 w-4" /> Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <ProjectCard key={i} index={i} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </TabsContent>
      <TabsContent value="residential" className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCard key={i} index={i} category="residential" />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </TabsContent>
      <TabsContent value="commercial" className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCard key={i} index={i} category="commercial" />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </TabsContent>
      <TabsContent value="events" className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard key={i} index={i} category="events" />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
