import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useFollowUserIdContext } from "../../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";

export const useCheckIsFollowing = () => {
  const { followUserId } = useFollowUserIdContext();
  const { currentUserId } = useCurrentUser();
  const checkIsFollowing = async () => {
    if (!currentUserId?.userName) {
      console.error("currentUserId or userName is undefined");
      return false;
    }
    try {
      const userRef = doc(db, "users", currentUserId?.userName);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const following = userData?.following || [];
        return following.includes(followUserId); // Verifica se o userId está no array de following
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error, user not found ", error);
      return false;
    }
  };

  return { checkIsFollowing };
};
