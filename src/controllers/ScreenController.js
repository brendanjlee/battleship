import Board from '../components/Board';
import GameController from './GameController';

const ScreenController = () => {
  const gameController = GameController();
  const contentDiv = document.querySelector('.content');

  function updateScreen() {
    Board.renderBoard(gameController.player.board, true);
    Board.renderBoard(gameController.computer.board, false);
  }

  function clickHandlerBoard(e) {
    if (gameController.gameState === 1) {
      console.log('game over');
      return;
    }

    const { row } = e.target.dataset;
    const { col } = e.target.dataset;

    gameController.playRound(Number(row), Number(col));
    gameController.playRound(Number(row), Number(col));
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
  console.log(`start for player ${gameController.activePlayer}`);
};

export default ScreenController;
