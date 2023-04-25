import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../../lib/mardownToHtml";
import Layout from "@/src/components/layout/component";

import markdownStyles from "../../styles/mardown-styles.module.css";

export default function Post({ post, morePosts, preview }: any) {
  const router = useRouter();
  const title = `${post.title} - Blog`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <>
        <main>
          {router.isFallback ? (
            <span>Loading…</span>
          ) : (
            <>
              <article className="p-4">
                <Head>
                  <title>{title}</title>
                </Head>
                <div
                  className={markdownStyles["markdown"]}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
            </>
          )}
        </main>
      </>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
