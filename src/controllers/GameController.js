import Player from '../modules/Player';

const GameController = () => {
  const player = Player(); // 0
  const computer = Player(); // 1

  let activePlayer = 0;
  let gameState = 0; // 0 - ongoing, 1 - over

  function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }

  function initGameRandom() {
    player.initComputer();
    computer.initComputer();
  }

  function playRound(row, col) {
    if (gameState === 1) return true;
    console.log(`(${row}, ${col}) for ${activePlayer}`);

    // auto attack if active player is computer
    if (activePlayer === 1) {
      computer.randomAttack(player.board);
      if (computer.board.checkGameOver()) {
        gameState = 1;
        return true;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!player.attack(row, col, computer.board)) return false;
      if (player.board.checkGameOver()) {
        gameState = 1;
        return true;
      }
    }

    console.log('playerswitch');
    switchPlayer();
    return false;
  }

  return {
    initGameRandom, playRound, gameState, player, computer, activePlayer,
  };
};

export default GameController;
