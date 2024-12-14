import { useCurrentUser } from "../../useContext/currentUserContext/currentUserContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const useCreateHomepageData = () => {
  const { currentUserId } = useCurrentUser();
  const createHomepageData = async () => {
    if (currentUserId?.userName) {
      const useRef = doc(db, "homepage", currentUserId?.userName);
      await setDoc(useRef, {
        stats: { posts: 0, followers: 0, following: 0 },
        recentActivity: [],
      });
    }
  };
  return { createHomepageData };
};
