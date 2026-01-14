export const dynamic = "force-dynamic";
async function AboutPage() {
  //For simulating load time
  await new Promise((resolve) => setTimeout(resolve, 4000));
  //  throw new Error("Something went wrong!!")
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}

export default AboutPage;
