import Link from "next/link";
import Image from "next/image";

type Category = "all" | "residential" | "commercial" | "events";

interface ProjectCardProps {
  index: number;
  category?: Category;
}

const titles: Record<Category, string[]> = {
  residential: [
    "Luxury Beachfront Villa",
    "Modern Urban Apartment",
    "Countryside Retreat",
    "Penthouse Suite",
    "Historic Townhouse",
    "Mountain Cabin",
  ],
  commercial: [
    "Downtown Office Complex",
    "Boutique Hotel",
    "Retail Showroom",
    "Restaurant Interior",
    "Fitness Center",
    "Medical Clinic",
  ],
  events: [
    "Art Gallery Exhibition",
    "Wedding Venue",
    "Corporate Conference",
    "Music Festival Space",
    "Fashion Show Runway",
    "Museum Exhibition",
  ],
  all: [
    "Luxury Beachfront Villa",
    "Downtown Office Complex",
    "Art Gallery Exhibition",
    "Modern Urban Apartment",
    "Boutique Hotel",
    "Wedding Venue",
    "Countryside Retreat",
    "Retail Showroom",
    "Corporate Conference",
  ],
};

const ProjectCard = ({ index, category = "all" }: ProjectCardProps) => {
  const title = titles[category][index % titles[category].length];
  return (
    <div className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
      <Link href={`/tours/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(title)}`}
            alt={title}
            width={600}
            height={400}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 font-montserrat">{title}</h3>
          <p className="text-muted-foreground text-sm font-inter">
            Immersive virtual tour showcasing every detail of this space.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
