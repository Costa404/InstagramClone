import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const updateProfileImageInFirestore = async (
  email: string,
  url: string
): Promise<void> => {
  const userRef = doc(db, "users", email);
  await updateDoc(userRef, {
    profileImage: url,
  });
  console.log("User profile image updated in Firestore.");
};
