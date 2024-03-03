import Player from '../modules/Player';

const GameController = () => {
  const player = Player(); // 0
  const computer = Player(); // 1

  let gameState = 0; // 0 - ongoing, 1 - over

  function initGameRandom() {
    player.initComputer();
    computer.initComputer();
  }

  function playRound(row, col) {
    if (gameState === 1) return true;
    console.log(`(${row}, ${col})`);

    // play player turn
    if (!player.attack(row, col, computer.board)) {
      return false; // return for an invalid move
    }
    if (computer.board.checkGameOver()) {
      // check computer board status to check if player won
      gameState = 1;
      console.log('Player wins!');
      return true;
    }
    // play computer turn
    computer.randomAttack(player.board);
    if (player.board.checkGameOver()) {
      // check player board status to check if computer won
      gameState = 1;
      console.log('Computer wins!');
      return true;
    }
    return false;
  }

  function checkGameState() {
    return gameState === 1;
  }

  return {
    initGameRandom, playRound, checkGameState, player, computer,
  };
};

export default GameController;
