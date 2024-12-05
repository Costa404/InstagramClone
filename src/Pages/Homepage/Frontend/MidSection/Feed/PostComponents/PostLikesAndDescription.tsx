import React from "react";
import { Card } from "react-bootstrap";
import { useToggleLike } from "../LogicFeed/useToggleLike";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";

type PostLikesAndDescriptionProps = {
  userName: string;
  description: string;
  postData: PostData;
};

const PostLikesAndDescription: React.FC<PostLikesAndDescriptionProps> = ({
  postData,
  userName,
  description,
}) => {
  const { likesCount } = useToggleLike(postData);

  return (
    <div className="d-flex flex-column gap-2">
      <span
        style={{
          fontWeight: "600",
        }}
      >
        {likesCount} Likes
      </span>
      <div className="d-flex gap-2">
        <Card.Title style={{ fontWeight: "600" }}>{userName}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </div>
    </div>
  );
};

export default PostLikesAndDescription;
