import { useState } from "react";
import { usePostContext } from "../../../useContext/PostContext/PostContext";

export const useUtilitysSteps = () => {
  const { setLocation, setDescription } = usePostContext();
  const [showStep4, setShowStep4] = useState(false);
  const [collabs, setCollabs] = useState("");
  const [showStep2, setShowStep2] = useState(true);

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
    setShowEmojiPicker(false); // Fecha o picker após selecionar o emoji
  };
  const handleEmojiSelect = (emojiObject: { emoji: string }) => {
    const emojiSymbol = emojiObject.emoji; // Aqui você deve garantir que `emoji` é a propriedade correta

    // Adiciona o emoji ao estado `description`
    handleEmojiClick({ native: emojiSymbol }); // Passe o emoji como objeto com a propriedade `native`
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
  };
};
