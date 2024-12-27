import Chats from "./chats/Chats";
import MessageRightContent from "./MessageRightContent/MessageRightContent";
import MessageUpperContent from "./upperContent/MessageUpperContent";

const Messages = () => {
  return (
    <div className=" w-100  d-flex" style={{ height: "100vh" }}>
      <div
        className="border-end border-dark h-100 messagesContainer"
        style={{ minWidth: "39.7rem", marginLeft: "7.2rem" }}
      >
        <MessageUpperContent />
        <Chats />
      </div>

      <MessageRightContent />
    </div>
  );
};

export default Messages;
