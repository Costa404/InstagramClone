import React from "react";
import { useIsValidLogin, useIsValidSignup } from "./useIsValid";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>; // Aceita um evento de clique
  label: string; // Texto exibido no botão
  type?: "button" | "submit" | "reset"; // Tipo do botão, agora aceitando "submit"
  disabled: boolean;
  context: "login" | "signup"; // Adiciona uma prop para determinar o contexto
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
        type={type} // Usa o tipo passado como prop
        className={`rounded-3 btn ${
          isValid() ? "btn-primary" : "btn-primary"
        } w-100 p-3 mt-1 hover fs-5`} // Corrigido a interpolação
        onClick={onClick} // Adiciona a função de clique passada como prop
        disabled={!isValid()} // Desabilita o botão se os campos não forem válidos
      >
        {label} {/* Renderiza o texto do botão */}
      </button>
    </div>
  );
};

export default Button;
