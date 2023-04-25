import Head from "next/head";

// Components
import Layout from "@/src/components/layout/component";

export default function About() {
  return (
    <Layout>
      <>
        <Head>
          <title>About</title>
        </Head>
        <div className="flex flex-col justify-center items-center space-y-2 p-4 sm:p-0">
          <h2 className="text-2xl font-semibold text-gray-900">About</h2>
          <div className="leading-loose tracking-wide space-y-2 flex flex-col text-left">
            <p>
              Hello, there! My name is Arthur and I&apos;m a Software Engineer
              based out in Maitland, Florida.
            </p>
            <p>
              I primarily use TypeScript (and JavaScript, occasionally) within
              personal projects and work. It&apos;s provided me the ability to
              build meaningful and user-centric applications while brining out
              the best in me at the same time.
            </p>
            <p>
              I&apos;ve always had an appreciation for building web applications
              and the amount of creativity you can put into it. It&apos;s always
              been a space for me to explore myself while improving my techincal
              understanding of programming.
            </p>
            <p>
              Aside from web development, I&apos;m either playing volleyball or
              looking to expand my musical knowledge. Along with programming,
              I&apos;ve had a passion for music production and DJ&apos;ing which
              has been therapeutic when I need to step away from my daily
              routine.
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
}
