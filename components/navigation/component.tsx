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
    <>
      <nav className="flex items-center justify-between px-2 py-4">
        <Link href="/">
          <a className="text-lg font-semibold uppercase text-black">
            Arthur Henry
          </a>
        </Link>
        <div className="flex items-start justify-center space-x-3">
          <Link href="/about">
            <a className="hidden text-sm font-semibold uppercase text-black sm:flex">
              About
            </a>
          </Link>
          <Link href="/projects">
            <a className="hidden text-sm font-semibold uppercase text-black sm:flex">
              Projects
            </a>
          </Link>
          <button
            className="focus:outline-none sm:hidden"
            onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>
      <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-75"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-0 left-0 z-50 flex h-screen w-full flex-col bg-white py-4 px-2">
          <button
            className="self-end focus:outline-none"
            onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            <XIcon className="h-5 w-5" />
          </button>
          <div className="flex h-full flex-col items-center justify-center space-y-6 p-10">
            <button
              className="text-3xl uppercase"
              onClick={() => handleLink("/")}
            >
              Home
            </button>
            <button
              className="text-3xl uppercase"
              onClick={() => handleLink("/about")}
            >
              About
            </button>
            <button
              className="text-3xl uppercase"
              onClick={() => handleLink("/projects")}
            >
              Projects
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navigation;
