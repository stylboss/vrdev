import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const titles = [
  "The Future of Matterport Pro2 4K Technology",
  "5 Ways to Enhance Your Virtual Tours",
  "Virtual Tours for Event Spaces: A Complete Guide",
];

export default function RecentArticles() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6 font-montserrat">Recent Articles</h2>
      {titles.map((title, i) => (
        <div key={i} className="flex gap-4">
          <Link href={`/blog/article-${i + 1}`} className="shrink-0">
            <Image
              src={`/placeholder.svg?height=120&width=200&text=Article ${i + 1}`}
              alt={title}
              width={200}
              height={120}
              className="rounded-lg object-cover"
            />
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
                {title}
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
}
