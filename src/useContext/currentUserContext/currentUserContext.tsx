import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User } from "../../SharedComponents/Interface/Interface";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface CurrentUserType {
  currentUserId: User | null;
}

const CurrentUserContext = createContext<CurrentUserType | undefined>(
  undefined
);

export const CurrentUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUserId, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          console.log("Firebase User:", firebaseUser);
          const userRef = doc(db, "users", firebaseUser.email!);
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Firestore Data:", userData);

            if (userData) {
              const currentUser: User = {
                userId: firebaseUser.uid,
                email: firebaseUser.email!,
                createdAt: userData.createdAt.toDate(),
                fullName: userData.fullName,
                userName: userData.userName,
                profileImg: userData.profileImg,
                following: userData.following,
                bio: userData.bio,
                followersCount: userData.followersCount,
                followingCount: userData.followingCount,
                postsCount: userData.postsCount,
              };
              console.log("Current User Object:", currentUser);
              setCurrentUser(currentUser);
            }
          } else {
            console.log("Usuário não encontrado no Firestore.");
          }
        } catch (error) {
          console.error("Erro ao buscar o usuário:", error);
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUserId }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentUser deve ser usado dentro do CurrentUserProvider"
    );
  }
  return context;
};
