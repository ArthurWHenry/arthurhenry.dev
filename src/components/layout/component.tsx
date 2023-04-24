import { memo } from "react";
import Image from "next/image";

// Assests
import Portrait from "@/public/Portrait.jpeg";

// Components
import Footer from "@/src/components/footer/component";
import Navigation from "@/src/components/navigation/component";

const Layout: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center p-2 space-x-4">
          <Image
            alt="Portrait of Arthur Henry."
            className="h-10 w-10 rounded-full"
            src={Portrait}
          />
          <span className="text-3xl font-bold text-gray-900">Arthur Henry</span>
        </div>
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default memo(Layout);
