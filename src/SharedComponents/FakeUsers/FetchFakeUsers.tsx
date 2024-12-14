import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { User } from "../Interface/Interface";

export const fetchUsersFromFirebase = async (): Promise<User[]> => {
  const usersCollection = collection(db, "users");
  const userDocs = await getDocs(usersCollection);

  const users: User[] = userDocs.docs.map((doc) => {
    const data = doc.data();
    return {
      userId: data.uid || "",

      userName: data.userName || "",
      fullName: data.fullName || "",
      profileImg: data.profileImg || "",
      bio: data.bio || "",
      followersCount: data.followersCount || 0,
      followingCount: data.followingCount || 0,
      postsCount: data.postsCount || 0,
      email: data.email,
    };
  });

  console.log("Fetched users from Firebase:", users);
  return users;
};
