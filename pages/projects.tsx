import { NextPage } from "next";
import Link from "next/link";
import classNames from "classnames";
import { LinkIcon } from "@heroicons/react/solid";

// Components
import Header from "../components/header/component";
import Layout from "../components/layout/component";

// Data
import { projects } from "../assets/data/projects";

// Types
type ProjectTypes = {
  name: string;
  description: string;
  link: string;
  altText?: string;
};

const Projects: NextPage = () => {
  return (
    <Layout>
      <Header pageTitle="Projects" />
      <div className="space-y-2 py-4 px-4 sm:px-2">
        {projects.map(({ name, description, link }: ProjectTypes) => (
          <div key="name" className="flex flex-col space-y-1 py-2">
            <div className="flex items-center justify-between space-x-1 border-b py-1">
              <span className="font-semibold text-gray-900">{name}</span>
              <a
                href={link}
                target="_blank"
                rel="noopenner noreferrer"
                className={classNames(
                  "text-gray-900 transition duration-150 ease-linear hover:text-gray-500",
                  link.length < 1 && "pointer-events-none text-gray-500"
                )}
              >
                <LinkIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
