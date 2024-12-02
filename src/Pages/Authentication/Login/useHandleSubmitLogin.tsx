import { signInWithEmailAndPassword } from "firebase/auth";
import { useError } from "../../../useContext/errorContext/useError";
import { useLoginProvider } from "../../../useContext/useLoginCredentialsContext/useLoginCredentialsContext";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

type FirebaseError = {
  code: string;
  message: string;
};

export const useHandleSubmitLogin = () => {
  const { emailLogin, passwordLogin } = useLoginProvider();
  const { setError } = useError();
  const navigate = useNavigate();
  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailLogin,
        passwordLogin
      );

      const user = userCredential.user;

      if (!user.email) {
        throw new Error("User email is not available.");
      }

      //   if (!emailLogin) {
      //     setError("Email not provided.");
      //     return;
      //   }

      //   if (!passwordLogin) {
      //     setError("Username not provided.");
      //     return;
      //   }

      navigate("/homepage");
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (firebaseError.code === "auth/user-not-found") {
        setError("User not found. Please check your email.");
      } else {
        setError("Failed to login. Please check your Email or password.");
      }

      if (process.env.NODE_ENV === "development") {
        console.error("Login Error:", firebaseError);
      }
    }
  };
  return {
    handleSubmitLogin,
  };
};
