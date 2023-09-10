import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";


export const routes = (
  <Routes>
    <Route path="/" element={<Main />} />

  </Routes>
);
