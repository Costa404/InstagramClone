import FixedStorys from "./FixedStorys";
import ProfileDetails from "./ProfileDetails";

import { useSelectedUser } from "../../../../useContext/SelectedUserContext";
import { useHandleStatus } from "../../../../SharedComponents/Followers/Followlogic/FollowingStatus/useHandleStatus";
import { useHandleUnfollow } from "../../../../SharedComponents/Followers/UnfollowLogic/useHandleUnfollow";
import InputProfileImg from "./ProfileImage/InputProfileImg";

const HeaderProfile = () => {
  const { selectedUser } = useSelectedUser();
  const { handleUnfollowInner } = useHandleUnfollow();
  // const { handleFollowInner } = useHandleFollow();
  const { handleFollowClick } = useHandleStatus();

  console.log("selectedUser", selectedUser);

  if (!selectedUser) return;

  return (
    <section className="mt-5  d-flex gap-5 flex-column border-bottom border-dark">
      <div className="d-flex w-100 gap-5" style={{ height: "60%" }}>
        <InputProfileImg />

        <ProfileDetails
          onFollowClick={handleFollowClick}
          user={selectedUser}
          onUnfollowClick={handleUnfollowInner}
        />
      </div>
      <FixedStorys />
    </section>
  );
};

export default HeaderProfile;
