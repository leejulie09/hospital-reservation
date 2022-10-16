import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoiceMenu from "./Pages/Schedule/ChoiceMenu";
import Reservation from "./Pages/Reservation/Reservation";
import Nav from "./Pages/Nav/Nav";
import ReservationCheck from "./Pages/ReservationCheck/ReservationCheck";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<ChoiceMenu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/check" element={<ReservationCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
