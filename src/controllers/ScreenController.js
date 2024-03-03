import Board from '../components/Board';
import GameController from './GameController';

const ScreenController = () => {
  const gameController = GameController();
  const contentDiv = document.querySelector('.content');

  function updateScreen() {
    Board.renderBoard(gameController.player.board, true);
    Board.renderBoard(gameController.computer.board, false);
  }

  // create reset game button bound to function
  function resetScreen() {
    // type in winner information
    // add button for reset game
    const resetDiv = document.createElement('div');
    resetDiv.classList.add('resetDiv');

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'New Game';
    resetBtn.classList.add('resetBtn');

    const resetTextElem = document.createElement('h2');
    resetTextElem.innerHTML = 'Game Over!';

    resetBtn.addEventListener('click', () => {
      console.log('reset game');
      window.location.reload();
    });

    contentDiv.appendChild(resetDiv);
    resetDiv.appendChild(resetTextElem);
    resetDiv.appendChild(resetBtn);
  }

  function clickHandlerBoard(e) {
    if (gameController.checkGameState()) {
      console.log('game over');
      return;
    }

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    if (gameController.playRound(Number(row), Number(col))) {
      resetScreen();
    }
    updateScreen();
  }

  function bind() {
    const cells = document.querySelectorAll('.grid-cell.right');
    cells.forEach((cell) => {
      cell.addEventListener('click', clickHandlerBoard);
    });
  }

  contentDiv.appendChild(Board.createBoard());
  gameController.initGameRandom();
  bind();
  updateScreen();
};

export default ScreenController;
