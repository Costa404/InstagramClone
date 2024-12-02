import { useEffect } from "react";
import { useCheckIsFollowing } from "../useCheckIsFollowing";
import { useIsFollowing } from "../../../../useContext/IsFollowingContext/IsFollowingContext";
import { useFollowUserIdContext } from "../../../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useHandleStatus } from "./useHandleStatus";

export const useFollowingStatus = () => {
  const { isFollowing, setIsFollowing } = useIsFollowing();
  const { checkIsFollowing } = useCheckIsFollowing();
  const { followUserId } = useFollowUserIdContext();

  const { localStatus, setLocalStatus } = useHandleStatus();

  useEffect(() => {
    const fetchFollowingStatus = async () => {
      if (followUserId) {
        const status = await checkIsFollowing();

        // Atualizar apenas se o estado local for diferente do estado recuperado
        if (status !== localStatus) {
          setIsFollowing(followUserId as string, status);
          setLocalStatus(status);
        }
      }
    };

    fetchFollowingStatus();
  }, [checkIsFollowing, followUserId, setIsFollowing, localStatus]);

  // Log para depuração do status de seguimento atual
  useEffect(() => {
    if (followUserId && isFollowing[followUserId as string] !== undefined) {
      if (isFollowing[followUserId as string]) {
        console.log("You are following the user.");
      } else {
        console.log("You are not following the user.");
      }
    }
  }, [isFollowing, followUserId]);

  return {
    isFollowing: isFollowing[followUserId as string] ?? false,
    setIsFollowing,
    localStatus,
    setLocalStatus,
  };
};
