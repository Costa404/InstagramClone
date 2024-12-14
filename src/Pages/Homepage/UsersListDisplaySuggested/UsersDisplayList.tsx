import { useNavigate } from "react-router-dom";
import UserItem from "../../../SharedComponents/Followers/Followlogic/UserItem";
import { useFakeUsers } from "../../../useContext/fakeUsers/FakeUsersContext";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";

import { User } from "../../../SharedComponents/Interface/Interface";
import { useEffect } from "react";
import { useHandleUnfollow } from "../../../SharedComponents/Followers/UnfollowLogic/useHandleUnfollow";
import { useHandleStatus } from "../../../SharedComponents/Followers/Followlogic/FollowingStatus/useHandleStatus";

const UsersDisplayList = () => {
  const { setSelectedUser } = useSelectedUser();
  const navigate = useNavigate();
  const fakeUsers = useFakeUsers();
  const { handleFollowClick } = useHandleStatus();
  // const { handleFollowInner } = useHandleUnfollow();

  const { handleUnfollowInner } = useHandleUnfollow();

  const handleClick = (user: User) => {
    setSelectedUser(user);
    navigate(`/homepage/${user.userName}`);
  };

  useEffect(() => {
    if (fakeUsers && fakeUsers.length > 0) {
      //
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gap-4 d-flex flex-column align-items-center ">
      {fakeUsers && fakeUsers.length > 0 ? (
        fakeUsers.map((user: User) => (
          <UserItem
            key={user.userName}
            user={user}
            onClick={handleClick}
            onFollowClick={handleFollowClick}
            onUnfollowClick={handleUnfollowInner}
          />
        ))
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UsersDisplayList;
