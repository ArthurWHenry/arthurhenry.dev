import Link from "next/link";
import { memo } from "react";

// Components
import { Footer, Navigation } from "@/src/components";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement<any> => {
  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 pt-8 pb-6 sm:px-6 md:pt-10">
      <div className="mx-auto max-w-2xl">
        <header className="space-y-4">
          <div className="flex items-center justify-between space-x-4">
            <Link href="/">
              <span className="text-2xl font-bold text-black dark:text-white">
                Arthur Henry
              </span>
            </Link>
          </div>
          <Navigation />
        </header>
        <div className="pt-6 pb-12">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default memo(Layout);
