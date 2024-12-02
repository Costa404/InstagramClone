// ErrorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface UserIdContextType {
  userId: string | null; // Permite string ou null
  setUserId: (user: string | null) => void; // Aceita string ou null
}

const UserIdContext = createContext<UserIdContextType | undefined>(undefined);

export const UserIdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserIdContext = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error("userContext must be used within an ErrorProvider");
  }
  return context;
};
