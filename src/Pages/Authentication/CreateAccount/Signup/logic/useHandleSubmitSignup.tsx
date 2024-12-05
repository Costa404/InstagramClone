import { useNavigate } from "react-router-dom";

import { useError } from "../../../../../useContext/errorContext/useError";

import useSignupLogic from "./useSignup";
import { useSignupProvider } from "../../../../../useContext/useSignupContext/useSignupCredentialsContext";
import { useState } from "react";
import { useCheckUserName } from "./useCheckUserName";
import { useCheckEmail } from "./useCheckEmail";

interface ErrorState {
  userName: string;
  email: string;
}

export const useHandleSubmitSignup = () => {
  const { emailSignup, userNameSignup } = useSignupProvider();
  const { checkEmail } = useCheckEmail();
  const { checkUserName } = useCheckUserName();
  const navigate = useNavigate();
  const { handleSignUp } = useSignupLogic();
  const { setError } = useError();
  const [errorSignup, setErrorSignup] = useState<ErrorState>({
    userName: "",
    email: "",
  });
  const handleSubmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailSignup) {
      setError("Email not provided.");
      return;
    }

    if (!userNameSignup) {
      setError("Username not provided.");
      return;
    }

    try {
      const emailDoc = await checkEmail(emailSignup);
      const userNameDoc = await checkUserName(userNameSignup);

      // Inicializa um objeto de erros
      let hasErrors = false;

      if (userNameDoc.exists) {
        setErrorSignup((prevError) => ({
          ...prevError,
          userName: "This username is already in use.",
        }));
        hasErrors = true; // Marca que há um erro
      } else {
        setErrorSignup((prevError) => ({ ...prevError, userName: "" }));
      }

      if (emailDoc.exists) {
        setErrorSignup((prevError) => ({
          ...prevError,
          email: "This email is already in use.",
        }));
        hasErrors = true; // Marca que há um erro
      } else {
        setErrorSignup((prevError) => ({ ...prevError, email: "" }));
      }

      // Verifica se houve erros
      if (!hasErrors) {
        setError(""); // Limpa qualquer erro global
        const signUpSuccess = await handleSignUp(); // Chama a função de sign-up
        if (signUpSuccess) {
          console.log("handleSignUp concluído. Redirecionando para /homepage");
          navigate("/homepage"); // Redireciona para homepage após sucesso
        }
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };
  return { handleSubmitSignup, errorSignup };
};
