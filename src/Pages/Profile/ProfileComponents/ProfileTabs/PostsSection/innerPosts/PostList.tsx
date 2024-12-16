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
      className="d-flex gap-2 mt-3 h-100 containerPostsProfile w-100"
      style={{
        flexWrap: "wrap", // Permite quebra de linha
        maxWidth: "93.3rem",
      }}
    >
      {posts.map((post) => (
        <li
          key={`${post.userId}-${post.createdAt}`}
          style={{
            flex: "1 1 calc(33.33% - 1rem)", // Espaço dinâmico para 3 itens por linha
            listStyle: "none",
            boxSizing: "border-box", // Garante que padding/borders não alterem o tamanho
          }}
          className="hover"
        >
          <img
            src={post.imageUrl}
            alt={post.description || "Post image"}
            style={{
              width: "100%", // Responsivo: usa 100% do espaço do contêiner
              height: "auto", // Mantém proporção da imagem
              objectFit: "cover", // Ajusta a imagem para ocupar o espaço
            }}
            onClick={() => onPostSelect(post)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
