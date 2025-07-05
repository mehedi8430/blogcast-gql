import PostDetails from "@/app/components/post/post-details";
import { getPost } from "@/queries/blog-data";

type Params = {
  slug: string;
};

const BlogDetailsPage = async ({ params: { slug } }: { params: Params }) => {
  console.log(slug);
  const post = await getPost(slug);
  return <PostDetails post={post} />;
};

export default BlogDetailsPage;
