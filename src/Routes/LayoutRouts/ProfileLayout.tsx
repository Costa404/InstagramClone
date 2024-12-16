import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import ContentProfile from "../../Pages/Profile/ProfileComponents/ContentProfile";

const ProfileLayout = () => {
  return (
    <div className="app-layout w-100  ">
      <div
        className="main-content h-100 d-flex align-items-center flex-column  flex-grow-1 w-100 profileContainer"
        style={{ marginLeft: "5%" }}
      >
        <ContentProfile />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default ProfileLayout;
