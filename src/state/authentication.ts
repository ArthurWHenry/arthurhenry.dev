import { Session } from "@supabase/supabase-js";
import { atom } from "recoil";

/**
 * User state through application.
 */
export const authState = atom<Session | null>({
  key: "authState",
  default: null,
});

/**
 * User information.
 */
export const userState = atom<Session | null>({
  key: "userState",
  default: null,
});

/**
 * Session information.
 */
export const sessionState = atom<Session | null>({
  key: "sessionState",
  default: null,
});
