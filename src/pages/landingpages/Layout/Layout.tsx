import "./Layout.css";
import { Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="w3-col">
      

    
      <div className="w3-col">
        <Outlet />
      </div>

    
    </div>
  );
};

export default Layout;
