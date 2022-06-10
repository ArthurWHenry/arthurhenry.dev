import Link from "next/link";

// Types
import { CustomLinkComponentTypes } from "./types";

/**
 * Custom Link component.
 *
 * @remarks Meant to make using links easier.
 *
 * @param {string} classes Optional classes.
 * @param {string} href The page this link goes to.
 * @param {string} text The visible text of the link component.
 * @returns {CustomLink} The CustomLink component.
 *
 * @example
 * ```
 * <CustomLink {...customLinkProps} />
 * ```
 */
const CustomLink: React.FC<CustomLinkComponentTypes> = ({
  classes = "",
  href,
  text,
}: CustomLinkComponentTypes) => {
  return (
    <Link href={href}>
      <a className={classes}>{text}</a>
    </Link>
  );
};

export default CustomLink;
