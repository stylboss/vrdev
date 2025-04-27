import TourCard from "./TourCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface TourCategorySectionProps {
  title: string;
  tours: Array<{
    title: string;
    description: string;
    imageUrl: string;
    tourUrl: string;
    category: string;
  }>;
  seeAllUrl: string;
  seeAllLabel: string;
}

const TourCategorySection = ({ title, tours, seeAllUrl, seeAllLabel }: TourCategorySectionProps) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold mb-4 font-montserrat">{title}</h3>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour, i) => (
        <TourCard key={i} {...tour} />
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <Button variant="outline" asChild className="border-white/10 bg-white/5 hover:bg-white/10">
        <Link href={seeAllUrl} className="flex items-center gap-2">
          {seeAllLabel}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
);

export default TourCategorySection;
