// // Arquivo: HandleFollow.ts
// import { getAuth } from "firebase/auth";

// import { useFollowUserIdContext } from "../../../useContext/FollowUserIdContext/FollowUserIdContext";
// import { useFollowUser } from "./useFollowUser";
// import { useIsFollowing } from "../../../useContext/IsFollowingContext/IsFollowingContext";

// // Função para gerenciar a ação de seguir um usuário
// export const useHandleFollow = () => {
//   const { currentUser } = getAuth();
//   const { followUser } = useFollowUser();
//   const { followUserId } = useFollowUserIdContext();
//   const { setIsFollowing } = useIsFollowing();

//   const handleFollowInner = async () => {
//     if (currentUser) {
//       try {
//         // Chama a função para atualizar o Firestore com o follow
//         await followUser();

//         // Atualiza o estado local para refletir o follow
//         setIsFollowing(followUserId as string, true);

//         console.log(`Successfully followed user with ID: ${followUserId}`);
//       } catch (error) {
//         console.error("Error following user:", error);
//       }
//     } else {
//       console.error("No authenticated user");
//     }
//   };

//   return { handleFollowInner };
// };
