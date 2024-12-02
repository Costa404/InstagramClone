import { useState } from "react";
import { useFetchPosts } from "./FetchPosts";
import UserWithoutPost from "./UserWithoutPost";
import { useSelectedUser } from "../../../../../useContext/SelectedUserContext";

import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";
import { PostData } from "../../../../../SharedComponents/Interface/Interface";
import { IoCloseSharp } from "react-icons/io5";
import PostTime from "../../../../Homepage/Frontend/MidSection/Feed/PostComponents/PostTime";

const PostsSection = () => {
  const { posts } = useFetchPosts();
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);
  const { selectedUser } = useSelectedUser();
  const { theme } = useTheme();
  // console.log("selecteUserId...", selectedUser);

  if (!posts) return <p>Loading posts...</p>;

  if (selectedPost) {
    return (
      <div
        className="position-absolute  h-100 d-flex p-5 justify-content-center  "
        style={{
          zIndex: "999",
          background: theme === "dark" ? "black" : "white",
        }}
      >
        <img
          src={selectedPost?.imageUrl}
          alt="Post"
          style={{ maxWidth: "69.6rem" }}
        />
        <div className=" " style={{ width: "40rem" }}>
          <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3">
            <div className="d-flex gap-3 flex-row align-items-center  ">
              <img
                src={selectedUser?.profileImg}
                alt=""
                style={{ width: "3.2rem", height: "3.2rem" }}
                className="rounded-circle"
              />
              <span className="fw-bold">{selectedUser?.userName}</span>
            </div>{" "}
            <IoCloseSharp
              className=" fs-1 hover "
              onClick={() => setSelectedPost(null)}
            />
          </div>
          <div className=" h-100 w-100">
            <div className="h-75 d-flex justify-content-center align-items-center border-bottom border-dark">
              <p className="fs-1 fw-semibold">
                {selectedPost?.comments || "No comments yet."}
              </p>
            </div>

            <div className="p-4 ">
              <p className="fs-4"> {selectedPost?.caption}</p>
              <p>
                {selectedPost?.likesCount ? (
                  selectedPost.likesCount
                ) : (
                  <>
                    Be the first to <span className="fw-bold">like this</span>
                  </>
                )}
              </p>
              <PostTime createdAt={selectedPost?.createdAt.toDate()} />

              {/* <p> {selectedPost?.location || "Não informado"}</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return posts.length === 0 ? (
    <UserWithoutPost />
  ) : (
    <ul
      className="d-flex gap-2 mt-3 h-100 paddingLeftProfileUl"
      style={{ flexWrap: "wrap", maxWidth: "93.3rem" }}
    >
      {posts.map((post) => (
        <li
          key={`${post.userId}-${post.createdAt}`}
          style={{ listStyle: "none" }}
          className="hover"
        >
          {/* Renderizando a imagem */}
          <img
            src={post.imageUrl}
            alt={post.caption || "Post image"}
            style={{
              width: "30.76rem",
              height: "30.7rem",
              objectFit: "cover",
            }} // Ajuste de estilo opcional
            onClick={() => setSelectedPost(post)} // Define o post clicado
          />
        </li>
      ))}
    </ul>
  );
};

export default PostsSection;
