import { useEffect } from "react";
import { useCurrentUser } from "../../../../../useContext/currentUserContext/currentUserContext";
import { useSelectedUser } from "../../../../../useContext/SelectedUserContext";

const useDisplayUser = () => {
  const { currentUserId } = useCurrentUser();
  const { selectedUser, setSelectedUser } = useSelectedUser();

  useEffect(() => {
    if (!selectedUser) {
      setSelectedUser(currentUserId);
    }
  }, [selectedUser, currentUserId, setSelectedUser]);

  const displayUser =
    selectedUser === currentUserId ? currentUserId : selectedUser;

  return { displayUser, selectedUser, setSelectedUser, currentUserId };
};

export default useDisplayUser;
