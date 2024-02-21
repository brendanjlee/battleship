import Gameboard from './Gameboard';

const Player = () => {
  const board = Gameboard();
  board.init();

  return {
    board,
  };
};

export default Player;
