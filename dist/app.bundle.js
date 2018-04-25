/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ui = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\nvar _localstorage = __webpack_require__(/*! ./localstorage */ \"./src/js/localstorage.js\");\n\nvar controller = function (uiCtrl, lcCtrl) {\n\n  var DOM = uiCtrl.getDomElements();\n\n  var setupEventListeners = function setupEventListeners() {\n    DOM.addBtn.addEventListener('click', addItem);\n    DOM.taskList.addEventListener('click', deleteItem);\n    DOM.clearBtn.addEventListener('click', deleteAllItems);\n    DOM.filterInput.addEventListener('keyup', filterItems);\n    document.addEventListener('DOMContentLoaded', displayLocalStorage);\n  };\n\n  var addItem = function addItem(event) {\n    var newItem = void 0;\n    event.preventDefault();\n    var input = uiCtrl.getInput();\n    uiCtrl.clearField();\n    if (input !== undefined) {\n      newItem = lcCtrl.addItem(input);\n      uiCtrl.addListItem(newItem);\n    }\n  };\n\n  var deleteItem = function deleteItem(event) {\n    var id = void 0,\n        itemID = void 0;\n    itemID = event.target.parentNode.parentNode.id;\n    if (itemID) {\n      uiCtrl.deleteListItem(itemID);\n      itemID = itemID.split('-');\n      id = itemID[1];\n      lcCtrl.deleteItem(id);\n    }\n  };\n\n  var deleteAllItems = function deleteAllItems() {\n    lcCtrl.deleteAll();\n    uiCtrl.deleteAll();\n  };\n\n  var filterItems = function filterItems() {\n    uiCtrl.filter();\n  };\n\n  var displayLocalStorage = function displayLocalStorage() {\n    var storageItems = lcCtrl.getItems();\n    if (storageItems) uiCtrl.displayLocalStorage(storageItems);\n  };\n\n  return {\n    init: function init() {\n      setupEventListeners();\n    }\n  };\n}(_ui.uiController, _localstorage.localstoreController);\n\ncontroller.init();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/localstorage.js":
/*!********************************!*\
  !*** ./src/js/localstorage.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar localstoreController = exports.localstoreController = function () {\n  var data = {\n    tasks: []\n  };\n\n  var Tasks = function Tasks(id, description) {\n    _classCallCheck(this, Tasks);\n\n    this.id = id;\n    this.description = description;\n  };\n\n  return {\n    addItem: function addItem(description) {\n      var newItem = void 0,\n          id = void 0;\n      id = data.tasks.length;\n      if (localStorage.getItem('items') !== null) {\n        data.tasks = JSON.parse(localStorage.getItem('items'));\n        id = data.tasks.length;\n      }\n\n      newItem = new Tasks(id, description);\n\n      if (description !== undefined) {\n        data.tasks.push(newItem);\n      }\n      localStorage.setItem('items', JSON.stringify(data.tasks));\n      console.log(data);\n      return newItem;\n    },\n    deleteItem: function deleteItem(id) {\n      var curID = void 0;\n      id = Number(id);\n      data.tasks = JSON.parse(localStorage.getItem('items'));\n      index = data.tasks.findIndex(function (element) {\n        return id == element.id;\n      });\n      data.tasks.splice(index, 1);\n      localStorage.setItem('items', JSON.stringify(data.tasks));\n    },\n\n    deleteAll: function deleteAll() {\n      data.tasks = [];\n      localStorage.setItem('items', JSON.stringify(data.tasks));\n    },\n\n    getItems: function getItems() {\n      var items = void 0;\n      if (localStorage.getItem('items') !== null) {\n        items = JSON.parse(localStorage.getItem('items'));\n      }\n      return items;\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/localstorage.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar uiController = exports.uiController = function () {\n  var domElements = {\n    taskForm: document.querySelector('.task-form'),\n    taskInput: document.querySelector('.task-form__input'),\n    addBtn: document.querySelector('.task-form__add'),\n    filterInput: document.querySelector('.js-filter-task'),\n    taskList: document.querySelector('.collection'),\n    clearBtn: document.querySelector('.js-clear-task'),\n    taskItemTemplate: document.querySelector('template').content.querySelector('.collection-item')\n  };\n\n  return {\n    getDomElements: function getDomElements() {\n      return domElements;\n    },\n\n    getInput: function getInput() {\n      if (domElements.taskInput.value !== '') {\n        return domElements.taskInput.value;\n      }\n    },\n    clearField: function clearField() {\n      domElements.taskInput.value = '';\n    },\n    addListItem: function addListItem(obj) {\n      var cloneNode = void 0;\n      cloneNode = domElements.taskItemTemplate.cloneNode(true);\n      cloneNode.setAttribute('id', 'task-' + obj.id);\n      cloneNode.insertAdjacentHTML('afterbegin', obj.description);\n      domElements.taskList.insertBefore(cloneNode, domElements.taskList.firstChild);\n    },\n    deleteListItem: function deleteListItem(id) {\n      document.querySelector('#' + id).remove();\n    },\n\n    deleteAll: function deleteAll() {\n      return domElements.taskList.innerHTML = '';\n    },\n    filter: function filter() {\n      var value = domElements.filterInput.value.toLowerCase();\n      var listItems = document.querySelectorAll('.collection-item');\n      console.log(listItems);\n      if (listItems.length > 0) {\n        Array.from(listItems).forEach(function (element) {\n          console.log(element.textContent.toLocaleLowerCase().includes(value));\n          if (element.textContent.includes(value)) {\n            element.style.display = 'flex';\n          } else {\n            element.style.display = 'none';\n          }\n        });\n      }\n    },\n    displayLocalStorage: function displayLocalStorage(items) {\n      var cloneNode = void 0;\n      items.forEach(function (element) {\n        cloneNode = domElements.taskItemTemplate.cloneNode(true);\n        cloneNode.setAttribute('id', 'task-' + element.id);\n        cloneNode.insertAdjacentHTML('afterbegin', element.description);\n        domElements.taskList.insertBefore(cloneNode, domElements.taskList.firstChild);\n      });\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ })

/******/ });