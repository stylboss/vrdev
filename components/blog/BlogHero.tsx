import React from "react";

const BlogHero = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Our Blog</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed font-inter">
            Latest news, tips, and insights about 3D virtual tours and Matterport technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BlogHero;
