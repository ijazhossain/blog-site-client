import { blogService } from "../services/blog.service";
import BlogCard from "@/components/modules/homepage/BlogCard";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      search: "",
    },
    {
      cache: "no-store",
      revalidate: 5000,
    },
  );
  console.log("data from home", data);

  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
