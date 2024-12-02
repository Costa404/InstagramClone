import { useState } from "react";
import { BsExclamationSquare } from "react-icons/bs";
import { FaBars, FaRegBookmark } from "react-icons/fa";
import { GoMoon } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import style from "../../../../../Pages/Homepage/Frontend/Homepage.module.css";
import SwitchAppearance from "./SwitchAppearance/SwitchAppearance";
import { useToggle } from "./SwitchAppearance/useToggle";
import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";
import useLogout from "../../../../../Pages/Authentication/Logout/useLogout";

export const ToggleMenu = () => {
  const { theme } = useTheme();
  const { handleLogOut } = useLogout();
  const { isVisible, toggleVisibility, close } = useToggle();
  const [showSwitchAppearance, setShowSwitchAppearance] = useState(false);

  const handleSwitchAppearanceClick = () => {
    setShowSwitchAppearance(true); // Abre a mini-div SwitchAppearance
    close(); // Fecha o menu principal
  };

  const closeSwitchAppearance = () => {
    setShowSwitchAppearance(false);
    toggleVisibility(); // Reabre o menu principal
  };

  return (
    <div className="hover d-flex justify-content-start align-items-center rounded rounded-3 position-relative">
      {/* Menu principal */}
      {isVisible && (
        <div
          className="position-absolute p-3 my-2 rounded-4"
          style={{
            width: "22.6rem",
            height: "40.5rem",
            zIndex: "1000",
            bottom: "100%",
            backgroundColor: theme === "dark" ? "#1a1a1a" : "#f2f2f2",
          }}
        >
          <ul className="d-flex flex-column gap-4 pt-4 w-100">
            <li className="list-unstyled d-flex gap-3 ">
              <IoIosSettings className="fs-1" />
              <p className="fs-4">Settings</p>
            </li>
            <li className="list-unstyled d-flex gap-3">
              <ImStatsDots className="fs-1" />
              <p className="fs-4">Your Activity</p>
            </li>
            <li className="list-unstyled d-flex gap-3">
              <FaRegBookmark className="fs-1" />
              <p className="fs-4">Saved</p>
            </li>
            {/* Switch Appearance */}
            <li
              className="list-unstyled d-flex gap-3"
              onClick={handleSwitchAppearanceClick}
            >
              <GoMoon className="fs-1" />
              <p className="fs-4">Switch Appearance</p>
            </li>
            <li className="list-unstyled d-flex gap-3">
              <BsExclamationSquare className="fs-1" />
              <p className="fs-4">Report a Problem</p>
            </li>
          </ul>
          <div className="p-4 d-flex flex-column gap-3">
            <h1 className="fs-4">Switch Accounts</h1>
            <h6 className="fs-4" onClick={handleLogOut}>
              Log out
            </h6>
          </div>
        </div>
      )}

      {/* Mini-div SwitchAppearance */}
      {showSwitchAppearance && (
        <div className="position-absolute" style={{ zIndex: "1001" }}>
          <SwitchAppearance closeMainDiv={closeSwitchAppearance} />
        </div>
      )}

      {/* Toggle do menu */}
      <a
        onClick={toggleVisibility}
        className="align-items-center d-flex w-100 fs-2 hover rounded rounded-3 w-100"
      >
        <div
          className={`w-100 d-flex align-items-center rounded rounded-3 p-2 ${
            theme === "dark" ? "dark" : "light"
          } p-1 py-2`}
        >
          <FaBars className="fs-2 me-2" />
          <span className={`fs-3 ${style.listOptionsSideBar}`}>More</span>
        </div>
      </a>
    </div>
  );
};

export default ToggleMenu;
