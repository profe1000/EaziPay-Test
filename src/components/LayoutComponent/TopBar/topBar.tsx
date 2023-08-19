import "./topbar.css";

export const TopBar = () => {
  return (
    <>
       <div className="w3-col w3-hide-small w3-hide-medium" style={{width:"250px"}}>
          <br />
       </div>
      <div className="w3-rest">
        <div className="w3-dashcontent">
          <div
            className="w3-col"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <div className="w3-col l6 s6 m6">
              <img
                style={{ maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/otherslogo.svg"}
              />
            </div>
            <div className="w3-col l6 s6 m6 w3-right-align">
              <img
                style={{ width: "64px", maxWidth: "100%" }}
                alt="logo"
                src={process.env.PUBLIC_URL + "/images/sampledpmobile.svg"}
              />
              <div
                style={{ float: "right", padding: "5px", textAlign: "left" }}
              >
                <span className="profileCardName"> Kalu Abasiama</span> <br />
                <span className="profilePosition"> Admin </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
