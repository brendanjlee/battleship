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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-plusplus */\r\nconst Board = (() => {\r\n  function generateGrid(board) {\r\n    for (let i = 0; i < 100; i++) {\r\n      const tile = document.createElement('div');\r\n\r\n      tile.classList.add('grid-cell');\r\n      board.appendChild(tile);\r\n    }\r\n  }\r\n\r\n  function generateBoard(secondaryClass) {\r\n    const gameboard = document.createElement('div');\r\n    gameboard.classList.add('gameboard', secondaryClass);\r\n    generateGrid(gameboard);\r\n    return gameboard;\r\n  }\r\n\r\n  // render left and right boards\r\n  function renderBoards() {\r\n    const boardContainer = document.createElement('div');\r\n    boardContainer.classList.add('boardContainer');\r\n\r\n    // generate left and right board\r\n    const gameBoardLeft = generateBoard('gameboardLeft');\r\n    const gameBoardRight = generateBoard('gameboardRight');\r\n\r\n    boardContainer.appendChild(gameBoardLeft);\r\n    boardContainer.appendChild(gameBoardRight);\r\n    return boardContainer;\r\n  }\r\n\r\n  return {\r\n    renderBoards,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n\n\n//# sourceURL=webpack://battleship/./src/components/Board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ \"./src/components/Board.js\");\n/* eslint-disable no-unused-vars */\r\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-continue */\r\n\r\n\r\n\r\n\r\n// const content = document.querySelector('.content');\r\n\r\n// const boardContainer = Board.renderBoards();\r\n\r\n// console.log('helloworld');\r\n\r\n// content.appendChild(boardContainer);\r\n\r\n// !! game loop test\r\nconst gameboard = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\ngameboard.initBoard();\r\nconsole.log(gameboard.printBoard());\r\ngameboard.randomPlaceShips();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n/* eslint-disable no-unneeded-ternary */\r\n/* eslint-disable linebreak-style */\r\n\r\n\r\n/* eslint-disable no-plusplus */\r\nconst Gameboard = () => {\r\n  const board = [];\r\n  const boardMap = new Map(); // key = (r,c): shipid; maps (r,c) to shipId\r\n  const shipMap = new Map();\r\n  let numSunk = 0;\r\n\r\n  function createBoard() {\r\n    for (let i = 0; i < 10; i++) {\r\n      board[i] = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        const cell = { hasShip: false, isShot: false };\r\n        board[i].push(cell);\r\n      }\r\n    }\r\n  }\r\n\r\n  function createShips() {\r\n    // create carrier\r\n    const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\r\n    const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\r\n    const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\r\n    const patrolBoat = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\r\n\r\n    shipMap.set('carrier', carrier);\r\n    shipMap.set('battleship', battleship);\r\n    shipMap.set('destroyer', destroyer);\r\n    shipMap.set('submarine', submarine);\r\n    shipMap.set('patrolBoat', patrolBoat);\r\n  }\r\n\r\n  function checkBounds(r, c, length, isVertical) {\r\n    if (isVertical) {\r\n      return (r + length <= board.length);\r\n    }\r\n    return (c + length <= board.length);\r\n  }\r\n\r\n  function checkCollision(r, c, length, isVertical) {\r\n    if (isVertical) {\r\n      for (let curR = r; curR < length + r; curR++) {\r\n        if (board[curR][c].hasShip) return false;\r\n      }\r\n      return true;\r\n    }\r\n\r\n    for (let curC = c; curC < length + c; curC++) {\r\n      if (board[r][curC].hasShip) return false;\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  function placeShip(r, c, length, isVertical, shipName) {\r\n    if (!checkBounds(r, c, length, isVertical)) return false;\r\n    if (!checkCollision(r, c, length, isVertical)) return false;\r\n\r\n    if (isVertical) {\r\n      for (let curR = r; curR < length + r; curR++) {\r\n        board[curR][c].hasShip = true;\r\n        const keyString = `${curR},${c}`;\r\n        boardMap.set(keyString, shipName);\r\n      }\r\n    } else {\r\n      for (let curC = c; curC < length + c; curC++) {\r\n        board[r][curC].hasShip = true;\r\n        const keyString = `${r},${curC}`;\r\n        boardMap.set(keyString, shipName);\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  function randomPlaceShips() {\r\n    let successfulPlacements = 0;\r\n    const ships = [\r\n      ['carrier', 5],\r\n      ['battleship', 4],\r\n      ['destroyer', 3],\r\n      ['submarine', 3],\r\n      ['patrolBoat', 2],\r\n    ];\r\n\r\n    while (successfulPlacements < 5) {\r\n      const row = Math.floor(Math.random() * 10);\r\n      const col = Math.floor(Math.random() * 10);\r\n      const isVertical = Math.floor(Math.random() * 2) === 1 ? true : false;\r\n      const shipName = ships[successfulPlacements][0];\r\n      const shipLength = ships[successfulPlacements][1];\r\n\r\n      if (placeShip(row, col, shipLength, isVertical, shipName)) {\r\n        console.log(`placed ${shipName} at (${row}, ${col}) vert: ${isVertical}`);\r\n        console.log(printBoard());\r\n        successfulPlacements++;\r\n      }\r\n    }\r\n  }\r\n\r\n  function receiveAttack(r, c) {\r\n    if (board[r][c].isShot) return false;\r\n    board[r][c].isShot = true;\r\n    const keyString = `${r},${c}`;\r\n    if (boardMap.has(keyString)) {\r\n      shipMap.get(boardMap.get(keyString)).hit();\r\n      if (shipMap.get(boardMap.get(keyString)).isSunk()) numSunk++;\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  // check if board has remaining ships\r\n  // returns true if game is over\r\n  function checkGameOver() {\r\n    return numSunk >= 5;\r\n  }\r\n\r\n  function printBoard() {\r\n    let boardString = '\\n';\r\n    for (let r = 0; r < 10; r++) {\r\n      let row = '';\r\n      for (let c = 0; c < 10; c++) {\r\n        if (board[r][c].isShot && board[r][c].hasShip) {\r\n          row += '[!]';\r\n        } else if (board[r][c].isShot) {\r\n          row += '[X]';\r\n        } else if (board[r][c].hasShip) {\r\n          row += '[O]';\r\n        } else {\r\n          row += '[ ]';\r\n        }\r\n        if (c < 9) row += ' ';\r\n      }\r\n      boardString += (`${row}\\n`);\r\n    }\r\n    return boardString;\r\n  }\r\n\r\n  function initBoard() {\r\n    createBoard();\r\n    createShips();\r\n  }\r\n\r\n  return {\r\n    initBoard,\r\n    placeShip,\r\n    receiveAttack,\r\n    checkGameOver,\r\n    board,\r\n    checkBounds,\r\n    checkCollision,\r\n    printBoard,\r\n    numSunk,\r\n    shipMap,\r\n    randomPlaceShips,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/modules/Gameboard.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nconst Player = (() => {\r\n  const board = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const shipIDs = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrolBoat'];\r\n\r\n  function initPlayer() {\r\n    board.initBoard();\r\n  }\r\n\r\n  return {\r\n    initPlayer,\r\n    board,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/Player.js?");

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