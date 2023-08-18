import "./../Home.css";


export const SectionBusiness = () => {
  return (
    <>
      <div
        className="w3-col"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/forindividualandbusiness.svg"
          })`,
          backgroundColor: "#f0f0f0",
          paddingTop: "50px",
          minHeight:"800px"
        }}
      >
        
      </div>
    </>
  );
};

export default SectionBusiness;
