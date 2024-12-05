import React from "react";
import { Card } from "react-bootstrap";

type PostImageProps = {
  imageUrl: string;
};

const PostImage: React.FC<PostImageProps> = ({ imageUrl }) => {
  // const { changeLikeState } = useToggleLike();
  // const handleClick = (event: React.MouseEvent) => {
  //   event.stopPropagation();

  //   console.log("Image clicked");

  //   changeLikeState();

  //   // NAO FUNCIONA ^^^^
  // };
  return (
    <div className=" hover">
      <Card.Img
        variant="middle"
        className="w-100"
        src={imageUrl}
        style={{
          minHeight: "50.5rem",
          minWidth: "46.8rem",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default PostImage;
