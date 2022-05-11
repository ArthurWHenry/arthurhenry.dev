import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="space-y-2 px-2 py-8">
      <div className="flex items-center justify-center px-2">
        <p className="text-center text-xs">
          Feel free to reach out to me at{" "}
          <a
            href="mailto:awilmarhenry@gmail.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="hover:underline"
          >
            awilmarhenry@gmail.com
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2 text-black">
        <a
          href="https://www.linkedin.com/in/arthurwhenry/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/arthurwhenry/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
        <a
          href="https://twitter.com/arthurwhenry"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaTwitter className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/ArthurWHenry"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
