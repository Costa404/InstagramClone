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
    <div className=" hover w-100">
      <Card.Img
        variant="middle"
        className="w-100 img-fluid"
        src={imageUrl}
        style={{
          height: "50.5rem",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default PostImage;
