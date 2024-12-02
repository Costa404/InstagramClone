/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../SharedComponents/Interface/Interface";

// Defina a interface do contexto
interface SelectedUserContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
  clearSelectedUser: () => void;
}

// Crie o contexto com um valor inicial
const SelectedUserContext = createContext<SelectedUserContextType | undefined>(
  undefined
);

export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const clearSelectedUser = () => {
    console.log("Clearing selected user...");
    setSelectedUser(null); // Reseta o estado do selectedUser
  };

  return (
    <SelectedUserContext.Provider
      value={{ selectedUser, setSelectedUser, clearSelectedUser }}
    >
      {children}
    </SelectedUserContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useSelectedUser = (): SelectedUserContextType => {
  const context = useContext(SelectedUserContext);
  if (!context) {
    throw new Error(
      "useSelectedUser must be used within a SelectedUserProvider"
    );
  }
  return context;
};
