import { FC } from "react";

import { User } from "../../Interface/Interface";
import BtnFollowAndUnfollow from "../BtnFollowAndUnfollow";

interface UserItemProps {
  user: User;
  onFollowClick: (userId: string) => void;
  onUnfollowClick: (userId: string) => void;
  onClick?: (user: User) => void;
}

const UserItem: FC<UserItemProps> = ({
  user,
  onFollowClick,
  onClick,
  onUnfollowClick,
}) => {
  return (
    <section
      key={user.userName}
      className="d-flex justify-content-between align-items-center"
      style={{ width: "60rem", marginBottom: "1.5rem" }}
    >
      <div className="d-flex gap-3">
        <img
          onClick={() => onClick?.(user)}
          src={user.profileImg}
          alt={user.userName}
          style={{ maxWidth: "4.4rem", maxHeight: "4.4rem" }}
          className="rounded-circle hover"
        />
        <div className="d-flex flex-column">
          <h1 onClick={() => onClick?.(user)} className="fs-4 text-white">
            {user.userName}
          </h1>
          <p style={{ color: "#a8a8a8" }}>{user.fullName}</p>
        </div>
      </div>

      <BtnFollowAndUnfollow
        userId={user.userName}
        onFollowClick={onFollowClick}
        onUnfollowClick={onUnfollowClick}
      />
    </section>
  );
};

export default UserItem;
