import React from "react";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const MessageUpperContent = () => {
  const { currentUserId } = useCurrentUser();
  return (
    <div className="w-100 py-5 px-3">
      <div className="d-flex w-100 justify-content-between">
        <h1 className="fw-semibold">
          {currentUserId?.userName} <IoIosArrowDown className="fs-3" />
        </h1>
        <FaEdit className="fs-1" />
      </div>
    </div>
  );
};

export default MessageUpperContent;
