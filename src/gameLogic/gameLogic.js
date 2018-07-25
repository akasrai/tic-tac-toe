let gameOverStatus = false;
export const checkWinner = player => {
  const winingState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  for (let i = 0; i < winingState.length; i++) {
    const [a, b, c] = winingState[i];
    if (
      (player[a] === "X" || player[a] === "O") &&
      (player[a] === player[b] && player[b] === player[c])
    ) {
      gameOverStatus = true;
      return [a, b, c];
    }
    gameOverStatus = false;
  }
};

export const checkTurn = turn => {
  if (turn === "X") {
    return "It's X turn.";
  } else {
    return "It's O turn.";
  }
};

export const checkIfGameIsTie = players => {
  if (players.every(position => position !== "")) {
    gameOverStatus = true;
    return "The game is tie.";
  }
};

export const checkGameOver = () => {
  return gameOverStatus;
};
