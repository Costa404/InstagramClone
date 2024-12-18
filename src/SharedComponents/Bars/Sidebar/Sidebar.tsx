import MenuList from "./SidebarComponents/MenuList";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import styleHomepage from "../../../Pages/Homepage/Frontend/Homepage.module.css";
import LowerSidebar from "./SidebarComponents/LowerSidebar/LowerSidebar";

const Sidebar = () => {
  return (
    <section
      className={` ${styleHomepage.sidebar}    d-flex flex-column py-5  border-end border-0 border-dark position-fixed sidebar h-100  `}
      style={{
        overflow: "hidden",

        width: "24.4rem",
        flex: "1",
        zIndex: "3",
      }}
    >
      <div
        style={{
          height: "75vh",
          flexShrink: "0",
        }}
      >
        <SidebarHeader />
        <MenuList />
      </div>
      <LowerSidebar />
    </section>
  );
};

export default Sidebar;
