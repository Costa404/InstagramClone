import React from "react";
import { Card } from "react-bootstrap";
import PostTime from "./PostTime";
import { RxDotsHorizontal } from "react-icons/rx";
import ProfileImg from "../../../../../Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";
import { useCurrentUser } from "../../../../../../useContext/currentUserContext/currentUserContext";

type PostHeaderProps = {
  userName: string;
  createdAt?: Date;
  fullName?: string;
  bio?: string;
  profileImg?: string;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
};

const PostHeader: React.FC<PostHeaderProps> = ({
  userName,
  createdAt,
  // fullName,
  // bio,
  // followersCount,
  // postsCount,
  // followingCount,
  // profileImg,
}) => {
  const { currentUserId } = useCurrentUser();
  // const { setSelectedUser } = useSelectedUser();
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   if (setSelectedUser) {
  //     const user: User = {
  //       fullName,
  //       userName,
  //       bio,
  //       profileImg,
  //       followersCount,
  //       followingCount,
  //       postsCount,
  //     };

  //     console.log("Selected User:", user); // Depure para confirmar os dados
  //     setSelectedUser(user);
  //     navigate(`/homepage/${user.userName}`);
  //   } else {
  //     console.error("setSelectedUser is null");
  //   }
  // };

  return (
    <Card.Body className="w-100 p-0 d-flex align-items-center  justify-content-between  ">
      <div className="d-flex">
        <ProfileImg
          userId={currentUserId?.profileImg as string}
          style={{ width: "3.2rem", height: "3.2rem" }}
        />

        <div className="d-flex gap-3 align-items-center justify-content-between gap-l-3  ms-1">
          <Card.Title style={{ fontWeight: "600" }} className="px-3">
            {userName}
          </Card.Title>
          <div className=" text-center">
            <PostTime createdAt={createdAt as Date} />
          </div>
        </div>
      </div>
      <RxDotsHorizontal className="fs-2" />
    </Card.Body>
  );
};

export default PostHeader;
