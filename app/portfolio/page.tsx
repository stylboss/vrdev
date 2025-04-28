import SearchFilterBar from "./components/SearchFilterBar";
import PortfolioTabs from "./components/PortfolioTabs";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Portfolio | vrdev",
  description:
    "Explore our portfolio of 3D virtual tours for residential, commercial, and event spaces.",
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">
                  Our Portfolio
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-inter">
                  Explore our collection of immersive virtual tours across
                  various spaces and industries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <SearchFilterBar />
            <PortfolioTabs />
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({
  index,
  category = "all",
}: {
  index: number;
  category?: "residential" | "commercial" | "events" | "all";
}) {
  const titles = {
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

  const title = titles[category][index % titles[category].length];

  return (
    <div className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
      <Link
        href={`/tours/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(
              title
            )}`}
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
}
