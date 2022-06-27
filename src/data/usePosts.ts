import useSWR from "swr";

// Client
import { supabase } from "client/supabaseClient";

// Types
import { GetPostsReturnTypes } from "./types";

/**
 * Post fetcher.
 *
 * @remarks Use useSWR hook to assist with fetching data here.
 * @returns {SupabaseReturnTypes} Post data, loading state, and mutate function.
 *
 * @example
 * ```
 * const { data, mutate, error } = useSWR("posts", postsFetcher);
 * ```
 */
function postsFetcher() {
  return supabase.from("posts").select(`
      coffee_shop (
        name
      ),
      coffee_type (
        type
      ),
      milk_type (
        type
      ),
      flavor_type (
        type
      )
  `);
}

/**
 * Fetches all posts.
 *
 * @returns {GetPostsReturnTypes} Post data, loading state, and mutate function.
 *
 * @example
 * ```
 * const { posts, loading, mutate } = usePosts();
 * ```
 */
export default function usePosts(): GetPostsReturnTypes {
  const { data, mutate, error } = useSWR("posts", postsFetcher);

  const loading = !data && !error;

  return {
    loading,
    posts: data,
    mutate,
  };
}
