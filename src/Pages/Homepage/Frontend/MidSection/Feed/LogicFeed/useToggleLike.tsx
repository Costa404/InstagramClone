import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";

import { PostData } from "../../../../../../SharedComponents/Interface/Interface";
import { db } from "../../../../../../firebase";
export const useToggleLike = (postData: PostData) => {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(postData.likesCount || 0);

  useEffect(() => {
    const postRef = doc(db, "posts", postData.postId);

    const unsubscribe = onSnapshot(postRef, (doc) => {
      const data = doc.data();
      if (data) {
        setLikesCount(data.likesCount);
      }
    });

    return () => unsubscribe();
  }, [postData.postId]);

  const changeLikeState = () => {
    const newLikeState = !like;
    setLike(newLikeState);

    toggleLike(newLikeState);
  };

  const toggleLike = async (liked: boolean) => {
    try {
      const postRef = doc(db, "posts", postData.postId);
      await updateDoc(postRef, {
        likesCount: increment(liked ? 1 : -1),
      });
      console.log("Like updated in Firestore for postId:", postData.postId);
    } catch (error) {
      console.error("Error updating like count", error);
    }
  };

  return { changeLikeState, like, likesCount };
};

export default useToggleLike;
