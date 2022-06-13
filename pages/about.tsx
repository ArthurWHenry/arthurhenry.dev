import { NextPage } from "next";
import useSWR from "swr";
import Image from "next/image";

// Components
import Header from "../components/header/component";
import Layout from "../components/layout/component";

// Images
import Portrait from "../assets/images/Portrait.jpg";

// Helpers
import fetcher from "../lib/fetcher";
import { useEffect } from "react";
import { getTopArtistsTracks } from "../lib/spotify";

type Art = {
  height: number;
  url: string;
  width: number;
};

type Track = {
  id: string;
  title: string;
  trackUrl: string;
  artist: string;
  art: Art;
};

type Artist = {
  id: string;
  title: string;
  artistUrl: string;
  art: Art;
  genre: string;
};

const { SPOTIFY_CLIENT_ID } = process.env;

const About: NextPage = () => {
  const { data: tracks, error } = useSWR("/api/top-tracks", fetcher);
  // const { data: artists } = useSWR("/api/top-artists", fetcher);
  // console.log(tracks);
  console.log(tracks);

  return (
    <Layout>
      <Header pageTitle="About Me" />
      <div className="flex flex-col items-center py-4 px-4 sm:px-2">
        <div className="mb-4 flex flex-col items-center justify-center">
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
        <div className="space-y-4 text-center leading-loose tracking-normal sm:text-left">
          <p>
            I first got into coding back in high school while taking a web
            design course. Today, I&apos;m a Software Engineer based out in
            Orlando, Florida.
          </p>
          <p>
            I&apos;ve always appreciated Front End Development and the endless
            amount of creativity you can put into it. Soon, this passion grew
            into building applications that reflect my interests. It&apos;s
            allowed me to have this space to explore creativity while still
            being technical.
          </p>
          <p>
            The majority of the work I do today revolves around JavaScript,
            TypeScript, CSS, and a little bit of SQL. The main framework
            I&apos;ve been using is React-along with Tailwind to style my
            applications.
          </p>
          <p>
            Outside of development (or engineering), I spent most of my time at
            the gym, walking around the lake nearby, or learning french. It has
            provided me with a consistent schedule to stay grounded and happy.
          </p>
          <p>
            If you&apos;d like to learn more about me or collaborate on a
            project please feel free to reach out.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
