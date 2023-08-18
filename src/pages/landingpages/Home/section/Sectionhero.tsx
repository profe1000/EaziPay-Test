import { Link } from "react-router-dom";
import "./../Home.css";

export const Hero = () => {
  return (
    <>
      <div
        className="w3-col"
        style={{
         
          paddingTop: "50px",
        }}
      >
        <div
          className="w3-col l6 m12 s12"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <div className="w3-minicontent w3-padding">
            <h1 className="heroheader">
              Run your <span className="heroheaderpayroll"> payroll </span>
              <span className="heroheadereasily">easily</span> in
              <span className="heroheadersecond"> seconds</span>
            </h1>
            <span className="herobody">
              We've built an all-inclusive simple solution for individual and
              businesses to manage staff, pay salaries, bills, and relevant
              taxes all at once.
            </span>

            <p style={{ paddingTop: "20px" }}>
              <Link className="startUsingBtn w3-center" to="/">
                <span className="startUsingBtnText">
                  Start Using, Free Forever
                </span>
              </Link>
            </p>

            <p style={{ paddingTop: "20px" }}>
              <span className="downloadText"> Download the Eazipay App </span>
              <br /> <br />
              <Link className="heroDownloadBtn w3-btn" to="/">
                <img
                  style={{ maxWidth: "100%" }}
                  alt="heroImage"
                  src={`${
                    process.env.PUBLIC_URL + "/images/downloadapple.svg"
                  }`}
                />
              </Link>{" "}
              &nbsp;
              <Link className="heroDownloadBtn w3-btn" to="/">
                <img
                  style={{ maxWidth: "100%" }}
                  alt="heroImage"
                  src={`${
                    process.env.PUBLIC_URL + "/images/downloadgoogle.svg"
                  }`}
                />
              </Link>
            </p>
          </div>
        </div>
        <div className="w3-col l6 m12 s12 w3-hide-small w3-hide-medium">
          <img
            style={{ maxWidth: "100%" }}
            alt="heroImage"
            src={`${process.env.PUBLIC_URL + "/images/homedashboardpic.svg"}`}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
