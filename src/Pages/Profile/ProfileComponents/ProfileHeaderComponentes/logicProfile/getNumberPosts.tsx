import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";
import { useEffect, useState } from "react";

export const useGetNumberPosts = () => {
  const { currentUserId } = useCurrentUser();

  const [countPosts, setCountPosts] = useState<number | null>(null);

  //   const getNumberPosts = async () => {
  //     const postRef = collection(db, " posts");
  //     const q = query(postRef, where("userId", "==", currentUserId));
  //     const querySnapshot = await getDocs(q);

  //     return querySnapshot.size;
  //   };

  //   useEffect(() => {
  //     const fetchPostCount = async () => {
  //       if (currentUserId) {
  //         const count = await getNumberPosts();
  //         setCountPosts(count);
  //       }
  //     };

  //     fetchPostCount();
  //   }, [currentUserId, getNumberPosts]);

  useEffect(() => {
    const fetchPostsCount = async () => {
      if (currentUserId) {
        const postRef = collection(db, "posts");
        const q = query(
          postRef,
          where("userName", "==", currentUserId.userName)
        );
        const querySnapshot = await getDocs(q);
        setCountPosts(querySnapshot.size);
      }
    };
    fetchPostsCount();
  }, [currentUserId]);
  console.log("origin currentUserId:", currentUserId);
  console.log("origin countPosts:", countPosts);
  return { countPosts };
};
