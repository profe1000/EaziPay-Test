import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w3-col">
      <div className="w3-col">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
