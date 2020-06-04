import React from "react";
import "./style.css";
export const Star = ({ selected = false, onClick = (f) => f }) => {
  return (
    <div
      className={selected ? "star selected" : "star"}
      onClick={onClick}
    ></div>
  );
};
