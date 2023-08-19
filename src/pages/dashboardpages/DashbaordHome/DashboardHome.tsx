import "./DashboardHome.css";
import SectionChart from "./section/SectionCharts";
import { SectionQuickStats } from "./section/Sectionquickstats";
import SectionRecentActivities from "./section/Sectionrecentactivities";

export const DashboardHome = () => {
  return (
    <>
      
      <div className="w3-col w3-padding w3-light-grey">
        <SectionQuickStats></SectionQuickStats>
        <SectionChart></SectionChart>
        <SectionRecentActivities></SectionRecentActivities>
      </div>
    </>
  );
};

export default DashboardHome;
