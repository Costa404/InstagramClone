import React from "react";

import { FaRegBookmark, FaRegComment } from "react-icons/fa";

import { LuSend } from "react-icons/lu";
import { useToggleLike } from "../LogicFeed/useToggleLike";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";
import { useTheme } from "../../../../../../useContext/ThemeContext/ThemeContext";
import { LiaHeartSolid } from "react-icons/lia";

const PostActions: React.FC<{ postData: PostData }> = ({ postData }) => {
  const { theme } = useTheme();
  const { changeLikeState, like } = useToggleLike(postData);
  return (
    <div className="d-flex justify-content-between w-100">
      <div className="d-flex gap-4">
        <LiaHeartSolid
          onClick={changeLikeState}
          className="fs-1 "
          style={{
            color: like === true ? "red" : theme === "dark" ? "white" : "black",
          }}
        />
        <FaRegComment className="fs-1 " />
        <LuSend className="fs-1 " />
      </div>
      <FaRegBookmark className="fs-1" />
    </div>
  );
};

export default PostActions;
