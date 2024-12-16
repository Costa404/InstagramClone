// src/components/MainLayout.tsx

import { Outlet } from "react-router-dom";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Footer from "../../Pages/Authentication/SharedComponentes/Footer";
import BottomBar from "../../SharedComponents/Sidebar/BottomBar/BottomBar";

const MainLayout = () => (
  <div
    className="app-layout d-flex overflowX   "
    style={{
      // maxWidth: "85%",
      overflowX: "hidden",
    }}
  >
    <Sidebar />
    <BottomBar />
    <div className="main-content  w-100">
      <Outlet />

      <div
        className="d-flex justify-content-center  w-100
      "
        style={{ marginLeft: "15%" }}
      >
        <Footer />
      </div>
    </div>
  </div>
);

export default MainLayout;
