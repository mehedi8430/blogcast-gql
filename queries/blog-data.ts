import { getClient } from "@/lib/graphQLClient";
import { TAllPostsResponse, TPostDetailsResponse } from "@/types";
import { gql } from "graphql-request";

export const getAllPosts = async (tags: string[]) => {
  const client = getClient();

  const data = await client.request<TAllPostsResponse>(
    gql`
      query allPosts($tags: [ObjectId!]) {
        publication(host: "blog.greenroots.info") {
          title
          posts(first: 20, filter: { tags: $tags }) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                author {
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    { tags: tags }
  );

  return data.publication.posts.edges;
};

export const getPost = async (slug: string) => {
  const client = getClient();

  const data = await client.request<TPostDetailsResponse>(
    gql`
      query postDetails($slug: String!) {
        publication(host: "blog.greenroots.info") {
          post(slug: $slug) {
            author {
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content {
              html
            }
            tags {
              name
              slug
              id
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
    { slug: slug }
  );

  return data.publication.post;
};
