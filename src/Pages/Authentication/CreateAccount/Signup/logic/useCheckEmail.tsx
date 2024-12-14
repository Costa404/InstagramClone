import { collection, query, where, getDocs } from "firebase/firestore";
import { useError } from "../../../../../useContext/errorContext/useError";
import { db } from "../../../../../firebase";

export const useCheckEmail = () => {
  const { setError } = useError();

  const checkEmail = async (
    emailSignup: string
  ): Promise<{ exists: boolean; message?: string }> => {
    if (!emailSignup) {
      console.error("Email is undefined");
      setError("Email not provided.");
      return { exists: false, message: "Email not provided." };
    }

    try {
      const emailQuery = query(
        collection(db, "users"),
        where("email", "==", emailSignup)
      );
      const querySnapshot = await getDocs(emailQuery);

      if (!querySnapshot.empty) {
        console.log("Email is already in use.");
        setError("Email is already in use.");
        return { exists: true, message: "Email is already in use." };
      }

      return { exists: false };
    } catch (error) {
      console.error("Error checking email:", error);
      setError("Error checking email.");
      return { exists: false, message: "Error checking email." };
    }
  };

  return { checkEmail };
};
