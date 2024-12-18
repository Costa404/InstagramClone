import ProfileDetails from "./ProfileDetails";

import { useSelectedUser } from "../../../../useContext/SelectedUserContext";
import { useHandleStatus } from "../../../../SharedComponents/Followers/Followlogic/FollowingStatus/useHandleStatus";
import { useHandleUnfollow } from "../../../../SharedComponents/Followers/UnfollowLogic/useHandleUnfollow";
import InputProfileImg from "./ProfileImage/InputProfileImg";
import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";
import FixedStorys from "./logicProfile/FixedStorys";
import ProfileStats from "./logicProfile/ProfileStats";

const HeaderProfile = () => {
  const { selectedUser } = useSelectedUser();
  const { currentUserId } = useCurrentUser();
  const { handleUnfollowInner } = useHandleUnfollow();
  // const { handleFollowInner } = useHandleFollow();
  const { handleFollowClick } = useHandleStatus();

  console.log("selectedUser", selectedUser);

  if (!currentUserId) return;

  return (
    <section className=" w-75 d-flex gap-5 flex-column border-bottom border-dark  w100Mobile">
      <div
        className="d-flex w-100 gap-5 justify-content-center"
        style={{ height: "60%", marginTop: "7rem" }}
      >
        <InputProfileImg />

        <ProfileDetails
          onFollowClick={handleFollowClick}
          user={currentUserId}
          onUnfollowClick={handleUnfollowInner}
        />
      </div>
      <FixedStorys />
      <ProfileStats className="versionMobileProfileStats justify-content-between py-3 px-5 border-top border-dark" />
    </section>
  );
};

export default HeaderProfile;
