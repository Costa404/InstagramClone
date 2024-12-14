import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { useSelectedUser } from "../../../useContext/SelectedUserContext";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";

export const useImgUpload = () => {
  const { selectedUser } = useSelectedUser();
  const { currentUserId } = useCurrentUser();

  const [uploading, setUploading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  const { selectedImg } = useImgUploadContext();

  const fileName = selectedImg?.name;

  const generateImageKey = (imageType: "profile" | "post") => {
    if (imageType === "profile") {
      return `profileImages/${currentUserId?.userName}`;
    }
    return `postImages/${selectedUser?.userName}-${fileName}`;
  };

  const uploadImage = async (
    imageType: "profile" | "post",
    file: File
  ): Promise<string | null> => {
    if (!file) {
      console.error("No file provided for upload.");
      return null;
    }

    try {
      setUploading(true);
      const imageKey = generateImageKey(imageType);
      const storageRef = ref(storage, imageKey);

      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`, snapshot.state);
          },
          (error) => {
            console.error("Error during upload:", error);
            reject(error);
          },
          () => {
            console.log("Upload completed successfully.");
            resolve();
          }
        );
      });

      const url = await getDownloadURL(storageRef);
      console.log("Download URL:", url);

      setUploadUrl(url);
      localStorage.setItem(imageKey, url);
      return url;
    } catch (error) {
      console.error("Error during image upload:", error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploadImage,
    uploadUrl,
    uploading,
  };
};
