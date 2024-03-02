/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
const Board = (() => {
  // store cellelem in an array
  let cellElemsLeft = [];
  let cellElemtsRight = [];

  function generateGridElem(board) {
    const boardIdentifier = board.className.split(' ')[1];
    let currBoard = 'left';
    if (boardIdentifier === 'gameboardRight') {
      currBoard = 'right';
    }
    const cellElems = [];
    for (let i = 0; i < 10; i++) {
      cellElems[i] = [];
      for (let j = 0; j < 10; j++) {
        const cellElem = document.createElement('div');
        cellElem.classList.add('grid-cell');
        cellElem.classList.add(currBoard);
        // add data attribute
        cellElem.dataset.row = i;
        cellElem.dataset.col = j;
        board.appendChild(cellElem);

        cellElems[i].push(cellElem);
      }
    }

    if (currBoard === 'left') {
      cellElemsLeft = cellElems;
    } else {
      cellElemtsRight = cellElems;
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

  function renderBoard(gameBoard, isLeft) {
    const cellElems = isLeft === true ? cellElemsLeft : cellElemtsRight;
    // takes in a board object
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        // get the current cell from the board
        const currCell = gameBoard.board[r][c];
        // get the corresponding cell element
        const currCellElem = cellElems[r][c];

        if (currCell.hasShip && isLeft) {
          currCellElem.style['background-color'] = '#525252';
        }

        if (currCell.isShot) {
          currCellElem.style['background-color'] = '#8affce';
        }

        if (currCell.hasShip && currCell.isShot) {
          currCellElem.style['background-color'] = '#f59f9f';
        }
      }
    }
  }

  return {
    createBoard, renderBoard,
  };
})();

export default Board;
