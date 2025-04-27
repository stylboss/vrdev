"use client";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/components/hooks/useContactForm";

export default function ContactForm() {
  const { form, handleChange, handleSubmit, status } = useContactForm();

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
        <input id="name" type="text" className="w-full rounded-md border px-3 py-2 text-sm" required value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input id="email" type="email" className="w-full rounded-md border px-3 py-2 text-sm" required value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-1">Type de Projet</label>
        <select id="projectType" className="w-full rounded-md border px-3 py-2 text-sm" value={form.projectType} onChange={handleChange}>
          <option value="">Sélectionnez le type de projet</option>
          <option value="residential">Résidentiel</option>
          <option value="commercial">Commercial</option>
          <option value="event">Événement</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" className="w-full rounded-md border px-3 py-2 text-sm" rows={4} required value={form.message} onChange={handleChange} />
      </div>
      <Button type="submit" className="w-full">Envoyer la Demande</Button>
      {status === "success" && <p className="text-green-600">Votre demande a été envoyée !</p>}
      {status === "error" && <p className="text-red-600">Erreur lors de l'envoi. Réessayez.</p>}
    </form>
  );
}
