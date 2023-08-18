import "./../Home.css";
import { Link } from "react-router-dom";
import SectionDemoForm from "./sectiondemoforms/sectiondemoform";

export const SectionDemoForms = () => {
  return (
    <>
      <div
        className=" w3-col w3-white"
        style={{
          paddingTop: "50px",
          minHeight: "800px",
        }}
      >
        <div className="w3-col">
          <img
            style={{ width: "160px", maxWidth: "100%" }}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/exclusivedemodot.svg"}
          />
        </div>
        <div className="w3-content" style={{ paddingTop: "50px" }}>
          <div
            className="w3-col l6 m12 s12"
            style={{ paddingTop: "20px", paddingBottom: "50px" }}
          >
            <div className="w3-padding">
              <h1 className="sectionFormMiniHeader">
                Get an Exclusive <br /> Demo of Eazipay
              </h1>

              <p style={{ paddingTop: "20px" }}>
                <span className="sectionFormMiniCaption">
                  Our greatest priority is to put you and
                  <br /> your business first. Let's show you how <br />
                  we can help.
                </span>
                <br /> <br />
              </p>
            </div>
          </div>
          <div className="w3-col l6 m12 s12">
            <div className="w3-col w3-padding w3-card w3-round-xlarge">
              <h2 className="sectionFormMainHeader"> First things first </h2>
              <p className="sectionFormMainCaption">
                We want to serve you better. Tell us a bit <br /> about yourself
                or company
              </p>

              <div className="w3-round-large w3-border w3-padding">
                <Link
                  to="/"
                  className="formsectionToggleButton formsectionToggleButtonSelected"
                >
                  <span className="formButtonText formButtonTextColorWhite">
                    Individual
                  </span>
                </Link>
                &nbsp;
                <Link
                  className="formsectionToggleButton formsectionToggleButtonNotSelected"
                  to="/"
                >
                  <span className="formButtonText formButtonTextColorBlack">
                    Company
                  </span>
                </Link>
              </div>

              <div>
                <SectionDemoForm></SectionDemoForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDemoForms;
