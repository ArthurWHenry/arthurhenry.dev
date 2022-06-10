import classNames from "classnames";

// Types
import { InputComponentTypes } from "./types";

/**
 * Input Form Component
 *
 * @remarks Expects react-hook-form.
 *
 * @param {any} autoComplete
 * @param {InputClassesTypes} classes Contains the classes for each part of the input component.
 * @param {string | number} defaultValue The value the input defaults too.
 * @param {boolean} isDisabled The state of the input field.
 * @param {string} label The input field name it belongs to.
 * @param {string} name The name this input refers to.
 * @param {string | number} placeholder If there's no value, it shows this.
 * @param {any} register Expected for react-hook-form.
 * @param {InputTypeTypes} type The type of input field this is.
 * @param {any} error Error received from the Form component.
 * @returns {Input} The component to be used in the form.
 *
 * @example
 * ```
 * <Form {..formProps}>
 *   <Input {...inputProps} />
 * </Form>
 * ```
 */
const Input: React.FC<InputComponentTypes> = ({
  autoComplete = "",
  classes,
  defaultValue,
  isDisabled = false,
  label = "input",
  name = "field",
  placeholder,
  register,
  type = "text",
  error,
}: InputComponentTypes) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        aria-label={label}
        autoComplete={autoComplete}
        className={classNames(
          classes.input,
          isDisabled && "cursor-not-allowed text-gray-500"
        )}
        defaultValue={defaultValue}
        disabled={isDisabled}
        {...register(name)}
        placeholder={placeholder}
        type={type}
      />
      <span className={classes.error}>{error ? error.message : ""}</span>
    </div>
  );
};

export default Input;
