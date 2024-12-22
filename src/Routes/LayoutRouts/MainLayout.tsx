// src/components/MainLayout.tsx

import { Outlet } from "react-router-dom";

import Footer from "../../Pages/Authentication/SharedComponentes/Footer";
import Sidebar from "../../SharedComponents/Bars/Sidebar/Sidebar";
import BottomBar from "../../SharedComponents/Bars/BottomBar/BottomBar";

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
      >
        <Footer />
      </div>
    </div>
  </div>
);

export default MainLayout;
