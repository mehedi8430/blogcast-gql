import { getAllPosts } from "@/queries/blog-data";
import PostList from "../components/post/post-list";

const BlogPage = async () => {
  const posts = await getAllPosts([]);

  return <PostList posts={posts} />;
};

export default BlogPage;
