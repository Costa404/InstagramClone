import { IoLocationOutline } from "react-icons/io5";

import { FaUserFriends } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react"; // Nova importação
// import { useHandleSharePost } from "../useHandleSharePost";
import { useCurrentUser } from "../../../useContext/currentUserContext/currentUserContext";
import { useTheme } from "../../../useContext/ThemeContext/ThemeContext";
import { usePostContext } from "../../../useContext/PostContext/PostContext";

import { useUtilitysSteps } from "./useUtilitysSteps";
import ProfileImg from "../../../Pages/Profile/ProfileComponents/ProfileHeaderComponentes/ProfileImage/ProfileImg";

const Step3 = () => {
  const { currentUserId } = useCurrentUser();
  const { theme } = useTheme();
  const {
    collabs,
    setShowEmojiPicker,
    showEmojiPicker,
    handleDescriptionChange,
    handleLocationChange,
    handleCollabsChange,
    handleEmojiSelect,
    showStep4,
  } = useUtilitysSteps();

  const { description, location } = usePostContext();

  // const { handleShare } = useHandleSharePost();

  return (
    <div
      className={`d-flex flex-column  align-items-center pt-4  ${
        theme === "dark" ? "border-none " : "border-start && border-end"
      }  `}
      style={{
        background: theme === "dark" ? "#262626" : "white",
        width: "37.5%",
      }}
    >
      <div className="d-flex w-100 px-4 gap-3 align-items-center mb-3">
        {/* <img
          src={currentUserId?.profileImg}
          className="border-0 rounded-circle"
          style={{ maxWidth: "2rem", height: "2rem" }}
        /> */}
        <ProfileImg
          userId={currentUserId?.profileImg as string}
          style={{ width: "2.4rem", height: "2.4rem" }}
        />
        <h2 className={` ${theme === "dark" ? "text-white " : "text-black"}`}>
          {currentUserId?.userName}
        </h2>
      </div>

      <div className="mb-3 w-100">
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter description"
          className="form-control bg-transparent text-white border-secondary border-0 fs-3 overflow-auto"
          style={{
            height: "20rem",
            resize: "none",
            overflowWrap: "break-word",
            outline: "none",
          }}
        />
        <div className="d-flex justify-content-between px-3">
          <MdOutlineEmojiEmotions
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="fs-2"
            style={{ color: "#888" }}
          />

          <p style={{ color: "#888" }}>{description.length} / 2,200</p>
        </div>

        {showEmojiPicker && (
          <div style={{ position: "absolute", bottom: "10%", zIndex: 1000 }}>
            <EmojiPicker onEmojiClick={handleEmojiSelect} />{" "}
            {/* Substituído o Picker */}
          </div>
        )}
      </div>

      <div
        className={`mb-3 w-100 d-flex justify-content-between p-1      ${
          theme === "dark" ? "border-none " : "border-bottom && border-top"
        } `}
      >
        <textarea
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="Add location"
          className="form-control bg-transparent text-white border-secondary border-0 fs-3 overflow-auto"
          style={{ resize: "none", height: "5rem" }}
        />
        <IoLocationOutline className="fs-1" style={{ color: "#888" }} />
      </div>
      <div
        className={`mb-3 w-100 d-flex justify-content-between p-1 
      ${theme === "dark" ? "border-none " : "border-bottom"}
      
      `}
      >
        <textarea
          id="collabs"
          value={collabs}
          onChange={handleCollabsChange}
          placeholder="Add collaborators"
          className="form-control bg-transparent text-white border-secondary border-0 fs-3 overflow-auto"
          style={{ resize: "none", height: "5rem" }}
        />
        <FaUserFriends className="fs-1" style={{ color: "#888" }} />
      </div>
      {showStep4 && <Step3 />}
    </div>
  );
};

export default Step3;
