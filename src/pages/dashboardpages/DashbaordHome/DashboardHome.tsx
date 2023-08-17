import "./DashboardHome.css";
import { SectionBalance } from "./section/Sectionbalance";
import SectionChart from "./section/SectionCharts";
import SectionNameProfile from "./section/Sectionnameprofile";
import { SectionQuickStats } from "./section/Sectionquickstats";
import SectionRecentActivities from "./section/Sectionrecentactivities";

export const DashboardHome = () => {
  return (
    <>
      <SectionNameProfile></SectionNameProfile>
      <SectionBalance></SectionBalance>
      <SectionQuickStats></SectionQuickStats>
      <SectionChart></SectionChart>
      <SectionRecentActivities></SectionRecentActivities>
    </>
  );
};

export default DashboardHome;
