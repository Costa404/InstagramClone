import { HiAtSymbol } from "react-icons/hi";
import { ToggleMenu } from "./TogleMenu/ToggleMenu";
import style from "../../../../../Pages/Homepage/Frontend/Homepage.module.css";
import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";

const LowerSidebar = () => {
  const { theme } = useTheme();
  return (
    <section
      style={{ width: "22.5rem" }}
      className={`" pt-5 w-100 gap-4 list-unstyled h-100 d-flex flex-column justify-content-end  px-3 ${style.lowerSidebar} "`}
    >
      <a
        href=""
        className={`${style.threads} w-100  align-items-center d-flex gap-3 fs-2 ml-5 `}
      >
        <div
          className={`w-100   d-flex  
align-items-center rounded rounded-3 p-2 ${
            theme === "dark" ? "dark" : "light"
          } ${style.divLowerSidebar}`}
        >
          <HiAtSymbol className="fs-2 me-2  " />
          <span className={`fs-3 ${style.listOptionsSideBar}`}> Threads</span>
        </div>
      </a>
      <ToggleMenu />
    </section>
  );
};

export default LowerSidebar;
