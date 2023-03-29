import React from "react";
import "./Box.css";

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "square x" : "square o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
