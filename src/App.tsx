import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, SubPage } from "@Page/.";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<SubPage />} />
    </Routes>
  );
};
