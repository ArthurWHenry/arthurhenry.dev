import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="space-y-2 px-2 py-8">
      <div className="flex items-center justify-center space-x-2">
        <Link
          className="text-gray-700 duration-100 ease-linear hover:text-gray-900"
          href="https://www.linkedin.com/in/arthurwhenry/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaLinkedin className="h-5 w-5" />
        </Link>
        <Link
          className="text-gray-700 duration-100 ease-linear hover:text-gray-900"
          href="https://www.instagram.com/arthurwhenry/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaInstagram className="h-5 w-5" />
        </Link>

        <Link
          className="text-gray-700 duration-100 ease-linear hover:text-gray-900"
          href="https://github.com/ArthurWHenry"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaGithub className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
