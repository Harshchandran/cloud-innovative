import React from "react";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "./LogIn";
import { MovieDetail } from "./MovieDetail";
import {HomePage} from "./HomePage"


export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Routes>
    </>
  );
};
