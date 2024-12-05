import { IoIosSettings } from "react-icons/io";
import ActionButtons from "./ActionButtons";
import { BsThreeDots } from "react-icons/bs";
import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";
import { useSelectedUser } from "../../../../useContext/SelectedUserContext";
import { User } from "../../../../SharedComponents/Interface/Interface";
import { useGetNumberPosts } from "./logicProfile/getNumberPosts";
import { useIsFollowing } from "../../../../useContext/IsFollowingContext/IsFollowingContext";

interface ProfileDetailsProps {
  onFollowClick: (userId: string) => void;
  onUnfollowClick: (userId: string) => void;
  user: User;
}

const ProfileDetails = ({
  onFollowClick,
  onUnfollowClick,
  user,
}: ProfileDetailsProps) => {
  const { currentUserId } = useCurrentUser();
  const { selectedUser } = useSelectedUser();
  const { countPosts } = useGetNumberPosts();
  const { isFollowing } = useIsFollowing();

  const displayUser =
    selectedUser === currentUserId ? currentUserId : selectedUser;

  const followingCount = displayUser?.following?.length || 0;

  const isCurrentUser = selectedUser?.userId === currentUserId?.userId;

  const isUserFollowing = user?.userName && isFollowing[user.userName] === true;

  // console.log("userId:", user.userName);
  // console.log("isFollowing:", isFollowing);

  // // console.log("selectedUser:", selectedUser);
  // console.log("isUserFollowing:", isUserFollowing);

  if (!displayUser) return null;

  return (
    <div className="d-flex flex-column w-75 justify-content-center gap-5">
      <div className="d-flex gap-4 fw-bold align-items-center">
        <h3>{displayUser?.userName}</h3>
        <ActionButtons
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
          user={displayUser}
          isCurrentUser={isCurrentUser}
        />
        {isUserFollowing ? (
          <>
            <button
              className=" px-4 rounded-3 fs-5 fw-semibold border-0 focus-ring-0 btn-secondary"
              style={{ height: "3.2rem", width: "10rem" }}
            >
              Message
            </button>
          </>
        ) : null}
        {isCurrentUser ? (
          <IoIosSettings className="fs-1" />
        ) : (
          <BsThreeDots className="fs-1" />
        )}
      </div>
      <div className="fw-semibold d-flex gap-5">
        <span className="fs-4">{countPosts} posts</span>
        <span className="fs-4">{displayUser?.followersCount} Followers</span>
        <span className="fs-4">{followingCount} Following</span>
      </div>
      <h3>{displayUser?.fullName}</h3> {/* Exibindo o nome completo */}
    </div>
  );
};

export default ProfileDetails;
