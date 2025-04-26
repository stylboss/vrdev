import Link from "next/link";

const categories = [
  "Real Estate",
  "Technology",
  "Business",
  "Tips & Tricks",
  "Case Studies",
  "Industry News",
  "Tutorials",
  "Events",
];

const BlogCategories = () => (
  <div className="mt-16">
    <h2 className="text-2xl font-bold mb-6 font-montserrat">Categories</h2>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, i) => (
        <Link
          key={i}
          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted transition-colors"
        >
          <span className="font-medium font-montserrat">{category}</span>
          <span className="text-sm text-muted-foreground">{Math.floor(Math.random() * 10) + 1}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default BlogCategories;
