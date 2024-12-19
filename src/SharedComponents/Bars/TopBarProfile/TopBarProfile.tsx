import { FaChevronDown, FaThreads } from "react-icons/fa6";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { IoIosRefresh, IoIosSettings } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useDisplayUser from "../../../Pages/Profile/ProfileComponents/ProfileHeaderComponentes/logicProfile/useDisplayUser";

const TopBarProfile = () => {
  const { currentUserId } = useCurrentUser();
  const navigate = useNavigate();
  const { displayUser } = useDisplayUser();
  const isCurrentUser = displayUser?.userId === currentUserId?.userId;

  const handleClick = () => {
    navigate("/Homepage");
  };

  return (
    <section
      style={{ top: "0", display: "none", zIndex: "22" }}
      className="topBarProfile w-100"
    >
      {isCurrentUser ? (
        <div className="p-3 d-flex justify-content-between align-items-center position-fixed w-100 border-bottom border-dark">
          <IoIosSettings className="fs-1" />
          <span className="d-flex gap-2 align-items-center fs-3">
            {currentUserId?.userName} <FaChevronDown />
          </span>
          <FaThreads className="fs-2" />
        </div>
      ) : (
        <div className="p-3 d-flex justify-content-between align-items-center position-fixed w-100 border-bottom border-dark">
          <IoArrowBackOutline className="fs-2 hover" onClick={handleClick} />
          <p className="fs-2 mb-0">{displayUser?.userName}</p>
          <IoIosRefresh className="fs-2 hover" />
        </div>
      )}
    </section>
  );
};

export default TopBarProfile;
