export const SET_TURN = "SET_TURN";
export const GAME_OVER = "GAME_OVER";
export const RESET_GAME = "RESET_GAME";

export const addSymbolAndTurn = (index, gameStatus) => ({
  type: SET_TURN,
  payload: {
    index,
    gameStatus
  }
});

export const setGameOver = status => ({
  type: GAME_OVER,
  payload: {
    status
  }
});

export const resetGame = () => ({
  type: RESET_GAME
});
