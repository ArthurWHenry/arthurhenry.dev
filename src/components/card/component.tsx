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
}: ProjectProps): React.ReactElement<any> => (
  <article className="project-container">
    <h2 className="font-semibold text-xl text-black dark:text-white">{name}</h2>
    <div className="flex space-x-2 justify-start items-center">
      <span className="text-black dark:text-white text-xs">{year}</span>
      <div
        className={classNames(
          inactive
            ? "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
            : "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
          "inline-flex items-center rounded-md px-2 py-1"
        )}
      >
        <span className="text-xs ">{inactive ? "inactive" : "active"}</span>
      </div>
    </div>
    <div>
      <p className="text-black dark:text-white text-base">{about}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2">
        {uses.map((use) => (
          <div key={use}>
            <span className="text-sm text-black dark:text-white">
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
  </article>
);
