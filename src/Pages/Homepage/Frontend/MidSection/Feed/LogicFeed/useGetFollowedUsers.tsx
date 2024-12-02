import { doc, getDoc } from "firebase/firestore";

import { db } from "../../../../../../firebase";
import { useCurrentUser } from "../../../../../../useContext/currentUserContext/currentUserContext";

export const useGetFollowedUsers = () => {
  const { currentUserId } = useCurrentUser();

  const getFollowedUsers = async () => {
    if (!currentUserId?.email) {
      console.error("Email is undefined");
      return [];
    }
    const userDoc = await getDoc(doc(db, "users", currentUserId?.email));

    const userData = userDoc.data();

    return userData?.following || [];
  };

  return { getFollowedUsers };
};
