import Ship from './Ship';

/* eslint-disable no-plusplus */
const Gameboard = () => {
  const board = [];
  const boardMap = new Map(); // key = (r,c): shipid; maps (r,c) to shipId
  const shipMap = new Map();
  let numSunk = 0;

  function createBoard() {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        const cell = { hasShip: false, isShot: false };
        board[i].push(cell);
      }
    }
  }

  function createShips() {
    // create carrier
    const carrier = Ship(5);
    const battleship = Ship(4);
    const destroyer = Ship(3);
    const submarine = Ship(3);
    const patrolBoat = Ship(2);

    shipMap.set('carrier', carrier);
    shipMap.set('battleship', battleship);
    shipMap.set('destroyer', destroyer);
    shipMap.set('submarine', submarine);
    shipMap.set('patrolBoat', patrolBoat);
  }

  function checkBounds(r, c, length, isVertical) {
    if (isVertical) {
      return (r + length < board.length);
    }
    return (c + length < board.length);
  }

  function checkCollision(r, c, length, isVertical) {
    if (isVertical) {
      for (let curR = r; curR < length; curR++) {
        if (board[curR][c].hasShip) return false;
      }
    }

    for (let curC = c; curC < length; curC++) {
      if (board[r][curC].hasShip) return false;
    }

    return true;
  }

  function placeShip(r, c, length, isVertical, shipName) {
    if (!checkBounds(r, c, length, isVertical)) return false;
    if (!checkCollision(r, c, length, isVertical)) return false;

    if (isVertical) {
      for (let curR = r; curR < length; curR++) {
        board[curR][c].hasShip = true;
        const keyString = `${curR},${c}`;
        boardMap.set(keyString, shipName);
      }
    } else {
      for (let curC = c; curC < length; curC++) {
        board[r][curC].hasShip = true;
        const keyString = `${r},${curC}`;
        boardMap.set(keyString, shipName);
      }
    }

    return true;
  }

  function receiveAttack(r, c) {
    if (board[r][c].isShot) return false;
    board[r][c].isShot = true;
    const keyString = `${r},${c}`;
    if (boardMap.has(keyString)) {
      shipMap.get(boardMap.get(keyString)).hit();
      if (shipMap.get(boardMap.get(keyString)).isSunk()) numSunk++;
    }

    return true;
  }

  // check if board has remaining ships
  // returns true if game is over
  function checkGameOver() {
    return numSunk >= 5;
  }

  function init() {
    createBoard();
    createShips();
  }

  return {
    init,
    placeShip,
    receiveAttack,
    checkGameOver,
    board,
    checkBounds,
    checkCollision,
  };
};

export default Gameboard;
