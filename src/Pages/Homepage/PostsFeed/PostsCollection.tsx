import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";

export const PostsCollection = async (
  userId: string,
  imageUrl: string,
  description: string,
  location: string
) => {
  try {
    const postData = {
      userId: userId,
      imageUrl: imageUrl,
      description: description || null,
      createdAt: Timestamp.now(),
      likesCount: 0,
      comments: "",
      location: location || null,
    };

    await addDoc(collection(db, "posts"), postData);
    console.log("Post created successfully!");
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
