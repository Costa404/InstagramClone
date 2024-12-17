import { useEffect, useState } from "react";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { PostData } from "../../../../../SharedComponents/Interface/Interface";
import { useParams } from "react-router-dom";

export const useFetchPosts = () => {
  const { currentUserId } = useCurrentUser();
  const [posts, setPosts] = useState<PostData[] | undefined>(undefined);
  const { userName } = useParams();
  console.log("username", userName);
  useEffect(() => {
    const fetchPostsFirebase = async () => {
      if (!currentUserId) {
        console.log("currentUserId is not found in the context.");
        return;
      }

      if (!currentUserId) {
        console.log("currentUserId is null. No authenticated user.");
        return;
      }

      try {
        const postRef = collection(db, "posts");
        const q = query(postRef, where("userName", "==", userName));
        const querySnapShot = await getDocs(q);

        console.log(
          "Number of documents retrieved:",
          querySnapShot.docs.length
        );

        const userPosts: PostData[] = querySnapShot.docs.map((doc) => {
          const data = doc.data();
          // console.log("Post data:", data);

          return {
            userName: data.userName,
            id: doc.id,
            userId: data.userId || "",
            imageUrl: data.imageUrl || "",
            description: data.caption || null,
            createdAt: data.createdAt || null,
            likesCount: data.likesCount || 0,
            comments: data.comments || "",
            location: data.location || null,
            postId: data.postId,
          } as PostData;
        });

        setPosts(userPosts);
      } catch (error) {
        console.error("Error fetching posts from Firestore:", error);
      }
    };

    fetchPostsFirebase();
  }, [userName]);

  return { posts };
};
