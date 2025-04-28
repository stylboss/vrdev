import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20">
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
      <div className="space-y-4">
        <h3 className="text-sm font-medium font-montserrat">vrdev</h3>
        <p className="text-muted-foreground font-inter text-sm">
          Solutions immersives pour visites virtuelles, modélisation 3D et photographie professionnelle.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Facebook</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
            </svg>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Twitter</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .36.04.72.12 1.06C7.69 5.41 4.07 3.67 1.64.95c-.4.69-.63 1.49-.63 2.35 0 1.62.82 3.05 2.07 3.89A4.48 4.48 0 01.96 6v.06c0 2.26 1.6 4.14 3.74 4.57-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08.59 1.84 2.3 3.18 4.33 3.22A9.04 9.04 0 010 19.54 12.82 12.82 0 007.29 22c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.39-.01-.58A9.2 9.2 0 0023 3z" />
            </svg>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Instagram</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium font-montserrat">Services</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Visites Virtuelles
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Modélisation 3D
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Photographie Professionnelle
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Plans d'Étage
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium font-montserrat">Entreprise</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-inter">
              Carrières
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium font-montserrat">Contact</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <span className="text-muted-foreground font-inter">
              123 Rue Virtuelle
              <br />
              Montréal, QC H2X 1Y6
              <br />
              Canada
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground font-inter">+1 (514) 555-0123</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground font-inter">info@vrdev.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground font-inter">
      <p> {new Date().getFullYear()} vrdev. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
