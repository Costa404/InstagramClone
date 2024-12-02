import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";

export const useGetProfileImage = () => {
  // const { currentUserId } = useUser();
  //   const userId = 0; //TESTE
  const { currentUserId } = useCurrentUser();
  const getProfileImage = async () => {
    if (!currentUserId) {
      return null;
    }

    const storageRef = ref(storage, `profileImages/${currentUserId.userName}`);
    console.log("Storage reference:", storageRef.fullPath); // Verifique o caminho

    try {
      const url = await getDownloadURL(storageRef);
      console.log("Profile image URL:", url);
      return url;
    } catch (error) {
      console.error("Erro ao obter URL da imagem de perfil:", error);
      return null;
    }
  };

  return {
    getProfileImage,
  };
};
