import { blogService } from "@/app/services/blog.service";
import HistoryTable from "@/components/modules/user/history/HistoryTable";
import PaginationControl from "@/components/ui/pagination-control";


async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const response = await blogService.getBlogPosts({ page });

  const posts = response.data?.data || [];
  const pagination = response.data?.pagination || {
    limit: 10,
    page: 1,
    total: 0,
    totalPages: 1,
  };
  console.log(pagination);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts} />
      <PaginationControl meta={pagination} />
    </div>
  );
}

export default HistoryPage;
