import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ProjectCard({ index, category }: { index: number; category?: "residential" | "commercial" | "events" }) {
  // Dummy data for demonstration
  const titles = [
    "Modern Loft Living",
    "Downtown Office Space",
    "Event Hall Experience",
    "Cozy Family Home",
    "Retail Boutique Tour",
    "Art Gallery Virtual Walkthrough",
    "Luxury Condo Showcase",
    "Industrial Workspace",
    "Wedding Venue Tour",
  ];
  const cats = ["residential", "commercial", "events"];
  const cat = category || cats[index % 3];
  return (
    <Card className="overflow-hidden">
      <Link href={`/tours/project-${index + 1}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={`/placeholder.svg?height=300&width=500&text=${encodeURIComponent(titles[index % titles.length])}`}
            alt={titles[index % titles.length]}
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-1 font-montserrat">{titles[index % titles.length]}</h3>
          <p className="text-sm text-muted-foreground font-inter mb-2">Category: {cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
          <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">View Tour</span>
        </div>
      </Link>
    </Card>
  );
}
