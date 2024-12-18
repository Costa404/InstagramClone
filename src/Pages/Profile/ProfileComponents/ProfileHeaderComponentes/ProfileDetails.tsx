import { IoIosSettings } from "react-icons/io";
import ActionButtons from "./logicProfile/ActionButtons";
import { BsThreeDots } from "react-icons/bs";

import { useIsFollowing } from "../../../../useContext/IsFollowingContext/IsFollowingContext";
import ProfileStats from "./logicProfile/ProfileStats";
import { User } from "../../../../SharedComponents/Interface/Interface";
import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";
import useDisplayUser from "./logicProfile/useDisplayUser";

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
  const { displayUser } = useDisplayUser();
  const { isFollowing } = useIsFollowing();
  const { currentUserId } = useCurrentUser();

  const isCurrentUser = displayUser?.userId === currentUserId?.userId;
  const isUserFollowing = user?.userName && isFollowing[user.userName] === true;

  console.log("displayUser:", displayUser);
  console.log("userId:", user.userName);
  console.log("isFollowing:", isFollowing);
  console.log("isCurrentUser:", isCurrentUser);
  console.log("isUserFollowing:", isUserFollowing);

  if (!displayUser) return null;

  return (
    <div className="d-flex flex-column w-100 justify-content-center gap-5 profileHeaderContainer ">
      <div className="d-flex profileHeaderSubContainer gap-4 fw-bold align-items-center">
        <h3>{displayUser?.userName}</h3>
        <ActionButtons
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
          user={displayUser}
          isCurrentUser={isCurrentUser}
        />
        {isUserFollowing ? (
          <button
            className=" px-4 rounded-3 fs-5 fw-semibold border-0 focus-ring-0 btn-secondary"
            style={{ height: "3.2rem", width: "10rem" }}
          >
            Message
          </button>
        ) : null}
        {isCurrentUser ? (
          <IoIosSettings className="fs-1" />
        ) : (
          <BsThreeDots className="fs-1" />
        )}
      </div>
      <ProfileStats className="versionDesktopProfileStats" />
      <h3>{displayUser?.fullName}</h3>
    </div>
  );
};

export default ProfileDetails;
