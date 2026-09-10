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
    text: "GitHub",
  },
];

const Navigation = (): React.ReactElement<any> => {
  const router = useRouter();

  return (
    <nav aria-label="Main navigation" className="py-1">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {links.map(({ href, icon, target, text }, idx) => (
          <Link
            className={classNames(
              router.pathname === href
                ? "border-black dark:border-white"
                : "border-transparent hover:border-black dark:hover:border-white",
              "border-b-2 text-black dark:text-white transition-colors duration-150 motion-reduce:transition-none flex items-center space-x-1 py-1",
            )}
            aria-current={router.pathname === href ? "page" : undefined}
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
