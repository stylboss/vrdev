import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">Ready to Create Your Own Virtual Tour?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6 font-inter">
          Contact us today to discuss how we can create an immersive virtual experience for your space.
        </p>
        <Button size="lg">Get a Quote</Button>
      </div>
    </section>
  );
}
