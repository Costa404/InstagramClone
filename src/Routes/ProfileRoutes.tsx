import React from "react";

import CustomErrorPage from "../useContext/errorContext/ErrorRoute";
import ProfileLayout from "./LayoutRouts/ProfileLayout";

// Lazy Load das páginas do perfil
const LazyProfileReels = React.lazy(
  () =>
    import("../Pages/Profile/ProfileComponents/ProfileTabs/ReelsSection/Reels")
);
const LazyProfilePosts = React.lazy(
  () =>
    import(
      "../Pages/Profile/ProfileComponents/ProfileTabs/PostsSection/PostsSection"
    )
);

// Definindo as rotas do perfil como um array de objetos
const profileRoutes = [
  {
    path: "", // Rota padrão, corresponde a "/profile"
    element: <LazyProfilePosts />, // Exibe posts por padrão
  },
  {
    path: "reels", // Rota para reels, corresponde a "/profile/reels"
    element: <LazyProfileReels />, // Exibe reels
  },
];

const ProfileRoutes = {
  path: ":username", // Defina a rota com :username para ser um parâmetro dinâmico
  element: <ProfileLayout />,
  errorElement: <CustomErrorPage />,
  children: profileRoutes, // Array de rotas filho
};

export default ProfileRoutes;
// import React from "react";
// import ProfileLayout from "../components/ProfileLayout";
// import CustomErrorPage from "../useContext/errorContext/ErrorRoute";

// // Lazy Load das páginas do perfil
// const LazyProfileReels = React.lazy(
//   () =>
//     import("../Pages/Profile/ProfileComponents/ProfileTabs/ReelsSection/Reels")
// );
// const LazyProfilePosts = React.lazy(
//   () =>
//     import(
//       "../Pages/Profile/ProfileComponents/ProfileTabs/PostsSection/PostsSection"
//     )
// );

// // Definindo as rotas do perfil como um array de objetos
// const profileRoutes = [
//   {
//     path: "", // Rota padrão, corresponde a "/profile"
//     element: <LazyProfilePosts />, // Exibe posts por padrão
//   },
//   {
//     path: "reels", // Rota para reels, corresponde a "/profile/reels"
//     element: <LazyProfileReels />, // Exibe reels
//   },
// ];

// const ProfileRoutes = {
//   path: "profile", // Definido sem a barra inicial para rota filha
//   element: <ProfileLayout />,
//   errorElement: <CustomErrorPage />,
//   children: profileRoutes, // Array de rotas filho
// };

// export default ProfileRoutes;
