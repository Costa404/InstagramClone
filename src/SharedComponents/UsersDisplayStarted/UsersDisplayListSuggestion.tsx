import UserItem from "../Followers/Followlogic/UserItem";
import { useFakeUsers } from "../../useContext/fakeUsers/FakeUsersContext";

import { User } from "../Interface/Interface";
import { useHandleStatus } from "../Followers/Followlogic/FollowingStatus/useHandleStatus";
import { useHandleUnfollow } from "../Followers/UnfollowLogic/useHandleUnfollow";

const UsersDisplayList = () => {
  const fakeUsers = useFakeUsers();
  const { handleUnfollowInner } = useHandleUnfollow();

  const { handleFollowClick } = useHandleStatus();

  return (
    <div className="gap-4 d-flex flex-column align-items-center">
      {fakeUsers && fakeUsers.length > 0 ? (
        fakeUsers.map((user: User) => (
          <UserItem
            key={user.userName}
            user={user}
            // isFollowing={isFollowing[user.uid]}
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
