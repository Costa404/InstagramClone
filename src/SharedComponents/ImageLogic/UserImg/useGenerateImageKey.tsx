import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";

export const useGenerateImageKey = (imageType: "profile" | "post") => {
  const { selectedImg } = useImgUploadContext();
  const { currentUserId } = useCurrentUser();

  if (imageType === "profile") {
    return `profileImages/${currentUserId?.userName}`;
  }
  return `postImages/${currentUserId?.userName}-${selectedImg?.name}`;
};
