import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfoCards() {
  const cards = [
    {
      icon: <MapPin className="h-4 w-4 text-primary" />,
      title: "Our Office",
      value: (
        <p className="text-muted-foreground font-inter text-xs">
          2O cite irlandais<br />Arcueil, 94110<br />France
        </p>
      ),
    },
    {
      icon: <Phone className="h-4 w-4 text-primary" />,
      title: "Phone",
      value: <p className="text-muted-foreground font-inter text-xs">+33 6 52 11 26 54</p>,
    },
    {
      icon: <Mail className="h-4 w-4 text-primary" />,
      title: "Email",
      value: <p className="text-muted-foreground font-inter text-xs">contact@vrdev.com</p>,
    },
    {
      icon: <Clock className="h-4 w-4 text-primary" />,
      title: "Business Hours",
      value: (
        <p className="text-muted-foreground font-inter text-xs">
          Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-3 text-xs">
      {cards.map((card, idx) => (
        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/70 dark:bg-background/60 border border-white/10 shadow-sm">
          <span className="text-primary">{card.icon}</span>
          <div>
            <div className="font-semibold">{card.title}</div>
            <div className="text-muted-foreground">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
