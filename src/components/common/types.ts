/**
 * Types for the Custom Link component.
 *
 * @remarks To be used for the Custom Link component only.
 * @returns Form component types.
 *
 * @example
 * ```
 * const CustomLink = ({ ...customLinkProps}: CustomLinkComponentProps) => { ... }
 * ```
 */
export type CustomLinkComponentTypes = {
  classes?: string;
  href: string;
  text: string;
};

/**
 * Types for Spinner size.
 *
 * @remarks Helper types for Spinner component.
 */
type SpinnerSizeTypes = "sm" | "md";

/**
 * Types for the Spinner component.
 *
 * @remarks To be used for the Spinner component only.
 * @returns Form component types.
 *
 * @example
 * ```
 * const Spinner = ({ ...spinnerProps}: SpinnerComponentProps) => { ... }
 * ```
 */
export type SpinnerComponentTypes = {
  size: SpinnerSizeTypes;
  inheritColor: boolean;
};
