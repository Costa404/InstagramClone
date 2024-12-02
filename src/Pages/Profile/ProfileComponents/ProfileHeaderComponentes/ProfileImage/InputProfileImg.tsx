import { useImgUploadContext } from "../../../../../useContext/ImgUploadContext/ImgUploadContext";
import { useImgUpload } from "../../../../../SharedComponents/ImageLogic/UserImg/useImgUpload";
import { useProfileImage } from "./useProfileImage";
import ProfileImg from "./ProfileImg";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";

const UploadProfileImg = () => {
  const { uploading } = useImgUpload();
  const { selectedImg } = useImgUploadContext();

  const { currentUserId } = useCurrentUser();
  const { handleImageClick, handleImageSelection, inputRef } =
    useProfileImage();

  return (
    <div onClick={handleImageClick} className="d-flex align-items-center p-5">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageSelection}
        disabled={uploading}
      />
      {selectedImg ? (
        <ProfileImg userId={currentUserId?.userName as string} />
      ) : (
        <img
          src="/path/to/default-profile-image.jpg"
          alt="Default Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default UploadProfileImg;
