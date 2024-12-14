import { collection, query, where, getDocs } from "firebase/firestore";
import { useError } from "../../../../../useContext/errorContext/useError";
import { db } from "../../../../../firebase";

export const useCheckUserName = () => {
  const { setError } = useError();

  const checkUserName = async (
    userNameSignup: string
  ): Promise<{ exists: boolean; message?: string }> => {
    // ...

    try {
      const userQuery = query(
        collection(db, "users"),
        where("UserName", "==", userNameSignup)
      );

      const querySnapshot = await getDocs(userQuery);

      console.log("QuerySnapshot:", querySnapshot);

      if (!querySnapshot.empty) {
        console.log("Username is already in use.");
        setError("Username is already in use.");
        return { exists: true, message: "UserName is already in use." };
      }
      console.log("Consultando o nome de usuário:", userNameSignup);
      console.log("Número de documentos encontrados:", querySnapshot.size);
      return { exists: false };
    } catch (error) {
      console.error("Error checking username:", error);
      setError("Error checking username.");
      return { exists: false, message: "Error checking email." };
    }
  };

  return { checkUserName };
};
