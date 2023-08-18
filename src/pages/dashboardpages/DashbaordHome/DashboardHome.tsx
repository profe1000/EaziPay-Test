import "./DashboardHome.css";
import { SectionBalance } from "./section/Sectionbalance";
import SectionChart from "./section/SectionCharts";
import SectionNameProfile from "./section/Sectionnameprofile";
import { SectionQuickStats } from "./section/Sectionquickstats";
import SectionRecentActivities from "./section/Sectionrecentactivities";

export const DashboardHome = () => {
  return (
    <>
      <div className="w3-col w3-padding w3-light-grey">
        <SectionNameProfile></SectionNameProfile>
        <SectionBalance></SectionBalance>
        <SectionQuickStats></SectionQuickStats>
        <SectionChart></SectionChart>
        <SectionRecentActivities></SectionRecentActivities>
      </div>
    </>
  );
};

export default DashboardHome;
