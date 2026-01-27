import { blogService } from "@/app/services/blog.service";
import HistoryTable from "@/components/modules/user/history/HistoryTable";

async function HistoryPage() {
    const response=await blogService.getBlogPosts();
    console.log(response);
    const posts=response.data?.data||[];
    console.log(posts);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts}/>
    </div>
  );
}

export default HistoryPage;
