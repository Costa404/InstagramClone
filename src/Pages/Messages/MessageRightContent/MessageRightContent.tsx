import { BiMessageRoundedDots } from "react-icons/bi";

const MessageRightContent = () => {
  return (
    <div className="d-flex w-100 flex-column  justify-content-center align-items-center">
      <BiMessageRoundedDots style={{ fontSize: "10rem" }} />
      <h1>Your messages</h1>
      <p className="text-dark">
        Send private photos and messages to a friend or group.
      </p>
      <button
        className="bg-primary p-3 rounded-2  text-white"
        style={{ border: "none" }}
      >
        Send message
      </button>
    </div>
  );
};

export default MessageRightContent;
