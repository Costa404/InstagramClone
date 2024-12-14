import style from "../../../Pages/Homepage/Frontend/Homepage.module.css";
import { FaInstagram } from "react-icons/fa";
import blackTitle from "../../../assets/black-title.png";
import whiteTitle from "../../../assets/white-title.png";
import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";

const SidebarHeader = () => {
  const { theme } = useTheme();
  return (
    <div className="px-4 pb-5">
      {theme === "dark" ? (
        <img
          src={blackTitle}
          alt=""
          className={style.logoInstagram}
          style={{
            maxWidth: "14.3rem",
            maxHeight: "3.9rem",
            zIndex: "22",
          }}
        />
      ) : (
        <img
          src={whiteTitle}
          alt=""
          className={style.logoInstagram}
          style={{
            maxWidth: "14.3rem",
            maxHeight: "3.9rem",
          }}
        />
      )}

      <span className={style.miniLogo} style={{ marginLeft: "0.5rem" }}>
        <FaInstagram className="fs-2" />
      </span>
    </div>
  );
};

export default SidebarHeader;
