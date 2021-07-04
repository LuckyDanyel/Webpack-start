/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/scss/main.scss":
/*!*******************************!*\
  !*** ./blocks/scss/main.scss ***!
  \*******************************/
/***/ (function() {

throw new Error("Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ../node_modules/css-loader/dist/cjs.js):\nError: Can't resolve './fonts/Roboto-Bold.ttf' in 'C:\\Users\\Даннил\\Desktop\\Project\\webpack\\app\\blocks\\scss'\n    at finishWithoutResolve (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:293:18)\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:362:15\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:87:43\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at processResult (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\webpack\\lib\\NormalModule.js:701:19)\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\webpack\\lib\\NormalModule.js:807:5\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\Даннил\\Desktop\\Project\\Webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\Users\\Даннил\\Desktop\\Project\\webpack\\node_modules\\css-loader\\dist\\index.js:155:5)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/scss/main.scss */ "./blocks/scss/main.scss");
/* harmony import */ var _blocks_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);

var a = 5;
}();
/******/ })()
;
//# sourceMappingURL=main.js.map