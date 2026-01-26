import { blogService } from "@/app/services/blog.service";
import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";
import { BlogPost } from "@/types";

async function CreateBlogPage() {
    const {data}=await blogService.getBlogPosts({},{cache:"no-store"});
    console.log(data);
  return (
    <div>
      <CreateBlogFormServer/>
      {data?.data?.map((item:BlogPost)=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default CreateBlogPage;
