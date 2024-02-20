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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\");\n\n\nconst board = (0,_modules_Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nboard.init();\nboard.placeShip(0, 0, 2, true, 'patrolBoat');\nboard.placeShip(0, 1, 3, true, 'destroyer');\nboard.placeShip(0, 2, 3, true, 'submarine');\nboard.placeShip(0, 3, 4, true, 'battleship');\nboard.placeShip(0, 4, 5, true, 'carrier');\nconsole.log(board.boardMap);\nconsole.log(board.shipMap);\n\nboard.receiveAttack(0, 0);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\");\n\n\n/* eslint-disable no-plusplus */\nconst Gameboard = () => {\n  const board = [];\n  const boardMap = new Map(); // key = (r,c): shipid; maps (r,c) to shipId\n  const shipMap = new Map();\n  let numSunk = 0;\n\n  function createBoard() {\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        const cell = { hasShip: false, isShot: false };\n        board[i].push(cell);\n      }\n    }\n  }\n\n  function createShips() {\n    // create carrier\n    const carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5);\n    const battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4);\n    const destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const submarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n    const patrolBoat = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n\n    shipMap.set('carrier', carrier);\n    shipMap.set('battleship', battleship);\n    shipMap.set('destroyer', destroyer);\n    shipMap.set('submarine', submarine);\n    shipMap.set('patrolBoat', patrolBoat);\n  }\n\n  function checkBounds(r, c, length, isVertical) {\n    if (isVertical) {\n      return (r + length < board.length);\n    }\n    return (c + length < board.length);\n  }\n\n  function checkCollision(r, c, length, isVertical) {\n    if (isVertical) {\n      for (let curR = r; curR < length; curR++) {\n        if (board[curR][c].hasShip) return false;\n      }\n    }\n\n    for (let curC = c; curC < length; curC++) {\n      if (board[r][curC].hasShip) return false;\n    }\n\n    return true;\n  }\n\n  function placeShip(r, c, length, isVertical, shipName) {\n    if (!checkBounds(r, c, length, isVertical)) return false;\n    if (!checkCollision(r, c, length, isVertical)) return false;\n\n    if (isVertical) {\n      for (let curR = r; curR < length; curR++) {\n        board[curR][c].hasShip = true;\n        const keyString = `${curR},${c}`;\n        boardMap.set(keyString, shipName);\n      }\n    } else {\n      for (let curC = c; curC < length; curC++) {\n        board[r][curC].hasShip = true;\n        const keyString = `${r},${curC}`;\n        boardMap.set(keyString, shipName);\n      }\n    }\n\n    return true;\n  }\n\n  function receiveAttack(r, c) {\n    if (board[r][c].isShot) return false;\n    board[r][c].isShot = true;\n    const keyString = `${r},${c}`;\n    if (boardMap.has(keyString)) {\n      shipMap.get(boardMap.get(keyString)).hit();\n      if (shipMap.get(boardMap.get(keyString)).isSunk()) numSunk++;\n    }\n\n    return true;\n  }\n\n  // check if board has remaining ships\n  // returns true if game is over\n  function checkGameOver() {\n    return numSunk >= 5;\n  }\n\n  function init() {\n    createBoard();\n    createShips();\n  }\n\n  return {\n    init,\n    placeShip,\n    receiveAttack,\n    checkGameOver,\n    board,\n    checkBounds,\n    checkCollision,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\n// ship may have to carry coordinates\nconst Ship = (length) => {\n  let health = 0;\n\n  function hit() {\n    health++;\n  }\n\n  function isSunk() {\n    return health >= length;\n  }\n\n  return {\n    hit, isSunk, health,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/modules/Ship.js?");

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