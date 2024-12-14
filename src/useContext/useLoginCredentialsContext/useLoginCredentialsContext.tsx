import React, { createContext, useContext, useState } from "react";

type LoginContext = {
  emailLogin: string;
  setEmailLogin: React.Dispatch<React.SetStateAction<string>>;
  passwordLogin: string;
  setPasswordLogin: React.Dispatch<React.SetStateAction<string>>;
  userNameLogin: string;
  setUserNameLogin: React.Dispatch<React.SetStateAction<string>>;
};

const LoginContext = createContext<LoginContext | undefined>(undefined);

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const { setUserName } = useAuthUser(); // Obtendo a função setUserName do AuthContext
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userNameLogin, setUserNameLogin] = useState("");

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

export const useLoginProvider = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
