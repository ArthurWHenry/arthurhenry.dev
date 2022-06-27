import { supabase } from "client/supabaseClient";

// Types
import { SupabaseLoginTypes } from "./types";

/**
 * Logs user in.
 *
 * @remarks Uses Supabase api to log user out.
 * @param {SupabaseLoginTypes} data Destructed into email and password for login.
 * @returns {object} Contains error message if logout fails.
 *
 * @example
 * ```
 * userLogin
 *   .then(({user, error}) => {
 *     // do something with data
 *   })
 *   .catch(({error}) => {
 *     // some error handling
 *   });
 * ```
 */
export async function userLogin({ email, password }: SupabaseLoginTypes) {
  try {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return {
      user,
      error,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

/**
 * Logs user out.
 * @remarks Uses Supabase api to log user out.
 * @returns {object} Contains error message if logout fails.
 *
 * @example
 * ```
 * const { error } = await logout();
 * ```
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
