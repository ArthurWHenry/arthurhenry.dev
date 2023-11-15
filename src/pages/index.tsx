import Head from "next/head";
import Image from "next/image";

// Assests
import Portrait from "@/public/Portrait.jpeg";

// Components
import { Layout } from "@/src/components";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <Head>
          <title>Home</title>
        </Head>
        <main className="hero">
          <div className="flex flex-col space-y-4 md:text-left">
            <p className="font-semibold text-xl text-gray-900 dark:text-gray-50">
              👋 Hey, I&apos;m Arthur!
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              🏋️ Whether I&apos;m in the zone at the gym, immersed in code, or
              delving into the beauty of the French language, my days are a mix
              of passion and purpose.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              🎧 Music is my soundtrack, books are my escape, and long walks are
              my therapy.
            </p>
          </div>
          <div className="w-48 md:w-128 hidden md:block">
            <Image
              alt="Portrait of Arthur Henry."
              className="rounded-lg"
              priority={false}
              src={Portrait}
            />
          </div>
        </main>
        <div>
          <div className="quote">
            <p>
              “Sometimes what you don’t do is just as important as what you do.”
            </p>
            <p>- Greg McKeown</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
