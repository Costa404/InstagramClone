import React from "react";
import { useTheme } from "../../../../../useContext/ThemeContext/ThemeContext";

interface InputFieldProps {
  type: string; // Tipo do input (e.g., "text", "email", "password")
  id: string; // ID do input
  value: string; // Valor atual do input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função de mudança
  placeholder: string; // Placeholder do input
  label: string; // Rótulo do input
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  label,
}) => {
  const { theme } = useTheme();
  return (
    <div className="form-floating mb-3   ">
      <input
        type={type}
        className="form-control border-dark  "
        style={{
          backgroundColor: theme === "dark" ? "#121212" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
