import React from "react";

const Board = ({
  symbol,
  boxHilighter,
  setTurnAndSymbol = f => f,
  isGameOver = f => f
}) => (
  <button
    onClick={() => (isGameOver(), setTurnAndSymbol())}
    className={boxHilighter === 1 ? "square winner-hilighter" : "square"}
  >
    {symbol}
  </button>
);

export default Board;
