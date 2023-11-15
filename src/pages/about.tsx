import Head from "next/head";

// Components
import Layout from "@/src/components/layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <div>
        <Head>
          <title>About</title>
        </Head>
        <div className="space-y-6">
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
                I&apos;m still trying to figure that part out, but it&apos;s
                still early in my journey and there&apos;s a lot more to be
                curious about.
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
          <div>
            <h2 className="about-secondary-header">What I&apos;m doing now</h2>
            <hr />
            <ul className="about-list">
              <li>
                Working on{" "}
                <Link
                  className="about-list-link"
                  href="https://www.roastly.xyz/"
                  target="_blank"
                >
                  Roastly
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="about-secondary-header">Random facts</h2>
            <hr />
            <ul className="about-list">
              <li>I&apos;ve been playing volleyball for almost 10 years</li>
              <li>I enjoy reading books about personal development</li>
              <li>
                I started building websites my sophomore year of high school
              </li>
              <li>J&apos;étudie le français</li>
            </ul>
          </div>
          <div>
            <h2 className="about-secondary-header">Tools</h2>
            <hr />
            <ul className="about-list">
              <li>
                This website is hosted on{" "}
                <Link
                  className="about-list-link"
                  href="https://vercel.com/"
                  target="_blank"
                >
                  Vercel
                </Link>{" "}
                and uses{" "}
                <Link
                  className="about-list-link"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  Next.js
                </Link>
              </li>
              <li>
                <b>Coding:</b>{" "}
                <Link
                  className="about-list-link"
                  href="https://code.visualstudio.com/"
                  target="_blank"
                >
                  Visual Studio Code
                </Link>{" "}
                with{" "}
                <Link
                  className="about-list-link"
                  href=" https://github.com/wesbos/cobalt2/"
                  target="_blank"
                >
                  Cobalt 2 Theme
                </Link>{" "}
                and{" "}
                <Link
                  className="about-list-link"
                  href=" https://philpl.gumroad.com/l/dank-mono/"
                  target="_blank"
                >
                  Dank Mono Font
                </Link>
              </li>
              <li>
                <b>Terminal:</b>{" "}
                <Link
                  className="about-list-link"
                  href="https://www.warp.dev/"
                  target="_blank"
                >
                  Warp
                </Link>
              </li>
              <li>
                <b>Productivity and Notes:</b>{" "}
                <Link
                  className="about-list-link"
                  href="https://www.notion.so/"
                  target="_blank"
                >
                  Notion
                </Link>
              </li>
              <li>
                <b>Music:</b>{" "}
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/"
                  target="_blank"
                >
                  Spotify
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="about-secondary-header">Songs</h2>
            <hr />
            <ul className="about-list">
              <li>
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/track/1t2YGrS7RAznI7zFR0aIIP?si=30e36c7999654b3d"
                  target="_blank"
                >
                  Speed of Plight by Loyle Carner
                </Link>
              </li>
              <li>
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/track/5amRIQxQgERN9wI1oMuRgw?si=9618799f8ac64b77"
                  target="_blank"
                >
                  Donne-moi ton cœuer by Louane
                </Link>
              </li>
              <li>
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/track/6WmIyn2fx1PKQ0XDpYj4VR?si=8e2827294cb84cc1"
                  target="_blank"
                >
                  Love It If We Made It by The 1975
                </Link>
              </li>
              <li>
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/track/3F1P0QzdXtBz0MXy7KIO5w?si=23f385b07e4447b1"
                  target="_blank"
                >
                  Fever by Dua Lipa and Angèle
                </Link>
              </li>
              <li>
                <Link
                  className="about-list-link"
                  href="https://open.spotify.com/track/3eP13S8D5m2cweMEg3ZDed?si=f5ea89a418b847e4"
                  target="_blank"
                >
                  Virginia Beach by Drake
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
