import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";

const PortfolioToolbar = () => (
  <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div className="flex items-center gap-2">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search projects..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-[300px]"
        />
      </div>
      <Button variant="outline" size="icon" aria-label="Filter projects">
        <Filter className="h-4 w-4" />
      </Button>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" className="h-8 gap-1">
        <Grid className="h-3.5 w-3.5" />
        <span className="sr-only md:not-sr-only md:inline">Grid</span>
      </Button>
      <Button variant="outline" size="sm" className="h-8 gap-1">
        <List className="h-3.5 w-3.5" />
        <span className="sr-only md:not-sr-only md:inline">List</span>
      </Button>
    </div>
  </div>
);

export default PortfolioToolbar;
