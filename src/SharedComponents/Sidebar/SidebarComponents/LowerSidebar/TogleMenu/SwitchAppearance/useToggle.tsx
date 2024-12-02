import { useState } from "react";

export const useToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const close = () => setIsVisible(false);

  return { isVisible, toggleVisibility, close };
};
