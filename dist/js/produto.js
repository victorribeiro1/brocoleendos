/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://molde/./src/sass/main.scss?");

/***/ }),

/***/ "./src/js/base-de-dados.js":
/*!*********************************!*\
  !*** ./src/js/base-de-dados.js ***!
  \*********************************/
/***/ (function() {

eval("let id = 0\r\nclass Produto {\r\n    constructor(img, nome, preco, descricao, tipo) {\r\n        this.id = ++id\r\n        this.img = img\r\n        this.nome = nome\r\n        this.preco = preco\r\n        this.descricao = descricao\r\n        this.tipo = tipo\r\n    }\r\n}    \r\n\r\nconst laranja = new Produto('laranjas-portrait.jpg',    'Laranja Lima', 1,      'Laranjinha gostosa delícia. Essa é a melhor laranja que você vai comer na sua vida interinha. Confia',         'fruta')\r\nconst abacaxi = new Produto('abacaxi-portrait.jpg',     'Abacaxi',      5,      'Abacaxi gostoso delícia. Esse é o melhor abacaxi que você vai comer na sua vida interinha. Confia',            'fruta')\r\nconst tomate =  new Produto('tomates-portrait.jpg',     'Tomate',       3,      'Tomatezinho gostoso delícia. Esse é o melhor tomate que você vbananaai comer na sua vida interinha. Confia',   'fruta')\r\nconst banana =  new Produto('bananas-portrait.jpg',     'Banana',       2.50,   'Bananinha gostosa delícia. Essa é a melhor banana que você vai comer na sua vida interinha. Confia',           'fruta')\r\n\r\nconst produtos = [abacaxi, banana, laranja, tomate]\r\n\r\nconsole.log(produtos)\n\n//# sourceURL=webpack://molde/./src/js/base-de-dados.js?");

/***/ }),

/***/ "./src/js/produto.js":
/*!***************************!*\
  !*** ./src/js/produto.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _medias_fonts_NewYork_otf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../medias/fonts/NewYork.otf */ \"./src/medias/fonts/NewYork.otf\");\n/* harmony import */ var _base_de_dados__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-de-dados */ \"./src/js/base-de-dados.js\");\n/* harmony import */ var _base_de_dados__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base_de_dados__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toggle_carrinho__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-carrinho */ \"./src/js/toggle-carrinho.js\");\n/* harmony import */ var _toggle_carrinho__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toggle_carrinho__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n// import \"../medias/images/abacaxi-landscape.jpg\"\r\n// import \"../medias/images/abacaxi-portrait.jpg\"\r\n// import \"../medias/images/bananas-landscape.jpg\"\r\n// import \"../medias/images/bananas-protrait.jpg\"\r\n// import \"../medias/images/imagem-1.png\"\r\n// import \"../medias/images/imagem-2.png\"\r\n// import \"../medias/images/imagem.jpg\"\r\n// import \"../medias/images/imagem.png\"\r\n// import \"../medias/images/laranjas-landscape.jpg\"\r\n// import \"../medias/images/laranjas-protrait.jpg\"\r\n// import \"../medias/images/nature.jpg\"\r\n// import \"../medias/images/tomates-landscape.jpg\"\r\n// import \"../medias/images/tomates-protrait.jpg\"\r\n// import \"../medias/images/tomato-portrait.jpg\"\r\n// import \"../medias/images/neringa-skorupskiene-BRmzZE9wilI-unsplash.jpg\"\r\n// import \"../medias/images/sina-piryae-bBzjWthTqb8-unsplash.jpg\"\r\n// import \"../medias/images/woman-holding-box-full-oranges-her-hands.jpg\"\r\n\n\n//# sourceURL=webpack://molde/./src/js/produto.js?");

/***/ }),

/***/ "./src/js/toggle-carrinho.js":
/*!***********************************!*\
  !*** ./src/js/toggle-carrinho.js ***!
  \***********************************/
/***/ (function() {

eval("const carrinho  = document.getElementById('carrinho')\r\nconst button    = document.getElementById('button')\r\nconst myBlur    = document.getElementById('blur')\r\nconst shoppingBag = document.getElementById('shopping__bag')\r\nconst htmlTag = document.querySelector('html')\r\n\r\nbutton.addEventListener('click', () => {\r\n    toggleCarrinho()\r\n})\r\nshoppingBag.addEventListener('click', () => {\r\n    toggleCarrinho()\r\n})\r\n\r\nfunction toggleCarrinho() {\r\n    htmlTag.classList.toggle('no-overflow')\r\n    carrinho.classList.toggle('active')\r\n    myBlur.classList.toggle('active')\r\n}\n\n//# sourceURL=webpack://molde/./src/js/toggle-carrinho.js?");

/***/ }),

/***/ "./src/medias/fonts/NewYork.otf":
/*!**************************************!*\
  !*** ./src/medias/fonts/NewYork.otf ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"medias/fonts/NewYork.otf\";\n\n//# sourceURL=webpack://molde/./src/medias/fonts/NewYork.otf?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/produto.js");
/******/ 	
/******/ })()
;