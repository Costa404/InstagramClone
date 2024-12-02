import React from "react";
import { Card } from "react-bootstrap";

import PostHeader from "./PostComponents/PostHeader";
import PostImage from "./PostComponents/PostImage";
import PostActions from "./PostComponents/PostActions";
import PostLikesAndDescription from "./PostComponents/PostLikesAndDescription";

import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";
import { PostData } from "../../../../../SharedComponents/Interface/Interface";

type PostCardProps = {
  post: PostData;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // const users = generateUsers(1);

  const { theme } = useTheme();

  return (
    <Card
      className="mb-4 d-flex flex-column align-items-center pt-4 pb-4 gap-4 border-0 border-bottom border-dark rounded-0"
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <PostHeader
        userName={post.userName as string}
        createdAt={post.createdAt.toDate()}
      />
      <PostImage imageUrl={post.imageUrl} />
      <Card.Body className="w-100 p-0 d-flex flex-column gap-2">
        <PostActions />
        <PostLikesAndDescription
          likes={post.likesCount}
          userName={post.userName as string}
          description={post.description as string}
        />
      </Card.Body>
    </Card>
  );
};
export default PostCard;
