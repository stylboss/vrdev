import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const titles = [
  "10 Tips for Stunning Virtual Tours",
  "Matterport vs. Other 3D Platforms",
  "How to Prepare Your Property for a 3D Shoot",
];

const BlogRecentArticles = () => (
  <div className="space-y-8">
    <h2 className="text-2xl font-bold mb-6 font-montserrat">Recent Articles</h2>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex gap-4">
        <Link href={`/blog/article-${i + 1}`} className="block flex-shrink-0">
          <div className="relative h-28 w-40 overflow-hidden rounded-lg">
            <Image
              src={`/placeholder.svg?height=112&width=160&text=Article+${i + 1}`}
              alt={titles[i]}
              width={160}
              height={112}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Link>
        <div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>April {10 - i}, 2023</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{4 + i} min read</span>
            </div>
          </div>
          <Link href={`/blog/article-${i + 1}`}>
            <h3 className="font-bold mb-1 font-montserrat hover:text-primary transition-colors">
              {titles[i]}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    ))}
    <Button variant="outline" asChild>
      <Link href="/blog/all" className="flex items-center gap-1">
        View All Articles
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  </div>
);

export default BlogRecentArticles;
