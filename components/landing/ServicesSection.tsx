import { Card, CardContent } from "@/components/ui/card";
import { Camera, Cuboid, MapPin } from "lucide-react";

const ServicesSection = () => (
  <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0"></div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Nos Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-montserrat">
            Expériences Numériques Immersives
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
            Nous créons des expériences virtuelles époustouflantes qui mettent
            en valeur votre espace sous son meilleur jour.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-montserrat">
              Photographie Professionnelle
            </h3>
            <p className="text-muted-foreground font-inter">
              Photographie HDR de haute qualité qui capture chaque détail de
              votre espace avec un éclairage parfait.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Cuboid className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-montserrat">
              Modélisation 3D
            </h3>
            <p className="text-muted-foreground font-inter">
              Modèles 3D détaillés de votre espace qui permettent des mesures et
              une planification précises.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all hover:shadow-lg border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-primary/10 p-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-montserrat">
              Visites Virtuelles
            </h3>
            <p className="text-muted-foreground font-inter">
              Visites virtuelles immersives Matterport Pro2 4K qui permettent
              aux visiteurs d'explorer votre espace de n'importe où.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default ServicesSection;