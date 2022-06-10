import * as yup from "yup";

/**
 * Login form validation.
 *
 * @remarks To be used with the Login page.
 */
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
  password: yup.string().required("Password is required."),
});

/**
 * Register form validation.
 *
 * @remarks To be used with the Register page.
 */
export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email address is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be 6 characters minimum."),
});
