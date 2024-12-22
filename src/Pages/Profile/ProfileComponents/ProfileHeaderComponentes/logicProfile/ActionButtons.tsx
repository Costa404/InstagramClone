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
        <div className="d-flex gap-2 flex-wrap ">
          <span>
            <button
              className={` ${style.btnProfileHeader}  rounded-3 fw-bold`}
              style={{
                width: "10rem",
                height: "3rem",
                border: "none",
                color: "white",
              }}
            >
              Edit Profile
            </button>
          </span>
          <span>
            <button
              className={` ${style.btnProfileHeader}  rounded-3 fw-bold  `}
              style={{
                width: "10rem",
                height: "3rem",
                border: "none",
                color: "white",
              }}
            >
              View Archive
            </button>
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
