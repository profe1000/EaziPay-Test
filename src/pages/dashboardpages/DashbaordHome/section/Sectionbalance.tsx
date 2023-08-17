import "./../DashboardHome.css";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

export const SectionBalance = () => {
  return (
    <>
      <div>
        <Result
          status="404"
          icon={<SmileOutlined rev={undefined} />}
          title="Admin Home Page "
          subTitle="Please the patient our engineer is out work"
        />
      </div>
    </>
  );
};

export default SectionBalance;
