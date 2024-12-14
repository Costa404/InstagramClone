/* eslint-disable react-refresh/only-export-components */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CustomErrorPage from "../useContext/errorContext/ErrorRoute";

import ProfileRoutes from "./ProfileRoutes";

import { useCurrentUser } from "../useContext/currentUserContext/currentUserContext.tsx";
import MainLayout from "./LayoutRouts/MainLayout.tsx";

const LazyHomepage = React.lazy(() => import("../Pages/Homepage/Homepage"));
const LazyAuthentication = React.lazy(
  () => import("../Pages/Authentication/Authentication")
);
const LazyCreateAccount = React.lazy(
  () => import("../Pages/Authentication/CreateAccount/CreateAccount")
);
const LazyAllUsers = React.lazy(
  () => import("../Pages/Homepage/UsersListDisplaySuggested/UsersDispaly.tsx")
);
const LazySuggestionUsers = React.lazy(
  () =>
    import("../SharedComponents/UsersDisplayStarted/UsersDispalySuggestion.tsx")
);

const LazyCreatePost = React.lazy(
  () => import("../SharedComponents/createPost/CreatePost.tsx")
);
export const useAppRoutes = () => {
  const { currentUserId } = useCurrentUser();
  return createBrowserRouter([
    {
      path: "/",
      element: <LazyAuthentication />,
      errorElement: <CustomErrorPage />,
    },
    {
      path: "/signup",
      element: <LazyCreateAccount />,
      errorElement: <CustomErrorPage />,
    },
    // {
    //   path: "/usersSuggestion",
    //   element: <LazySuggestionUsers />,
    //   errorElement: <CustomErrorPage />,
    // },
    {
      path: `/${currentUserId?.userName}`,
      element: <LazySuggestionUsers />,
      errorElement: <CustomErrorPage />,
    },
    {
      path: `/create`,
      element: <LazyCreatePost />,
      errorElement: <CustomErrorPage />,
    },
    {
      path: "/Homepage",
      element: <MainLayout />,
      errorElement: <CustomErrorPage />,
      children: [
        {
          path: "",
          element: <LazyHomepage />,
        },
        {
          path: "allUsers",
          element: <LazyAllUsers />,
        },
        ProfileRoutes,
      ],
    },
  ]);
};
