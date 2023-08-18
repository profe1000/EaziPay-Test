import "./../Home.css";


export const SectionFreeForEver= () => {
  return (
    <>
      <div
        className=" w3-col"
        style={{
          background: `url(${
            process.env.PUBLIC_URL + "/images/forveverfreeminusdot.svg"
          })`,
          backgroundColor: "#f0f0f0",
          paddingTop: "50px",
          minHeight: "800px",
        }}
      ></div>
    </>
  );
};

export default SectionFreeForEver;
