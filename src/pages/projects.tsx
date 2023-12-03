import Head from "next/head";

// Components
import { Layout, Project } from "@/src/components";

// Types
import { ProjectProps } from "@/src/types";

const projects: ProjectProps[] = [
  {
    name: "Roastly",
    inactive: false,
    link: "https://roastly.xyz/",
    about:
      "Geosocial networking application where you share your coffee order online.",
    uses: ["React", "TypeScript", "React-Query", "Supabase", "TailwindCSS"],
    year: 2023,
  },
  {
    name: "Streats",
    inactive: true,
    link: "https://gostreats.com",
    about:
      "Geolocation application that allows users to track live location of food trucks nearby.",
    uses: ["React", "TailwindCSS", "TypeScript"],
    year: 2021,
  },
  {
    name: "localhand",
    inactive: true,
    link: "https://localhand.vercel.app/",
    about:
      "Hackathon project that aims to help small businesses engage with their local community.",
    uses: ["React", "JavaScript", "TailwindCSS", "Figma"],
    year: 2020,
  },
  {
    name: "LEGO305",
    inactive: true,
    link: "https://youtu.be/b8VYoZhTU6c",
    about:
      "A project started to help envision a new Miami through Lego bricks.",
    uses: ["HTML", "CSS", "Bootstrap"],
    year: 2017,
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        <Head>
          <title>Projects</title>
        </Head>
        <main className="space-y-4">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </main>
      </div>
    </Layout>
  );
}