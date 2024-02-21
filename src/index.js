/* eslint-disable no-continue */
import Player from './modules/Player';
import Gameboard from './modules/Gameboard';

const ships = [
  { ship: 'carrier', length: 5 },
  { ship: 'battleship', length: 4 },
  { ship: 'destroyer', length: 3 },
  { ship: 'submarine', length: 3 },
  { ship: 'patrolBoat', length: 2 },
];

function initGame(p1, p2) {
  p1.init();
  p2.init();

  // place computer ships
  p2.placeShip(0, 0, 5, true, 'carrier');
  p2.placeShip(0, 2, 4, false, 'battleship');
  p2.placeShip(3, 3, 3, false, 'destroyer');
  p2.placeShip(5, 5, 3, true, 'submarine');
  p2.placeShip(8, 8, 2, false, 'patrolBoat');
}

const p1 = Gameboard();
const p2 = Gameboard();

initGame(p1, p2);

// place ship
// let i = 0;
// while (i < 5) {
//   console.log(p1.printBoard());
//   const currShip = ships[i];
//   const r = prompt(`What row to place your ${currShip.ship} of length ${currShip.length}?`);
//   const c = prompt(`What column to place your ${currShip.ship} of length ${currShip.length}?`);
//   let isVert = true;

//   if (!window.confirm('is Vertical? enter for yes, esc for no')) {
//     isVert = false;
//   }

//   if (!p1.placeShip(Number(r), Number(c), currShip.length, isVert, currShip.ship)) {
//     alert('invalid placement!');
//     continue;
//   }
//   i += 1;
// }

// console.log(`p1\n${p1.printBoard()}`);
// p1.placeShip(0, 0, 5, true, 'carrier');
// p1.placeShip(0, 2, 4, false, 'battleship');
// p1.placeShip(3, 3, 3, false, 'destroyer');
// p1.placeShip(5, 5, 3, true, 'submarine');
// p1.placeShip(8, 8, 2, false, 'patrolBoat');
// console.log('game start!');
// while (true) {
//   console.log(`p1\n${p1.printBoard()}`);
//   const r = prompt('What row to attack?');
//   const c = prompt('What column to attack?');

//   if (Number(r) === -1) break;

//   if (!p1.receiveAttack(Number(r), Number(c))) {
//     alert('invalid move!');
//     continue;
//   }
//   console.log(`numsunk: ${p1.numSunk}`);
//   console.log('hit!');

//   if (p1.checkGameOver()) {
//     console.log(p1.numSunk);
//     alert('game over!');
//     break;
//   }
// }
