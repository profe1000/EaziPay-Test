import "./../Home.css";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

export const Hero = () => {
  return (
    <>
      <div className=" w3-col w3-light-grey">
        <h1 className="header"> Run your payroll easily in seconds</h1>
        <span className="body">
          We’ve built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </span>
        <Result
          status="404"
          icon={<SmileOutlined rev={undefined} />}
          title="Hero Page"
          subTitle="Please the patient our engineer is out work"
        />
      </div>
    </>
  );
};

export default Hero;
