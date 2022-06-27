import { NextPage } from "next";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import usePosts from "data/usePosts";
import useUser from "data/useUser";
import { logout } from "lib/auth";
import useProfile from "data/useProfile";

const Feed: NextPage = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/" });
  // const { posts, mutate } = usePosts();
  const { profile } = useProfile();

  // Need to make sure we have profile data before doing anything.
  console.log(profile);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        make an account loser
      </div>
    );
  }

  // We can add a full screen loading state.
  async function handleLogout() {
    try {
      const { error } = await logout();

      if (error) throw error;

      router.push("/");
    } catch (error) {
      // @ts-expect-error
      toast.error(`${error.error_description || error.message}.`);
      // @ts-expect-error
      console.error(error.error_description || error.message);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <span>Feed Page</span>
      <p>Welcome</p>
      <button
        className="rounded-md bg-gray-900 px-3 py-1 font-semibold text-gray-50 shadow-md"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Feed;
