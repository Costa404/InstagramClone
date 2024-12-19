import { LuSend } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

import ProfileImg from "../../../Pages/Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useEffect } from "react";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";

const BottomBar = () => {
  const { currentUserId } = useCurrentUser();
  console.log("currentUserId", currentUserId);
  const { setSelectedUser } = useSelectedUser();

  const handleProfileClick = () => {
    setSelectedUser(currentUserId);
  };

  return (
    <div
      className="position-fixed w-100 bg-black bottomBar"
      style={{ bottom: "0", display: "none", zIndex: "22" }}
    >
      <div className=" d-flex justify-content-between  p-4 border-top border-dark  ">
        {" "}
        <Link to="/Homepage">
          <GoHomeFill data-testid="cypress-hrefHome" className="fs-1 " />
        </Link>
        <FaRegCompass className="fs-1" />
        <BsCameraReels className="fs-1" />
        <Link to="/createPost">
          <CiSquarePlus className="fs-1" />
        </Link>
        <LuSend className="fs-1" />
        <Link
          to={`/Homepage/${currentUserId?.userName}`}
          onClick={handleProfileClick}
        >
          <ProfileImg
            userId={currentUserId?.userName as string}
            style={{ width: "2.4rem", height: "2.4rem" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
