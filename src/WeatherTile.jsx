/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const WeatherTile = ({ disc, data, unit }) => {
  return (
    <article
      style={{
        height: "6rem",
        width: "12rem",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 1.5rem",
      }}
    >
      <h4 style={{ margin: "0", fontSize: "1.2rem", paddingBottom: "0.5rem" }}>
        {disc}
      </h4>
      <h5 style={{ margin: "0" }}>
        {data} {disc === "Temparature" ? <span>&deg;C</span> : unit}
      </h5>
    </article>
  );
};

export default WeatherTile;
