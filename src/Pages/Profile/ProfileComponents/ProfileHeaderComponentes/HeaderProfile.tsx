import FixedStorys from "./FixedStorys";
import ProfileDetails from "./ProfileDetails";

import { useSelectedUser } from "../../../../useContext/SelectedUserContext";
import { useHandleStatus } from "../../../../SharedComponents/Followers/Followlogic/FollowingStatus/useHandleStatus";
import { useHandleUnfollow } from "../../../../SharedComponents/Followers/UnfollowLogic/useHandleUnfollow";
import InputProfileImg from "./ProfileImage/InputProfileImg";
import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";

const HeaderProfile = () => {
  const { selectedUser } = useSelectedUser();
  const { currentUserId } = useCurrentUser();
  const { handleUnfollowInner } = useHandleUnfollow();
  // const { handleFollowInner } = useHandleFollow();
  const { handleFollowClick } = useHandleStatus();

  console.log("selectedUser", selectedUser);

  if (!currentUserId) return;

  return (
    <section className="mt-5 w-100 d-flex gap-5 flex-column border-bottom border-dark w100Mobile">
      <div className="d-flex w-100 gap-5" style={{ height: "60%" }}>
        <InputProfileImg />

        <ProfileDetails
          onFollowClick={handleFollowClick}
          user={currentUserId}
          onUnfollowClick={handleUnfollowInner}
        />
      </div>
      <FixedStorys />
    </section>
  );
};

export default HeaderProfile;
