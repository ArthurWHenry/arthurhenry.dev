import Link from "next/link";
import classNames from "classnames";
import { HiExternalLink } from "react-icons/hi";

// Types
import { ProjectProps } from "@/src/types";

export const Project: React.FC<ProjectProps> = ({
  about,
  inactive,
  link,
  name,
  uses,
  year,
}) => (
  <div className="project-container">
    <div className="flex space-x-2 justify-start items-center">
      <span className="text-gray-600 dark:text-gray-300 text-xs">{year}</span>
      <div
        className={classNames(
          inactive ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700",
          " flex justify-center items-center rounded-full px-2"
        )}
      >
        <span className="text-xs ">{inactive ? "inactive" : "active"}</span>
      </div>
    </div>
    <div>
      <span className="font-semibold text-xl text-gray-900 dark:text-gray-50">
        {name}
      </span>
      <p className="text-gray-700 dark:text-gray-300 text-sm">{about}</p>
      <div className="flex flex-wrap">
        {uses.map((use) => (
          <div key={use}>
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              {use}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div>
      {link && link.length > 1 && (
        <Link className="project-demo-link" href={link} target="_blank">
          <span>Demo</span>
          <HiExternalLink />
        </Link>
      )}
    </div>
  </div>
);
