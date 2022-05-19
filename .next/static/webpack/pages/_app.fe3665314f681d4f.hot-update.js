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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_BULLETIN\": function() { return /* binding */ ADD_BULLETIN; },\n/* harmony export */   \"REMOVE_BULLETIN\": function() { return /* binding */ REMOVE_BULLETIN; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar ADD_BULLETIN = \"ADD_BULLETIN\";\nvar REMOVE_BULLETIN = \"REMOVE_BULLETIN\";\nvar addBullettinToCard = function(bullettin, state) {\n    var updateCard = _toConsumableArray(state.card);\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return console.log(\"item: \", item);\n    });\n    if (updatedItemIndex < 0) {\n        updateCard.push(_objectSpread({}, bullettin, {\n            quantity: 1\n        }));\n        console.log(\"last updateCard: \", updateCard);\n    } else {\n        var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n        updatedItem.quantity++;\n        updateCard[updatedItemIndex] = updatedItem;\n        console.log(\"else updateCard: \", updateCard);\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar removeBullettinFromCard = function(bullettinId, state) {\n    console.log(\"Removing bullettinId: \", bullettinId);\n    var updateCard = _toConsumableArray(state.card);\n    var updatedItemIndex = updateCard.findIndex(function(item) {\n        return item.id === bullettin.id;\n    });\n    var updatedItem = _objectSpread({}, updateCard[updatedItemIndex]);\n    updatedItem.quantity--;\n    if (updatedItem.quantity <= 0) {\n        updateCard.splice(updatedItemIndex, 1);\n    } else {\n        updateCard[updatedItemIndex] = updatedItem;\n    }\n    return _objectSpread({}, state, {\n        card: updateCard\n    });\n};\nvar reducer = function(state, action) {\n    switch(action.type){\n        case \"ADD_BULLETIN\":\n            return addBullettinToCard(action.bullettin, state);\n        case \"REMOVE_BULLETIN\":\n            return removeBullettinFromCard(action.bullettinId, state);\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDcEMsSUFBTUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRWpELElBQU1DLGtCQUFrQixHQUFHLFNBQUNDLFNBQVMsRUFBQ0MsS0FBSyxFQUFLO0lBQzVDLElBQU1DLFVBQVUsR0FBSSxtQkFBR0QsS0FBSyxDQUFDRSxJQUFJLENBQVZGO0lBQ3ZCLElBQU1HLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLFNBQVMsQ0FBQyxTQUFDQyxJQUFJO2VBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBQ0YsSUFBSSxDQUFDO0tBQUEsQ0FBQztJQUVqRixJQUFHRixnQkFBZ0IsR0FBQyxDQUFDLEVBQUM7UUFDbEJGLFVBQVUsQ0FBQ08sSUFBSSxDQUFDLGtCQUFJVCxTQUFTO1lBQUNVLFFBQVEsRUFBQyxDQUFDO1VBQUMsQ0FBQyxDQUFDO1FBQzNDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQ04sVUFBVSxDQUFDO0tBQzlDLE1BQU07UUFDSCxJQUFNUyxXQUFXLEdBQUcsa0JBQ2JULFVBQVUsQ0FBQ0UsZ0JBQWdCLENBQUMsQ0FDbEM7UUFDRE8sV0FBVyxDQUFDRCxRQUFRLEVBQUUsQ0FBQztRQUN2QlIsVUFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxHQUFDTyxXQUFXLENBQUM7UUFDekNKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFDTixVQUFVLENBQUM7S0FDOUM7SUFDRCxPQUFPLGtCQUFJRCxLQUFLO1FBQUNFLElBQUksRUFBQ0QsVUFBVTtNQUFDLENBQUM7Q0FDckM7QUFFRCxJQUFNVSx1QkFBdUIsR0FBRyxTQUFDQyxXQUFXLEVBQUNaLEtBQUssRUFBSztJQUNuRE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUNLLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELElBQU1YLFVBQVUsR0FBSSxtQkFBR0QsS0FBSyxDQUFDRSxJQUFJLENBQVZGO0lBQ3ZCLElBQU1HLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLFNBQVMsQ0FBQyxTQUFDQyxJQUFJO2VBQUdBLElBQUksQ0FBQ1EsRUFBRSxLQUFLZCxTQUFTLENBQUNjLEVBQUU7S0FBQSxDQUFDO0lBRS9FLElBQU1ILFdBQVcsR0FBRyxrQkFDYlQsVUFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUNsQztJQUNETyxXQUFXLENBQUNELFFBQVEsRUFBRSxDQUFDO0lBRXZCLElBQUdDLFdBQVcsQ0FBQ0QsUUFBUSxJQUFFLENBQUMsRUFBQztRQUN2QlIsVUFBVSxDQUFDYSxNQUFNLENBQUNYLGdCQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07UUFDSEYsVUFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxHQUFDTyxXQUFXLENBQUM7S0FDNUM7SUFDRCxPQUFPLGtCQUFJVixLQUFLO1FBQUNFLElBQUksRUFBQ0QsVUFBVTtNQUFDLENBQUM7Q0FDckM7QUFFTSxJQUFNYyxPQUFPLEdBQUcsU0FBQ2YsS0FBSyxFQUFDZ0IsTUFBTSxFQUFLO0lBQ3JDLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmLEtBQUssY0FBYztZQUNmLE9BQU9uQixrQkFBa0IsQ0FBQ2tCLE1BQU0sQ0FBQ2pCLFNBQVMsRUFBQ0MsS0FBSyxDQUFDLENBQUM7UUFDdEQsS0FBSyxpQkFBaUI7WUFDbEIsT0FBT1csdUJBQXVCLENBQUNLLE1BQU0sQ0FBQ0osV0FBVyxFQUFDWixLQUFLLENBQUMsQ0FBQztRQUM3RDtZQUNJLE9BQU9BLEtBQUssQ0FBQztLQUNwQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3JlZHVjZXIuanM/MjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX0JVTExFVElOID0gXCJBRERfQlVMTEVUSU5cIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CVUxMRVRJTiA9IFwiUkVNT1ZFX0JVTExFVElOXCI7XHJcblxyXG5jb25zdCBhZGRCdWxsZXR0aW5Ub0NhcmQgPSAoYnVsbGV0dGluLHN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVDYXJkID0gWy4uLnN0YXRlLmNhcmRdO1xyXG4gICAgY29uc3QgdXBkYXRlZEl0ZW1JbmRleCA9IHVwZGF0ZUNhcmQuZmluZEluZGV4KChpdGVtKT0+Y29uc29sZS5sb2coJ2l0ZW06ICcsaXRlbSkpO1xyXG5cclxuICAgIGlmKHVwZGF0ZWRJdGVtSW5kZXg8MCl7XHJcbiAgICAgICAgdXBkYXRlQ2FyZC5wdXNoKHsuLi5idWxsZXR0aW4scXVhbnRpdHk6MX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXN0IHVwZGF0ZUNhcmQ6ICcsdXBkYXRlQ2FyZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XHJcbiAgICAgICAgICAgIC4uLnVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZWRJdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgICAgdXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XT11cGRhdGVkSXRlbTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZWxzZSB1cGRhdGVDYXJkOiAnLHVwZGF0ZUNhcmQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gey4uLnN0YXRlLGNhcmQ6dXBkYXRlQ2FyZH07XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJ1bGxldHRpbkZyb21DYXJkID0gKGJ1bGxldHRpbklkLHN0YXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVtb3ZpbmcgYnVsbGV0dGluSWQ6ICcsYnVsbGV0dGluSWQpO1xyXG4gICAgY29uc3QgdXBkYXRlQ2FyZCA9IFsuLi5zdGF0ZS5jYXJkXTtcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtSW5kZXggPSB1cGRhdGVDYXJkLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT09IGJ1bGxldHRpbi5pZCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtID0ge1xyXG4gICAgICAgIC4uLnVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF1cclxuICAgIH07XHJcbiAgICB1cGRhdGVkSXRlbS5xdWFudGl0eS0tO1xyXG5cclxuICAgIGlmKHVwZGF0ZWRJdGVtLnF1YW50aXR5PD0wKXtcclxuICAgICAgICB1cGRhdGVDYXJkLnNwbGljZSh1cGRhdGVkSXRlbUluZGV4LDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVDYXJkW3VwZGF0ZWRJdGVtSW5kZXhdPXVwZGF0ZWRJdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsuLi5zdGF0ZSxjYXJkOnVwZGF0ZUNhcmR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiQUREX0JVTExFVElOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRCdWxsZXR0aW5Ub0NhcmQoYWN0aW9uLmJ1bGxldHRpbixzdGF0ZSk7XHJcbiAgICAgICAgY2FzZSBcIlJFTU9WRV9CVUxMRVRJTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlQnVsbGV0dGluRnJvbUNhcmQoYWN0aW9uLmJ1bGxldHRpbklkLHN0YXRlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQUREX0JVTExFVElOIiwiUkVNT1ZFX0JVTExFVElOIiwiYWRkQnVsbGV0dGluVG9DYXJkIiwiYnVsbGV0dGluIiwic3RhdGUiLCJ1cGRhdGVDYXJkIiwiY2FyZCIsInVwZGF0ZWRJdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJxdWFudGl0eSIsInVwZGF0ZWRJdGVtIiwicmVtb3ZlQnVsbGV0dGluRnJvbUNhcmQiLCJidWxsZXR0aW5JZCIsImlkIiwic3BsaWNlIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/reducer.js\n");

/***/ })

});