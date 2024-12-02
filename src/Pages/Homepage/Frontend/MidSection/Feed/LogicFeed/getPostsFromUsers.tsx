import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";

export const getPostsFromUsers = async (
  userNames: string[]
): Promise<PostData[]> => {
  const postRef = collection(db, "posts");
  const postQuery = query(postRef, where("userName", "in", userNames));

  const querySnapshot = await getDocs(postQuery);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      postId: doc.id,
      userId: data.userId, // Garanta que todas as propriedades sejam extraídas corretamente
      imageUrl: data.imageUrl,
      description: data.description || null, // Usando null como fallback se estiver ausente
      createdAt: data.createdAt, // A data também precisa estar corretamente formatada
      likesCount: data.likesCount || 0, // Definir valores padrão caso os dados faltem
      comments: data.comments || "", // Definindo fallback
      location: data.location || null,
      userName: data.userName || undefined, // Definindo fallback
    };
  });
};
