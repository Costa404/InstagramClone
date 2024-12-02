import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useError } from "../../../useContext/errorContext/useError";

const useLogout = () => {
  const navigate = useNavigate();
  const { setError } = useError();
  // const { setUserId } = useUser();
  // const { setPassword, setEmail } = useAuth();
  const handleLogOut = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      // setUserId("");
      // setEmail("");
      // setPassword("");
    } catch (error) {
      console.error("Error logging out:", error);
      setError("Failed logging out. Please try again.");
    }
    navigate("/");
  };

  return { handleLogOut };
};

export default useLogout;
