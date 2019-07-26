import React from 'react';
import Board from '../components/board';
import { connect } from 'react-redux';
import {
  addSymbolAndTurn,
  setGameOver,
  resetGame
} from '../actions/gameActions';
import {
  checkWinner,
  checkTurn,
  checkGameOver,
  checkIfGameIsTie
} from '../gameLogic/gameLogic';

import './components.css';

const mapStateToProps = state => {
  let player = checkWinner(state.game.panel);
  let message = null;
  if (player) {
    window.MIXPANEL.track({
      name: 'Game over',
      eventName: 'game over',
      payload: {
        user: 'shrijan sharma',
        change: 'Account Delete',
        reaseon: 'feels insecure'
      }
    })
      .then(data => console.log(data))
      .catch(err => console.error(err));

    player = player.toString();
    message =
      "Congrats!!! Player '" +
      state.game.panel[player.charAt(0)] +
      "' Won the Game.";
  }
  return {
    gamePanel: state.game.panel,
    gameOver: state.game.gameOver,
    gameOverStatus: checkGameOver(),
    message:
      message ||
      checkIfGameIsTie(state.game.panel) ||
      checkTurn(state.game.turn) + state.game.message,
    boxes: player ? player.toString().split(',') : []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(resetGame()),
    gameState: (index, gameStatus) =>
      dispatch(addSymbolAndTurn(index, gameStatus)),
    isGameOver: status => dispatch(setGameOver(status))
  };
};

const Game = ({
  boxes,
  message,
  gameOver,
  gamePanel = [],
  gameOverStatus,
  gameState = f => f,
  resetGame = f => f,
  isGameOver = f => f
}) => (
  <div className="game-board clearfix">
    <div className="title-message">
      <h1>Tic-Tac-Toe</h1>
      <p>{message} </p>
      <button className="reset-button" onClick={() => resetGame()}>
        RESET
      </button>
    </div>
    <div
      className={
        gameOver ? 'game-panel clearfix game-over' : 'game-panel clearfix'
      }
    >
      {gamePanel.map((box, index) => {
        return (
          <Board
            {...box}
            key={index}
            symbol={box}
            isGameOver={() => isGameOver(gameOverStatus)}
            setTurnAndSymbol={() => gameState(index, gameOverStatus)}
            boxHilighter={
              boxes[0] == index || boxes[1] == index || boxes[2] == index
                ? 1
                : 0
            }
          />
        );
      })}
    </div>
  </div>
);

const EnhancedGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

function checkBoxHightlight(boxes, index) {
  let hilightPos = 0;
  boxes.forEach(pos => {
    if (pos == index) hilightPos = 1;
    else hilightPos = 0;
  });
  return hilightPos;
}
export default EnhancedGame;
