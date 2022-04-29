import { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout/component";

import Portrait from "../assets/images/Portrait.jpg";
import Header from "../components/header/component";

const About: NextPage = () => {
  return (
    <Layout>
      <Header pageTitle="About Me" />
      <div className="flex flex-col items-center space-y-4 py-4 px-4 text-center leading-loose tracking-wide sm:px-2 sm:text-left">
        <div className="flex flex-col items-center justify-center">
          <div className="h-64 w-64">
            <Image
              src={Portrait}
              alt="Arthur Henry."
              layout="responsive"
              className="select-none sm:rounded-lg"
              priority
            />
          </div>
          <span className="mt-1 text-xs text-gray-500">
            Graduation photo, May 2021
          </span>
        </div>
        <p>
          I&apos;m a Software Engineer based out in Maitland, Florida. I first
          got into coding back in high school while taking a web design course.
        </p>
        <p>
          I primarily use JavaScript, TypeScript, CSS, and a little bit of SQL
          through work and projects. As of right now, the framework I&apos;ve
          been using is React–along with TailwindCSS, to make applications look
          inviting.
        </p>
        <p>
          I&apos;ve always had an appreciation for web development and the
          endless amount of creativity you can put into it. Soon this passion
          grew into developing and designing applications. It&apos;s always been
          a space for me to explore that creativity while still being technical.
        </p>
        <p>
          I have a few hobbies. The main one is DJ&apos;ing, which has allowed
          me to release negative energy and replace it with more positive
          ones–music has always been my escape from reality. Lately, I&apos;ve
          also dedicated some time to learning French in hopes of visiting
          France in the near future.
        </p>
      </div>
    </Layout>
  );
};

export default About;
