import Link from "next/link";
import { createContext, memo, useEffect, useState } from "react";

// Components
import { Footer, Navigation } from "@/src/components";

const ThemeContext = createContext("light");

const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("Arthur.Henry.theme") || "dark";
    }
    return "dark";
  });
  const [hasMounted, setHasMounted] = useState(false);

  // Makes sure the component has mounted before rendering.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("Arthur.Henry.theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return <></>;
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-2">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between space-x-4">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                🧑🏽‍💻 Arthur Henry
              </span>
            </Link>
            <div>
              <button
                className="theme-switcher"
                onClick={() => {
                  const newTheme = theme === "light" ? "dark" : "light";
                  setTheme(newTheme);
                }}
              >
                {theme === "dark" ? "🌞" : "🌚"}
              </button>
            </div>
          </div>
          <Navigation />
          <div className="py-4">{children}</div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default memo(Layout);
