import UsersDispaly from "../Homepage/UsersListDisplaySuggested/UsersDispaly";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";

const Notifications = () => {
  return (
    <div>
      <div className="d-flex justify-content-between fs-2 p-3 w-100">
        <IoArrowBackOutline className="fs-2" />{" "}
        <p className="fs-2">Notifications</p>
        <IoIosRefresh className="fs-2" />
      </div>
      No notifciations <UsersDispaly />
    </div>
  );
};

export default Notifications;
