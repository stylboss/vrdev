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

export default function Page({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>;
}