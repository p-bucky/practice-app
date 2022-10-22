import { InputNumber } from "antd";
import { Prefix } from "./component/prefix";

export const PhoneNumberInput = ({ countryCode, onChange }) => {
  return (
    <InputNumber
      style={{ width: "100%" }}
      prefix={<Prefix text={countryCode} />}
      type="number"
      controls={false}
      onChange={onChange}
    />
  );
};
