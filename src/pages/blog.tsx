import Head from "next/head";

// Components
import Layout from "@/src/components/layout/component";

// Lib
import { getSortedPostsData } from "@/lib/posts";

export default function Resume({ allPostsData }: any) {
  return (
    <Layout>
      <div className="flex flex-col space-y-2 py-2">
        <Head>
          <title>Blog</title>
        </Head>
        <main className="flex flex-col justify-center items-start p-4 sm:p-0">
          <h2 className="text-2xl font-semibold text-gray-900">Posts</h2>
          <div className="divide-y w-full">
            {allPostsData.map(({ id, date, title }: any) => (
              <div
                key={id}
                className="flex flex-col justify-center items-start py-2"
              >
                <span className="text-gray-700 text-normal tracking-wide">
                  {title}
                </span>
                <span className="text-gray-900">{id}</span>
                <span className="text-gray-500">{date}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
