import React, { useState, useEffect, MouseEventHandler } from "react";
import { useGetProfileImage } from "../../../../../SharedComponents/ImageLogic/UserImg/useGetProfileImage";
import defaultPic from "../../../../../assets/Default_pfp.jpg";

type ProfileImageProps = {
  userId: string; // ID do usuário para buscar a imagem
  style?: React.CSSProperties; // Estilo opcional para customizar a imagem
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ProfileImg: React.FC<ProfileImageProps> = ({
  userId,
  style,
  onClick,
}) => {
  const { getProfileImage } = useGetProfileImage();
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        // Verifica se a URL já está armazenada no localStorage
        const storedUrl = localStorage.getItem(`profileImage_${userId}`);
        if (storedUrl) {
          setProfileImageUrl(storedUrl);
          return;
        }

        // // Busca a URL da imagem no Firebase
        const url = await getProfileImage();

        if (url) {
          localStorage.setItem(`profileImage_${userId}`, url);
          setProfileImageUrl(url);
        }
      } catch (error) {
        console.error(
          `Erro ao buscar a imagem de perfil para ${userId}:`,
          error
        );
      }
    };

    fetchProfileImage();
  }, [userId, getProfileImage]); // Atualiza a lógica ao mudar o userId
  console.log("profileImage", profileImageUrl);

  return (
    <div onClick={onClick}>
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          className="hover"
          alt="Profile"
          data-testid="cypress-Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            ...style,
          }}
        />
      ) : (
        <img
          src={defaultPic}
          alt="Default Profile"
          className="hover"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            ...style,
          }}
        />
      )}
    </div>
  );
};

export default ProfileImg;

console.log("localStorage", localStorage);
localStorage.clear();
