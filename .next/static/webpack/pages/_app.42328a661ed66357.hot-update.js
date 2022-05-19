"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/reducer.js":
/*!********************************!*\
  !*** ./src/context/reducer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_BULLETIN\": function() { return /* binding */ ADD_BULLETIN; },\n/* harmony export */   \"REMOVE_BULLETIN\": function() { return /* binding */ REMOVE_BULLETIN; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar ADD_BULLETIN = \"ADD_BULLETIN\";\nvar REMOVE_BULLETIN = \"REMOVE_BULLETIN\";\nvar addBullettinToCard = function(bullettin, state) {\n    console.log(\"bullettin: \", bullettin);\n    console.log(\"state: \", state);\n    var updateCard = _toConsumableArray(state.card);\n    console.log(\"updateCard: \", updateCard);\n    console.log(updateCard.findIndex(function(item) {\n        return item.C == bullettin.C;\n    }));\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return item.C == bullettin.C;\n    });\n    if (updatedItemIndex < 0) {\n        updateCard.push(_objectSpread({}, bullettin, {\n            quantity: 1\n        }));\n        console.log(\"last updateCard: \", updateCard);\n    } else {\n        var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n        updatedItem.quantity++;\n        updateCard[updatedItemIndex] = updatedItem;\n        console.log(\"else updateCard: \", updateCard);\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar removeBullettinFromCard = function(bullettinId, state) {\n    console.log(\"Removing bullettinId: \", bullettinId);\n    var updateCard = _toConsumableArray(state.card);\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return item.id === bullettin.id;\n    });\n    var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n    updatedItem.quantity--;\n    if (updatedItem.quantity <= 0) {\n        updateCard.splice(updatedItemIndex, 1);\n    } else {\n        updateCard[updatedItemIndex] = updatedItem;\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar reducer = function(state, action) {\n    switch(action.type){\n        case \"ADD_BULLETIN\":\n            return addBullettinToCard(action.bullettin, state);\n        case \"REMOVE_BULLETIN\":\n            return removeBullettinFromCard(action.bullettinId, state);\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCLFNBQVMsRUFBQ0MsS0FBSyxDQUFDLENBQUM7UUFDdEQsS0FBSyxpQkFBaUI7WUFDbEIsT0FBT1ksdUJBQXVCLENBQUNLLE1BQU0sQ0FBQ0osV0FBVyxFQUFDYixLQUFLLENBQUMsQ0FBQztRQUM3RDtZQUNJLE9BQU9BLEtBQUssQ0FBQztLQUNwQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3JlZHVjZXIuanM/MjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX0JVTExFVElOID0gXCJBRERfQlVMTEVUSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CVUxMRVRJTiA9IFwiUkVNT1ZFX0JVTExFVElOXCI7XHJcblxyXG5jb25zdCBhZGRCdWxsZXR0aW5Ub0NhcmQgPSAoYnVsbGV0dGluLHN0YXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnYnVsbGV0dGluOiAnLGJ1bGxldHRpbilcclxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZTogJyxzdGF0ZSlcclxuICAgIGNvbnN0IHVwZGF0ZUNhcmQgPSBbLi4uc3RhdGUuY2FyZF07XHJcbiAgICBjb25zb2xlLmxvZygndXBkYXRlQ2FyZDogJyx1cGRhdGVDYXJkKVxyXG4gICAgY29uc29sZS5sb2codXBkYXRlQ2FyZC5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLkMgPT0gYnVsbGV0dGluLkMpKVxyXG4gICAgY29uc3QgdXBkYXRlZEl0ZW1JbmRleCA9IHVwZGF0ZUNhcmQuZmluZEluZGV4KChpdGVtKT0+aXRlbS5DID09IGJ1bGxldHRpbi5DKTtcclxuXHJcbiAgICBpZih1cGRhdGVkSXRlbUluZGV4PDApe1xyXG4gICAgICAgIHVwZGF0ZUNhcmQucHVzaCh7Li4uYnVsbGV0dGluLHF1YW50aXR5OjF9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGFzdCB1cGRhdGVDYXJkOiAnLHVwZGF0ZUNhcmQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xyXG4gICAgICAgICAgICAuLi51cGRhdGVDYXJkW3VwZGF0ZWRJdGVtSW5kZXhdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cGRhdGVkSXRlbS5xdWFudGl0eSsrO1xyXG4gICAgICAgIHVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF09dXBkYXRlZEl0ZW07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UgdXBkYXRlQ2FyZDogJyx1cGRhdGVDYXJkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsuLi5zdGF0ZSxjYXJkOnVwZGF0ZUNhcmR9O1xyXG59XHJcblxyXG5jb25zdCByZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZCA9IChidWxsZXR0aW5JZCxzdGF0ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1JlbW92aW5nIGJ1bGxldHRpbklkOiAnLGJ1bGxldHRpbklkKTtcclxuICAgIGNvbnN0IHVwZGF0ZUNhcmQgPSBbLi4uc3RhdGUuY2FyZF07XHJcbiAgICBjb25zdCB1cGRhdGVkSXRlbUluZGV4ID0gdXBkYXRlQ2FyZC5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09PSBidWxsZXR0aW4uaWQpO1xyXG4gICAgXHJcbiAgICBjb25zdCB1cGRhdGVkSXRlbSA9IHtcclxuICAgICAgICAuLi51cGRhdGVDYXJkW3VwZGF0ZWRJdGVtSW5kZXhdXHJcbiAgICB9O1xyXG4gICAgdXBkYXRlZEl0ZW0ucXVhbnRpdHktLTtcclxuXHJcbiAgICBpZih1cGRhdGVkSXRlbS5xdWFudGl0eTw9MCl7XHJcbiAgICAgICAgdXBkYXRlQ2FyZC5zcGxpY2UodXBkYXRlZEl0ZW1JbmRleCwxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XT11cGRhdGVkSXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Li4uc3RhdGUsY2FyZDp1cGRhdGVDYXJkfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkFERF9CVUxMRVRJTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYWRkQnVsbGV0dGluVG9DYXJkKGFjdGlvbi5idWxsZXR0aW4sc3RhdGUpO1xyXG4gICAgICAgIGNhc2UgXCJSRU1PVkVfQlVMTEVUSU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUJ1bGxldHRpbkZyb21DYXJkKGFjdGlvbi5idWxsZXR0aW5JZCxzdGF0ZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkFERF9CVUxMRVRJTiIsIlJFTU9WRV9CVUxMRVRJTiIsImFkZEJ1bGxldHRpblRvQ2FyZCIsImJ1bGxldHRpbiIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUNhcmQiLCJjYXJkIiwiZmluZEluZGV4IiwiaXRlbSIsIkMiLCJ1cGRhdGVkSXRlbUluZGV4IiwicHVzaCIsInF1YW50aXR5IiwidXBkYXRlZEl0ZW0iLCJyZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZCIsImJ1bGxldHRpbklkIiwiaWQiLCJzcGxpY2UiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/reducer.js\n");

/***/ })

});