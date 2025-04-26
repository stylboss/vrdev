import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input id="name" type="text" className="w-full rounded-md border px-3 py-2 text-sm" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input id="email" type="email" className="w-full rounded-md border px-3 py-2 text-sm" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea id="message" className="w-full rounded-md border px-3 py-2 text-sm" rows={4} required />
      </div>
      <Button type="submit" className="flex items-center gap-2">
        <Send className="h-4 w-4" /> Send Message
      </Button>
    </form>
  );
}
