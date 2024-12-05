import React from "react";

import FollowSugestion from "../RightContent/UsersDisplay/FollowSugestion";
import style from "../Homepage.module.css";
import FooterLinks from "./FooterLinks";

import ProfileImg from "../../../Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";

import { useCurrentUser } from "../../../../useContext/currentUserContext/currentUserContext";

type RightContentProps = {
  userProfileImage?: string;
  userName?: string;
};

const RightContent: React.FC<RightContentProps> = () => {
  const { currentUserId } = useCurrentUser();

  console.log("currentUserId", currentUserId?.userName);

  return (
    <section
      className={`${style.rightSection} d-flex flex-lg-column gap-3 `}
      style={{ paddingTop: "3%", minWidth: "31.9rem", maxWidth: "31.9rem" }}
    >
      <div className="d-flex gap-3  ">
        <ProfileImg
          userId={currentUserId?.userName as string}
          style={{ width: "4.4rem", height: "4.4rem" }}
        />
        <div className="d-flex justify-content-between align-items-center  w-100 ">
          <div className="d-flex fw-bolder flex-column ">
            <h3>{currentUserId?.fullName}</h3>
            <p className="text-secondary">{currentUserId?.userName}</p>
          </div>
          <a href="">
            <h6 className="text-primary fs-5 switchColorToWhiteA">Switch</h6>
          </a>
        </div>
      </div>

      <FollowSugestion />
      <FooterLinks />
      <span className="text-secondary mt-4">© 2024 Instagram from Meta</span>
    </section>
  );
};

export default RightContent;
