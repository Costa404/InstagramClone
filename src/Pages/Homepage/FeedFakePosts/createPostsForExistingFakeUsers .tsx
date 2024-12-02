import {
  collection,
  getDocs,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

import { db } from "../../../firebase";
import { PostData } from "../../../SharedComponents/Interface/Interface";
import { faker } from "@faker-js/faker";

// Interface para garantir que fakeUser tenha a propriedade userName
interface FakeUser {
  userName: string;
}

const createPostsForExistingFakeUsers = async () => {
  const fakeUsersCollection = collection(db, "users");
  const postsCollection = collection(db, "posts");

  try {
    // Fetch todos os fake users
    const fakeUsersSnapshot = await getDocs(fakeUsersCollection);
    const fakeUsers: FakeUser[] = fakeUsersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userName: data.userName, // Acessa explicitamente o userName
      };
    });

    console.log(`Fake users encontrados: ${fakeUsers.length}`);

    // Para cada fake user, crie um número aleatório de posts (entre 0 e 6)
    for (const fakeUser of fakeUsers) {
      const { userName } = fakeUser;

      // Número aleatório de posts para este usuário
      const postsPerUser = Math.floor(Math.random() * 3); // Gera de 0 a 6

      for (let i = 0; i < postsPerUser; i++) {
        const fakePost: PostData = {
          userId: userName, // Relaciona com o username
          imageUrl: faker.image.url(),
          description: faker.lorem.sentence(),
          createdAt: Timestamp.fromDate(new Date()), // Usa o Timestamp do Firestore
          likesCount: Math.floor(Math.random() * 100), // Número aleatório de likes
          comments: faker.lorem.sentence(), // Comentários aleatórios
          location: faker.address.city(), // Localização aleatória
          userName: userName, // Nome do usuário
        };

        // Define manualmente o ID do documento com base no userName e um índice único
        const postId = `${userName}_post_${i + 1}`;
        await setDoc(doc(postsCollection, postId), fakePost);
        console.log(
          `Post criado com ID ${postId} para o fake user: ${userName}`
        );
      }

      console.log(`Fake user ${userName} recebeu ${postsPerUser} posts.`);
    }
  } catch (error) {
    console.error("Erro ao criar posts para fake users:", error);
  }
};

export default createPostsForExistingFakeUsers;
