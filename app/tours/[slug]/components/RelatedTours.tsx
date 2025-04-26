import Link from "next/link";
import Image from "next/image";

export default function RelatedTours() {
  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6 font-montserrat">Related Tours</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
            >
              <Link href="#" className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Related Tour ${i + 1}`}
                    alt={`Related Tour ${i + 1}`}
                    width={400}
                    height={300}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 font-montserrat">Related Project {i + 1}</h3>
                  <p className="text-muted-foreground text-sm font-inter">
                    Another impressive virtual tour in our portfolio.
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
