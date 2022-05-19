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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_BULLETIN\": function() { return /* binding */ ADD_BULLETIN; },\n/* harmony export */   \"REMOVE_BULLETIN\": function() { return /* binding */ REMOVE_BULLETIN; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar ADD_BULLETIN = \"ADD_BULLETIN\";\nvar REMOVE_BULLETIN = \"REMOVE_BULLETIN\";\nvar addBullettinToCard = function(bullettin, state) {\n    console.log(\"bullettin: \", bullettin);\n    console.log(\"state: \", state);\n    var updateCard = _toConsumableArray(state.card);\n    console.log(\"updateCard: \", updateCard);\n    console.log(updateCard.findIndex(function(item) {\n        return item.C == bullettin.C;\n    }));\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return console.log(\"item: \", item);\n    });\n    console.log(\"updatedItemIndex: \", updatedItemIndex);\n    if (updatedItemIndex < 0) {\n        updateCard.push(_objectSpread({}, bullettin, {\n            quantity: 1\n        }));\n        console.log(\"last updateCard: \", updateCard);\n    } else {\n        var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n        console.log(\"updatedItem: \", updatedItem);\n        updatedItem.quantity++;\n        updateCard[updatedItemIndex] = updatedItem;\n        console.log(\"else updateCard: \", updateCard);\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar removeBullettinFromCard = function(bullettinId, state) {\n    console.log(\"Removing bullettinId: \", bullettinId);\n    var updateCard = _toConsumableArray(state.card);\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return item.id === bullettin.id;\n    });\n    var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n    updatedItem.quantity--;\n    if (updatedItem.quantity <= 0) {\n        updateCard.splice(updatedItemIndex, 1);\n    } else {\n        updateCard[updatedItemIndex] = updatedItem;\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar reducer = function(state, action) {\n    switch(action.type){\n        case \"ADD_BULLETIN\":\n            return addBullettinToCard(action.bullettin, state);\n        case \"REMOVE_BULLETIN\":\n            return removeBullettinFromCard(action.bullettinId, state);\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBQ2hCLEtBQUssRUFBQ2lCLE1BQU0sRUFBSztJQUNyQyxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDZixLQUFLLGNBQWM7WUFDZixPQUFPcEIsa0JBQWtCLENBQUNtQixNQUFNLENBQUNsQixTQUFTLEVBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELEtBQUssaUJBQWlCO1lBQ2xCLE9BQU9ZLHVCQUF1QixDQUFDSyxNQUFNLENBQUNKLFdBQVcsRUFBQ2IsS0FBSyxDQUFDLENBQUM7UUFDN0Q7WUFDSSxPQUFPQSxLQUFLLENBQUM7S0FDcEI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9yZWR1Y2VyLmpzPzI3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9CVUxMRVRJTiA9IFwiQUREX0JVTExFVElOXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQlVMTEVUSU4gPSBcIlJFTU9WRV9CVUxMRVRJTlwiO1xyXG5cclxuY29uc3QgYWRkQnVsbGV0dGluVG9DYXJkID0gKGJ1bGxldHRpbixzdGF0ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2J1bGxldHRpbjogJyxidWxsZXR0aW4pXHJcbiAgICBjb25zb2xlLmxvZygnc3RhdGU6ICcsc3RhdGUpXHJcbiAgICBjb25zdCB1cGRhdGVDYXJkID0gWy4uLnN0YXRlLmNhcmRdO1xyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZUNhcmQ6ICcsdXBkYXRlQ2FyZClcclxuICAgIGNvbnNvbGUubG9nKHVwZGF0ZUNhcmQuZmluZEluZGV4KChpdGVtKT0+aXRlbS5DID09IGJ1bGxldHRpbi5DKSlcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtSW5kZXggPSB1cGRhdGVDYXJkLmZpbmRJbmRleCgoaXRlbSk9PmNvbnNvbGUubG9nKCdpdGVtOiAnLGl0ZW0pKTtcclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkSXRlbUluZGV4OiAnLHVwZGF0ZWRJdGVtSW5kZXgpXHJcblxyXG4gICAgaWYodXBkYXRlZEl0ZW1JbmRleDwwKXtcclxuICAgICAgICB1cGRhdGVDYXJkLnB1c2goey4uLmJ1bGxldHRpbixxdWFudGl0eToxfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xhc3QgdXBkYXRlQ2FyZDogJyx1cGRhdGVDYXJkKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbSA9IHtcclxuICAgICAgICAgICAgLi4udXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZWRJdGVtOiAnLHVwZGF0ZWRJdGVtKVxyXG4gICAgICAgIHVwZGF0ZWRJdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgICAgdXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XT11cGRhdGVkSXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWxzZSB1cGRhdGVDYXJkOiAnLHVwZGF0ZUNhcmQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gey4uLnN0YXRlLGNhcmQ6dXBkYXRlQ2FyZH07XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJ1bGxldHRpbkZyb21DYXJkID0gKGJ1bGxldHRpbklkLHN0YXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgYnVsbGV0dGluSWQ6ICcsYnVsbGV0dGluSWQpO1xyXG4gICAgY29uc3QgdXBkYXRlQ2FyZCA9IFsuLi5zdGF0ZS5jYXJkXTtcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtSW5kZXggPSB1cGRhdGVDYXJkLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT09IGJ1bGxldHRpbi5pZCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xyXG4gICAgICAgIC4uLnVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF1cclxuICAgIH07XHJcbiAgICB1cGRhdGVkSXRlbS5xdWFudGl0eS0tO1xyXG5cclxuICAgIGlmKHVwZGF0ZWRJdGVtLnF1YW50aXR5PD0wKXtcclxuICAgICAgICB1cGRhdGVDYXJkLnNwbGljZSh1cGRhdGVkSXRlbUluZGV4LDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVDYXJkW3VwZGF0ZWRJdGVtSW5kZXhdPXVwZGF0ZWRJdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsuLi5zdGF0ZSxjYXJkOnVwZGF0ZUNhcmR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiQUREX0JVTExFVElOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRCdWxsZXR0aW5Ub0NhcmQoYWN0aW9uLmJ1bGxldHRpbixzdGF0ZSk7XHJcbiAgICAgICAgY2FzZSBcIlJFTU9WRV9CVUxMRVRJTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlQnVsbGV0dGluRnJvbUNhcmQoYWN0aW9uLmJ1bGxldHRpbklkLHN0YXRlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQUREX0JVTExFVElOIiwiUkVNT1ZFX0JVTExFVElOIiwiYWRkQnVsbGV0dGluVG9DYXJkIiwiYnVsbGV0dGluIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlQ2FyZCIsImNhcmQiLCJmaW5kSW5kZXgiLCJpdGVtIiwiQyIsInVwZGF0ZWRJdGVtSW5kZXgiLCJwdXNoIiwicXVhbnRpdHkiLCJ1cGRhdGVkSXRlbSIsInJlbW92ZUJ1bGxldHRpbkZyb21DYXJkIiwiYnVsbGV0dGluSWQiLCJpZCIsInNwbGljZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/reducer.js\n");

/***/ })

});