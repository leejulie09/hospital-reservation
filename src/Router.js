import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./Pages/Schedule/Schedule";
import Reservation from "./Pages/Reservation/Reservation";
import Confirmation from "./Pages/Confirmation/Confirmation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
