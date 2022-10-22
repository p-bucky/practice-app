import React from "react";
import { Button } from "antd";

export const CButton = ({ text, type, onClick, ...props }) => {
  return (
    <Button type={type} onClick={onClick} {...props}>
      {text}
    </Button>
  );
};
