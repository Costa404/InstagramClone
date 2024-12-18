import { useState } from "react";
import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";

interface TitleProps {
  title1: string;
  title2?: string;
}

export const TitleWithAlternateColor: React.FC<TitleProps> = ({
  title1,
  title2,
}) => {
  const [activeDiv, setActiveDiv] = useState<"div1" | "div2">("div1");
  const { theme } = useTheme();

  // Classe base para o tema
  const getTextClass = (isActive: boolean) => {
    if (isActive) {
      return theme === "dark" ? "text-white" : "text-dark";
    }
    return theme === "dark" ? "text-muted" : "text-secondary";
  };

  return (
    <div className="d-flex fw-medium gap-3 ">
      <h3
        className={`py-4 mb-2 ${getTextClass(activeDiv === "div1")}`}
        onClick={() => setActiveDiv("div1")}
        style={{ cursor: "pointer", fontWeight: "600" }}
      >
        {title1}
      </h3>

      <h3
        className={`py-4 mb-2 ${getTextClass(activeDiv === "div2")}`}
        onClick={() => setActiveDiv("div2")}
        style={{ cursor: "pointer", fontWeight: "600" }}
      >
        {title2}
      </h3>
    </div>
  );
};
