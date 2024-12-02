/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

import { User } from "../../SharedComponents/Interface/Interface";
import { fetchUsersFromFirebase } from "../../SharedComponents/FakeUsers/FetchFakeUsers";

// Criando o contexto do usuário
const UserContext = createContext<User[] | null>(null);

// Definindo as propriedades do provedor de usuário
interface FakeUserProviderProps {
  children: React.ReactNode;
}

// Provedor de usuário
export const FakeUserProvider: React.FC<FakeUserProviderProps> = ({
  children,
}) => {
  const [fakeUsers, setFakeUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const loadFakeUsers = async () => {
      const fetchedFakeUsers = await fetchUsersFromFirebase();
      if (JSON.stringify(fetchedFakeUsers) !== JSON.stringify(fakeUsers)) {
        setFakeUsers(fetchedFakeUsers); // Atualiza apenas se os dados são diferentes
      }
    };

    loadFakeUsers(); // Chama a função para buscar os usuários
  }, []);

  return (
    <UserContext.Provider value={fakeUsers}>{children}</UserContext.Provider>
  );
};

// Hook para usar o contexto do usuário
export const useFakeUsers = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useFakeUsers must be used within a FakeUserProvider");
  }
  return context;
};
