import React, { createContext, useContext, useState } from "react";

type ImgUploadContextType = {
  selectedImg: File | null;
  setSelectedImg: (file: File | null) => void;
};

const ImgUploadContext = createContext<ImgUploadContextType | undefined>(
  undefined
);

export const ImgUploadProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);

  console.log("selectedImg no contexto:", selectedImg);
  return (
    <ImgUploadContext.Provider value={{ selectedImg, setSelectedImg }}>
      {children}
    </ImgUploadContext.Provider>
  );
};

export const useImgUploadContext = () => {
  const context = useContext(ImgUploadContext);
  if (!context) {
    throw new Error(
      "useImgUploadContext deve ser usado dentro de ImgUploadProvider"
    );
  }
  return context;
};
