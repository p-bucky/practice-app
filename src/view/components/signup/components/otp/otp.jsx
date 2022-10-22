import React, { useState } from "react";
import { COtp } from "../../../../shared/c-otp";
import { Typography } from "antd";
import { CButton } from "../../../../shared/c-button";

const { Title } = Typography;

export const Otp = ({ handleOtp = () => {} }) => {
  const [otp, setOtp] = useState("");
  const handleSubmit = () => handleOtp(otp);
  return (
    <>
      <Title level={5}>Type Otp</Title>
      <COtp onChange={setOtp} />
      <CButton
        text={"Submit"}
        onClick={handleSubmit}
        type={"primary"}
        htmlType={"submit"}
      />
    </>
  );
};
