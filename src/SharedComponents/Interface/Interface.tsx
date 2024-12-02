import { Timestamp } from "firebase/firestore";

export interface User {
  userId?: string;
  email: string;
  createdAt?: Date;
  fullName: string;
  userName: string;
  following?: string[];
  bio: string;
  profileImg: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

export interface PostData {
  userId: string;
  imageUrl: string;
  description: string | null;
  createdAt: Timestamp;
  likesCount: number;
  comments: string;
  location?: string | null;
  userName: string | undefined;
}
