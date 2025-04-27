import dynamic from "next/dynamic";
const ClientOnlyIframe = dynamic(() => import("./ClientOnlyIframe"), {
  ssr: false,
});
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface TourCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tourUrl: string;
  category: string;
}

const TourCard = ({
  title,
  description,
  imageUrl,
  tourUrl,
  category,
}: TourCardProps) => (
  <Link href={tourUrl}>
    <Card className="overflow-hidden group relative">
      <div className="relative aspect-video overflow-hidden">
        <ClientOnlyIframe
          src={imageUrl}
          width="100%"
          height="300"
          frameBorder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          style={{ borderRadius: "12px" }}
        />
        <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded z-20">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1 font-montserrat">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 font-inter">
          {description}
        </p>
      </CardContent>
    </Card>
  </Link>
);

export default TourCard;