import { Button, Form, Input, Row } from "antd";
import React from "react";
export const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", backgroundColor: "#F5EDDC" }}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#704BB2",
          width: "500px",
          height: "400px",
        }}
      >
        <Form.Item
          label={
            <label style={{ color: "#fff", fontSize: "17px" }}>Username</label>
          }
          name="username"
        >
          <Input style={{ height: "40px", borderRadius: "10px" }} />
        </Form.Item>

        <Form.Item
          label={
            <label style={{ color: "#fff", fontSize: "17px" }}>Password</label>
          }
          name="password"
        >
          <Input.Password style={{ height: "40px", borderRadius: "10px" }} />
        </Form.Item>
        <Row align="middle" justify="center" style={{ marginTop: "50px" }}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100px", height: "40px" }}
            >
              Login
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Row>
  );
};
