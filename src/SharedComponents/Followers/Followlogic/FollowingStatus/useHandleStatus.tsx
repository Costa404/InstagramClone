import { useState } from "react";

import { useFollowUser } from "../useFollowUser";

import { useFollowUserIdContext } from "../../../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useIsFollowing } from "../../../../useContext/IsFollowingContext/IsFollowingContext";
import firebase from "firebase/compat/app";
import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";
import { useUnfollowUser } from "../../UnfollowLogic/useUnfollowUser";

export const useHandleStatus = () => {
  const { followUser } = useFollowUser();
  const { unfollowUser } = useUnfollowUser();
  const { followUserId } = useFollowUserIdContext();
  const { setIsFollowing } = useIsFollowing();
  const { currentUserId } = useCurrentUser();
  const [localStatus, setLocalStatus] = useState<boolean | null>(null);

  const handleFollowClick = async () => {
    if (followUserId) {
      await followUser();
      setIsFollowing(followUserId as string, true);
      setLocalStatus(true);
    }
  };

  const handleUnfollowClick = async () => {
    if (followUserId) {
      await unfollowUser();
      setIsFollowing(followUserId as string, false);
      setLocalStatus(false);
      await firebase
        .firestore()
        .collection("users")
        .doc(currentUserId?.email)
        .update({
          following: firebase.firestore.FieldValue.arrayUnion(followUserId),
        });
    }
  };

  return {
    handleUnfollowClick,
    handleFollowClick,
    localStatus,
    setLocalStatus,
  };
};
