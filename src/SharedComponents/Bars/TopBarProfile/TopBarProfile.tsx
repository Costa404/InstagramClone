import { FaChevronDown, FaThreads } from "react-icons/fa6";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { IoIosSettings } from "react-icons/io";

const TopBarProfile = () => {
  const { currentUserId } = useCurrentUser();

  return (
    <section
      style={{ top: "0", display: "none", zIndex: "22" }}
      className="topBarProfile w-100"
    >
      {" "}
      <div className="p-3 d-flex justify-content-between align-items-center position-fixed  w-100  border-bottom border-dark  ">
        <IoIosSettings className="fs-1" />
        <span className="d-flex gap-2 align-items-center fs-3">
          {currentUserId?.userName} <FaChevronDown />
        </span>
        <FaThreads className="fs-2" />
      </div>
    </section>
  );
};

export default TopBarProfile;
