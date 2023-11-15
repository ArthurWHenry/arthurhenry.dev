import Link from "next/link";
import { AboutLinkProps, SectionProps } from "@/src/types";

export const AboutLink: React.FC<AboutLinkProps> = ({ href, text }: any) => (
  <Link className="about-list-link" href={href} target="_blank">
    {text}
  </Link>
);

export const Section: React.FC<SectionProps> = ({ title, children }: any) => (
  <div>
    <h2 className="about-secondary-header">{title}</h2>
    <hr />
    <ul className="about-list">{children}</ul>
  </div>
);
