import TourCategorySection from "./TourCategorySection";

const commercialTours = [
  {
    title: "Bureau Moderne",
    description: "Visite virtuelle d'un espace de bureau moderne à Montréal",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=o2PhajV5u33",
    tourUrl: "/tours/modern-office",
    category: "commercial",
  },
  {
    title: "Boutique de Luxe",
    description: "Expérience immersive dans une boutique haut de gamme",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=fbVhQEK8BZD",
    tourUrl: "/tours/luxury-boutique",
    category: "commercial",
  },
  {
    title: "Restaurant Panoramique",
    description: "Découverte d'un restaurant avec vue panoramique sur la ville",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=ogSbWBzNpQA",
    tourUrl: "/tours/panoramic-restaurant",
    category: "commercial",
  },
];

const eventTours = [
  {
    title: "Exposition de Galerie d'Art",
    description: "Visite interactive d'une exposition d'art contemporain",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=xexvqSwmyCw",
    tourUrl: "/tours/art-exhibition",
    category: "events",
  },
  {
    title: "Lieu de Mariage",
    description: "Élégante configuration de lieu pour un mariage de destination",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=6D5kH5mCvhW",
    tourUrl: "/tours/wedding-venue",
    category: "events",
  },
  {
    title: "Conférence d'Entreprise",
    description: "Espace événementiel à grande échelle configuré pour une conférence technologique",
    imageUrl: "https://my.matterport.com/show?play=1&lang=en-US&m=YuCGm4mVmYo",
    tourUrl: "/tours/conference",
    category: "events",
  },
];

const FeaturedToursSection = () => {
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
          <TourCategorySection
            title="Commercial"
            tours={commercialTours}
            seeAllUrl="/portfolio?category=commercial"
            seeAllLabel="Voir Toutes les Visites Commerciales"
          />
          <TourCategorySection
            title="Événements"
            tours={eventTours}
            seeAllUrl="/portfolio?category=events"
            seeAllLabel="Voir Toutes les Visites d'Événements"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedToursSection;
