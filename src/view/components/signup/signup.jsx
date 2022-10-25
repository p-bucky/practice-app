import React from "react";
import { Pin } from "./components/pin";
import { Otp } from "./components/otp";
import { SignupForm } from "./components/form";
import { UserInformation } from "./components/user-information";

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
    {
      component: <UserInformation />,
    },
  ];

  return <div>{SignupStep[3].component}</div>;
};
