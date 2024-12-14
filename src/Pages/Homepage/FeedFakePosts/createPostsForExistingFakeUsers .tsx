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

interface FakeUser {
  userName: string;
}

const createPostsForExistingFakeUsers = async () => {
  const fakeUsersCollection = collection(db, "users");
  const postsCollection = collection(db, "posts");

  try {
    const fakeUsersSnapshot = await getDocs(fakeUsersCollection);
    const fakeUsers: FakeUser[] = fakeUsersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        userName: data.userName,
      };
    });

    console.log(`Fake users encontrados: ${fakeUsers.length}`);

    for (const fakeUser of fakeUsers) {
      const { userName } = fakeUser;

      const postsPerUser = Math.floor(Math.random() * 3);

      for (let i = 0; i < postsPerUser; i++) {
        const postId = `${userName}_post_${i + 1}`;
        const fakePost: PostData = {
          userId: userName,
          imageUrl: faker.image.url(),
          description: faker.lorem.sentence(),
          createdAt: Timestamp.fromDate(new Date()),
          likesCount: Math.floor(Math.random() * 100),
          comments: faker.lorem.sentence(),
          location: faker.address.city(),
          userName: userName,
          postId: postId,
        };

        await setDoc(doc(postsCollection, postId), fakePost);
        console.log(
          `Post criado com ID ${postId} para o fakeuser: ${userName}`
        );
      }
    }
  } catch (error) {
    console.error("Erro ao criar posts para fake users:", error);
  }
};

export default createPostsForExistingFakeUsers;
