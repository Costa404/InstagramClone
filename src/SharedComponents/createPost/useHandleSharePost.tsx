import { collection, doc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { usePostContext } from "../../useContext/PostContext/PostContext";

import { PostData } from "../Interface/Interface";
import { useImgUpload } from "../ImageLogic/UserImg/useImgUpload";
import { useCurrentUser } from "../../useContext/currentUserContext/currentUserContext";
import { useImgUploadContext } from "../../useContext/ImgUploadContext/ImgUploadContext";
import { usePostCollection } from "./PostsFeed/usePostCollection";
import { db } from "../../firebase";

export const useHandleSharePost = () => {
  const { setDescription, setLocation, location, description } =
    usePostContext();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const { currentUserId } = useCurrentUser();

  const { uploadImage } = useImgUpload();
  const { selectedImg } = useImgUploadContext();
  const { postCollection } = usePostCollection();

  const handleShare = async () => {
    try {
      if (selectedImg) {
        console.log("Uploading image...");
        const imageUrl = await uploadImage("post", selectedImg);

        console.log("imageUrl", imageUrl);

        if (!imageUrl) {
          alert("Erro ao carregar a imagem. Tente novamente.");
          return;
        }

        if (!currentUser) {
          throw new Error("User is not authenticated.");
        }

        const postsCollectionRef = collection(db, "posts"); // Substitua "posts" pelo nome da sua coleção no Firestore
        const postRef = doc(postsCollectionRef); // Cria uma referência com ID único
        const postId = postRef.id;

        // Crie o objeto conforme a interface PostData
        const postData: PostData = {
          userId: currentUser.uid,
          userName: currentUserId?.userName,
          imageUrl, // Use a URL retornada diretamente
          description: description || null,
          createdAt: Timestamp.now(),
          likesCount: 0,
          comments: "",
          location: location || null,
          postId: postId,
        };

        await postCollection(postData); // Passe o objeto criado
        alert("Post created successfully!");

        // Limpar campos ou redirecionar
        setDescription("");
        setLocation("");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  return { handleShare };
};
