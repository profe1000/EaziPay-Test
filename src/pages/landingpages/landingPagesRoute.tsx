import "../../App.css";
import "../../assets/css/w3.css";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Nopage from "../Nopage/Nopage";

const LandingPagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  );
};

export default LandingPagesRoute;
