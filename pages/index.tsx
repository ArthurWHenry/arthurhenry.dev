import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/card/component";

// Components
import Layout from "../components/layout/component";

// Styles
import styles from "../styles/Home.module.css";

// Images
import Landscape from "../assets/images/Landscape.jpg";
import Header from "../components/header/component";
import Link from "next/link";

// So for each sentence, we create a new p tag in the component that's going
// to house this information.

const Home: NextPage = () => {
  return (
    <Layout>
      {/*
        Could potentially use a different image that is more fitting.

        Could use a square image for the full screen and then a long horizontal
        one for mobile.

        Think that could work really well.
      */}
      <Header pageTitle="Bonjour" />
      <div className="w-full p-2">
        <Image
          src={Landscape}
          alt="Arthur Henry."
          layout="responsive"
          className="z-0 select-none sm:rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-4 sm:items-start sm:px-2">
        <span className="text-lg font-semibold">I&apos;m Arthur Henry.</span>
        <p>Currently a Software Engineer at Nielsen.</p>
        <Link href="/about">
          <a className="mt-2 border-b border-gray-300 text-sm font-semibold">
            Read more about me here
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
