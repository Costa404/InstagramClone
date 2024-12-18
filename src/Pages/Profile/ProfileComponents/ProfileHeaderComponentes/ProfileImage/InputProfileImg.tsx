import { useProfileImage } from "./useProfileImage";
import ProfileImg from "./ProfileImg";

import { useSelectedUser } from "../../../../../useContext/SelectedUserContext";

const UploadProfileImg = () => {
  const { selectedUser } = useSelectedUser();

  const { handleImageClick, handleImageSelection, inputRef } =
    useProfileImage();

  return (
    <div onClick={handleImageClick} className="d-flex ">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageSelection}
      />

      <ProfileImg
        userId={selectedUser?.userName as string}
        style={{ width: "15rem", height: "15rem" }}
        className="profilePictureWidthMobile"
      />

      {/* <img
        src={defaultPic}
        alt="Default Profile"
        className="hover"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      /> */}
    </div>
  );
};

export default UploadProfileImg;
