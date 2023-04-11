import { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLink = (href: string) => {
    router.push(href);
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-2">
      <Link className="text-lg font-semibold text-black" href="/">
        Arthur Henry
      </Link>
      <div className="flex items-start justify-center space-x-3">
        <Link
          className="text-sm font-semibold text-black sm:flex"
          href="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
