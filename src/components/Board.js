/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const Board = (() => {
  function generateGrid(board) {
    for (let i = 0; i < 100; i++) {
      const tile = document.createElement('div');

      tile.classList.add('grid-cell');
      board.appendChild(tile);
    }
  }

  function generateBoard(secondaryClass) {
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard', secondaryClass);
    generateGrid(gameboard);
    return gameboard;
  }

  // render left and right boards
  function renderBoards() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('boardContainer');

    // generate left and right board
    const gameBoardLeft = generateBoard('gameboardLeft');
    const gameBoardRight = generateBoard('gameboardRight');

    boardContainer.appendChild(gameBoardLeft);
    boardContainer.appendChild(gameBoardRight);
    return boardContainer;
  }

  return {
    renderBoards,
  };
})();

export default Board;
