import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => (
  <form className="space-y-4">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
      <input
        id="name"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        placeholder="Enter your name"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
      <input
        id="email"
        type="email"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        placeholder="Enter your email"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="phone" className="text-sm font-medium leading-none">Phone</label>
      <input
        id="phone"
        type="tel"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        placeholder="Enter your phone number"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="service" className="text-sm font-medium leading-none">Service Interested In</label>
      <select
        id="service"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option value="">Select a service</option>
        <option value="virtual-tours">Virtual Tours</option>
        <option value="3d-modeling">3D Modeling</option>
        <option value="photography">Professional Photography</option>
        <option value="floor-plans">Floor Plans</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
      <textarea
        id="message"
        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        placeholder="Tell us about your project"
      ></textarea>
    </div>
    <Button type="submit" className="w-full gap-1">
      Send Message
      <Send className="h-4 w-4" />
    </Button>
  </form>
);

export default ContactForm;
