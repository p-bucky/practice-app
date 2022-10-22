import React from "react";
import { Pin } from "./components/pin";
import { Otp } from "./components/otp";
import { SignupForm } from "./components/form";

export const Signup = () => {
  const SignupStep = [
    {
      component: (
        <SignupForm
          handleLogin={(item) => {
            console.log(item);
          }}
        />
      ),
    },
    {
      component: (
        <Otp
          handleOtp={(item) => {
            console.log(item);
          }}
        />
      ),
    },
    {
      component: (
        <Pin
          handlePin={(item) => {
            console.log(item);
          }}
        />
      ),
    },
  ];

  return <div>{SignupStep[2].component}</div>;
};
