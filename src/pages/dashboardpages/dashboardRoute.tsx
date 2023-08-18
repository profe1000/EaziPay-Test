import "../../App.css";
import "../../assets/css/w3.css";
import { Routes, Route } from "react-router-dom";
import Nopage from "../Nopage/Nopage";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import DashboardHome from "./DashbaordHome/DashboardHome";

const DashboardPagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  );
};

export default DashboardPagesRoute;
