/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

import { User } from "../../SharedComponents/Interface/Interface";
import { fetchUsersFromFirebase } from "../../SharedComponents/FakeUsers/FetchFakeUsers";

const UserContext = createContext<User[] | null>(null);

interface FakeUserProviderProps {
  children: React.ReactNode;
}

export const FakeUserProvider: React.FC<FakeUserProviderProps> = ({
  children,
}) => {
  const [fakeUsers, setFakeUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const loadFakeUsers = async () => {
      const fetchedFakeUsers = await fetchUsersFromFirebase();
      if (JSON.stringify(fetchedFakeUsers) !== JSON.stringify(fakeUsers)) {
        setFakeUsers(fetchedFakeUsers);
      }
    };

    loadFakeUsers();
  }, []);

  return (
    <UserContext.Provider value={fakeUsers}>{children}</UserContext.Provider>
  );
};

export const useFakeUsers = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useFakeUsers must be used within a FakeUserProvider");
  }
  return context;
};
