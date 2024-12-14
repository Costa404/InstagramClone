import React, { useRef } from "react";
import { useImgUpload } from "../../../../../SharedComponents/ImageLogic/UserImg/useImgUpload";

export const useProfileImage = () => {
  const { uploadImage } = useImgUpload();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // Abre o seletor
    }
  };

  const handleImageSelection = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Verifica se o arquivo foi selecionado corretamente
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      try {
        // Faz o upload da imagem de perfil
        await uploadImage("profile", file);
      } catch (error) {
        console.error("Erro ao fazer upload:", error);
      }
    } else {
      console.warn("Nenhuma imagem selecionada.");
    }
  };

  return { handleImageSelection, handleImageClick, inputRef };
};
