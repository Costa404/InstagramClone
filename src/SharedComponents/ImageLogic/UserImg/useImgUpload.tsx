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

  // Função para gerar a chave única com base no tipo de imagem
  const generateImageKey = (imageType: "profile" | "post") => {
    if (imageType === "profile") {
      return `profileImages/${currentUserId?.userName}-${fileName}`; // Para imagem de perfil
    }
    return `postImages/${selectedUser?.userName}-${fileName}`; // Para imagem de post
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

// // Função para gerar o caminho da imagem no Firebase Storage

// export const useImgUpload = () => {
//   const { currentUserId } = useCurrentUser();
//   useGenerateImageKey();

//   const { selectedImg } = useImgUploadContext();
//   const uploadImage = async (): Promise<string | null> => {
//     if (!selectedImg || !currentUserId) {
//       console.error("No selectedImg provided or user not found.");
//       return null;
//     }

//     const imageKey = generateImageKey(currentUserId.userName, selectedImg.name); // Gera o caminho para o upload
//     const url = await uploadImageToStorage(selectedImg, imageKey); // Faz o upload para o Firebase Storage

//     if (url) {
//       // Se a URL foi retornada, atualiza o Firestore com a nova URL
//       await updateProfileImageInFirestore(currentUserId?.email as string, url);
//     }

//     return url;
//   };

//   return {
//     uploadImage,
//   };
// };
