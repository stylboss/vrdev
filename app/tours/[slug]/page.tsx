import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Download, MapPin } from "lucide-react";
import TourViewer from "./components/TourViewer";
import TourDetails from "./components/TourDetails";
import RelatedTours from "./components/RelatedTours";
import CTASection from "./components/CTASection";

export const metadata = {
  title: "Tour Details | vrdev",
  description:
    "Explore our immersive 3D virtual tour with Matterport Pro2 4K technology.",
};

export default async function TourPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <TourViewer />
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/portfolio" className="flex items-center gap-1">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Portfolio
                    </Link>
                  </Button>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter font-montserrat mb-2">
                  {title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm font-inter">
                    Montreal, Quebec, Canada
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </section>
        <TourDetails title={title} />
        <RelatedTours />
        <CTASection />
      </main>
    </div>
  );
}