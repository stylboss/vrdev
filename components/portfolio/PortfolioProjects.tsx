import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

interface PortfolioProjectsProps {
  category: "all" | "residential" | "commercial" | "events";
  count: number;
}

const PortfolioProjects = ({ category, count }: PortfolioProjectsProps) => (
  <div className="space-y-8">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCard key={i} index={i} category={category} />
      ))}
    </div>
    <div className="flex justify-center">
      <Button variant="outline">Load More</Button>
    </div>
  </div>
);

export default PortfolioProjects;
