import React, { createContext, useContext, useState } from "react";

// Definindo o tipo do contexto para login
type LoginContext = {
  emailLogin: string;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  passwordLogin: string;
  setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
  userNameLogin: string;
  setUserNameLogin: React.Dispatch<React.SetStateAction<string>>;
};

const LoginContext = createContext<LoginContext | undefined>(undefined);

// Provedor do contexto de login
export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const { setUserName } = useAuthUser(); // Obtendo a função setUserName do AuthContext
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userNameLogin, setUserNameLogin] = useState(""); // Estado para armazenar o userName

  // UseEffect para atualizar o userName no AuthContext quando usernameLogin mudar
  // useEffect(() => {
  //   if (userNameLogin) {
  //     setUserName(userNameLogin); // Atualiza o userName no AuthContext
  //   }
  // }, [userNameLogin, setUserName]); // Dependendo do usernameLogin

  return (
    <LoginContext.Provider
      value={{
        emailLogin,
        setEmailLogin,
        passwordLogin,
        setPasswordLogin,
        userNameLogin,
        setUserNameLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

// Hook para usar o contexto de login
export const useLoginProvider = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
