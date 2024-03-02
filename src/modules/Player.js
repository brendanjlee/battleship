/* eslint-disable linebreak-style */
import Gameboard from './Gameboard';

const Player = () => {
  const board = Gameboard();

  function place(r, c, isVertical, shipName) {
    return board.placeShip(r, c, isVertical, shipName);
  }

  function attack(r, c, opBoard) {
    return opBoard.receiveAttack(r, c);
  }

  function randomAttack(opBoard) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    while (!attack(row, col, opBoard)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    }
  }

  function initPlayer() {
    board.initBoard();
  }

  function initComputer() {
    initPlayer();
    board.randomPlaceShips();
  }

  return {
    initPlayer,
    initComputer,
    board,
    attack,
    randomAttack,
    place,
  };
};

export default Player;
