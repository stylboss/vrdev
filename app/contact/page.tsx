import ContactInfoCards from "./components/ContactInfoCards";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact Us | VirtualVista",
  description: "Get in touch with our team to discuss your virtual tour project.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
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
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 font-inter">
                  Have questions about our services or want to discuss a project? Fill out the form and our team will get back to you within 24 hours.
                </p>
                <ContactInfoCards />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 font-montserrat">Contact Form</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg overflow-hidden h-[400px] bg-muted">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
