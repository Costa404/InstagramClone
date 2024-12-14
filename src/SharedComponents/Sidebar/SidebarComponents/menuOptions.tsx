import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";

import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { saveFakeUsersToFirebase } from "../../FakeUsers/saveFakeUsersFirebase";
import ProfileImg from "../../../Pages/Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";

export const useMenuOptions = () => {
  const { currentUserId } = useCurrentUser();
  const { selectedUser } = useSelectedUser();

  const menuOptions = [
    {
      name: "Home",
      icon: <GoHomeFill data-testid="cypress-hrefHome" className="fs-2" />,
      path: "/homepage",
    },
    {
      name: "Search",
      icon: <IoSearchSharp className="fs-2" />,
      path: "/search",
    },
    {
      name: "Explore",
      icon: <FaRegCompass className="fs-2" />,
      path: "/explore",
    },
    { name: "Reels", icon: <BsCameraReels className="fs-2" />, path: "/reels" },
    { name: "Messages", icon: <LuSend className="fs-2" />, path: "/messages" },
    {
      name: "Notifications",
      icon: <FaRegHeart className="fs-2" />,
      path: "/notifications",
    },
    {
      name: "Create",
      icon: <CiSquarePlus className="fs-2" />,
      path: "/Create",
    },
    {
      name: "Dashboard",
      icon: <IoIosStats className="border fs-2" />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: (
        <ProfileImg
          userId={selectedUser?.userName as string}
          style={{ width: "2.4rem", height: "2.4rem" }}
        />
      ),
      path: `/homepage/${currentUserId?.userName}`, //
    },
  ];

  return { menuOptions };
};

export const handleMenuAction = async (action: string) => {
  if (action === "createFakeUsers") {
    const numUsers = 50;
    try {
      await saveFakeUsersToFirebase(numUsers);
      console.log(`${numUsers} fake users created successfully.`);
    } catch (error) {
      console.error("Error creating fake users:", error);
    }
  }
};
