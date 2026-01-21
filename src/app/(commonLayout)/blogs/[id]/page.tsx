import { blogService } from "@/app/services/blog.service";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogPost } from "@/types";
interface BlogPostProps {
  res: {
    id: string;
    title: string;
    content: string;
    thumbnail: string | null;
    isFeatured: boolean;
    status: string;
    tags: string[];
    views: number;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    comments: string[];
    _count: { comments: number };
  };
}
//Shows only dynamic params

// export const dynamicParams=false;
export async function generateStaticParams() {
  const { data } = await blogService.getBlogPosts();
  return data?.data?.map((blog: BlogPost) => ({ id: blog.id })).splice(0,3);
}
async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: blog } = await blogService.getBlogById(id);
  console.log(blog);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>

          <CardTitle className="text-3xl font-bold leading-tight">
            {blog.title}
          </CardTitle>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              {new Date(blog.createdAt).toLocaleDateString()}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <p className="text-base leading-relaxed text-foreground">
            {blog.content}
          </p>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {blog.authorId.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">Author</p>
                <p className="text-muted-foreground truncate max-w-[180px]">
                  {blog.authorId}
                </p>
              </div>
            </div>

            <Badge
              variant={blog.status === "PUBLISHED" ? "default" : "outline"}
            >
              {blog.status}
            </Badge>
          </div>

          <Separator />
        </CardContent>
      </Card>
    </div>
  );
}
export default BlogPage;
