import React from "react";
import style from "../../../Pages/Homepage/Frontend/Homepage.module.css";
import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";

interface MenuOptionProps {
  name: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isActive: boolean; // Adicione esta prop para saber se está ativo
}

const MenuOption: React.FC<MenuOptionProps> = ({
  name,
  icon,
  onClick,
  isActive,
}) => {
  const { theme } = useTheme(); // Obtendo o tema atual
  return (
    <li className="d-flex align-items-center pt-2 ml-5  fs-1 fw-semibold text-center  w-100 ">
      <a
        href="#"
        onClick={onClick}
        className={`w-100  text-decoration-none   fs-3 fw-normal d-flex  ${
          isActive ? "active" : "" // Use isActive para aplicar a classe
        }`}
      >
        <div
          className={` ${
            style.sidebarList
          } w-100  hover d-flex p-2  rounded rounded-3  ${
            theme === "dark" ? "dark" : "light"
          }`}
        >
          <span className="fs-3 me-3 d-flex align-items-center">{icon}</span>
          <span className={`fs-3 ${style.listOptionsSideBar}`}>{name}</span>
        </div>
      </a>
    </li>
  );
};

export default MenuOption;
