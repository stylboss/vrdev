import React from "react";

const ContactHero = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Contact Us</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-inter">
            Get in touch with our team to discuss your project or schedule a consultation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactHero;
