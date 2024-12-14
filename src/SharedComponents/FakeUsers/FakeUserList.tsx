import { useEffect, useState } from "react";
import { fetchUsersFromFirebase } from "./FetchFakeUsers";
import { User } from "../Interface/Interface";

const UserList = () => {
  const [fakeUsers, setFakeUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers: User[] = await fetchUsersFromFirebase();
      setFakeUsers(fetchedUsers);
    };

    loadUsers();
  }, []);

  return { fakeUsers };
};

export default UserList;
