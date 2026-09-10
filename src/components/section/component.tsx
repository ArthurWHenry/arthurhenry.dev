import Link from "next/link";
import { useState } from "react";

// Types
import { AboutLinkProps, RecommendationProps, SectionProps } from "@/src/types";

export const Recommendation: React.FC<RecommendationProps> = ({
  body,
  name,
  title,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [firstParagraph, secondParagraph, ...restOfBody] = body;

  const shownBody = [
    firstParagraph,
    secondParagraph,
    ...(showAll ? restOfBody : []),
  ];

  return (
    <div
      key={name}
      className="rounded-lg bg-white dark:bg-black"
    >
      <div className="flex flex-col">
        <span className="font-semibold text-black dark:text-white">
          {name}
        </span>
        <span className="text-black dark:text-white">{title}</span>
      </div>
      <div className="space-y-3 pt-2">
        {shownBody.map((paragraph) => (
          <p key={paragraph} className="text-black dark:text-white">
            {paragraph}
          </p>
        ))}
      </div>
      <button
        className="text-black dark:text-white underline underline-offset-4 hover:decoration-2 mt-2"
        aria-expanded={showAll}
        onClick={() => setShowAll(!showAll)}
      >
        {!showAll ? "Read more" : "Read less"}
      </button>
    </div>
  );
};

export const SectionLink: React.FC<AboutLinkProps> = ({ href, text }: any) => (
  <Link className="section-list-link" href={href} target="_blank">
    {text}
  </Link>
);

export const Section: React.FC<SectionProps> = ({ title, children }: any) => (
  <div className="divide-y divide-black dark:divide-white">
    <h2 className="section-secondary-header">{title}</h2>
    <div>{children}</div>
  </div>
);
