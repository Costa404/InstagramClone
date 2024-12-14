import { faker } from "@faker-js/faker";

const PostContainer = () => {
  const randomImageUrl = faker.image.url();

  return (
    <div
      className="bg-white border-1"
      style={{ width: "30.7rem", maxWidth: "30.7rem", height: "30.7rem" }}
    >
      <img
        src={randomImageUrl}
        alt="Imagem Aleatória"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default PostContainer;
