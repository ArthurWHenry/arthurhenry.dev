import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Types
import { FormComponentTypes } from "./types";

/**
 * Form Wrapper.
 *
 * @remarks Uses react-hook-form.
 *
 * @param {function} handleSubmit Handles form submission.
 * @param {object} options List of props that can be used to perform form actions.
 * @param {function} schema Schema to validate form values.
 * @param {function} children Will take form inputs, labels, errors.
 * @returns {Form} The form wrapper.
 *
 * @example
 * ```
 * <Form {...formProps}>
 *   {children}
 * </Form>
 * ```
 */
const Form: React.FC<FormComponentTypes> = ({
  handleSubmit,
  options,
  schema,
  children,
}: FormComponentTypes) => {
  const methods = useForm({
    ...options,
    resolver: schema && yupResolver(schema),
  });

  return (
    <form
      className="space-y-4"
      onSubmit={methods.handleSubmit(handleSubmit)}
      noValidate
    >
      {children(methods)}
    </form>
  );
};

export default Form;
