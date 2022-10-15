import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../view/screens/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
