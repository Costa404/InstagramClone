import { useState } from "react";
import { usePostContext } from "../../../useContext/PostContext/PostContext";

export const useUtilitysSteps = () => {
  const { setLocation, setDescription } = usePostContext();
  const [showStep4, setShowStep4] = useState(false);
  const [collabs, setCollabs] = useState("");
  const [showStep2, setShowStep2] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  //   ==============================

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  //   ==============================

  const handleLocationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocation(e.target.value);
  };

  //   ==============================

  const handleCollabsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCollabs(e.target.value);
  };

  //   ==============================

  const handleEmojiClick = (emoji: { native: string }) => {
    setDescription((prevDescription) => prevDescription + emoji.native);
    setShowEmojiPicker(false);
  };
  const handleEmojiSelect = (emojiObject: { emoji: string }) => {
    const emojiSymbol = emojiObject.emoji;
    handleEmojiClick({ native: emojiSymbol });
  };

  return {
    collabs,
    showEmojiPicker,
    setShowEmojiPicker,
    handleDescriptionChange,
    handleLocationChange,
    handleCollabsChange,
    handleEmojiSelect,
    showStep4,
    setShowStep4,
    showStep2,
    setShowStep2,
    isSharing,
    setIsSharing,
    showStep3,
    setShowStep3,
  };
};
