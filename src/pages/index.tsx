import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

// Assets

// Components
import { Layout, Recommendation, Section } from "@/src/components";

// Resources
import { recommendations } from "@/src/resources";

// Types
import { RecommendationProps } from "../types";

export default function Home(): React.ReactElement<any> {
  return (
    <>
      <NextSeo
        title="Home"
        description="Landing page for Arthur Henry's personal website."
      />
      <Layout>
        <div className="flex flex-col gap-10 md:gap-12">
          <Head>
            <title>Home</title>
          </Head>
          <main className="hero">
            <div className="min-w-0 flex-1 flex flex-col space-y-4 md:text-left">
              <h1 className="font-semibold text-[2rem] md:text-[2.5rem] leading-tight tracking-tight text-black dark:text-white">
                Hey, I&apos;m Arthur!
              </h1>
              <p>I’m a software engineer building web applications with React and TypeScript.</p>
              <p className="text-black dark:text-white">
                Whether I&apos;m working out at the gym, working on personal
                projects, or diving into the beauty of the French language, my
                days are a mix of passion and purpose.
              </p>
              <p className="text-black dark:text-white">
                Music is my soundtrack, books are my escape, and long walks
                are my therapy.
              </p>
              <Link href="/projects" className="section-list-link self-start font-semibold">
                View projects <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="w-28 md:w-52 shrink-0">
              <Image
                alt="Portrait of Arthur Henry."
                className="rounded-lg"
                priority={false}
                src="/Portrait.jpeg"
                width={512}
                height={512}
              />
            </div>
          </main>
          <figure className="quote">
            <blockquote>
              <p>
                “Sometimes what you don’t do is just as important as what you
                do.”
              </p>
            </blockquote>
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              — Greg McKeown
            </figcaption>
          </figure>
          <Section title="Recommendations">
            <div className="space-y-8 mt-4">
              {recommendations.map(
                (recommendation: RecommendationProps): React.ReactElement<any> => (
                  <Recommendation
                    key={recommendation.name}
                    {...recommendation}
                  />
                )
              )}
            </div>
          </Section>
        </div>
      </Layout>
    </>
  );
}
