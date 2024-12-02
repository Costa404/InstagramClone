import React, { createContext, useState, useContext } from "react";

// Definindo o tipo do contexto para TypeScript (opcional)
type SignupContext = {
  emailSignup: string;
  setEmailSignup: React.Dispatch<React.SetStateAction<string>>;
  passwordSignup: string;
  setPasswordSignup: React.Dispatch<React.SetStateAction<string>>;
  userNameSignup: string;
  setUserNameSignup: React.Dispatch<React.SetStateAction<string>>;
  fullNameSignup: string;
  setFullNameSignup: React.Dispatch<React.SetStateAction<string>>;
};

const SignupContext = createContext<SignupContext | undefined>(undefined);

export const SignupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const { setUserName } = useAuthUser();
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [fullNameSignup, setFullNameSignup] = useState("");
  const [userNameSignup, setUserNameSignup] = useState("");

  // Atualize o contexto do Auth apenas quando o nome de usuário estiver pronto
  // useEffect(() => {
  //   if (userNameSignup) {
  //     setUserName(userNameSignup);
  //   }
  // }, [userNameSignup, setUserName]);

  return (
    <SignupContext.Provider
      value={{
        fullNameSignup,
        setFullNameSignup,
        userNameSignup,
        setUserNameSignup,
        emailSignup,
        setEmailSignup,
        passwordSignup,
        setPasswordSignup,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useSignupProvider = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within an SignupProvider");
  }
  return context;
};
