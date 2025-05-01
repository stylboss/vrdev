import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import LanguageToggle from "@/components/language-toggle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import ContactForm from "@/components/contact/ContactForm";
import { Menu } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgb(237,235,227)] dark:bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(237,235,227)]/80 dark:supports-[backdrop-filter]:bg-background/20">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-300 via-green-200 to-green-100 opacity-70 blur dark:from-primary dark:to-primary/50"></div>
          <div className="relative rounded-full p-1">
            <Image
              src="/vrdev-logo.svg"
              alt="vrdev Logo"
              width={175}
              height={175}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
          Accueil
        </Link>
        <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">
          Portfolio
        </Link>
        <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
      {/* Mobile burger menu */}
      <div className="md:hidden flex items-center">
        <Dialog>
          <DialogTrigger asChild>
            <button className="p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Ouvrir le menu">
              <Menu className="h-6 w-6 text-primary" />
            </button>
          </DialogTrigger>
          <DialogContent className="p-0 max-w-xs w-full rounded-2xl">
            <DialogHeader>
              <DialogTitle>Menu</DialogTitle>
            </DialogHeader>
            <nav className="flex flex-col gap-4 p-6">
              <Link href="/" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => {}}>
                Accueil
              </Link>
              <Link href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => {}}>
                Portfolio
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => {}}>
                Services
              </Link>
              <Link href="/blog" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => {}}>
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => {}}>
                Contact
              </Link>
              <DialogClose asChild>
                <button className="mt-6 w-full py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90 transition">Fermer</button>
              </DialogClose>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="shine-effect bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              Obtenir un Devis
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Obtenir un Devis</DialogTitle>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </header>
);

export default Header;
