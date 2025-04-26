import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const HeroSection = () => (
  <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
    <div className="container px-4 md:px-6 relative">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
          <Code className="h-3.5 w-3.5 mr-1 text-primary" />
          <span>MÉTHODES AVEC IA</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-montserrat max-w-3xl animate-fade-in">
          vrdev visite virtuelle
          <span className="block text-primary">proposer le meilleur</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-inter">
          Avec une formation 100% offerte où tu vas développer un SaaS Next avec
          l'IA
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button size="lg" className="shine-effect">
            Commencer
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;