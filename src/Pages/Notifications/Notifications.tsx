import UsersDispaly from "../Homepage/UsersListDisplaySuggested/UsersDispaly";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Homepage");
  };
  return (
    <div className="d-flex justify-content-center flex-column  align-items-center">
      <div
        className="d-flex justify-content-between fs-2 p-3   titleContainerSuggestUsers "
        style={{ width: "62%" }}
      >
        <IoArrowBackOutline className="fs-2 hover" onClick={handleClick} />{" "}
        <p className="fs-2">Notifications</p>
        <IoIosRefresh className="fs-2 hover" />
      </div>
      No notifciations <UsersDispaly />
    </div>
  );
};

export default Notifications;
