import Head from "next/head";
import Link from "next/link";

// Components
import { AboutLink, Layout, Section } from "@/src/components";

export default function About() {
  const songs = [
    {
      name: "Speed of Plight by Loyle Carner",
      link: "https://open.spotify.com/track/1t2YGrS7RAznI7zFR0aIIP?si=30e36c7999654b3d",
    },
    {
      name: "Donne-moi ton cœur by Louane",
      link: "https://open.spotify.com/track/5amRIQxQgERN9wI1oMuRgw?si=9618799f8ac64b77",
    },
    {
      name: "Love It If We Made It by The 1975",
      link: "https://open.spotify.com/track/6WmIyn2fx1PKQ0XDpYj4VR?si=8e2827294cb84cc1",
    },
    {
      name: "Fever by Dua Lipa and Angèle",
      link: "https://open.spotify.com/track/3F1P0QzdXtBz0MXy7KIO5w?si=23f385b07e4447b1",
    },
    {
      name: "Virginia Beach by Drake",
      link: "https://open.spotify.com/track/3eP13S8D5m2cweMEg3ZDed?si=f5ea89a418b847e4",
    },
  ];

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
              remotely out of Orlando. I graduated with a bachelor&apos;s in
              Computer Science from the University of Central Florida in hopes
              of working on technology that changes or improves our lives.
              I&apos;m still trying to figure that part out, but it&apos;s still
              early in my journey and there&apos;s a lot more to be curious
              about.
            </p>
            <p>
              I created this website so to share some aspects of my life with
              the world. You can check out the{" "}
              <Link href="/projects" className="about-list-link">
                projects
              </Link>{" "}
              page for some of the things I&apos;ve worked on.
            </p>
          </div>
        </main>
        <Section title="What I'm doing now">
          <li>
            Working on{" "}
            <AboutLink href="https://www.roastly.xyz/" text="Roastly" />
          </li>
        </Section>
        <Section title="Random facts">
          <li>I&apos;ve been playing volleyball for almost 10 years</li>
          <li>I enjoy reading books about personal development</li>
          <li>I started building websites my sophomore year of high school</li>
          <li>J&apos;étudie le français</li>
        </Section>
        <Section title="Tools">
          <li>
            This website is hosted on{" "}
            <AboutLink href="https://vercel.com/" text="Vercel" /> and uses{" "}
            <AboutLink href="https://nextjs.org/" text="Next.js" />
          </li>
          <li>
            <b>Coding:</b>{" "}
            <AboutLink
              href="https://code.visualstudio.com/"
              text="Visual Studio Code"
            />{" "}
            with{" "}
            <AboutLink
              href=" https://github.com/wesbos/cobalt2/"
              text="Cobalt 2 Theme"
            />{" "}
            and{" "}
            <AboutLink
              href=" https://philpl.gumroad.com/l/dank-mono/"
              text="Dank Mono Font"
            />
          </li>
          <li>
            <b>Terminal:</b>{" "}
            <AboutLink href="https://www.warp.dev/" text="Warp" />
          </li>
          <li>
            <b>Productivity and Notes:</b>{" "}
            <AboutLink href="https://www.notion.so/" text="Notion" />
          </li>
          <li>
            <b>Music:</b>{" "}
            <AboutLink href="https://open.spotify.com/" text="Spotify" />
          </li>
        </Section>
        <Section title="Songs">
          {songs.map((song) => (
            <li key={song.link}>
              <AboutLink href={song.link} text={song.name} />
            </li>
          ))}
        </Section>
      </div>
    </Layout>
  );
}
