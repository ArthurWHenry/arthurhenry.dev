import type { NextPage } from "next";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/solid";
import classNames from "classnames";

// Assets
import { projects } from "../assets/data/projects";

// Components
import Header from "../components/header/component";
import Layout from "../components/layout/component";

// Styles
import styles from "../styles/Home.module.css";

type ProjectTypes = {
  name: string;
  description: string;
  link: string;
  altText?: string;
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Header pageTitle="home" />
      <div className="flex flex-col items-center justify-center space-y-2 p-2 sm:items-start">
        <div>
          <span className="text-lg font-semibold">Hello there 👋🏽</span>
          <div className="space-y-1">
            <p>
              My name is Arthur and I&apos;m currently a Software Engineer at
              Nielsen
            </p>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-2">
            <span className="font-semibold text-gray-800">
              Some projects I&apos;ve worked on
            </span>
          </div>
          <div className="w-full space-y-4 py-4">
            {projects.map(({ name, description, link }: ProjectTypes) => (
              <div
                key="name"
                className="flex flex-col space-y-1 rounded-lg border border-gray-100 bg-white px-4 py-2 shadow duration-100 ease-linear hover:shadow-none"
              >
                <Link
                  className="font-semibold text-gray-900"
                  href={link}
                  rel="noopenner noreferrer"
                  target="_blank"
                >
                  {name}
                </Link>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
