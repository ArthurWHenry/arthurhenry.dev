import Link from "next/link";
import { memo } from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-4 space-y-2">
      <div>
        <Link
          className="text-gray-900 dark:text-gray-50"
          href="https://www.linkedin.com/in/arthurwhenry/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaLinkedin className="h-5 w-5" />
        </Link>
      </div>
      <div>
        <p className="text-sm dark:text-gray-200 text-gray-900">
          Made by Arthur Henry
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
