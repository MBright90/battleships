/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, *, a {\\n    border: none;\\n    box-sizing: border-box;\\n    color: inherit;\\n    margin: 0;\\n    text-decoration: none;\\n    user-select: none;\\n}\\n\\n/*************************/\\n/* Initial layout styles */\\n/*************************/\\n\\n.layout-wrapper {\\n    align-items: center;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    justify-content: center;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\\n    min-height: 100vh;\\n}\\n\\nheader {\\n    font-weight: bold;\\n}\\n\\n.choices-buttons-container {\\n    display: flex;\\n    justify-content: center;\\n    gap: 30px;\\n    margin: 10px;\\n}\\n\\nfooter {\\n    position: absolute;\\n    bottom: 5px;\\n}\\n\\n/*********************/\\n/* Game board styles */\\n/*********************/\\n\\n.board-wrapper {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    column-gap: 50px;\\n    row-gap: 20px;\\n}\\n\\n.game-board {\\n    background-color: rgba(0, 255, 255, 0.3);\\n    display: grid;\\n    grid-auto-rows: 1fr;\\n}\\n\\n.game-board .row {\\n    display: flex;\\n} \\n\\n.game-board .cell {\\n    border: 1px solid gray;\\n    height: 40px;\\n    width: 40px\\n}\\n\\n.description-container {\\n    align-items: center;\\n    display: flex;\\n    grid-area: 2 / 1 / 3 / 3;\\n    justify-content: center;\\n}\\n\\n/***************/\\n/* Ship images */\\n/***************/\\n\\n.carrier {\\n    height: 100%;\\n    width: 500%;\\n}\\n\\n.battleship {\\n    height: 100%;\\n    width: 400%;\\n}\\n\\n.submarine {\\n    height: 100%;\\n    width: 300%;\\n}\\n\\n.cruiser {\\n    height: 100%;\\n    width: 200%\\n}\\n\\n.destroyer {\\n    height: 100%;\\n    width: 200%\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domIndex */ \"./src/modules/domIndex.js\");\n/* harmony import */ var _modules_Umpire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Umpire */ \"./src/modules/Umpire.js\");\n/* harmony import */ var _modules_Umpire__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_Umpire__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\");\n/* harmony import */ var _modules_Player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_Player__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\ndocument.body.appendChild(_modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initPage())\nconst playerOne = new (_modules_Player__WEBPACK_IMPORTED_MODULE_3___default())('player-one-board')\nconst playerTwo = new (_modules_Player__WEBPACK_IMPORTED_MODULE_3___default())('player-two-board')\nconst umpire = new (_modules_Umpire__WEBPACK_IMPORTED_MODULE_2___default())(playerOne, playerTwo)\nlet axis = 'x'\n\n// ***************************** //\n// Game setup Listener functions //\n// ***************************** //\n\nfunction changeAxisListener() {\n  const axisCallback = () => {\n    if (axis === 'x') axis = 'y'\n    else axis = 'x'\n  }\n\n  const axisButton = document.querySelector('.axis-button')\n  axisButton.addEventListener('click', axisCallback)\n}\n\nfunction removeHoverListeners(boardName, ship, currentPositions) {\n  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)\n  boardCells.forEach((cell) => {\n    if (cell.style.backgroundColor === 'rgba(180, 180, 180, 0.5)') cell.style.backgroundColor = ''\n    cell.removeEventListener('mouseover', _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHoverCallback)\n    cell.removeEventListener('mouseout', _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHoverCallback)\n    cell.removeEventListener('click', (e) => {\n      if (umpire.isAvailable(e.target, ship, currentPositions, axis)) {\n        removeHoverListeners(boardName, ship, currentPositions)\n        _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].placeShip(e.target, ship, axis)\n      }\n    })\n  })\n}\n\nfunction placeShip(e, player, currentShip) {\n  _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].placeShip(e.target, currentShip)\n  player.addShipPosition()\n}\n\nfunction addHoverListeners(player) {\n  const boardName = player.getBoardName()\n  const ship = player.getNextShip()\n  const boardCells = document.querySelectorAll(`.${boardName} .row .cell`)\n  const currentPositions = player.allShipPositions()\n  boardCells.forEach((cell) => {\n    cell.addEventListener('mouseover', (e) => _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHoverCallback(e, boardName, ship.size, axis, currentPositions))\n    cell.addEventListener('mouseout', (e) => _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].boardHoverCallback(e, boardName, ship.size, axis, currentPositions))\n\n    cell.addEventListener('click', (e) => {\n      if (umpire.isAvailable(e.target, player, ship, currentPositions, axis)) {\n        removeHoverListeners(boardName, ship, currentPositions)\n        _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].placeShip(e.target, ship, axis)\n      }\n    })\n  })\n}\n\nfunction gameSetupListeners() {\n  const buttons = document.querySelectorAll('.choices-container button')\n\n  const setupButtonCallback = (event) => {\n    buttons.forEach((button) => button.remove())\n    umpire.setOpponent(event.target.dataset.choice.toLowerCase())\n    _modules_domIndex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createBoards()\n    changeAxisListener()\n    addHoverListeners(umpire.getCurrentPlayer())\n  }\n\n  buttons.forEach((button) => button.addEventListener('click', setupButtonCallback))\n}\n\ngameSetupListeners()\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((module) => {

eval("class Player {\n  constructor(boardName) {\n    this.moves = []\n    this.boardName = boardName\n    this.ships = {\n      carrier: {\n        name: 'carrier',\n        size: 5,\n        status: 'active',\n        position: [],\n        image: './assets/images/carrier.jpg',\n      },\n      battleship: {\n        name: 'battleship',\n        size: 4,\n        status: 'active',\n        position: [],\n        image: './assets/images/battleship.jpg',\n      },\n      submarine: {\n        name: 'submarine',\n        size: 3,\n        status: 'active',\n        position: [],\n        image: './assets/images/submarine.jpg',\n      },\n      cruiser: {\n        name: 'cruiser',\n        size: 3,\n        status: 'active',\n        position: [],\n        image: './assets/images/cruiser.jpg',\n      },\n      destroyer: {\n        name: 'destroyer',\n        size: 2,\n        status: 'active',\n        position: [],\n        image: './assets/images/destroyer.jpg',\n      },\n    }\n  }\n\n  getBoardName() {\n    return this.boardName\n  }\n\n  getNextShip() {\n    const unused = Object.keys(this.ships).filter((ship) => this.ships[ship].position.length === 0)\n    if (unused.length === 0) return false\n    return this.ships[unused[0]]\n  }\n\n  // ****************** //\n  // Position functions //\n  // ****************** //\n\n  addShipPosition(positionArray, shipName) {\n    if (positionArray.length <= this.ships[shipName].size) {\n      this.ships[shipName].position = positionArray\n    }\n  }\n\n  getShipsPosition(shipName) {\n    return this.ships[shipName].position\n  }\n\n  allShipPositions() {\n    const positions = []\n    Object.keys(this.ships).forEach((ship) => {\n      if (ship.positions) positions[positions.length] = ship.positions\n    })\n    return positions\n  }\n\n  // *************** //\n  // Image functions //\n  // *************** //\n\n  getImagePath(shipName) {\n    return this.ships[shipName].image\n  }\n}\n\nmodule.exports = Player\n\n\n//# sourceURL=webpack://battleships/./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Umpire.js":
/*!*******************************!*\
  !*** ./src/modules/Umpire.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const utilities = (__webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\")[\"default\"])\n\nclass Umpire {\n  constructor(firstPlayer, secondPlayer) {\n    this.score = 0\n    this.currentPlayer = firstPlayer\n    this.players = [firstPlayer, secondPlayer]\n    // this.playerMoves = []\n    // this.opponentMoves = []\n  }\n\n  setOpponent(opponent) {\n    this.opponent = opponent\n  }\n\n  getCurrentPlayer() {\n    return this.currentPlayer\n  }\n\n  switchCurrentPlayer(nextPlayer) {\n    this.currentPlayer = nextPlayer\n  }\n\n  isAvailable(target, player, ship, takenPositions, axis) {\n    let isAvailable\n    const cellArray = utilities.createCellArray(target, player.getBoardName(), ship.size, axis)\n    if (!cellArray.length === ship.size) return false\n    cellArray.forEach((cell) => {\n      if (takenPositions.includes(cell)) {\n        isAvailable = false\n      }\n    })\n    return isAvailable\n  }\n\n  setUpGame() {\n    // Place logic for choosing ship spaces\n  }\n\n  playGame() {\n    // Place recursive logic for playing the game\n  }\n\n  resetGame() {\n    // Place logic for resetting the game\n  }\n}\n\nmodule.exports = Umpire\n\n\n//# sourceURL=webpack://battleships/./src/modules/Umpire.js?");

/***/ }),

