"use client";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/hooks/useContactForm";

export default function ContactForm() {
  const { form, handleChange, handleSubmit, status } = useContactForm();

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid gap-3">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium leading-none">Nom</label>
          <input
            id="name"
            className="flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-medium leading-none">Email</label>
          <input
            id="email"
            type="email"
            className="flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Entrez votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="projectType" className="text-xs font-medium leading-none">Type de Projet</label>
          <select
            id="projectType"
            className="flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs pr-7 file:border-0 file:bg-transparent file:text-xs file:font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            value={form.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez le type de projet</option>
            <option value="residential">Résidentiel</option>
            <option value="commercial">Commercial</option>
            <option value="event">Événement</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-medium leading-none">Message</label>
          <textarea
            id="message"
            className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Parlez-nous de votre projet"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full shine-effect text-xs py-2">Envoyer la Demande</Button>
      {status === "success" && <p className="text-green-600 text-xs">Votre demande a été envoyée !</p>}
      {status === "error" && <p className="text-red-600 text-xs">Erreur lors de l'envoi. Réessayez.</p>}
    </form>
  );
}
