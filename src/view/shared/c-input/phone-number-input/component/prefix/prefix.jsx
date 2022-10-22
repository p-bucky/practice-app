import { Typography } from "antd";
import { DEAFULT_COUNTRY_CODE } from "./prefix.constant";
const { Text } = Typography;

export const Prefix = ({ text = DEAFULT_COUNTRY_CODE }) => {
  return <Text>{text}</Text>;
};
