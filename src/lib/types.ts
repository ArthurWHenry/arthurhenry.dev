/**
 * Login types.
 *
 * @remarks Supabase login types.
 * @returns Login types.
 *
 * @example
 * ```
 * async function userLogin({ email, password }: SupabaseLoginTypes) { ... }
 * ```
 */
export type SupabaseLoginTypes = {
  email: string;
  password: string;
};
