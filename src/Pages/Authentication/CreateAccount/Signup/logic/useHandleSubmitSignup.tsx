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

      let hasErrors = false;

      if (userNameDoc.exists) {
        setErrorSignup((prevError) => ({
          ...prevError,
          userName: "This username is already in use.",
        }));
        hasErrors = true;
      } else {
        setErrorSignup((prevError) => ({ ...prevError, userName: "" }));
      }

      if (emailDoc.exists) {
        setErrorSignup((prevError) => ({
          ...prevError,
          email: "This email is already in use.",
        }));
        hasErrors = true;
      } else {
        setErrorSignup((prevError) => ({ ...prevError, email: "" }));
      }

      // Verifica se houve erros
      if (!hasErrors) {
        setError("");
        const signUpSuccess = await handleSignUp();
        if (signUpSuccess) {
          console.log("handleSignUp concluído. Redirecionando para /homepage");
          navigate("/homepage"); // Redireciona para homepage if sucesso
        }
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };
  return { handleSubmitSignup, errorSignup };
};
