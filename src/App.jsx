import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <h2>Movie Library</h2>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <MainRoutes />
    </>
  );
}

export default App;
