import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-36 p-3">
      <div className="flex justify-around items-center text-gray-50 w-32">
        <a
          href="https://github.com/ArthurWHenry"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FiGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/arthur-henry-0458a1104/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FiLinkedin size={25} />
        </a>
        <a
          href="https://twitter.com/arthurwhenry"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FiTwitter size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
