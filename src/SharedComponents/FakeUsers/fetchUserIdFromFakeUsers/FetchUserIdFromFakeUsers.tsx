// import { useEffect } from "react";
// import { useUser } from "../../useContext/userContext/userContext";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";

// export const FetchUserIdFromFakeUsers = () => {
//   const { setUserId } = useUser();

//   useEffect(() => {
//     const fetchFakeUserId = async () => {
//       const fakeUserIdRef = collection(db, "fakeUsers");
//       const snapshot = await getDocs(fakeUserIdRef);
//       const fakeUserIdList: string[] = [];

//       snapshot.forEach((doc) => {
//         const data = doc.data();
//         const userId = data.userId;

//         if (userId) {
//           fakeUserIdList.push(userId);
//         }
//       });

//       console.log(fakeUserIdList);
//       setUserId(fakeUserIdList);
//     };
//    fetchFakeUsers();
//   }, [setUserId]);
