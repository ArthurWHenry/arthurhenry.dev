/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  CurrencyDollarIcon,
  TruckIcon,
  UserGroupIcon,
  HandIcon,
  BookmarkIcon,
  LibraryIcon,
} from '@heroicons/react/outline';
import { LinkIcon } from '@heroicons/react/solid';

const projects = [
  {
    name: 'slicesum',
    role: 'Full Stack Dev',
    description: 'A budgeting app designed for students and new adults.',
    link: 'https://slicesum.com/',
    icon: CurrencyDollarIcon,
    color: 'blue',
  },
  {
    name: 'Streats',
    role: 'Frontend Dev',
    description: 'Find your favorite food truck.',
    link: 'https://www.gostreats.com/',
    icon: TruckIcon,
    color: 'pink',
  },
  {
    name: 'Theta Tau',
    role: 'Full Stack Dev',
    description: 'Rho Gamma Chapter of Theta Tau website.',
    link: 'https://thetataupg.org/',
    icon: UserGroupIcon,
    color: 'red',
  },
  {
    name: 'localhand',
    role: 'Frontend Dev',
    description:
      'Hackathon project to assist small businesses in Orlando area.',
    link: 'https://github.com/ArthurWHenry/localhand',
    icon: HandIcon,
    color: 'purple',
  },
  {
    name: 'FoodBook',
    role: 'Frontend Dev',
    description: 'A mobile application to manage recipes.',
    link: 'https://github.com/ArthurWHenry/foodbook-mobile',
    icon: BookmarkIcon,
    color: 'green',
  },
  {
    name: 'Lego305',
    role: 'Project Lead',
    description: 'Scaled model of the Miami-Dade College Wolfson campus.',
    link: 'https://www.youtube.com/watch?v=b8VYoZhTU6c',
    icon: LibraryIcon,
    color: 'blue',
  },
];

const socials = [
  {
    name: 'github',
    link: 'https://github.com/ArthurWHenry',
    icon: FaGithub,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/arthur-henry-0458a1104/',
    icon: FaLinkedin,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/arthurwhenry',
    icon: FaTwitter,
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
              the University of Central Florida and I'm a Software Engineering
              Intern at{' '}
              <a
                href="https://www.nielsen.com/us/en/"
                className="border-b-4 border-blue-200 hover:border-blue-400 transition ease-in duration-150"
              >
                Nielsen
              </a>
              .
            </p>
          </main>
          {/* List some of my projects. */}
          <div className="flex flex-col justify-start space-y-4 w-full px-4">
            <h2 className="font-bold text-gray-900 text-3xl">Projects</h2>
            {/* Going to be a grid with my projects. */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                  <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-sm font-medium truncate">
                          {project.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        {project.role}
                      </p>
                    </div>
                    <project.icon
                      className={`h-6 w-6 text-${project.color}-500`}
                    />
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="w-0 flex-1 flex">
                        <a
                          href={project.link}
                          className={`relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-b-lg hover:text-gray-50 hover:bg-${project.color}-500 transition ease-in duration-150`}
                        >
                          <LinkIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">Link</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Socials. */}
          <div className="flex justify-start space-x-4 w-full px-4 pb-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="text-gray-700 transition ease-linear duration-75 hover:text-gray-800"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
