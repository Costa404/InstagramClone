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
    // Atualiza o estado após a renderização
    setSelectedUser(user);
    navigate(`/homepage/${user.userName}`);
  };

  // Use useEffect para prevenir chamadas de setState durante renderização
  useEffect(() => {
    if (fakeUsers && fakeUsers.length > 0) {
      // Qualquer ação necessária após fakeUsers ser carregado
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependência para reagir à mudança no fakeUsers

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
