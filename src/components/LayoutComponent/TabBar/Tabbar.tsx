import { Link } from "react-router-dom";
import "./Tabbar.css";

const Tabbar = () => {
  return (
    <>
      <div className="w3-col">
        <div className="w3-card  w3-blue navbarcontainerwrapper">
          <span> Nav Bar </span>
        </div>
        <div className="w3-col">
          <Link className="w3-btn w3-round w3-white w3-col  w3-border" to="/">
            Home
          </Link>
          <Link
            className="w3-btn w3-round w3-white w3-col  w3-border"
            to="/admin"
          >
            Admin Home
          </Link>
          <Link
            className="w3-btn w3-round w3-white w3-col  w3-border"
            to="/publisher"
          >
            Publisher Home
          </Link>
          <Link
            className="w3-btn w3-round w3-white w3-col  w3-border"
            to="/advertiser"
          >
            Advertiser Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tabbar;
