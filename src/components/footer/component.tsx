import { memo } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center">
      <p className="text-sm dark:text-gray-200 text-gray-900">
        Made by Arthur Henry
      </p>
    </footer>
  );
};

export default memo(Footer);
