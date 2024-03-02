/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Board.js":
/*!*********************************!*\
  !*** ./src/components/Board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-plusplus */\r\nconst Board = (() => {\r\n  // store cellelem in an array\r\n  let cellElemsLeft = [];\r\n  let cellElemtsRight = [];\r\n\r\n  function generateGridElem(board) {\r\n    const boardIdentifier = board.className.split(' ')[1];\r\n    let currBoard = 'left';\r\n    if (boardIdentifier === 'gameboardRight') {\r\n      currBoard = 'right';\r\n    }\r\n    const cellElems = [];\r\n    for (let i = 0; i < 10; i++) {\r\n      cellElems[i] = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        const cellElem = document.createElement('div');\r\n        cellElem.classList.add('grid-cell');\r\n        cellElem.classList.add(currBoard);\r\n        // add data attribute\r\n        cellElem.dataset.row = i;\r\n        cellElem.dataset.col = j;\r\n        board.appendChild(cellElem);\r\n\r\n        cellElems[i].push(cellElem);\r\n      }\r\n    }\r\n\r\n    if (currBoard === 'left') {\r\n      cellElemsLeft = cellElems;\r\n    } else {\r\n      cellElemtsRight = cellElems;\r\n    }\r\n  }\r\n\r\n  function generateBoardElem(secondaryClass) {\r\n    const gameboard = document.createElement('div');\r\n    gameboard.classList.add('gameboard', secondaryClass);\r\n    generateGridElem(gameboard);\r\n    return gameboard;\r\n  }\r\n\r\n  // render left and right boards\r\n  function createBoard() {\r\n    const boardContainer = document.createElement('div');\r\n    boardContainer.classList.add('boardContainer');\r\n\r\n    // generate left and right board\r\n    const gameBoardLeft = generateBoardElem('gameboardLeft');\r\n    const gameBoardRight = generateBoardElem('gameboardRight');\r\n\r\n    boardContainer.appendChild(gameBoardLeft);\r\n    boardContainer.appendChild(gameBoardRight);\r\n    return boardContainer;\r\n  }\r\n\r\n  function renderBoard(gameBoard, isLeft) {\r\n    const cellElems = isLeft === true ? cellElemsLeft : cellElemtsRight;\r\n    // takes in a board object\r\n    for (let r = 0; r < 10; r++) {\r\n      for (let c = 0; c < 10; c++) {\r\n        // get the current cell from the board\r\n        const currCell = gameBoard.board[r][c];\r\n        // get the corresponding cell element\r\n        const currCellElem = cellElems[r][c];\r\n\r\n        if (currCell.hasShip && isLeft) {\r\n          currCellElem.style['background-color'] = '#525252';\r\n        }\r\n\r\n        if (currCell.isShot) {\r\n          currCellElem.style['background-color'] = '#8affce';\r\n        }\r\n\r\n        if (currCell.hasShip && currCell.isShot) {\r\n          currCellElem.style['background-color'] = '#f59f9f';\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return {\r\n    createBoard, renderBoard,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/Board.js?");

/***/ }),

/***/ "./src/controllers/GameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/GameController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Player */ \"./src/modules/Player.js\");\n\r\n\r\nconst GameController = () => {\r\n  const player = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // 0\r\n  const computer = (0,_modules_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // 1\r\n\r\n  let activePlayer = 0;\r\n  let gameState = 0; // 0 - ongoing, 1 - over\r\n\r\n  function switchPlayer() {\r\n    activePlayer = activePlayer === 0 ? 1 : 0;\r\n  }\r\n\r\n  function initGameRandom() {\r\n    player.initComputer();\r\n    computer.initComputer();\r\n  }\r\n\r\n  function playRound(row, col) {\r\n    console.log(`(${row}, ${col}) for ${activePlayer}`);\r\n    if (gameState === 1) return true;\r\n\r\n    // auto attack if active player is computer\r\n    if (activePlayer === 1) {\r\n      computer.randomAttack(player.board);\r\n      if (computer.board.checkGameOver()) {\r\n        gameState = 1;\r\n        return true;\r\n      }\r\n    } else {\r\n      // eslint-disable-next-line no-lonely-if\r\n      if (!player.attack(row, col, computer.board)) return false;\r\n      if (player.board.checkGameOver()) {\r\n        gameState = 1;\r\n        return true;\r\n      }\r\n    }\r\n\r\n    console.log('playerswitch');\r\n    switchPlayer();\r\n    return false;\r\n  }\r\n\r\n  return {\r\n    initGameRandom, playRound, gameState, player, computer, activePlayer,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\r\n\n\n//# sourceURL=webpack://battleship/./src/controllers/GameController.js?");

/***/ }),

