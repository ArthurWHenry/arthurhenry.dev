import Link from "next/link";
import { memo } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

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
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/experience",
    text: "Experience",
  },
];

const Navigation: React.FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className="flex justify-center p-2 space-x-4">
      {links.map(({ href, text }, idx) => (
        <Link
          className={classNames(
            router.pathname === href ? "text-gray-900" : "text-gray-600",
            " tracking-wide hover:text-gray-900 duration-150 transition"
          )}
          href={href}
          key={idx}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default memo(Navigation);
