export const useGetProfileImage = () => {
  // const { currentUserId } = useUser();
  //   const userId = 0; //TESTE

  const getProfileImage = async () => {
    // if (!currentUserId) {
    //   return null;
    // }
    // //   "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";
    // // const defaultProfileImage =
    // const storageRef = ref(storage, `profileImages/${userId}.jpg`);
    // console.log("Storage reference:", storageRef.fullPath); // Verifique o caminho
    // console.log("userId", userId);
    // try {
    //   const url = await getDownloadURL(storageRef);
    //   console.log("Profile image URL:", url);
    //   return url;
    // } catch (error) {
    //   console.error("Erro ao obter URL da imagem de perfil:", error);
    //   return null;
    // }
  };

  return {
    getProfileImage,
  };
};
