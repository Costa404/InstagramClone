// import { useEffect, useState } from "react";
// import { fetchUsersFromFirebase } from "./FetchFakeUsers";
// import { User } from "../Interface/Interface";
// import { useFakeUsers } from "../../useContext/fakeUsers/FakeUsersContext";

// const UserList = () => {
//   const { fakeUsers, setFakeUsers } = useFakeUsers();

//   useEffect(() => {
//     const loadUsers = async () => {
//       const fetchedUsers: User[] = await fetchUsersFromFirebase();
//       setFakeUsers(fetchedUsers);
//     };

//     loadUsers();
//   }, []);

//   return { fakeUsers };
// };

// export default UserList;
