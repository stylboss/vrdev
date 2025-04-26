import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const FeaturedToursSection = () => {
  const commercialTours = [
    {
      title: "Bureau Moderne",
      description: "Visite virtuelle d'un espace de bureau moderne à Montréal",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/modern-office",
      category: "commercial",
    },
    {
      title: "Boutique de Luxe",
      description: "Expérience immersive dans une boutique haut de gamme",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/luxury-boutique",
      category: "commercial",
    },
    {
      title: "Restaurant Panoramique",
      description: "Découverte d'un restaurant avec vue panoramique sur la ville",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/panoramic-restaurant",
      category: "commercial",
    },
  ];

  const eventTours = [
    {
      title: "Exposition de Galerie d'Art",
      description: "Visite interactive d'une exposition d'art contemporain",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/art-exhibition",
      category: "events",
    },
    {
      title: "Lieu de Mariage",
      description: "Élégante configuration de lieu pour un mariage de destination",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/wedding-venue",
      category: "events",
    },
    {
      title: "Conférence d'Entreprise",
      description: "Espace événementiel à grande échelle configuré pour une conférence technologique",
      imageUrl: "/placeholder.svg?height=400&width=600",
      tourUrl: "/tours/conference",
      category: "events",
    },
  ];

  return (
    <section id="featured-tours" className="w-full py-12 md:py-24 lg:py-32 bg-[rgb(237,235,227)] dark:bg-black/30 backdrop-blur">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Projets en Vedette
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-montserrat">
              Explorez Nos Visites Virtuelles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
              Entrez et découvrez nos visites virtuelles les plus impressionnantes.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 font-montserrat">Commercial</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {commercialTours.map((tour, i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur group">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={tour.imageUrl || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={tour.tourUrl} className="flex items-center gap-2">
                          Voir la Visite
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
                      Commercial
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1 font-montserrat">{tour.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 font-inter">{tour.description}</p>
                    <Link
                      href={tour.tourUrl}
                      className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Explorer la Visite <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" asChild className="border-white/10 bg-white/5 hover:bg-white/10">
                <Link href="/portfolio?category=commercial" className="flex items-center gap-2">
                  Voir Toutes les Visites Commerciales
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 font-montserrat">Événements</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {eventTours.map((tour, i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur group">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={tour.imageUrl || "/placeholder.svg"}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={tour.tourUrl} className="flex items-center gap-2">
                          Voir la Visite
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded">
                      Événements
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1 font-montserrat">{tour.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 font-inter">{tour.description}</p>
                    <Link
                      href={tour.tourUrl}
                      className="text-primary text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Explorer la Visite <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" asChild className="border-white/10 bg-white/5 hover:bg-white/10">
                <Link href="/portfolio?category=events" className="flex items-center gap-2">
                  Voir Toutes les Visites d'Événements
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedToursSection;
