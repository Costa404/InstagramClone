import { IoCloseSharp } from "react-icons/io5";
import { useSelectedUser } from "../../../../../../useContext/SelectedUserContext";
import { PostData } from "../../../../../../SharedComponents/Interface/Interface";
import { useTheme } from "../../../../../../useContext/ThemeContext/ThemeContext";
import PostTime from "../../../../../Homepage/Frontend/MidSection/Feed/PostComponents/PostTime";

const PostModal = ({
  selectedPost,
  onClose,
}: {
  selectedPost: PostData;
  onClose: () => void;
}) => {
  const { theme } = useTheme();
  const { selectedUser } = useSelectedUser();

  return (
    <div
      className="position-absolute h-100 d-flex p-5 justify-content-center"
      style={{
        zIndex: 999,
        background: theme === "dark" ? "black" : "white",
      }}
    >
      <img
        src={selectedPost.imageUrl}
        alt="Post"
        style={{ maxWidth: "69.6rem" }}
      />
      <div style={{ width: "40rem" }}>
        <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3">
          <div className="d-flex gap-3 flex-row align-items-center">
            <img
              src={selectedUser?.profileImg}
              alt=""
              style={{ width: "3.2rem", height: "3.2rem" }}
              className="rounded-circle"
            />
            <span className="fw-bold">{selectedUser?.userName}</span>
          </div>
          <IoCloseSharp className="fs-1 hover" onClick={onClose} />
        </div>
        <div className="h-100 w-100">
          <div className="h-75 d-flex justify-content-center align-items-center border-bottom border-dark">
            <p className="fs-1 fw-semibold">
              {selectedPost.comments || "No comments yet."}
            </p>
          </div>
          <div className="p-4">
            <p className="fs-4">{selectedPost.description}</p>
            <p>
              {selectedPost.likesCount ? (
                selectedPost.likesCount
              ) : (
                <>
                  Be the first to <span className="fw-bold">like this</span>
                </>
              )}
            </p>
            <PostTime createdAt={selectedPost.createdAt.toDate()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
