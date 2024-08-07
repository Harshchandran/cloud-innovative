import React, { useEffect, useState } from "react";
import { MovieList } from "../Components/MovieList";
import { SideBar } from "../Components/SideBar";

export const HomePage = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("db.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const dt = await response.json();

      setData(dt.movies);
    } catch (error) {
      console.error(
        "Error Occurred during fetching the data from json file",
        error
      );
    }
  }

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <>
      <div className="home-container">
        <SideBar data={data} />
        <MovieList data={data} />
        <div></div>
      </div>
    </>
  );
};
