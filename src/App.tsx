import "./App.css";
import "./assets/css/w3.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from "./pages/Nopage/Nopage";
import LandingPagesRoute from "./pages/landingpages/landingPagesRoute";
import AdminPagesRoute from "./pages/dashboardpages/dashboardRoute";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPagesRoute />} />
        <Route path="landing/*" element={<LandingPagesRoute />} />
        <Route path="admin/*" element={<AdminPagesRoute />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
