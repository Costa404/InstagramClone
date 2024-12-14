import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useGetFollowedUsers } from "./LogicFeed/useGetFollowedUsers";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";
import { getPostsFromUsers } from "./LogicFeed/getPostsFromUsers";
import { PostData } from "../../../../../SharedComponents/Interface/Interface";

const Feed: React.FC = () => {
  const { getFollowedUsers } = useGetFollowedUsers();
  const { currentUserId } = useCurrentUser();
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const followedUsers = await getFollowedUsers();

        const userNames = [...followedUsers, currentUserId?.userName];

        const fetchedPosts = await getPostsFromUsers(userNames);

        const sortedPosts = fetchedPosts.sort(
          (a, b) => b.createdAt.toMillis() - a.createdAt.toMillis()
        );

        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error loading the feed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeed();
  }, [currentUserId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={`post.userName-${Math.random() * 10}`} post={post} />
        ))
      ) : (
        <div>still no posts..</div>
      )}
    </div>
  );
};

export default Feed;
