"use client";
import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";
function AboutPage() {
  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);
  // console.log(data);
  useEffect(() => {
    (async () => {
      const { data, error } = await getBlogs();
      setData(data);
      setError(error);
    })();
  }, []);
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}

export default AboutPage;
