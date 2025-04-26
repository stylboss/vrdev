import FeaturedArticle from "./components/FeaturedArticle";
import RecentArticles from "./components/RecentArticles";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";

export const metadata = {
  title: "Blog | VirtualVista",
  description:
    "Latest news, tips, and insights about 3D virtual tours and Matterport technology.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">
                  Our Blog
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-inter">
                  Latest news, tips, and insights about 3D virtual tours and Matterport technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <FeaturedArticle />
              <RecentArticles />
            </div>
            <Categories />
            <Newsletter />
          </div>
        </section>
      </main>
    </div>
  );
}
