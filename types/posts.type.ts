export type TPost = {
  author: {
    name: string;
    profilePicture: string;
  };
  title: string;
  subtitle: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  };
  tags: {
    name: string;
    slug: string;
    id: string;
  }[];
  publishedAt: string;
  readTimeInMinutes: number;
};

export type TEdges = {
  node: TPost;
};

export type TAllPostsResponse = {
  publication: {
    title: string;
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      edges: TEdges[];
    };
  };
};

export type TPostDetails = Omit<TPost, "brief" | "slug"> & {
  content: {
    html: string;
  };
};

export type TPostDetailsResponse = {
  publication: {
    post: TPostDetails;
  };
};
