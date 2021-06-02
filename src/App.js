/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const projects = [
  {
    name: 'slicesum',
    description: 'A budgeting app designed for students and new adults.',
    link: 'https://slicesum.com/',
  },
  {
    name: 'Streats',
    description: 'Find your favorite food truck.',
    link: 'https://www.gostreats.com/',
  },
  {
    name: 'Theta Tau',
    description: 'Rho Gamma Chapter of Theta Tau website.',
    link: 'https://thetataupg.org/',
  },
  {
    name: 'localhand',
    description:
      'Hackathon project to assist small businesses in Orlando area.',
    link: 'https://github.com/ArthurWHenry/localhand',
  },
  {
    name: 'FoodBook',
    description: 'A mobile application to manage recipes.',
    link: 'https://github.com/ArthurWHenry/foodbook-mobile',
  },
  {
    name: 'Lego305',
    description: 'Scaled model of the Miami-Dade College Wolfson campus.',
    link: 'https://www.youtube.com/watch?v=b8VYoZhTU6c',
  },
];

function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* This will be the main content. */}
        <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
          {/* Introduction and small paragraph. */}
          <main className="flex flex-col justify-start space-y-4 w-full px-4 pt-4">
            <h1 className="font-bold text-gray-900 text-5xl">
              Hey, I'm Arthur
            </h1>
            <p className="tracking-wide leading-relaxed text-lg text-gray-700">
              I recently graduated with my Bachelor's in Computer Science from
              the University of Central Florida and will be a Software
              Engineering Intern at Nielsen over the summer.
            </p>
          </main>
          {/* List some of my projects. */}
          <div className="flex flex-col justify-start space-y-4 w-full px-4">
            <h2 className="font-bold text-gray-900 text-3xl">Projects</h2>
            {/* Going to be a grid with my projects. */}
            <div className="space-y-2">
              {/* Should be able to hover over each project and have a slight transition. */}
              {projects.map(({ name, description, link }) => (
                <div className="bg-gray-200 transition ease-linear duration-75 hover:bg-gray-300 p-4">
                  <a href={link} className="font-semibold text-gray-700">
                    {name}
                  </a>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Socials. */}
          <div className="flex justify-start space-x-4 w-full px-4 pb-4">
            <a
              href="https://github.com/ArthurWHenry"
              className="text-gray-700 transition ease-linear duration-75 hover:text-gray-800"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-henry-0458a1104/"
              className="text-gray-700 transition ease-linear duration-75 hover:text-gray-800"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/arthurwhenry"
              className="text-gray-700 transition ease-linear duration-75 hover:text-gray-800"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;