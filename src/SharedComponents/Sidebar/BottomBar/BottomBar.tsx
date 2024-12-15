import { LuSend } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";
import ProfileImg from "../../../Pages/Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";

const BottomBar = () => {
  const { selectedUser } = useSelectedUser();
  return (
    <div
      className="position-fixed w-100 bg-black bottomBar"
      style={{ bottom: "0", display: "none" }}
    >
      <div className=" d-flex justify-content-between  p-2 border-top border-dark px-5 ">
        {" "}
        <GoHomeFill data-testid="cypress-hrefHome" className="fs-1 " />
        <FaRegCompass className="fs-1" />
        <BsCameraReels className="fs-1" />
        <CiSquarePlus className="fs-1" />
        <LuSend className="fs-1" />
        <ProfileImg
          userId={selectedUser?.userName as string}
          style={{ width: "2.4rem", height: "2.4rem" }}
        />
      </div>
    </div>
  );
};

export default BottomBar;
