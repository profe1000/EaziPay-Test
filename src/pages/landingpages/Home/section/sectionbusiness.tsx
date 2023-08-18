import "./../Home.css";

export const SectionBusiness = () => {
  return (
    <>
      <div
        className="w3-col w3-center"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/forindividualandbusiness.svg"
          })`,
          backgroundColor: "#f0f0f0",
          paddingTop: "180px",
          minHeight: "800px",
        }}
      >
        <h1 className="sectionbuisnessheader">
          For Individuals and Businesses
        </h1>
        <p className="sectionbuisnesscaption">
          Join 200+ businesses using Eazipay's easy solution.
        </p>

        <p className="w3-hide-small w3-hide-medium">
          <img
            style={{ maxWidth: "100%" }}
            alt="logo"
            src={process.env.PUBLIC_URL + "/images/forbusinesscards.svg"}
          />
        </p>

        <p className="sectionbuisnessfooter">
          We are happy to answer your queries. Please, reach us at <br />
          <span className="sectionbuisnessfooteremail">
            hello@myeazipay.com
          </span>
          and expect our response shortly after.
        </p>
      </div>
    </>
  );
};

export default SectionBusiness;
