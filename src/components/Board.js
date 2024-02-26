/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const Board = (() => {
  function generateGridElem(board) {
    for (let i = 0; i < 100; i++) {
      const tile = document.createElement('div');

      tile.classList.add('grid-cell');
      board.appendChild(tile);
    }
  }

  function generateBoardElem(secondaryClass) {
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard', secondaryClass);
    generateGridElem(gameboard);
    return gameboard;
  }

  // render left and right boards
  function createBoard() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');

    // generate left and right board
    const gameBoardLeft = generateBoardElem('gameboardLeft');
    const gameBoardRight = generateBoardElem('gameboardRight');

    boardContainer.appendChild(gameBoardLeft);
    boardContainer.appendChild(gameBoardRight);
    return boardContainer;
  }

  return {
    createBoard,
  };
})();

export default Board;
