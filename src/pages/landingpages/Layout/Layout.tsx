import "./Layout.css";
import { Outlet} from "react-router-dom";
import Footer from "../../../components/LayoutComponent/Footer/Footer";
import Navbar from "../../../components/LayoutComponent/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="w3-col">
      <Navbar></Navbar>

    
      <div className="w3-col">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
