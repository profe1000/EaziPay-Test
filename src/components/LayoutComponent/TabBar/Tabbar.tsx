import { DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Tabbar.css";

const Tabbar = () => {
  return (
    <>
      <div className="w3-col">
        <div
          className="w3-col w3-white w3-border-top"
          style={{ height: "60px" }}
        >
          <Link className="btn w3-btn w3-col l5th s5th m5th w3-border" to="/">
            <span className="btnText btnTextSelected">
              <DashboardOutlined />
            </span>
            <br />
            <span className="btnText btnTextSelected">Home</span>
          </Link>
          <Link className="btn w3-btn  w3-col l5th s5th m5th w3-border" to="/">
            <span className="btnText">
              <DashboardOutlined />
            </span>
            <br />
            <span className="btnText">Employee</span>
          </Link>
          <Link className="btn w3-btn w3-col l5th s5th m5th w3-border" to="/">
            <span className="btnText">
              <DashboardOutlined />
            </span>
            <br />
            <span className="btnText">PayRoll</span>
          </Link>
          <Link className="btn w3-btn w3-col l5th s5th m5th w3-border" to="/">
            <span className="btnText">
              <DashboardOutlined />
            </span>
            <br />
            <span className="btnText">Loans</span>
          </Link>
          <Link className="btn w3-btn w3-col l5th s5th m5th w3-border" to="/">
            <span className="btnText">
              <DashboardOutlined />
            </span>
            <br />
            <span className="btnText">More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tabbar;
