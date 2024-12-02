import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { useImgUploadContext } from "../../../useContext/ImgUploadContext/ImgUploadContext";

import { useSelectedUser } from "../../../useContext/SelectedUserContext";

export const useImgUpload = () => {
  const { selectedUser } = useSelectedUser();
  const { setSelectedImg, selectedImg } = useImgUploadContext();
  const [uploading, setUploading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  // Função para gerar a chave única com base no tipo de imagem
  const generateImageKey = (imageType: "profile" | "post") => {
    if (imageType === "profile") {
      return `profileImages/${selectedUser?.userName}`; // Para imagem de perfil
    }
    return `postImages/${selectedUser?.userName}-${selectedImg?.name}`; // Para imagem de post
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImg(file);
      console.log("Image selected:", file); // Adicione isso para debugar
    } else {
      console.warn("No image selected");
    }
  };

  const uploadImage = async (
    imageType: "profile" | "post"
  ): Promise<string | null> => {
    if (!selectedImg) {
      console.log("No image selected for upload.");
      return null;
    }

    try {
      setUploading(true);
      const imageKey = generateImageKey(imageType); // Gerar chave de acordo com o tipo
      const storageRef = ref(storage, imageKey);

      const uploadTask = uploadBytesResumable(storageRef, selectedImg);

      await new Promise<void>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => console.log("Upload in progress...", snapshot.state),
          (error) => reject(error),
          () => resolve()
        );
      });

      const url = await getDownloadURL(storageRef);
      setUploadUrl(url);
      localStorage.setItem(imageKey, url);

      // Atualizar o estado do contexto com o novo `selectedImg`
      // setSelectedImg(null); // Limpa a imagem atual
      return url;
    } catch (error) {
      console.error("Error during image upload:", error);
      setUploading(false);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return {
    handleImgChange,
    uploadImage,
    uploadUrl,
    uploading,
  };
};

// localStorage.clear();
