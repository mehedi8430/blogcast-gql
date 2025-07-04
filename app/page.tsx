import { getAllPosts } from "@/queries/blog-data";

export default async function HomePage() {
  const posts = await getAllPosts([]);
  console.log({ posts });

  return (
    <div>
      <h1>blog cast</h1>
    </div>
  );
}
