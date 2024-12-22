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
        maxWidth: "56%",
      }}
    >
      {posts.map((post) => (
        <li
          key={`${post.userId}-${post.createdAt}`}
          style={{
            flex: "1 1 calc(33.33% - 1rem)",
            maxWidth: "calc(33.33% - 1rem)",
            minWidth: "calc(33.33% - 1rem)", // Mantém o tamanho mínimo
            // maxHeight: "34.8rem",
            // minHeight: "34.8rem",
            height: "34.8rem",
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
              height: "100%",
              objectFit: "fill",
            }}
            onClick={() => onPostSelect(post)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
