import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Typography } from "antd";
import { CButton } from "../../../../shared/c-button";
const { Title } = Typography;

export const Pin = ({ handlePin = () => {} }) => {
  const [pin, setPin] = useState("");
  const [pinVerify, setPinVerify] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (pin !== pinVerify) {
      setError("Pin Dosen't Match");
      return;
    }
    handlePin(pin);
    setError("");
  };
  return (
    <div>
      <Title level={5}>Type Pin</Title>
      <OtpInput
        value={pin}
        onChange={setPin}
        numInputs={4}
        separator={<span>-</span>}
      />
      <Title level={5}>Verify Pin</Title>
      <OtpInput
        value={pinVerify}
        onChange={setPinVerify}
        numInputs={4}
        separator={<span>-</span>}
      />
      {error}
      <CButton
        text={"Submit"}
        onClick={handleSubmit}
        type={"primary"}
        htmlType={"submit"}
      />
    </div>
  );
};
