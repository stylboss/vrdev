import { CheckCircle, Layers, Camera, Globe, Layout } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">Nos Services</h1>
      <p className="text-lg text-center mb-12 text-muted-foreground">
        Découvrez notre gamme complète de services pour valoriser vos espaces et projets immobiliers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Globe className="h-10 w-10 text-primary" />}
          title="Visites Virtuelles 3D"
          description="Offrez une expérience immersive à vos clients grâce à des visites virtuelles interactives et réalistes."
        />
        <ServiceCard
          icon={<Camera className="h-10 w-10 text-primary" />}
          title="Photographie Professionnelle"
          description="Des photos de haute qualité pour mettre en valeur vos biens et attirer plus d'acheteurs ou de locataires."
        />
        <ServiceCard
          icon={<Layout className="h-10 w-10 text-primary" />}
          title="Plans 2D & 3D"
          description="Des plans détaillés et précis pour une meilleure compréhension de vos espaces."
        />
        <ServiceCard
          icon={<Layers className="h-10 w-10 text-primary" />}
          title="Modélisation 3D & Rendus"
          description="Des modèles 3D et rendus photoréalistes pour vos projets architecturaux et immobiliers."
        />
        <ServiceCard
          icon={<CheckCircle className="h-10 w-10 text-primary" />}
          title="Conseil & Accompagnement"
          description="Un accompagnement personnalisé pour optimiser la présentation et la commercialisation de vos biens."
        />
      </div>
    </main>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center bg-white/60 dark:bg-background/60 rounded-lg shadow-md p-6 text-center border border-white/10 hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2 text-primary-foreground">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
