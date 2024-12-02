// FollowContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface IsFollowingContextType {
  isFollowing: { [userId: string]: boolean };
  setIsFollowing: (userId: string, value: boolean) => void;
}

interface FollowProviderProps {
  children: ReactNode;
}

const IsFollowingContext = createContext<IsFollowingContextType | undefined>(
  undefined
);

export const IsFollowingProvider: React.FC<FollowProviderProps> = ({
  children,
}) => {
  // Usar um mapa de userId -> isFollowing
  const [isFollowing, setIsFollowing] = useState<{ [userId: string]: boolean }>(
    {}
  );

  const updateIsFollowing = (userId: string, value: boolean) => {
    setIsFollowing((prevState) => ({
      ...prevState,
      [userId]: value,
    }));
  };

  return (
    <IsFollowingContext.Provider
      value={{ isFollowing, setIsFollowing: updateIsFollowing }}
    >
      {children}
    </IsFollowingContext.Provider>
  );
};

export const useIsFollowing = (): IsFollowingContextType => {
  const context = useContext(IsFollowingContext);
  if (!context) {
    throw new Error("useIsFollowing must be used within a IsFollowingProvider");
  }
  return context;
};
