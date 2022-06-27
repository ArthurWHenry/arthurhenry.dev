import Router from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

// Client
import { supabase } from "client/supabaseClient";

// Types
import { GetUserReturnTypes } from "./types";

/**
 * User fetcher.
 *
 * @remarks Use useSWR hook to assist with fetching data here.
 * @returns {SupabaseReturnTypes} Post data, loading state, and mutate function.
 *
 * @example
 * ```
 * const { data, mutate, error } = useSWR("user", userFetcher);
 * ```
 */
function userFetcher() {
  return supabase.auth.user();
}

/**
 * Fetches user.
 *
 * @remarks Will help handle authenticated routes in application.
 * @param {string} redirectTo The link we want to redirect to.
 * @param {boolean} redirectIfFound If we should redirect authenticated user.
 * @returns {GetUserReturnTypes} Post data, loading state, and mutate function.
 *
 * @example
 * ```
 * const { user, loading, loggedOut, mutate } = useUser();
 * ```
 */
export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}): GetUserReturnTypes {
  const { data: user, mutate, error } = useSWR("user", userFetcher);

  const loading = !user && !error;
  const loggedOut = error && error.status === 403;

  // NOTE: Doesn't work the same here because we are getting the user.
  useEffect(() => {
    // If no redirect needed, then just return (no need to leave page).
    // User data is not here yet, don't do anything yet
    if (!redirectTo || !user) return;

    const unauthUserRedirect = redirectTo && !redirectIfFound && !user;
    const authUserRedirect = redirectIfFound && user;

    if (unauthUserRedirect || authUserRedirect) Router.push(redirectTo);
  }, [user, redirectIfFound, redirectTo]);

  return {
    loading,
    loggedOut,
    user,
    mutate,
  };
}
