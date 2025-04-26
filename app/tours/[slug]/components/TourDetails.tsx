import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, ImageIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function TourDetails({ title }: { title: string }) {
  return (
    <section className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter font-montserrat mb-2">{title}</h1>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm font-inter">Montreal, Quebec, Canada</span>
            </div>
          </div>
        </div>
        <Tabs defaultValue="details" className="mt-8">
          <TabsList>
            <TabsTrigger value="details" className="flex items-center gap-1">
              <Info className="h-4 w-4" />
              Details
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-1">
              <ImageIcon className="h-4 w-4" />
              Gallery
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-4 space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold mb-2 font-montserrat">Project Description</h2>
                <p className="text-muted-foreground font-inter">
                  This immersive virtual tour showcases every detail of the {title}. Created using Matterport Pro2 4K technology, this tour allows visitors to explore the space as if they were physically present. The high-resolution imagery captures the unique features and design elements that make this space special.
                </p>
                <h2 className="text-xl font-bold mt-4 mb-2 font-montserrat">Features</h2>
                <ul className="list-disc list-inside text-muted-foreground font-inter">
                  <li>Complete 360° walkthrough experience</li>
                  <li>High-resolution 4K imagery</li>
                  <li>Interactive measurement tools</li>
                  <li>Dollhouse view for spatial understanding</li>
                  <li>Highlighted points of interest</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2 font-montserrat">Project Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium font-montserrat">Client</h3>
                    <p className="text-muted-foreground font-inter">Sample Client Inc.</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium font-montserrat">Location</h3>
                    <p className="text-muted-foreground font-inter">Montreal, QC</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium font-montserrat">Project Date</h3>
                    <p className="text-muted-foreground font-inter">June 2023</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium font-montserrat">Square Footage</h3>
                    <p className="text-muted-foreground font-inter">2,500 sq ft</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold mb-2 font-montserrat">Client Testimonial</h2>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground font-inter">
                    "The virtual tour created by VirtualVista exceeded our expectations. The attention to detail and quality of the final product helped us showcase our space in the best possible light."
                  </blockquote>
                  <p className="text-sm mt-2 font-medium font-montserrat">— Client Representative</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gallery" className="mt-4">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Photo ${i + 1}`}
                    alt={`${title} - Photo ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
