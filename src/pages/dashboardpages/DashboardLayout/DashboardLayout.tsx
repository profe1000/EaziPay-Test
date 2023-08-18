import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Tabbar from "../../../components/LayoutComponent/TabBar/Tabbar";
import SideBar from "../../../components/LayoutComponent/SideBar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w3-col">
      <div className="w3-col w3-hide-small w3-hide-medium w3-border-right sideMenu">
        &nbsp;
        <div className="sideMenuFixed">
          <SideBar></SideBar>
        </div>
      </div>
      <div className="w3-rest content">
        <Outlet />
      </div>
      <div className="w3-col w3-hide-large footerMenu">
        <Tabbar></Tabbar>
      </div>
    </div>
  );
};

export default DashboardLayout;
