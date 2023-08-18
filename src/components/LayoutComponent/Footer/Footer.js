import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        minHeight: "200px",
      }}
      className="w3-col w3-white w3-border-top"
    >
      <div className="w3-content">
        <div className="w3-col l5th m5th s12" style={{ padding: "10px" }}>
          <img
            style={{ maxWidth: "100%" }}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/logogreen.svg"}
          />

          <p style={{ paddingTop: "20px" }}>
            <span className="copytext">Copyright © 2023 Eazipay.</span>
            <br />
            <span className="copytext">All rights reserved</span>
            <br />
          </p>
          <p style={{ paddingTop: "20px" }}>
            <span>
              <img
                style={{ maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/footericonig.svg"}
              />
              &nbsp;
            </span>
            <span>
              <img
                style={{ maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/footericontw.svg"}
              />
              &nbsp;
            </span>
            <span>
              <img
                style={{ maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/footericonfb.svg"}
              />
              &nbsp;
            </span>
            <span>
              <img
                style={{ maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/footericonln.svg"}
              />
              &nbsp;
            </span>
          </p>
        </div>
        <div className="w3-col l5th m5th s12" style={{ padding: "10px" }}>
          <h3 className="footerHeader"> Products </h3>
          <Link className="footerLink" to="/">
            Individual
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Business
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Request Demo
          </Link>
          <br />
          <Link className="footerLink" to="/">
            pricing
          </Link>
        </div>

        <div className="w3-col l5th m5th s12" style={{ padding: "10px" }}>
          <h3 className="footerHeader"> Legal </h3>
          <Link className="footerLink" to="/">
            Privacy Policy
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Terms and Services
          </Link>
          <br />
        </div>

        <div className="w3-col l5th m5th s12" style={{ padding: "10px" }}>
          <h3 className="footerHeader"> Resources </h3>
          <Link className="footerLink" to="/">
            FAQS
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Blog
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Carrer
          </Link>
          <br />
          <Link className="footerLink" to="/">
            Customer Stories
          </Link>
        </div>

        <div className="w3-col l5th m5th s12" style={{ padding: "10px" }}>
          <h3 className="footerHeader"> Products </h3>
          <Link className="footerLink" to="/">
            eazipay@gmail.com
          </Link>
          <br />
          <Link className="footerLink" to="/">
            +234 816 878 9518
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
