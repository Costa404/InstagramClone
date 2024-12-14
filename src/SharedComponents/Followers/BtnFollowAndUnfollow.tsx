import { FC } from "react";
import { useFollowUserIdContext } from "../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useIsFollowing } from "../../useContext/IsFollowingContext/IsFollowingContext";

interface FollowAndUnfollowButtonProps {
  userId: string;
  onFollowClick: (userId: string) => void;
  onUnfollowClick: (userId: string) => void;
}

const BtnFollowandUnfollow: FC<FollowAndUnfollowButtonProps> = ({
  userId,
  onFollowClick,
  onUnfollowClick,
}) => {
  const { setFollowUserId } = useFollowUserIdContext();
  const { isFollowing, setIsFollowing } = useIsFollowing();

  const isUserFollowing = isFollowing[userId] ?? false;

  const handleClick = () => {
    if (isUserFollowing) {
      setIsFollowing(userId, false);
      onUnfollowClick(userId);
    } else {
      setIsFollowing(userId, true);
      setFollowUserId(userId);
      onFollowClick(userId);
    }
  };

  return (
    <button
      className={`btn ${
        isUserFollowing ? "btn-secondary" : "btn-primary"
      } px-4 rounded-3 fs-5 fw-semibold border-0 focus-ring-0`}
      style={{ height: "3.2rem", width: "10rem" }}
      onClick={handleClick}
    >
      {isUserFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default BtnFollowandUnfollow;
