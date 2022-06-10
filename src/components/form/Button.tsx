import classNames from "classnames";
import PropTypes from "prop-types";

// Components
import Spinner from "components/common/Spinner";

// Types
import { ButtonComponentTypes } from "./types";

/**
 * This button is used for form components.
 *
 * @param {boolean} isDisabled Disables button.
 * @param {boolean} isFullWidth Sets the button to full width.
 * @param {boolean} isLoading Sets loading state for the button.
 * @param {string} type The type of function the button serves.
 * @returns {Button} The button to be used in a form.
 *
 * @example
 * ```
 * <Form {..formProps}>
 *   <Button {...buttonProps} />
 * </Form>
 * ```
 */
const Button: React.FC<ButtonComponentTypes> = ({
  children,
  isDisabled = false,
  isFullWidth = false,
  isLoading = false,
  type = "button",
  ...props
}: ButtonComponentTypes) => {
  const buttonClasses = classNames(
    "w-full rounded-md bg-brown-900 p-2 font-bold text-gray-50 shadow transition duration-100 ease-linear hover:bg-brown-700",
    {
      "cursor-not-allowed opacity-50": isDisabled,
    }
  );

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {isLoading ? <Spinner size="md" inheritColor={false} /> : <>{children}</>}
    </button>
  );
};

export default Button;
