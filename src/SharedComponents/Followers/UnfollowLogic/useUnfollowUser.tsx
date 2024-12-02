// Arquivo: unfollowUser.ts
import { updateDoc, arrayRemove, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useFollowUserIdContext } from "../../../useContext/FollowUserIdContext/FollowUserIdContext";

export const useUnfollowUser = () => {
  const { currentUserId } = useCurrentUser();
  const { followUserId } = useFollowUserIdContext();
  const unfollowUser = async () => {
    if (!currentUserId?.userName) {
      console.error("currentUserId or username is undefined");
      return false;
    }
    try {
      const userRef = doc(db, "users", currentUserId?.userName);
      await updateDoc(userRef, {
        following: arrayRemove(followUserId), // Remove o userId do array de following
      });
    } catch (error) {
      console.error("Erro ao deixar de seguir o usuário: ", error);
    }
  };
  return { unfollowUser };
};
