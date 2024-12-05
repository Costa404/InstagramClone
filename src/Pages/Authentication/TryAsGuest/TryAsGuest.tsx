import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

export const TryAsGuest = () => {
  const navigate = useNavigate();

  const handleTryAsGuest = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "guest@yourapp.com",
        "123456"
      );
      console.log("Logged in as guest:", userCredential.user);
      navigate("/homepage");
    } catch (error) {
      console.error("Error signing in as guest", error);
    }
  };

  return { handleTryAsGuest };
};
