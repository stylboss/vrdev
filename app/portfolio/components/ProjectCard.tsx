import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ProjectCard({
  index,
  category,
}: {
  index: number;
  category?: "residential" | "commercial" | "events";
}) {
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

  const urls = [
    "https://my.matterport.com/show?play=1&lang=en-US&m=YGW1E9vhYf9",
    "https://my.matterport.com/show?play=1&lang=en-US&m=fbVhQEK8BZD",
    "https://my.matterport.com/show?play=1&lang=en-US&m=ogSbWBzNpQA",
    "https://my.matterport.com/show?play=1&lang=en-US&m=6D5kH5mCvhW",
    "https://my.matterport.com/show?play=1&lang=en-US&m=YuCGm4mVmYo",
    "https://my.matterport.com/show?play=1&lang=en-US&m=hbz9GFyCvr5",
    "https://my.matterport.com/show?play=1&lang=en-US&m=QMq3SVXRs3a",
    "https://my.matterport.com/show?play=1&lang=en-US&m=sAAEmBDFUEP",
    "https://my.matterport.com/show?play=1&lang=en-US&m=j3QY4TrsAJ9",
  ];

  const cats = ["residential", "commercial", "events"];
  const cat = category || cats[index % 3];
  return (
    <Card className="overflow-hidden">
      <Link href={`/tours/project-${index + 1}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <iframe
            src={urls[index % urls.length]}
            width="100%"
            height="300"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-1 font-montserrat">
            {titles[index % titles.length]}
          </h3>
          <p className="text-sm text-muted-foreground font-inter mb-2">
            Category: {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </p>
          <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            View Tour
          </span>
        </div>
      </Link>
    </Card>
  );
}
