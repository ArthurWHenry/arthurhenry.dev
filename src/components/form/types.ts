/**
 * Types for Button types.
 *
 * @remarks Helper types for Button component.
 */
type ButtonTypeTypes = "button" | "reset" | "submit";

/**
 * Types for the Button component.
 *
 * @remarks To be used for the Button component only.
 * @returns Form component types.
 *
 * @example
 * ```
 * const Button = ({ ...buttonProps}: ButtonComponentProps) => { ... }
 * ```
 */
export type ButtonComponentTypes = {
  children: any;
  isDisabled: boolean;
  isFullWidth: boolean;
  isLoading: boolean;
  type: ButtonTypeTypes;
};

/**
 * Types for the Form component.
 *
 * @remarks To be used for the Form component only.
 * @returns Form component types.
 *
 * @example
 * ```
 * const Form = ({ ...formProps}: FormComponentProps) => { ... }
 * ```
 */
export type FormComponentTypes = {
  handleSubmit: any;
  children: any;
  options?: any;
  schema?: any;
};

/**
 * Types for Input classes.
 *
 * @remarks Helper types for input component.
 */
type InputClassesTypes = {
  error: string;
  input: string;
  label: string;
  wrapper: string;
};

/**
 * Types for Input types.
 *
 * @remarks Helper types for input component.
 */
type InputTypeTypes =
  | "text"
  | "password"
  | "email"
  | "number"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "week"
  | "time"
  | "search"
  | "tel";

/**
 * Types for the Input component.
 *
 * @remarks To be used for the Input component only.
 * @returns Input component types.
 *
 * @example
 * ```
 * const Input = ({ ...inputProps}: InputComponentProps) => { ... }
 * ```
 */
export type InputComponentTypes = {
  autoComplete?: any;
  classes: InputClassesTypes;
  defaultValue?: number | string;
  error: any;
  isDisabled?: boolean;
  label: string;
  name: string;
  placeholder: number | string;
  register: any;
  type: InputTypeTypes;
};
