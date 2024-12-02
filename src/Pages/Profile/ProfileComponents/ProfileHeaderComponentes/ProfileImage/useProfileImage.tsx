import React, { useRef } from "react";
import { useImgUpload } from "../../../../../SharedComponents/ImageLogic/UserImg/useImgUpload";

export const useProfileImage = () => {
  const { handleImgChange, uploadImage } = useImgUpload();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // Abre o seletor de arquivos
    }
  };

  const handleImageSelection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleImgChange(event);

    if (event.target.files && event.target.files[0]) {
      try {
        await uploadImage("profile"); // Faz o upload automático
      } catch (error) {
        console.error("Erro ao fazer upload:", error);
      }
    }
  };
  return { handleImageSelection, handleImageClick, inputRef };
};
