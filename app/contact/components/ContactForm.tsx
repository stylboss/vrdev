"use client";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/components/contact/actions";
import { toastSuccess, toastError } from "@/utils/toast";

export default function ContactForm() {
  async function clientAction(formData: FormData) {
    const res: { success: boolean; error?: string } = await sendContactEmail(formData);
    if (res && res.success) {
      toastSuccess("Votre message a été envoyé avec succès!");
    } else {
      toastError(res?.error || "Une erreur s'est produite. Veuillez réessayer.");
    }
  }
  return (
    <form className="space-y-3" action={clientAction}>
      <div className="grid gap-3">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium leading-none">Nom</label>
          <input
            id="name"
            name="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-medium leading-none">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="projectType" className="text-xs font-medium leading-none">Type de Projet</label>
          <select
            id="projectType"
            name="projectType"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
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
            name="message"
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
            placeholder="Parlez-nous de votre projet"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full shine-effect text-xs py-2">Envoyer la Demande</Button>
    </form>
  );
}
