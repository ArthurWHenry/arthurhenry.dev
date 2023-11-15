import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import classNames from "classnames";
import { HiExternalLink } from "react-icons/hi";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "https://github.com/ArthurWHenry",
    icon: <HiExternalLink />,
    target: "_blank",
    text: "Github",
  },
];

const Navigation: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className="flex justify-between py-1">
      <div className="flex justify-start space-x-4">
        {links.map(({ href, icon, target, text }, idx) => (
          <Link
            className={classNames(
              router.pathname === href
                ? "text-gray-900 dark:text-gray-50 border-b-2 border-gray-900 dark:border-gray-50"
                : "text-gray-600 dark:text-gray-400",
              " hover:text-gray-900 dark:hover:text-gray-50 duration-150 transition flex items-center space-x-1"
            )}
            href={href}
            key={idx}
            target={target ? target : "_self"}
          >
            <span>{text}</span>
            {icon ? <div>{icon}</div> : null}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default memo(Navigation);
