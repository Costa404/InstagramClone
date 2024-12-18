import { useGetNumberPosts } from "./getNumberPosts";
import useDisplayUser from "./useDisplayUser";

type ProfileStatsProps = {
  className?: string;
};

const ProfileStats = ({ className = "" }: ProfileStatsProps) => {
  const { countPosts } = useGetNumberPosts();
  const { displayUser } = useDisplayUser();

  const followingCount = displayUser?.following?.length || 0;

  return (
    <div className={`fw-semibold d-flex gap-5 ${className}`}>
      <span className="fs-4">{countPosts} posts</span>
      <span className="fs-4">{displayUser?.followersCount} Followers</span>
      <span className="fs-4">{followingCount} Following</span>
    </div>
  );
};

export default ProfileStats;
