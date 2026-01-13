"use client";

import { useEffect } from "react";

function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div>
      <h1>Something went wrong : Please try again later</h1>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}

export default AboutError;
