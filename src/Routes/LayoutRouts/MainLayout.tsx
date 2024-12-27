import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../Pages/Authentication/SharedComponentes/Footer";
import Sidebar from "../../SharedComponents/Bars/Sidebar/Sidebar";
import BottomBar from "../../SharedComponents/Bars/BottomBar/BottomBar";

const MainLayout = () => {
  const location = useLocation();

  // Defina as rotas onde o Footer não deve aparecer
  const hideFooterOnRoutes = ["/homepage/messages"];

  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);
  console.log("shouldHideFooter", shouldHideFooter);

  return (
    <div
      className="app-layout d-flex overflowX"
      style={{
        overflowX: "hidden",
      }}
    >
      <Sidebar isMessages={shouldHideFooter} />
      <BottomBar />
      <div className="main-content w-100">
        <Outlet />

        {!shouldHideFooter && (
          <div className="d-flex justify-content-center w-100">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
