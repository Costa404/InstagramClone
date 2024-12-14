import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useError } from "../../../../../useContext/errorContext/useError";
import { auth, db } from "../../../../../firebase";
import { useSignupProvider } from "../../../../../useContext/useSignupContext/useSignupCredentialsContext";

const useSignupLogic = () => {
  const { emailSignup, passwordSignup, userNameSignup, fullNameSignup } =
    useSignupProvider();
  const { setError } = useError();
  // useGenerateFakeUsers();
  const handleSignUp = async () => {
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailSignup,
        passwordSignup
      );
      const user = userCredential.user;

      // armazena firebase
      await setDoc(doc(db, "users", emailSignup), {
        userId: user.uid,
        email: user.email,
        createdAt: new Date(),
        fullName: fullNameSignup,
        userName: userNameSignup,
        following: [],
        profileImg:
          "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg",
        bio: "",
        followersCount: 0,
        followingCount: 0,
        postsCount: 0,
      });

      console.log("User created and added to Firestore:", user.uid);
      return true;
    } catch (error) {
      console.error("Error creating account:", error);
      setError("Failed to create account. Please try again.");
      return false;
    }
  };

  return { handleSignUp };
};

export default useSignupLogic;
