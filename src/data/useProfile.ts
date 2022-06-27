import { supabase } from "client/supabaseClient";
import useSWR from "swr";
import { GetProfileReturnTypes, SupabaseReturnTypes } from "./types";

/**
 * Profile fetcher.
 *
 * @remarks Use useSWR hook to assist with fetching data here.

 * @returns {SupabaseReturnTypes} Profile data, loading state, and mutate function.
 * @example
 * ```
 * const { data, mutate, error } = useSWR("profile", profileFetcher);
 * ```
 */
function profileFetcher() {
  return supabase.from("profiles").select("*");
}

/**
 * Fetches profile information.
 *
 * @returns {GetProfileReturnTypes} Profile data, loading state, and mutate function.
 * @example
 * ```
 * const { profile, loading, mutate } = useProfile();
 * ```
 */
export default function useProfile(): GetProfileReturnTypes {
  const { data, mutate, error } = useSWR("profile", profileFetcher);

  const loading = !data && !error;

  return {
    error,
    loading,
    profile: data,
    mutate,
  };
}
