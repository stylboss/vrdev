import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import LanguageToggle from "@/components/language-toggle";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgb(237,235,227)] dark:bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(237,235,227)]/80 dark:supports-[backdrop-filter]:bg-background/20">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-300 via-green-200 to-green-100 opacity-70 blur dark:from-primary dark:to-primary/50"></div>
          <div className="relative rounded-full bg-background p-1">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="vrdev Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
        <span className="text-xl font-bold font-montserrat">vrdev</span>
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
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
        <Button className="shine-effect bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
          Obtenir un Devis
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
