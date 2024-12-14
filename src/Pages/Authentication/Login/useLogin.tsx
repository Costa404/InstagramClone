import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useError } from "../../../useContext/errorContext/useError";
import { useLoginProvider } from "../../../useContext/useLoginCredentialsContext/useLoginCredentialsContext";
import { useUserIdContext } from "../../../useContext/userContext/userIdContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { setError } = useError();
  const { setUserId } = useUserIdContext();
  const { emailLogin, passwordLogin } = useLoginProvider();

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setError(null);

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

      // Fetch profile image (if needed)
      //   const profileImageUrl = await getProfileImage();
      //   if (profileImageUrl) {
      //     console.log("Profile image URL:", profileImageUrl);
      //   }

      // Fetch custom UserID from Firestore
      const userDoc = await getDoc(doc(db, "users", user.email));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        console.log("User document data:", userData);

        const customUserID = userData?.userId || null;
        if (customUserID) {
          console.log("Setting userId in context:", customUserID);
          setUserId(customUserID);

          console.log("UserID has been set in context:", customUserID);
          navigate("/homepage");
        } else {
          console.error("Custom UserID not found in user document data.");
        }
      } else {
        console.error("User document not found in Firestore.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Failed to login. Please check your Email or password.");
    }
  };

  return { handleLogin };
};

export default useLogin;
