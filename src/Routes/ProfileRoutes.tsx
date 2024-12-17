import React from "react";

import CustomErrorPage from "../useContext/errorContext/ErrorRoute";
import ProfileLayout from "./LayoutRouts/ProfileLayout";
const LazyProfileReels = React.lazy(
  () =>
    import("../Pages/Profile/ProfileComponents/ProfileTabs/ReelsSection/Reels")
);
const LazyProfilePosts = React.lazy(
  () =>
    import(
      "../Pages/Profile/ProfileComponents/ProfileTabs/PostsSection/innerPosts/PostsSection"
    )
);

const profileRoutes = [
  {
    path: "",
    element: <LazyProfilePosts />,
  },
  {
    path: "reels",
    element: <LazyProfileReels />,
  },
];

const ProfileRoutes = {
  path: ":userName",
  element: <ProfileLayout />,
  errorElement: <CustomErrorPage />,
  children: profileRoutes,
};

export default ProfileRoutes;
