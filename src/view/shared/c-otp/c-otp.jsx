import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

export const COtp = ({ onChange = () => {} }) => {
  const [otp, setOtp] = useState();
  useEffect(() => {
    onChange(otp);
  }, [otp]);
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      separator={<span>-</span>}
    />
  );
};
