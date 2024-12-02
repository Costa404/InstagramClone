import { useLoginProvider } from "../../../useContext/useLoginCredentialsContext/useLoginCredentialsContext";
import { useSignupProvider } from "../../../useContext/useSignupContext/useSignupCredentialsContext";

export const useIsValidLogin = () => {
  const { emailLogin, passwordLogin } = useLoginProvider();

  const isValidLogin = () => {
    const emailValid = /\S+@\S+\.\S+/.test(emailLogin);
    const passwordValid = passwordLogin.length >= 6;
    return emailValid && passwordValid;
  };

  return { isValidLogin };
};

export const useIsValidSignup = () => {
  const { emailSignup, passwordSignup, userNameSignup, fullNameSignup } =
    useSignupProvider();

  const isValidSignup = () => {
    const emailValid = /\S+@\S+\.\S+/.test(emailSignup);
    const passwordValid = passwordSignup.length >= 6;
    const fullNameValid = fullNameSignup.length >= 3;
    const userNameValid = userNameSignup.length >= 3;
    return emailValid && passwordValid && fullNameValid && userNameValid;
  };

  return { isValidSignup };
};
