import Link from "next/link";
import { memo } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-sm text-gray-600">
          Feel free to connect with me
        </span>
        <div className="flex space-x-4 text-gray-700">
          <Link
            className="transition duration-150 ease-linear hover:text-gray-900"
            href="https://www.linkedin.com/in/arthurwhenry/"
            target="_blank"
            rel="norefferer noopenner"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            className="transition duration-150 ease-linear hover:text-gray-900"
            href="https://github.com/ArthurWHenry"
            target="_blank"
            rel="norefferer noopenner"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            className="transition duration-150 ease-linear hover:text-gray-900"
            href="https://www.instagram.com/arthurwhenry/"
            target="_blank"
            rel="norefferer noopenner"
          >
            <FaInstagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
