import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChevronDownIcon from "@/components/ChevronDownIcon";
import { useContactForm } from "@/components/hooks/useContactForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/contact/ContactForm";

const CTASection = () => (
  <section id="cta" className="w-full py-6 sm:py-8 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50 z-0"></div>
    <div className="container px-2 sm:px-3 relative z-10">
      <div className="grid gap-4 sm:gap-6 items-center sm:grid-cols-2">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-primary/10 px-2 py-0.5 text-xs text-primary">
            Commencer
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight font-montserrat">
            Prêt à Transformer Votre Espace?
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm font-inter">
            Réservez une consultation avec notre équipe pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="w-full shine-effect bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 gap-1 text-xs"
                >
                  Réserver une Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xs w-full p-2 rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-base">Réserver une Consultation</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-xs"
                >
                  Voir les Tarifs
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-xs sm:max-w-2xl md:max-w-[65vw] lg:max-w-[65vw] p-2 rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-base">Nos Tarifs</DialogTitle>
                </DialogHeader>
                <iframe
                  src="/rates"
                  title="Tarifs"
                  className="w-full h-72 md:h-[60vh] rounded-lg border-none"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur p-3 w-full max-w-full">
          <h3 className="text-sm font-bold mb-2 font-montserrat">
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
      <div className="grid gap-4 sm:grid-cols-1">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nom</label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2 relative">
        <label htmlFor="projectType" className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Type de Projet</label>
        <div className="relative">
          <select
            id="projectType"
            className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-10 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
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
        <label htmlFor="message" className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
        <textarea
          id="message"
          className="flex min-h-[100px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Parlez-nous de votre projet"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full shine-effect text-xs">Envoyer la Demande</Button>
      {status === "success" && <p className="text-green-600 text-xs">Votre demande a été envoyée !</p>}
      {status === "error" && <p className="text-red-600 text-xs">Erreur lors de l'envoi. Réessayez.</p>}
    </form>
  );
}

export default CTASection;
