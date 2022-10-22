import React, { useState } from "react";
import { Form } from "antd";
import { PhoneNumberInput } from "../../../../shared/c-input";
import { phoneNumberValidator } from "../../../../../validator/phone-number";
import { CButton } from "../../../../shared/c-button";
import { Typography } from "antd";
const { Title } = Typography;

const yupSync = {
  async validator({ field }, value) {
    await phoneNumberValidator.validateSyncAt(field, { [field]: value });
  },
};

export const SignupForm = ({ handleLogin }) => {
  const [form] = Form.useForm();
  const [phoneNumber, setPhoneNumber] = useState();
  const onChangePhoneNumber = (number) => setPhoneNumber(number);
  const handleLoginBtn = () => handleLogin(phoneNumber);
  return (
    <>
      <Title level={5}>Signup With Phone Number</Title>

      <Form form={form}>
        <Form.Item name={"phoneNumber"} rules={[yupSync]}>
          <PhoneNumberInput onChange={onChangePhoneNumber} />
        </Form.Item>

        <Form.Item>
          <CButton
            text={"Submit"}
            onClick={handleLoginBtn}
            type={"primary"}
            htmlType={"submit"}
          />
        </Form.Item>
      </Form>
    </>
  );
};
