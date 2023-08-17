import "./Home.css";
import Hero from "./section/Sectionhero";
import SectionFreeForEver from "./section/section-free-for-ever";
import SectionHowItWork from "./section/section-how-it-work";
import SectionBusiness from "./section/sectionbusiness";
import SectionDemoForms from "./section/sectiondemoforms";

export const Home = () => {
  return (
    <>
      <div className=" w3-col w3-light-grey">
        <Hero></Hero>
        <SectionBusiness></SectionBusiness>
        <SectionHowItWork></SectionHowItWork>
        <SectionFreeForEver></SectionFreeForEver>
        <SectionDemoForms></SectionDemoForms>
      </div>
    </>
  );
};

export default Home;
