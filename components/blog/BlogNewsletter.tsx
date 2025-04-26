import { Button } from "@/components/ui/button";

const BlogNewsletter = () => (
  <div className="mt-16 rounded-lg bg-muted p-8">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold font-montserrat">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground font-inter">
          Get the latest news and updates about 3D virtual tours and Matterport technology.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[300px]"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  </div>
);

export default BlogNewsletter;
