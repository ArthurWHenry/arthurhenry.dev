import { createContext, memo, useContext, useEffect, useState } from "react";

// Components
import Navigation from "@/src/components/navigation";

const ThemeContext = createContext("light");

const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("Arthur.Henry.theme") || "light";
    }
    return "light";
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
            <div>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                🧑🏽‍💻 Arthur Henry
              </span>
            </div>
            <div>
              <button
                className="border px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900 focus:outline-none hover:bg-gray-50 duration-150 transition"
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
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default memo(Layout);
