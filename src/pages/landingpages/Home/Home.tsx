import "./Home.css";
import Hero from "./section/Sectionhero";
import SectionFreeForEver from "./section/section-free-for-ever";
import SectionHowItWork from "./section/section-how-it-work";
import SectionBusiness from "./section/sectionbusiness";
import SectionDemoForms from "./section/sectiondemoforms";
import Navbar from "../../../components/LayoutComponent/Navbar/Navbar";
import Footer from "../../../components/LayoutComponent/Footer/Footer";

export const Home = () => {
  return (
    <>
      <div
        className="w3-col"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/homedashboardgradient.svg"
          })`,
        }}
      >
        <Navbar></Navbar>
        <Hero></Hero>
        <SectionBusiness></SectionBusiness>
        <SectionHowItWork></SectionHowItWork>
        <SectionFreeForEver></SectionFreeForEver>
        <SectionDemoForms></SectionDemoForms>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
