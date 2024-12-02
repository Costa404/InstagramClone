// src/components/ProfileTabs.tsx

import { IoBookmarkOutline } from "react-icons/io5";
import { MdGridOn } from "react-icons/md";
import { CgPlayButtonR, CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styles from "../../Profile.module.css"; // Import CSS Module

const ProfileTabs = () => {
  return (
    <div className={`mt-4 d-flex gap-5 ${styles["profile-tabs"]}`}>
      <NavLink
        to="/Homepage/profile"
        className={({ isActive }) =>
          `d-flex gap-2 ${styles["profile-tab"]} ${
            isActive ? styles["profile-tab-active"] : ""
          }`
        }
      >
        <MdGridOn className="fs-3" />
        <h4>Posts</h4>
      </NavLink>

      <NavLink
        to="/Homepage/profile/reels" // Ajuste o caminho para "/profile/reels"
        className={({ isActive }) =>
          `d-flex gap-2 ${styles["profile-tab"]} ${
            isActive ? styles["profile-tab-active"] : ""
          }`
        }
      >
        <CgPlayButtonR className="fs-3" />
        <h4>Reels</h4>
      </NavLink>

      <NavLink
        to="/profile/saved" // Ajuste o caminho para "/profile/saved"
        className={({ isActive }) =>
          `d-flex gap-2 ${styles["profile-tab"]} ${
            isActive ? styles["profile-tab-active"] : ""
          }`
        }
      >
        <IoBookmarkOutline className="fs-3" />
        <h4>Saved</h4>
      </NavLink>

      <NavLink
        to="/profile/tagged" // Ajuste o caminho para "/profile/tagged"
        className={({ isActive }) =>
          `d-flex gap-2 ${styles["profile-tab"]} ${
            isActive ? styles["profile-tab-active"] : ""
          }`
        }
      >
        <CgProfile className="fs-3" />
        <h4>Tagged</h4>
      </NavLink>
    </div>
  );
};

export default ProfileTabs;
