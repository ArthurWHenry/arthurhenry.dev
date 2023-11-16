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
      className="border rounded-lg px-6 py-4 bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 dark:text-gray-50">
          {name}
        </span>
        <span className="text-gray-600 dark:text-gray-400">{title}</span>
      </div>
      <div className="space-y-3 pt-2 ">
        {shownBody.map((paragraph) => (
          <p key={paragraph} className="text-gray-800 dark:text-gray-200">
            {paragraph}
          </p>
        ))}
      </div>
      <button
        className="text-gray-700 dark:text-gray-200 underline mt-2"
        onClick={() => setShowAll(!showAll)}
      >
        Read more
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
  <div>
    <h2 className="section-secondary-header">{title}</h2>
    <hr />
    <div>{children}</div>
  </div>
);
