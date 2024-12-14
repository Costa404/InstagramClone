/* eslint-disable react-refresh/only-export-components */
// ErrorContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FollowUserIdContextType {
  followUserId: string | null;
  setFollowUserId: (user: string | null) => void;
}

const FollowUserIdContext = createContext<FollowUserIdContextType | undefined>(
  undefined
);

export const FollowUserIdProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [followUserId, setFollowUserId] = useState<string | null>(null);

  return (
    <FollowUserIdContext.Provider value={{ followUserId, setFollowUserId }}>
      {children}
    </FollowUserIdContext.Provider>
  );
};

export const useFollowUserIdContext = () => {
  const context = useContext(FollowUserIdContext);
  if (!context) {
    throw new Error(
      "useFollowUserIdContext must be used within an ErrorProvider"
    );
  }
  return context;
};
