import { doc, setDoc } from "firebase/firestore";
import generateFakeUsers from "./generateFakeUsers";
import { db } from "../../firebase";

// Função para adicionar usuários ao Firestore
export const saveFakeUsersToFirebase = async (numUsers: number) => {
  const users = generateFakeUsers(numUsers); // Gera usuários falsos
  console.log(`Generating ${numUsers} fake users:`, users); // Log dos usuários gerados

  for (const user of users) {
    console.log(`Attempting to save user: ${JSON.stringify(user)}`); // Log antes de salvar

    try {
      // Aqui usamos 'doc' para especificar o documento
      const userDoc = doc(db, "users", user.email);
      await setDoc(userDoc, user);
      console.log(`User ${user.userName} saved successfully.`);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error saving user:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }
};
