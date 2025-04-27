import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChevronDownIcon from "@/components/ChevronDownIcon";
import { useContactForm } from "@/components/hooks/useContactForm";

const CTASection = () => (
  <section id="cta" className="w-full py-12 md:py-24 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50 z-0"></div>
    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Commencer
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-montserrat">
            Prêt à Transformer Votre Espace?
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
            Réservez une consultation avec notre équipe pour discuter de votre
            projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="shine-effect bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 gap-1"
            >
              Réserver une Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10"
            >
              Voir les Tarifs
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur p-8">
          <h3 className="text-xl font-bold mb-4 font-montserrat">
            Demander un Devis
          </h3>
          <CTAForm />
        </div>
      </div>
    </div>
  </section>
);

export function CTAForm() {
  const { form, handleChange, handleSubmit, status } = useContactForm();

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nom</label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2 relative">
        <label htmlFor="projectType" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Type de Projet</label>
        <div className="relative">
          <select
            id="projectType"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            value={form.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez le type de projet</option>
            <option value="residential">Résidentiel</option>
            <option value="commercial">Commercial</option>
            <option value="event">Événement</option>
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-white" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
        <textarea
          id="message"
          className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Parlez-nous de votre projet"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full shine-effect">Envoyer la Demande</Button>
      {status === "success" && <p className="text-green-600">Votre demande a été envoyée !</p>}
      {status === "error" && <p className="text-red-600">Erreur lors de l'envoi. Réessayez.</p>}
    </form>
  );
}

export default CTASection;
