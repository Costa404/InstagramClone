import React from "react";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const PostActions: React.FC = () => (
  <div className="d-flex justify-content-between w-100">
    <div className="d-flex gap-4">
      <FaRegHeart className="fs-1" />
      <FaRegComment className="fs-1" />
      <LuSend className="fs-1" />
    </div>
    <FaRegBookmark className="fs-1" />
  </div>
);

export default PostActions;
