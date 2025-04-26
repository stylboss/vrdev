import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const BlogFeaturedArticle = () => (
  <Card className="overflow-hidden border-none shadow-none">
    <Link href="/blog/virtual-tours-real-estate" className="block">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=500&width=800&text=Featured Article"
          alt="How Virtual Tours Are Revolutionizing Real Estate"
          width={800}
          height={500}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </Link>
    <CardContent className="px-0 pt-4">
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>April 15, 2023</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>5 min read</span>
        </div>
      </div>
      <Link href="/blog/virtual-tours-real-estate" className="block">
        <h2 className="text-2xl font-bold mb-2 font-montserrat hover:text-primary transition-colors">
          How Virtual Tours Are Revolutionizing Real Estate
        </h2>
      </Link>
      <p className="text-muted-foreground mb-4 font-inter">
        Discover how 3D virtual tours are transforming the real estate industry, providing immersive
        experiences for potential buyers and increasing sales for agents and property developers.
      </p>
      <div className="flex items-center gap-2">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Sophie Martin"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-sm font-medium">Sophie Martin</span>
      </div>
    </CardContent>
  </Card>
);

export default BlogFeaturedArticle;
