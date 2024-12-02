// import React, {
//   createContext,
//   Dispatch,
//   ReactNode,
//   SetStateAction,
//   useContext,
//   useState,
// } from "react";

// interface AuthContextProps {
//   userName: string | null;
//   setUserName: Dispatch<SetStateAction<string | null>>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthUserProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [userName, setUserName] = useState<string | null>(null);

//   return (
//     <AuthContext.Provider value={{ userName, setUserName }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthUser = () => {
//   const context = useContext(AuthContext);
//   if (!context)
//     throw new Error("useAuthUser must be used within AuthUserProvider");
//   return context;
// };
