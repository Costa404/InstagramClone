// import { User } from "../Interface/UserInterface";

// export const getCurrentUser = async (): Promise<User | null> => {
//   try {
//     // Simulação de uma chamada de API
//     const response = await fetch("/api/currentUser ");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();

//     // Verifique se o objeto retornado possui todas as propriedades
//     return {
//       uid: data.uid,
//       username: data.username,
//       name: data.name,
//       profileImg: data.profileImg,
//       bio: data.bio,
//       followersCount: data.followersCount,
//       followingCount: data.followingCount,
//       postsCount: data.postsCount,
//     } as User; // Assegure-se de que o objeto corresponde à interface User
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return null; // Retorne null em caso de erro
//   }
// };
// //
