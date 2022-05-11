import { NextPage } from "next";
import Link from "next/link";
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
              <Link href={link} passHref>
                <LinkIcon className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
