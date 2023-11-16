import Head from "next/head";
import Link from "next/link";

// Components
import { SectionLink, Layout, Section } from "@/src/components";

// Resources
import { songs } from "@/src/resources";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <Head>
          <title>About</title>
        </Head>
        <main>
          <div className="pb-2">
            <h1 className="text-3xl text-gray-900 dark:text-gray-50 font-bold">
              About me
            </h1>
          </div>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              Hey, I&apos;m Arthur! I&apos;m a Software Engineer working
              remotely from Orlando. I graduated with a bachelor&apos;s in
              Computer Science from the University of Central Florida in hopes
              of working on technology that changes or improves our lives.
              I&apos;m still trying to figure that part out, but it&apos;s still
              early in my journey and there&apos;s a lot more to be curious
              about.
            </p>
            <p>
              I created this website so to share some aspects of my life with
              the world. You can check out the{" "}
              <Link href="/projects" className="section-list-link">
                projects
              </Link>{" "}
              page for some of the things I&apos;ve worked on.
            </p>
          </div>
        </main>
        <Section title="What I'm doing now">
          <ul className="section-list">
            <li>
              Working on{" "}
              <SectionLink href="https://www.roastly.xyz/" text="Roastly" />
            </li>
            <li>J&apos;étudie le français</li>
          </ul>
        </Section>
        <Section title="Random facts">
          <ul className="section-list">
            <li>I&apos;ve been playing volleyball for almost 10 years</li>
            <li>I enjoy reading books about personal development</li>
            <li>
              I started building websites my sophomore year of high school
            </li>
          </ul>
        </Section>
        <Section title="Tools">
          <ul className="section-list">
            <li>
              This website is hosted on{" "}
              <SectionLink href="https://vercel.com/" text="Vercel" /> and is
              built with{" "}
              <SectionLink href="https://nextjs.org/" text="Next.js" />
            </li>
            <li>
              <b>Coding:</b>{" "}
              <SectionLink
                href="https://code.visualstudio.com/"
                text="Visual Studio Code"
              />{" "}
              with{" "}
              <SectionLink
                href=" https://github.com/wesbos/cobalt2/"
                text="Cobalt 2 Theme"
              />{" "}
              and{" "}
              <SectionLink
                href=" https://philpl.gumroad.com/l/dank-mono/"
                text="Dank Mono Font"
              />
            </li>
            <li>
              <b>Terminal:</b>{" "}
              <SectionLink href="https://www.warp.dev/" text="Warp" />
            </li>
            <li>
              <b>Productivity and Notes:</b>{" "}
              <SectionLink href="https://www.notion.so/" text="Notion" />
            </li>
            <li>
              <b>Music:</b>{" "}
              <SectionLink href="https://open.spotify.com/" text="Spotify" />
            </li>
          </ul>
        </Section>
        <Section title="Songs">
          <ul className="section-list">
            {songs.map((song) => (
              <li key={song.link}>
                <SectionLink href={song.link} text={song.name} />
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Layout>
  );
}
