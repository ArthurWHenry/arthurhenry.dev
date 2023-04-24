import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Assets
import Document from "@/public/Resume.jpg";

// Components
import Layout from "@/src/components/layout/component";

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
        <div className="flex flex-col justify-center items-center space-y-2 p-4 sm:p-0">
          <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
          <div className="flex flex-col space-y-4">
            {projects.map(
              ({ name, link, about, uses }: ProjectType, idx: number) => (
                <div className="flex flex-col space-y-2" key={idx}>
                  <div className="flex justify-between items-end border-b">
                    <span className="font-bold text-lg text-gray-900">
                      {name}
                    </span>
                    <Link
                      className="text-sm text-blue-500 hover:underline transition duration-150 ease-linear hover:text-blue-900"
                      href={link}
                      target="_blank"
                      rel="noreferrer noopenner"
                    >
                      Link
                    </Link>
                  </div>
                  <p className="text-gray-700 tracking-wide">{about}</p>
                  <div className="flex sm:space-x-2 flex-col space-y-2 sm:space-y-0 sm:flex-row">
                    {uses.sort().map((use, idx) => (
                      <span
                        className="bg-gray-200 px-2 py-1 rounded-lg text-sm text-gray-700"
                        key={idx}
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Resume</h2>
          <Image
            className="hidden md:block w-full"
            src={Document}
            alt="Image of Arthur's resume."
          />
          <a
            className="sm:hidden text-gray-50 bg-blue-400 px-4 py-2 rounded-lg"
            target="_blank"
            rel="noorefferer noopenner"
            href="Resume.pdf"
            download="Resume_Arthur_Henry.pdf"
          >
            Download my resume
          </a>
        </div>
      </div>
    </Layout>
  );
}
