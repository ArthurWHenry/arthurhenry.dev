import Head from "next/head";

// Components
import Layout from "@/src/components/layout";

// Types
type ProjectType = {
  name: string;
  link: string;
  about: string;
  uses: string[];
};

const projects: ProjectType[] = [
  {
    name: "Roastly",
    link: "https://roastly.xyz/",
    about:
      "Geosocial networking application where you share your coffee order online.",
    uses: ["React", "TypeScript", "React-Query", "Supabase", "TailwindCSS"],
  },
  {
    name: "Streats",
    link: "https://gostreats.com",
    about:
      "Geolocation application that allows users to track live location of food trucks nearby.",
    uses: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    name: "localhand",
    link: "https://localhand.vercel.app/",
    about:
      "Hackathon project that aims to help small businesses engage with their local community.",
    uses: ["React", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    name: "LEGO305",
    link: "https://youtu.be/b8VYoZhTU6c",
    about:
      "A project started to help envision a new Miami through Lego bricks.",
    uses: ["HTML", "CSS", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <Layout>
      <div className="flex flex-col space-y-2 py-2">
        <Head>
          <title>Experience</title>
        </Head>
      </div>
    </Layout>
  );
}
