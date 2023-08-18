import "./../../Home.css";

export const SectionDemoForm = () => {
  return (
    <>
      <div className=" w3-col w3-margin-top">
        <form>
          <input
            placeholder="First Name"
            className="w3-input w3-border w3-round-large"
          />

          <input
            placeholder="Last Name"
            className="w3-input w3-border w3-round-large w3-margin-top"
          />

          <input
            placeholder="Email"
            className="w3-input w3-border w3-round-large w3-margin-top"
          />

          <input
            placeholder="Job Title"
            className="w3-input w3-border w3-round-large w3-margin-top"
          />

          <select className="w3-input w3-border w3-round-large w3-margin-top">
            <option> Company Size </option>
          </select>

          <button className="w3-btn submitButton w3-margin-top">
            <span className="submitButtonText"> Request Demo </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default SectionDemoForm;
