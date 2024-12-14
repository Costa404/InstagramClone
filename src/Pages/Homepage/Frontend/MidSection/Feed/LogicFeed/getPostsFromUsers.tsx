import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../../firebase";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";

export const getPostsFromUsers = async (
  userNames: string[]
): Promise<PostData[]> => {
  const postRef = collection(db, "posts");
  const postQuery = query(postRef, where("userName", "in", userNames));

  const querySnapshot = await getDocs(postQuery);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      postId: doc.id,
      userId: data.userId,
      imageUrl: data.imageUrl,
      description: data.description || null,
      createdAt: data.createdAt,
      likesCount: data.likesCount || 0,
      comments: data.comments || "",
      location: data.location || null,
      userName: data.userName || undefined,
    };
  });
};
