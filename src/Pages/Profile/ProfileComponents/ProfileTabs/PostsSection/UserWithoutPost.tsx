import React from "react";
import { IoCameraOutline } from "react-icons/io5";

const UserWithoutPost = () => {
  return (
    <div className="w-100 align-items-center d-flex flex-column gap-5 mt-5">
      <IoCameraOutline style={{ width: "7rem", height: "7rem" }} />
      <h1 className="fs-1">Share photos</h1>
      <p>When you share photos, they wil appear on your profile</p>

      <a href="#" className="hover text-primary">
        Share your first photo
      </a>
    </div>
  );
};

export default UserWithoutPost;
