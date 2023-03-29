import React from "react";
import "./GameBoard.css";

export const GameBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="gameboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  );
};
