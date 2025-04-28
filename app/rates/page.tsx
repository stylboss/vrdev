import {
  Home,
  Building2,
  Briefcase,
  Ruler,
  MapPin,
  Euro,
  CreditCard,
  Apple,
  Landmark,
  Banknote,
  CircleDollarSign,
  Smartphone,
} from "lucide-react";

const paymentMethods = [
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    label: "Carte Bleue (TPE)",
  },
  { icon: <Apple className="h-6 w-6 text-primary" />, label: "Apple Pay" },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    label: "Google Pay",
  },
  { icon: <Banknote className="h-6 w-6 text-primary" />, label: "Chèque" },
  {
    icon: <Landmark className="h-6 w-6 text-primary" />,
    label: "Virement Bancaire",
  },
  {
    icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
    label: "Espèces",
  },
];

const rates = [
  {
    type: "Appartement",
    icon: <Building2 className="h-8 w-8 text-primary" />,
    prices: [
      { label: "Studio / 2 pièces", price: "90€" },
      { label: "3 pièces", price: "110€" },
      { label: "4 pièces", price: "130€" },
      { label: "5 pièces et +", price: "150€" },
    ],
  },
  {
    type: "Maison",
    icon: <Home className="h-8 w-8 text-primary" />,
    prices: [
      { label: "< 100 m²", price: "140€" },
      { label: "100-150 m²", price: "170€" },
      { label: "> 150 m²", price: "200€" },
    ],
  },
  {
    type: "Locaux Commerciaux",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    prices: [
      { label: "Jusqu'à 100 m²", price: "170€" },
      { label: "100-200 m²", price: "220€" },
      { label: "> 200 m²", price: "Sur devis" },
    ],
  },
];

export default function RatesPage() {
  return (
    <main className="w-full max-w-none mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">
        Tarifs
      </h1>
      <p className="text-lg text-center mb-10 text-muted-foreground">
        Nos tarifs sont adaptés à chaque type de bien. Un supplément de{" "}
        <span className="font-semibold text-primary">50€</span> s'applique
        au-delà d'un périmètre de 15km{" "}
        <MapPin className="inline h-5 w-5 text-primary align-text-bottom" />.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {rates.map((rate) => (
          <div
            key={rate.type}
            className="rounded-lg border border-white/10 bg-white/60 dark:bg-background/60 shadow-md p-6 text-center hover:shadow-xl transition-shadow flex flex-col items-center"
          >
            <div className="mb-3">{rate.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-primary-foreground">
              {rate.type}
            </h2>
            <ul className="mb-2">
              {rate.prices.map((p) => (
                <li
                  key={p.label}
                  className="flex justify-between gap-2 text-muted-foreground"
                >
                  <span>{p.label}</span>
                  <span className="font-bold text-primary">{p.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-center">
          Moyens de Paiement Acceptés
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {paymentMethods.map((method) => (
            <div key={method.label} className="flex flex-col items-center">
              {method.icon}
              <span className="mt-2 text-sm text-muted-foreground text-center">
                {method.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-muted-foreground text-sm mt-8">
        Pour toute demande spécifique ou devis personnalisé, n'hésitez pas à
        nous contacter !
      </div>
    </main>
  );
}
