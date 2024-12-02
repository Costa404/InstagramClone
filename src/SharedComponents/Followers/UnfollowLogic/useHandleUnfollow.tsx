// Arquivo: useHandleUnfollow.ts
import { getAuth } from "firebase/auth";

import { useIsFollowing } from "../../../useContext/IsFollowingContext/IsFollowingContext";
import { useFollowUserIdContext } from "../../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useUnfollowUser } from "./useUnfollowUser";

export const useHandleUnfollow = () => {
  const { currentUser } = getAuth();
  const { followUserId } = useFollowUserIdContext();
  const { unfollowUser } = useUnfollowUser();
  const { setIsFollowing } = useIsFollowing();

  const handleUnfollowInner = async () => {
    if (currentUser) {
      try {
        // Chama a função para atualizar o Firestore
        await unfollowUser();

        // Atualiza o estado local para refletir o unfollow
        setIsFollowing(followUserId as string, false);

        console.log(`Successfully unfollowed user with ID: ${followUserId}`);
      } catch (error) {
        console.error("Error unfollowing user:", error);
      }
    } else {
      console.error("No authenticated user");
    }
  };

  return { handleUnfollowInner };
};
