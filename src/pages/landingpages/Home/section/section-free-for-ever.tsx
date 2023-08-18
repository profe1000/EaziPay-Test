import { Link } from "react-router-dom";
import "./../Home.css";

export const SectionFreeForEver = () => {
  return (
    <>
      <div
        className=" w3-col"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/forveverfreeminusdot.svg"
          })`,
          backgroundColor: "#f0f0f0",
          paddingBottom:"100px",
          minHeight: "600px",
        }}
      >
        <div className="w3-content">
          <img
            style={{ width: "80px", maxWidth: "100%" }}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/freeforeverdot.svg"}
          />
        </div>
        <div className="w3-content" style={{ paddingTop: "50px" }}>
          <div
            className="w3-col l6 m12 s12"
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            <div className="w3-padding">
              <h1 className="sectionforeverfreeheader">
                Free forever <br /> for your
                <span className="sectionforeverfreeheaderred"> salary</span>
                <br />
                <span className="sectionforeverfreeheaderred"> payments</span>
              </h1>

              <p style={{ paddingTop: "20px" }}>
                <span className="downloadText">
                  Subscribe to the Eazilife today
                </span>
                <br /> <br />
                <Link className="heroDownloadBtn w3-btn" to="/">
                  <img
                    style={{ maxWidth: "100%" }}
                    alt="heroImage"
                    src={`${
                      process.env.PUBLIC_URL + "/images/downloadapple.svg"
                    }`}
                  />
                </Link>
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
          <div className="w3-col l6 m12 s12">
            <img
              style={{ maxWidth: "100%" }}
              alt="heroImage"
              src={`${process.env.PUBLIC_URL + "/images/foreverfreeman.svg"}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFreeForEver;
