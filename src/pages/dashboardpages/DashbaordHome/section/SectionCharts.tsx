import "./../DashboardHome.css";

export const SectionChart = () => {
  return (
    <>
      <div className="w3-col">
        <div className="w3-dashcontent " style={{ paddingTop: "50px" }}>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/dashboardgraphfull.svg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionChart;
