import React from "react";
import { useIsValidLogin, useIsValidSignup } from "./useIsValid";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  context: "login" | "signup";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  context,
}) => {
  const { isValidLogin } = useIsValidLogin();
  const { isValidSignup } = useIsValidSignup();

  // Seleciona a função de validação com base no contexto
  const isValid = context === "login" ? isValidLogin : isValidSignup;

  return (
    <div>
      <button
        type={type}
        className={`rounded-3 btn ${
          isValid() ? "btn-primary" : "btn-primary"
        } w-100 p-3 mt-1 hover fs-5`}
        onClick={onClick}
        disabled={!isValid()}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
