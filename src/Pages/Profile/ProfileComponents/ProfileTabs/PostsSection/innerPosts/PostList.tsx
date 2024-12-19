import { PostData } from "../../../../../../SharedComponents/Interface/Interface";

const PostList = ({
  posts,
  onPostSelect,
}: {
  posts: PostData[];
  onPostSelect: (post: PostData) => void;
}) => {
  return (
    <ul
      className="d-flex gap-2 mt-3 h-100 containerPostsProfile "
      style={{
        flexWrap: "wrap",
        maxWidth: "93.3rem",
      }}
    >
      {posts.map((post) => (
        <li
          key={`${post.userId}-${post.createdAt}`}
          style={{
            flex: "1 1 calc(33.33% - 1rem)",
            listStyle: "none",
            boxSizing: "border-box",
          }}
          className="hover"
        >
          <img
            src={post.imageUrl}
            alt={post.description || "Post image"}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            onClick={() => onPostSelect(post)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
