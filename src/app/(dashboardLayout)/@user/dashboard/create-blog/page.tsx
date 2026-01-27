import { blogService } from "@/app/services/blog.service";
import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";
import CreateBlogFromClient from "@/components/modules/user/createBlog/createBlogFromClient";



import { BlogPost } from "@/types";

async function CreateBlogPage() {
    const {data}=await blogService.getBlogPosts({},{cache:"no-store"});
    // console.log(data);
  return (
    <div>
       {/* <CreateBlogFormServer/>  */}
     <CreateBlogFromClient/>
      
    </div>
  );
}

export default CreateBlogPage;
