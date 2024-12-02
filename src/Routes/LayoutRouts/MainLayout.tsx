// src/components/MainLayout.tsx

import { Outlet } from "react-router-dom";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Footer from "../../Pages/Authentication/SharedComponentes/Footer";

const MainLayout = () => (
  <div
    className="app-layout d-flex   "
    style={{ zIndex: "2", maxWidth: "85%", overflowX: "hidden" }}
  >
    <Sidebar />
    <div className="main-content  w-100">
      <Outlet />

      <div
        className="d-flex justify-content-center  w-100
      "
        style={{ marginLeft: "24rem" }}
      >
        <Footer />
      </div>
    </div>
  </div>
);

export default MainLayout;
