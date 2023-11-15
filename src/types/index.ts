export type AboutLinkProps = {
  href: string;
  text: string;
};

export type ProjectProps = {
  name: string;
  inactive: boolean;
  link: string;
  about: string;
  uses: string[];
  year: number;
};

export type SectionProps = {
  title: string;
  children: React.ReactNode;
};
