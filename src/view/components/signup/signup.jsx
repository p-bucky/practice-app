import React from "react";
import { Form } from "antd";
import { PhoneNumberInput } from "../../shared/c-input";
import { phoneNumberValidator } from "../../../validator/phone-number";
import { CButton } from "../../shared/c-button";

const yupSync = {
  async validator({ field }, value) {
    await phoneNumberValidator.validateSyncAt(field, { [field]: value });
  },
};

export const Signup = () => {
  const [form] = Form.useForm();
  const onChangePhoneNumber = (number) => console.log(number);
  const handleLogin = () => console.log("Login");
  return (
    <Form form={form}>
      <Form.Item name={"phoneNumber"} rules={[yupSync]}>
        <PhoneNumberInput onChange={onChangePhoneNumber} />
      </Form.Item>

      <Form.Item>
        <CButton
          text={"Submit"}
          onClick={handleLogin}
          type={"primary"}
          htmlType={"submit"}
        />
      </Form.Item>
    </Form>
  );
};
