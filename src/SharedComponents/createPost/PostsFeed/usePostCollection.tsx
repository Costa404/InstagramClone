import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { PostData } from "../../Interface/Interface";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";

export const usePostCollection = () => {
  const { currentUserId } = useCurrentUser();

  const postCollection = async (postData: PostData) => {
    try {
      if (!currentUserId?.userName) {
        throw new Error("User ID or userName is missing.");
      }

      const postDocRef = doc(db, "posts", postData.postId);

      await setDoc(postDocRef, {
        ...postData,
        createdAt: postData.createdAt || Timestamp.now(),
      });

      console.log("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return { postCollection };
};
