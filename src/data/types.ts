/**
 * Shared return types.
 *
 * @remarks Common return types from Supabase api.
 * @returns Shared return types.
 *
 * @example
 * ```
 * export type GetSomeReturnTypes = SupabaseReturnTypes & { ... someOtherTypes }
 * ```
 */
export type SupabaseReturnTypes = {
  loading: boolean;
  mutate: any;
  error?: any;
};

/**
 * Types for retrieving posts.
 *
 * @remarks To be used by usePosts hook.
 * @returns Posts return types.
 *
 * @example
 * ```
 * function usePosts({ ...usePostsProps }): GetPostsReturnTypes { ... }
 * ```
 */
export type GetPostsReturnTypes = SupabaseReturnTypes & { posts: any };

/**
 * Types for retrieving a profile.
 *
 * @remarks To be used by useProfile hook.
 * @returns Profile return types.
 *
 * @example
 * ```
 * function useProfile({ ...useProfileProps }): GetProfileReturnTypes { ... }
 * ```
 */
export type GetProfileReturnTypes = SupabaseReturnTypes & { profile: any };

/**
 * Types for retrieving user.
 *
 * @remarks To be used by useUser hook.
 * @returns User return types.
 *
 * @example
 * ```
 * function useUser({ ...useUserProps }): GetUserReturnTypes { ... }
 * ```
 */
export type GetUserReturnTypes = SupabaseReturnTypes & {
  user: any;
  loggedOut: boolean;
};
