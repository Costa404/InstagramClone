import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";

export const fetchPostsFromFolllowedUsers = async (userIds: string) => {
  try {
    const postQuery = query(
      collection(db, "posts"),
      where("userId", "in", userIds) // Aplica o filtro direto na query
    );

    const unsubscribe = onSnapshot(postQuery, (snapshot) => {
      const posts = snapshot.docs.map((doc) => doc.data());
      console.log("Update Posts", posts);
    });

    return unsubscribe;
  } catch (error) {
    console.error("Erro ao buscar posts dos usuários seguidos:", error);
  }
};