/***/ "./src/controllers/ScreenController.js":
/*!*********************************************!*\
  !*** ./src/controllers/ScreenController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Board */ \"./src/components/Board.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/controllers/GameController.js\");\n\r\n\r\n\r\nconst ScreenController = () => {\r\n  const gameController = (0,_GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const contentDiv = document.querySelector('.content');\r\n\r\n  function updateScreen() {\r\n    _components_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(gameController.player.board, true);\r\n    _components_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderBoard(gameController.computer.board, false);\r\n  }\r\n\r\n  function clickHandlerBoard(e) {\r\n    if (gameController.gameState === 1) {\r\n      console.log('game over');\r\n      return;\r\n    }\r\n\r\n    const { row } = e.target.dataset;\r\n    const { col } = e.target.dataset;\r\n\r\n    gameController.playRound(Number(row), Number(col));\r\n    gameController.playRound(Number(row), Number(col));\r\n    updateScreen();\r\n  }\r\n\r\n  function bind() {\r\n    const cells = document.querySelectorAll('.grid-cell.right');\r\n    cells.forEach((cell) => {\r\n      cell.addEventListener('click', clickHandlerBoard);\r\n    });\r\n  }\r\n\r\n  contentDiv.appendChild(_components_Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBoard());\r\n  gameController.initGameRandom();\r\n  bind();\r\n  updateScreen();\r\n  console.log(`start for player ${gameController.activePlayer}`);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);\r\n\n\n//# sourceURL=webpack://battleship/./src/controllers/ScreenController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ \"./src/components/Board.js\");\n/* harmony import */ var _controllers_GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/GameController */ \"./src/controllers/GameController.js\");\n/* harmony import */ var _controllers_ScreenController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/ScreenController */ \"./src/controllers/ScreenController.js\");\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-continue */\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_controllers_ScreenController__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n// const content = document.querySelector('.content');\r\n\r\n// const boardContainer = Board.createBoard();\r\n\r\n// console.log('helloworld');\r\n\r\n// content.appendChild(boardContainer);\r\n\r\n// const gameController = GameController();\r\n// gameController.initGameRandom();\r\n\r\n// !! game loop test\r\n// const gameboard = Gameboard();\r\n// gameboard.initBoard();\r\n// console.log(gameboard.printBoard());\r\n// gameboard.randomPlaceShips();\r\n// console.log(gameboard.printBoard());\r\n// const ships = [\r\n//   { ship: 'carrier', length: 5 },\r\n//   { ship: 'battleship', length: 4 },\r\n//   { ship: 'destroyer', length: 3 },\r\n//   { ship: 'submarine', length: 3 },\r\n//   { ship: 'patrolBoat', length: 2 },\r\n// ];\r\n\r\n// const p1 = Player();\r\n// p1.initComputer();\r\n\r\n// const p2 = Player();\r\n// p2.initComputer();\r\n\r\n// Board.renderBoard(p1.board, true);\r\n// Board.renderBoard(p2.board, false);\r\n\r\n// console.log('======\\nGame Start\\n=====');\r\n// console.log('p1');\r\n// console.log(p1.board.printBoard());\r\n// console.log('p2');\r\n// console.log(p2.board.printBoard());\r\n\r\n// while (true) {\r\n//   if (p1.board.checkGameOver()) {\r\n//     console.log('p2 wins');\r\n//     console.log(`p1\\n${p1.board.printBoard()}`);\r\n//     console.log(`p2\\n${p2.board.printBoard()}`);\r\n//     break;\r\n//   }\r\n//   if (p2.board.checkGameOver()) {\r\n//     console.log('p1 wins');\r\n//     console.log(`p1\\n${p1.board.printBoard()}`);\r\n//     console.log(`p2\\n${p2.board.printBoard()}`);\r\n//     break;\r\n//   }\r\n\r\n//   p1.randomAttack(p2.board);\r\n//   p2.randomAttack(p1.board);\r\n// }\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n/* eslint-disable no-unneeded-ternary */\r\n/* eslint-disable linebreak-style */\r\n\r\n\r\n/* eslint-disable no-plusplus */\r\nconst Gameboard = () => {\r\n  const board = [];\r\n  const boardMap = new Map(); // key = (r,c): shipid; maps (r,c) to shipId\r\n  const shipMap = new Map();\r\n  let numSunk = 0;\r\n\r\n  function createBoard() {\r\n    for (let i = 0; i < 10; i++) {\r\n      board[i] = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        const cell = {\r\n          hasShip: false, isShot: false, row: i, col: j,\r\n        };\r\n        board[i].push(cell);\r\n      }\r\n    }\r\n  }\r\n\r\n  function createShips() {\r\n    // create carrier\r\n    const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\r\n    const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\r\n    const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    const patrolBoat = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\r\n\r\n    shipMap.set('carrier', carrier);\r\n    shipMap.set('battleship', battleship);\r\n    shipMap.set('destroyer', destroyer);\r\n    shipMap.set('submarine', submarine);\r\n    shipMap.set('patrolBoat', patrolBoat);\r\n  }\r\n\r\n  function checkBounds(r, c, length, isVertical) {\r\n    if (isVertical) {\r\n      return (r + length <= board.length);\r\n    }\r\n    return (c + length <= board.length);\r\n  }\r\n\r\n  function checkCollision(r, c, length, isVertical) {\r\n    if (isVertical) {\r\n      for (let curR = r; curR < length + r; curR++) {\r\n        if (board[curR][c].hasShip) return false;\r\n      }\r\n      return true;\r\n    }\r\n\r\n    for (let curC = c; curC < length + c; curC++) {\r\n      if (board[r][curC].hasShip) return false;\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  function placeShip(r, c, length, isVertical, shipName) {\r\n    if (!checkBounds(r, c, length, isVertical)) return false;\r\n    if (!checkCollision(r, c, length, isVertical)) return false;\r\n\r\n    if (isVertical) {\r\n      for (let curR = r; curR < length + r; curR++) {\r\n        board[curR][c].hasShip = true;\r\n        const keyString = `${curR},${c}`;\r\n        boardMap.set(keyString, shipName);\r\n      }\r\n    } else {\r\n      for (let curC = c; curC < length + c; curC++) {\r\n        board[r][curC].hasShip = true;\r\n        const keyString = `${r},${curC}`;\r\n        boardMap.set(keyString, shipName);\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  function randomPlaceShips() {\r\n    let successfulPlacements = 0;\r\n    const ships = [\r\n      ['carrier', 5],\r\n      ['battleship', 4],\r\n      ['destroyer', 3],\r\n      ['submarine', 3],\r\n      ['patrolBoat', 2],\r\n    ];\r\n\r\n    while (successfulPlacements < 5) {\r\n      const row = Math.floor(Math.random() * 10);\r\n      const col = Math.floor(Math.random() * 10);\r\n      const isVertical = Math.floor(Math.random() * 2) === 1 ? true : false;\r\n      const shipName = ships[successfulPlacements][0];\r\n      const shipLength = ships[successfulPlacements][1];\r\n\r\n      if (placeShip(row, col, shipLength, isVertical, shipName)) {\r\n        // console.log(`placed ${shipName} at (${row}, ${col}) vert: ${isVertical}`);\r\n        // console.log(printBoard());\r\n        successfulPlacements++;\r\n      }\r\n    }\r\n  }\r\n\r\n  function receiveAttack(r, c) {\r\n    if (board[r][c].isShot) return false;\r\n    board[r][c].isShot = true;\r\n    const keyString = `${r},${c}`;\r\n    if (boardMap.has(keyString)) {\r\n      shipMap.get(boardMap.get(keyString)).hit();\r\n      if (shipMap.get(boardMap.get(keyString)).isSunk()) numSunk++;\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  // check if board has remaining ships\r\n  // returns true if game is over\r\n  function checkGameOver() {\r\n    return numSunk >= 5;\r\n  }\r\n\r\n  function printBoard() {\r\n    let boardString = '\\n';\r\n    for (let r = 0; r < 10; r++) {\r\n      let row = '';\r\n      for (let c = 0; c < 10; c++) {\r\n        if (board[r][c].isShot && board[r][c].hasShip) {\r\n          row += '[!]';\r\n        } else if (board[r][c].isShot) {\r\n          row += '[X]';\r\n        } else if (board[r][c].hasShip) {\r\n          row += '[O]';\r\n        } else {\r\n          row += '[ ]';\r\n        }\r\n        if (c < 9) row += ' ';\r\n      }\r\n      boardString += (`${row}\\n`);\r\n    }\r\n    return boardString;\r\n  }\r\n\r\n  function initBoard() {\r\n    createBoard();\r\n    createShips();\r\n  }\r\n\r\n  return {\r\n    initBoard,\r\n    placeShip,\r\n    receiveAttack,\r\n    checkGameOver,\r\n    board,\r\n    checkBounds,\r\n    checkCollision,\r\n    printBoard,\r\n    numSunk,\r\n    shipMap,\r\n    randomPlaceShips,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/Gameboard.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nconst Player = () => {\r\n  const board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  function place(r, c, isVertical, shipName) {\r\n    return board.placeShip(r, c, isVertical, shipName);\r\n  }\r\n\r\n  function attack(r, c, opBoard) {\r\n    return opBoard.receiveAttack(r, c);\r\n  }\r\n\r\n  function randomAttack(opBoard) {\r\n    let row = Math.floor(Math.random() * 10);\r\n    let col = Math.floor(Math.random() * 10);\r\n\r\n    while (!attack(row, col, opBoard)) {\r\n      row = Math.floor(Math.random() * 10);\r\n      col = Math.floor(Math.random() * 10);\r\n    }\r\n  }\r\n\r\n  function initPlayer() {\r\n    board.initBoard();\r\n  }\r\n\r\n  function initComputer() {\r\n    initPlayer();\r\n    board.randomPlaceShips();\r\n  }\r\n\r\n  return {\r\n    initPlayer,\r\n    initComputer,\r\n    board,\r\n    attack,\r\n    randomAttack,\r\n    place,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\r\n// ship may have to carry coordinates\r\nconst Ship = (length) => {\r\n  let health = 0;\r\n\r\n  function hit() {\r\n    health++;\r\n  }\r\n\r\n  function isSunk() {\r\n    return health >= length;\r\n  }\r\n\r\n  return {\r\n    hit, isSunk, health,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;