/***/ "./src/modules/domIndex.js":
/*!*********************************!*\
  !*** ./src/modules/domIndex.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\n\nconst dom = (() => {\n  // ***************** //\n  // Utility functions //\n  // ***************** //\n  function createClassElement(newElement, ...classes) {\n    const element = document.createElement(newElement)\n    classes.forEach((className) => element.classList.add(className))\n    return element\n  }\n\n  function createTextElement(newElement, text) {\n    const element = document.createElement(newElement)\n    element.textContent = text\n    return element\n  }\n\n  function appendChildren(element, ...children) {\n    children.forEach((child) => element.appendChild(child))\n    return element\n  }\n\n  // Parses an array of attributes where each attribute is a key/value object\n  function setAttributes(element, attributes) {\n    attributes.forEach((object) => {\n      Object.keys(object).forEach((key) => element.setAttribute(key, object[key]))\n    })\n    return element\n  }\n\n  // *************************** //\n  // Board creation/manipulation //\n  // *************************** //\n\n  function createBoards() {\n    function newBoard(boardClassName, size) {\n      const boardRow = (rowNumber) => {\n        const currentRow = document.createElement('div')\n        currentRow.classList.add('row')\n        for (let i = 1; i <= size; i += 1) {\n          const boardCell = createClassElement('div', 'cell')\n          setAttributes(\n            boardCell,\n            [\n              { 'data-x-pos': i },\n              { 'data-y-pos': rowNumber },\n            ],\n          )\n          currentRow.appendChild(boardCell)\n        }\n        return currentRow\n      }\n\n      const boardDiv = createClassElement('div', 'game-board', boardClassName)\n      for (let i = 1; i <= size; i += 1) boardDiv.appendChild(boardRow(i))\n      return boardDiv\n    }\n\n    function createDescriptionSpace() {\n      const descriptionContainer = createClassElement('div', 'description-container')\n      const axisButton = createClassElement('button', 'axis-button')\n      axisButton.textContent = 'Axis'\n      return appendChildren(descriptionContainer, axisButton)\n    }\n\n    const main = document.querySelector('main')\n    main.childNodes.forEach((node) => node.remove())\n    const boardWrapper = createClassElement('div', 'board-wrapper')\n    appendChildren(\n      boardWrapper,\n      newBoard('player-one-board', 10),\n      newBoard('player-two-board', 10),\n      createDescriptionSpace(),\n    )\n    main.appendChild(boardWrapper)\n  }\n\n  function createImage(shipName, shipImage) {\n    const image = createClassElement('img', shipName)\n    image.src = shipImage\n    return image\n  }\n\n  function boardHoverCallback(event, boardName, shipLength, axis, currentPositions) {\n    shipLength = shipLength || 1\n    axis = axis || 'x'\n    currentPositions = currentPositions || []\n\n    const cellArray = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createCellArray(event.target, boardName, shipLength, axis)\n    if (cellArray.length === shipLength\n      || cellArray.some((cell) => currentPositions.includes(cell))\n    ) {\n      cellArray.forEach((cell) => {\n        if (!cell.style.backgroundColor) cell.style.backgroundColor = 'rgba(180, 180, 180, 0.5)'\n        else cell.style.backgroundColor = ''\n      })\n    } else {\n      cellArray.forEach((cell) => {\n        if (!cell.style.backgroundColor) cell.style.backgroundColor = 'rgba(200, 95, 95, 0.7)'\n        else cell.style.backgroundColor = ''\n      })\n    }\n  }\n\n  function placeShip(cell, ship, axis) {\n    const shipElement = createImage(ship.name, ship.image)\n    if (axis === 'y') shipElement.style.transform = 'rotate(90deg) translate(20px)'\n    cell.appendChild(shipElement)\n    return _utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createCellArray(cell, ship.size, axis)\n  }\n\n  // **************** //\n  // Dom manipulation //\n  // **************** //\n\n  function createOppositionChoices() {\n    const createChoiceButton = (choice) => {\n      const button = createTextElement('button', choice)\n      button.dataset.choice = choice\n      return button\n    }\n\n    const choicesContainer = createClassElement('div', 'choices-container')\n    const choicesPrompt = createTextElement('p', 'Choose Your Opponent')\n    const choicesButtonContainer = createClassElement('div', 'choices-buttons-container')\n    appendChildren(\n      choicesButtonContainer,\n      createChoiceButton('Player'),\n      createChoiceButton('AI'),\n    )\n    return appendChildren(\n      choicesContainer,\n      choicesPrompt,\n      choicesButtonContainer,\n    )\n  }\n\n  function removeElements(...elements) {\n    elements.forEach((element) => element.remove())\n  }\n\n  // ********************* //\n  // Initial page creation //\n  // ********************* //\n\n  function initPage() {\n    const layoutWrapper = createClassElement('div', 'layout-wrapper')\n\n    // Create header\n    const header = document.createElement('header')\n    const headerTitle = createTextElement('h1', 'Battleships')\n    header.appendChild(headerTitle)\n\n    // Create main\n    const main = document.createElement('main')\n    main.appendChild(createOppositionChoices())\n\n    // Create footer\n    const footer = document.createElement('footer')\n    footer.appendChild(\n      createTextElement('p', 'MBright90'),\n    )\n\n    // Append all to layout wrapper\n    appendChildren(\n      layoutWrapper,\n      header,\n      main,\n      footer,\n    )\n    return layoutWrapper\n  }\n\n  function showCell(e) {\n    const cell = e.target\n    // const i = 1\n    console.log(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createCellArray(cell, 1, 'x'))\n  }\n\n  return {\n    initPage,\n\n    createBoards,\n    boardHoverCallback,\n    placeShip,\n    showCell,\n\n    removeElements,\n  }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://battleships/./src/modules/domIndex.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst utilities = (() => {\n  function createCellArray(cell, boardName, shipLength, axis) {\n    const cellArray = []\n    for (let i = 0; i < shipLength; i += 1) {\n      let currentCell\n      if (axis === 'x') currentCell = document.querySelector(`.${boardName} .cell[data-x-pos=\"${parseInt(cell.dataset.xPos, 10) + i}\"][data-y-pos=\"${cell.dataset.yPos}\"]`)\n      if (axis === 'y') currentCell = document.querySelector(`.${boardName} .cell[data-x-pos=\"${cell.dataset.xPos}\"][data-y-pos=\"${parseInt(cell.dataset.yPos, 10) + i}\"]`)\n      if (currentCell) cellArray[cellArray.length] = currentCell\n    }\n    return cellArray\n  }\n\n  return { createCellArray }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilities);\n\n\n//# sourceURL=webpack://battleships/./src/modules/utilities.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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