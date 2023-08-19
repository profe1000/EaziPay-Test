import { CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./../DashboardHome.css";

export const SectionQuickStats = () => {
  return (
    <>
      <div className="w3-col">
        <div className="w3-dashcontent " style={{ paddingTop: "50px" }}>
          <div className="w3-col">
            <h1 className="profileName"> Welcome Abasiama</h1>
            <p className="profileSubName">
              Pay and manage your employee in minutes
            </p>
          </div>

          <div className="w3-col">
            <div className="w3-col l9 s12 m12" style={{ padding: "5px" }}>
              <div className="dashboardWalletCard w3-col">
                <div className="w3-col l6 s12 m12">
                  <span className="walletBalanceText"> Wallet Balance </span>
                  <h1 className="amountText"> N 12,560,078.00 </h1>
                </div>

                <div
                  className="w3-col l6 s12 m12 w3-right-align"
                  style={{ paddingTop: "30px" }}
                >
                  <Link className="w3-btn fundWalletBtn" to="/">
                    <span className="fundWalletBtnText"> Fund Wallet </span>
                  </Link>
                </div>
              </div>

              <div style={{ marginTop: "20px" }} className="w3-col">
                <div className="w3-col l3 s4 m4" style={{ padding: "5px" }}>
                  <Link className="iconButton w3-btn w3-center" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconemployer.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Add Employee</span>
                  </Link>
                </div>
                <div className="w3-col l3 s4 m4" style={{ padding: "5px" }}>
                  <Link className="iconButton w3-btn w3-center" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconpaysalary.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Pay Salary</span>
                  </Link>
                </div>
                <div className="w3-col l3 s4 m4" style={{ padding: "5px" }}>
                  <Link className="iconButton w3-btn w3-center" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconpaycomplainace.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Pay Complainance </span>
                  </Link>
                </div>
                <div className="w3-col l3 s4 m4" style={{ padding: "5px" }}>
                  <Link className="iconButton w3-btn w3-center" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconemployer.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Add Employee</span>
                  </Link>
                </div>
                <div
                  className="w3-col l3 s4 m4 w3-hide-large"
                  style={{ padding: "5px" }}
                >
                  <Link className="iconButton w3-btn" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconemployer.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Add Employee</span>
                  </Link>
                </div>
                <div
                  className="w3-col l3 s4 m4 w3-hide-large"
                  style={{ padding: "5px" }}
                >
                  <Link className="iconButton w3-btn" to="/">
                    <img
                      style={{ maxWidth: "100%" }}
                      alt="logo"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/dashboardiconemployer.svg"
                      }
                    />
                    <br />
                    <span className="iconButtonText"> Add Employee</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="w3-col l3 s12 m12 w3-hide-small w3-hide-medium"
              style={{ padding: "5px", paddingLeft: "30px" }}
            >
              <div className="w3-col w3-border w3-round-xlarge w3-card w3-white">
                <div className="nextPayRollCon w3-center">
                  <span className="nextPayrollText"> Next Pay roll</span>
                </div>

                <div
                  className="dateCon w3-border-bottom w3-center"
                  style={{ paddingBottom: "40px", paddingTop: "20px" }}
                >
                  <span className="dayText">
                    <CalendarOutlined /> Friday
                  </span>
                  <br />
                  <span className="dateText"> 09/11/2022 </span>
                </div>

                <div
                  className="dateCon"
                  style={{ paddingBottom: "40px", paddingTop: "20px" }}
                >
                  <span className="totalEmployeeText"> Total Employee </span>
                  <br /><br />
                  <span className="totalEmployeeNumber"> 64 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionQuickStats;
