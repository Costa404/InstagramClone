import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { User } from "../Interface/Interface";

export const fetchUsersFromFirebase = async (): Promise<User[]> => {
  const usersCollection = collection(db, "users");
  const userDocs = await getDocs(usersCollection);

  // Mapeando os documentos para a estrutura correta
  const users: User[] = userDocs.docs.map((doc) => {
    const data = doc.data();
    return {
      userId: data.uid || "",
      // Atribuindo o ID do documento a 'uid'
      userName: data.userName || "", // Atribuindo o valor ou uma string vazia se não existir
      fullName: data.fullName || "", // Atribuindo o valor ou uma string vazia se não existir
      profileImg: data.profileImg || "", // Atribuindo o valor ou uma string vazia se não existir
      bio: data.bio || "", // Atribuindo o valor ou uma string vazia se não existir
      followersCount: data.followersCount || 0, // Atribuindo o valor ou 0 se não existir
      followingCount: data.followingCount || 0, // Atribuindo o valor ou 0 se não existir
      postsCount: data.postsCount || 0, // Atribuindo o valor ou 0 se não existir
      email: data.email,
    };
  });

  console.log("Fetched users from Firebase:", users);
  return users;
};
