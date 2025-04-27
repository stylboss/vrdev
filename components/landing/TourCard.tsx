import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tourUrl: string;
  category: string;
}

const TourCard = ({ title, description, imageUrl, tourUrl, category }: TourCardProps) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur group">
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="secondary" size="sm" asChild>
          <Link href={tourUrl} className="flex items-center gap-2">
            Voir la Visite
          </Link>
        </Button>
      </div>
      <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-bold text-lg mb-1 font-montserrat">{title}</h3>
      <p className="text-muted-foreground text-sm mb-3 font-inter">{description}</p>
      <Link
        href={tourUrl}
        className="text-primary text-sm font-medium inline-flex items-center hover:underline"
      >
        Explorer la Visite <ChevronRight className="ml-1 h-3 w-3" />
      </Link>
    </CardContent>
  </Card>
);

export default TourCard;
