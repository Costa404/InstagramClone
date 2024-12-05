import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

// Função para atualizar a imagem de perfil no Firestore
export const updateProfileImageInFirestore = async (
  email: string,
  url: string
): Promise<void> => {
  const userRef = doc(db, "users", email); // Referência ao documento do usuário
  await updateDoc(userRef, {
    profileImage: url, // Atualiza o campo de profileImage no Firestore
  });
  console.log("User profile image updated in Firestore.");
};
