import { DashboardOutlined , UserAddOutlined, WalletOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="w3-col">
        <div className="w3-card">
          <img
            style={{ maxWidth: "100%" }}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logodesktopmenu.svg"}
          />
        </div>
        <div className="w3-col">
          <Link className="w3-btn botton buttonSelected" to="/">
            <span className="buttonText buttonTextSelected">
              <DashboardOutlined />
              &nbsp; Home
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <WalletOutlined />
              &nbsp; Wallet
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <UserAddOutlined />
              &nbsp; Employee Management
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <DashboardOutlined />
              &nbsp; Payroll
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <DashboardOutlined />
              &nbsp; Complaince
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <DashboardOutlined />
              &nbsp; Quick Loans
            </span>
          </Link>
          <Link className="w3-btn w3-round w3-white w3-col  botton" to="/">
            <span className="buttonText">
              <DashboardOutlined />
              &nbsp; Book Keeping
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
