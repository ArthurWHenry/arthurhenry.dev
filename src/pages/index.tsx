import Head from "next/head";

// Components
import Layout from "@/src/components/layout/component";
import TypingText from "../components/helpers/TypingText";

// Lib
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <div className="flex flex-col space-y-2 py-2">
        <Head>
          <title>Home</title>
        </Head>
        <main className="flex flex-col justify-center items-start p-4 sm:p-0">
          <span className="text-2xl text-gray-900 font-bold">Hello 👋🏽</span>
          <div>
            <div className="flex space-x-1">
              <span>I&apos;m currently</span>
              <TypingText
                strings={[
                  "working on this website.",
                  "building a coffee app.",
                  "working at Nielsen.",
                  "learning Rust.",
                  "« pratiquant mon français. »",
                ]}
                typeSpeed={1500}
              />
            </div>
          </div>
        </main>
        <section className="flex flex-col justify-center items-start p-4 sm:p-0">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Posts</h2>
          <div className="divide-y w-full">
            {allPostsData.slice(0, 3).map(({ id, date, title }: any) => (
              <div
                key={id}
                className="flex flex-col justify-center items-start py-2"
              >
                <Link
                  className="text-gray-700 text-normal tracking-wide transition duration-150 ease-linear hover:text-gray-900"
                  href={`/posts/${id}`}
                >
                  {title}
                </Link>
                <span className="text-gray-900">{id}</span>
                <span className="text-gray-500">{date}</span>
              </div>
            ))}
          </div>
        </section>
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
