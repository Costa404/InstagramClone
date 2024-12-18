import { User } from "../../../../../SharedComponents/Interface/Interface";
import BtnFollowandUnfollow from "../../../../../SharedComponents/Followers/BtnFollowAndUnfollow";
import style from "../../../Profile.module.css";

interface ActionButtonsProps {
  user: User;
  isCurrentUser?: boolean;

  onFollowClick: (userId: string) => void;
  onUnfollowClick: (userId: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isCurrentUser,

  onFollowClick,
  onUnfollowClick = () => {},
  user,
}) => {
  return (
    <div>
      {isCurrentUser ? (
        <div className="d-flex gap-5 flex-wrap">
          <span>
            <a
              href="#"
              className={` ${style.btnProfileHeader}  rounded-3 p-3 px-4 `}
            >
              Edit Profile
            </a>
          </span>
          <span>
            <a
              href="#"
              className={` ${style.btnProfileHeader}  rounded-3 p-3 px-4 `}
            >
              View Archive
            </a>
          </span>
        </div>
      ) : (
        <BtnFollowandUnfollow
          userId={user.userName}
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
        />
      )}
    </div>
  );
};

export default ActionButtons;
