import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useFollowUserIdContext } from "../../../useContext/FollowUserIdContext/FollowUserIdContext";
import { useEffect } from "react";

export const useFollowUser = () => {
  const { currentUserId } = useCurrentUser();

  const { followUserId } = useFollowUserIdContext();

  useEffect(() => {
    if (followUserId) {
      followUser();
    }
  }, [followUserId]);

  const followUser = async () => {
    if (!followUserId) {
      console.error("followUser Id is null or undefined");
      return false;
    }

    if (!currentUserId?.userName) {
      console.error("currentUser Id or userName is undefined");
      return false;
    }

    try {
      if (!currentUserId?.email) {
        console.error("Email do usuário não está definido");
        return;
      }

      const userRef = doc(db, "users", currentUserId.email);

      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        await updateDoc(userRef, {
          following: arrayUnion(followUserId),
        });
        console.log(
          `User  ${currentUserId?.userName} has started following ${followUserId}.`
        );

        const updatedUserDoc = await getDoc(userRef);

        if (updatedUserDoc.exists()) {
          // const followingList = updatedUserDoc.data()?.following;
          // if (followingList && followingList.length >= 5) {
          //   navigate("/homepage");
          // }
        } else {
          console.error("Updated user document does not exist.");
        }
        return true;
      } else {
        console.error("User  does not exist in Firestore.");
        return false;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error following user:", error.message);
      } else {
        console.error("Unknown error occurred during follow operation.");
      }
      return false;
    }
  };

  return { followUser };
};
