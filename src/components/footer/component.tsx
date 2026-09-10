import Link from "next/link";
import { memo } from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = (): React.ReactElement<any> => {
  return (
    <footer className="flex flex-col justify-center items-center py-4 space-y-2">
      <div>
        <Link
          className="section-list-link inline-flex items-center gap-2 text-black dark:text-white"
          href="https://www.linkedin.com/in/arthurwhenry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-5 w-5" aria-hidden="true" />
          <span>Connect on LinkedIn</span>
        </Link>
      </div>
      <div>
        <p className="text-sm dark:text-white text-black">
          Made by Arthur Henry
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
