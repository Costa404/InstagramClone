import { useState } from "react";

import PostModal from "./PostModal";
import PostList from "./PostList";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";
import { useFetchPosts } from "../FetchPosts";
import UserWithoutPost from "../UserWithoutPost";

const PostsSection = () => {
  const { posts } = useFetchPosts();
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  if (!posts) return <p>Loading posts...</p>;
  if (posts.length === 0) return <UserWithoutPost />;

  return (
    <>
      {selectedPost && (
        <PostModal
          selectedPost={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
      <PostList posts={posts} onPostSelect={setSelectedPost} />
    </>
  );
};

export default PostsSection;
