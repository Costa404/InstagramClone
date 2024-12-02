// import { useEffect, useState } from "react";
// import { User } from "../Interface/UserInterface";
// import { getCurrentUser } from "./getCurrentUser";

// export const useCurrentUser = () => {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   const [error, setError] = useState<string | null>(null); // Estado para erros

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const currentUserFetched = await getCurrentUser();

//         if (!currentUserFetched) {
//           // Aqui você pode tratar o caso quando o currentUserFetched for null ou undefined
//           setCurrentUser(null); // Por exemplo, se não houver usuário
//         } else {
//           setCurrentUser(currentUserFetched); // Quando currentUserFetched não for null, você define o estado com os dados do usuário
//         }
//       } catch (error) {
//         console.error("Error fetching current user:", error);
//         setError("Failed to fetch current user.");
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   return { currentUser, error };
// };
