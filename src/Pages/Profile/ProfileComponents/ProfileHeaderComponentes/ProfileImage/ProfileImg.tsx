import React, { useState, useEffect } from "react";
import { useGetProfileImage } from "../../../../../SharedComponents/ImageLogic/UserImg/useGetProfileImage";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";

type ProfileImageProps = {
  userId: string;
  style?: React.CSSProperties;
};

const ProfileImg: React.FC<ProfileImageProps> = ({ style }) => {
  const { getProfileImage } = useGetProfileImage();
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const { currentUserId } = useCurrentUser();

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const storedUrl = localStorage.getItem(
          `profileImage_${currentUserId?.userName}`
        );
        if (storedUrl) {
          setProfileImageUrl(storedUrl);

          return;
        }

        const url = await getProfileImage();
        if (url) {
          localStorage.setItem(`profileImage_${currentUserId?.userName}`, url);
          setProfileImageUrl(url);
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem de perfil:", error);
      }
    };

    fetchProfileImage();
  }, [getProfileImage]); // Dependência adicionada

  return (
    <div>
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt="Profile"
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
          src="/path/to/default-profile-image.jpg"
          alt="No Profile"
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
