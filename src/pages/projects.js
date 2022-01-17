import Layout from '../components/layout';

const projectList = [
  {
    name: 'slicesum',
    role: 'frontend dev',
    desc: 'A budgeting app for students learning finance.',
    link: 'https://slicesum.com/',
  },
  {
    name: 'Streats',
    role: 'frontend dev',
    desc: 'Local food truck finder.',
    link: 'https://www.gostreats.com/',
  },
];

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <main className="p-3">
          <h1 className="font-black text-3xl">Some things I've work on</h1>
        </main>
        <div className="space-y-2 p-3">
          {projectList.map(({ name, role, desc, link }) => (
            <div
              className="flex flex-col justify-center items-start"
              key={name}
            >
              <span className="font-semibold tracking-wide">
                <a href={link}>{name}</a>
              </span>
              <span className="text-sm text-gray-500">{role}</span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
