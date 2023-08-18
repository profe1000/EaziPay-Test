import "./../Home.css";

export const SectionHowItWork = () => {
  return (
    <>
      <div
        className=" w3-col w3-white"
        style={{
          paddingTop: "100px",
          minHeight: "800px",
        }}
      >
        <div className="w3-center">
          <h1 className="sectionHowitworkHeader">How Eazipay Works</h1>
          <p className="sectionHowitworkcaption">
            Get started in 3 simple steps.
          </p>
        </div>

        <div className="w3-content">
          <div className="w3-col">
            <div className="w3-col l6 s12 m12">
              <div className="w3-col w3-center">
                <img
                  className="w3-round-xlarge"
                  style={{ maxWidth: "100%", height: "700px" }}
                  alt="How it works"
                  src={process.env.PUBLIC_URL + "/images/howitworksphone.png"}
                />
              </div>
            </div>
            <div className="w3-col l6 s12 m12">
              <img
                style={{ maxWidth: "100%" }}
                alt="How it works"
                src={process.env.PUBLIC_URL + "/images/howitworkstep.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHowItWork;
