import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "../view/screens/auth";
import { Home } from "../view/screens/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/auth"} element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
