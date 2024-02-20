/* eslint-disable no-plusplus */
import Gameboard from '../modules/Gameboard';

describe('board functions', () => {
  let board;
  beforeEach(() => {
    board = Gameboard();
    board.init();
  });
  test('Test checkBounds in bounds horizontal', () => {
    expect(board.checkBounds(0, 0, 5, true)).toBe(true);
  });
  test('Test checkBounds in bounds vertical', () => {
    expect(board.checkBounds(0, 0, 5, false)).toBe(true);
  });
  test('Test checkBounds out of bounds horizontal', () => {
    expect(board.checkBounds(9, 9, 5, true)).toBe(false);
  });
  test('Test checkBounds out of bounds vertical', () => {
    expect(board.checkBounds(92, 9, 5, false)).toBe(false);
  });
  test('Test collision - no collision', () => {
    expect(board.checkCollision(0, 0, 5, true)).toBe(true);
  });
  test('Test collision - collision veritcal', () => {
    for (let i = 0; i < 5; i++) {
      board.board[i][0] = { hasShip: true, isShot: false };
    }
    expect(board.checkCollision(0, 0, 5, true)).toBe(false);
  });
  test('Test collision - collision horizontal', () => {
    for (let i = 0; i < 5; i++) {
      board.board[0][i] = { hasShip: true, isShot: false };
    }
    expect(board.checkCollision(0, 0, 5, false)).toBe(false);
  });
  test('Test place ship - ok placement', () => {
    board.placeShip(0, 0, 5, true, 'carrier');
    expect(board.placeShip(1, 1, 5, true, 'carrier')).toBe(true);
  });
  test('Test place ship - collision', () => {
    board.placeShip(0, 0, 5, true, 'carrier');
    expect(board.placeShip(0, 0, 5, false, 'carrier')).toBe(false);
  });
  test('Test receievAttack - empty slot', () => {
    expect(board.receiveAttack(0, 0)).toBe(true);
  });
  test('Test receievAttack - on ship', () => {
    board.placeShip(0, 0, 5, true, 'carrier');
    expect(board.receiveAttack(0, 0)).toBe(true);
  });
  test('Test receievAttack - same slot', () => {
    board.placeShip(0, 0, 5, true, 'carrier');
    board.receiveAttack(0, 0);
    expect(board.receiveAttack(0, 0)).toBe(false);
  });
  test('Test gameover - not over', () => {
    board.placeShip(0, 0, 2, true, 'patrolBoat');
    board.placeShip(1, 0, 3, true, 'destroyer');
    expect(board.checkGameOver()).toBe(false);
  });
  test('Test gameover - not over', () => {
    board.placeShip(0, 0, 2, true, 'patrolBoat');
    board.placeShip(0, 1, 3, true, 'destroyer');
    board.placeShip(0, 2, 3, true, 'submarine');
    board.placeShip(0, 3, 4, true, 'battleship');
    board.placeShip(0, 4, 5, true, 'carrier');

    board.receiveAttack(0, 0);
    board.receiveAttack(1, 0);

    board.receiveAttack(0, 1);
    board.receiveAttack(1, 1);
    board.receiveAttack(2, 1);

    board.receiveAttack(0, 2);
    board.receiveAttack(1, 2);
    board.receiveAttack(2, 2);

    board.receiveAttack(0, 3);
    board.receiveAttack(1, 3);
    board.receiveAttack(2, 3);
    board.receiveAttack(3, 3);

    board.receiveAttack(0, 4);
    board.receiveAttack(1, 4);
    board.receiveAttack(2, 4);
    board.receiveAttack(3, 4);
    board.receiveAttack(4, 4);

    expect(board.checkGameOver()).toBe(true);
  });
});
