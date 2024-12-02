import React from "react";
import { Card } from "react-bootstrap";

type PostLikesAndDescriptionProps = {
  likes: number;
  userName: string;
  description: string;
};

const PostLikesAndDescription: React.FC<PostLikesAndDescriptionProps> = ({
  likes,
  userName,
  description,
}) => (
  <div className="d-flex flex-column gap-2">
    <span style={{ fontWeight: "600" }}>{likes} Likes</span>
    <div className="d-flex gap-2">
      <Card.Title style={{ fontWeight: "600" }}>{userName}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </div>
  </div>
);

export default PostLikesAndDescription;
