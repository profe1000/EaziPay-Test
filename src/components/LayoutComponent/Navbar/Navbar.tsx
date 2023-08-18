import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        className="w3-col navbarcontainerwrapper"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/homedashboardgradient.svg"
          })`,
          backgroundColor: "white",
        }}
      >
        <div className="w3-content">
          <div className="w3-col l2 m6 s6">
            <img
              style={{ maxWidth: "100%" }}
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/logogreen.svg"}
            />
          </div>

          <div className="w3-col l6 m6 s12 w3-hide-medium w3-hide-small">
            <div className="linkwrapper">
              <Link className="link" to="/">
                Individual
              </Link>
              <Link className="link" to="/">
                Business
              </Link>
              <Link className="link" to="/">
                Pricing
              </Link>
              <Link className="link" to="/">
                Set Up Your Payroll
              </Link>
            </div>
          </div>

          <div className="w3-col l4 m6 s6 w3-center">
            <Link className="loginBtn" to="/">
              <span className="loginText"> Login </span>
            </Link>
            <Link className="registetBtn" to="/">
              <span className="registerText"> Register </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
