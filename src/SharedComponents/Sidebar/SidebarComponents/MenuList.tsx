import MenuOption from "./MenuOption";
import { useMenuOptions } from "./menuOptions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
// import { useToggleCreatePostClick } from "../../createPost/createPostToggle/useToggleCreatePostClick";
// import CreatePostToggle from "../../createPost/createPostToggle/CreatePostToggle";

const MenuList = () => {
  const [activeLink, setActiveLink] = useState("link1");
  // const { isVisible, toggleVisibility } = useToggleCreatePostClick(); // Acessa
  const { menuOptions } = useMenuOptions();
  const navigate = useNavigate();
  const { setSelectedUser } = useSelectedUser();
  const { currentUserId } = useCurrentUser();

  return (
    <div>
      <ul className="w-100 d-flex px-3 flex-column gap-4 list-unstyled h-100 sidebarList">
        {menuOptions.map((option, index) => (
          <MenuOption
            key={index}
            name={option.name}
            icon={option.icon}
            isActive={activeLink === option.name}
            onClick={() => {
              setActiveLink(option.name);

              // if (option.name === "Create") {
              //   toggleVisibility();
              // } else if (option.path) {
              //   navigate(option.path);x
              // }

              if (option.path) {
                navigate(option.path);
              }

              if (option.name === "Profile") {
                setSelectedUser(currentUserId);
              }
            }}
          />
        ))}
      </ul>
      {/* 
      {isVisible && <CreatePostToggle />} */}
    </div>
  );
};

export default MenuList;
