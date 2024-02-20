import Gameboard from './modules/Gameboard';

const board = Gameboard();
board.init();
board.placeShip(0, 0, 2, true, 'patrolBoat');
board.placeShip(0, 1, 3, true, 'destroyer');
board.placeShip(0, 2, 3, true, 'submarine');
board.placeShip(0, 3, 4, true, 'battleship');
board.placeShip(0, 4, 5, true, 'carrier');
console.log(board.boardMap);
console.log(board.shipMap);

board.receiveAttack(0, 0);
