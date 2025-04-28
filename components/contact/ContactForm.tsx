"use client";
import { sendContactEmail } from "./actions";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toastSuccess, toastError } from "@/utils/toast";
//import { useEffect } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      <Send className="mr-2 h-4 w-4" />
      {pending ? "Sending..." : "Send"}
    </Button>
  );
}

export default function ContactForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await sendContactEmail(formData);
    if (result.success) {
      toastSuccess("Your message has been sent successfully.");
      form.reset();
    } else {
      toastError(result.error || "Failed to send message.");
    }
  };

  // Simulate a random error toast for testing
  // useEffect(() => {
  //   if (Math.random() < 0.5) {
  //     toastError("Random simulated error!");
  //   }
  // }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="projectType"
          className="text-sm font-medium leading-none"
        >
          Project Type
        </label>
        <input
          id="projectType"
          name="projectType"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Enter the project type"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Enter your message"
          required
        />
      </div>
      <SubmitButton />
    </form>
  );
}