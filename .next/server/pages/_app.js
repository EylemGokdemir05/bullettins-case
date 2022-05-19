/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/Provider.js":
/*!*********************************!*\
  !*** ./src/context/Provider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/context/reducer.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/context/store.js\");\n\n\n\n\nconst Provider = (props)=>{\n    const bullettins = [];\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, {\n        card: []\n    });\n    const addBullettinToCard = (bullettin)=>{\n        setTimeout(()=>{\n            dispatch({\n                type: _reducer__WEBPACK_IMPORTED_MODULE_2__.ADD_BULLETIN,\n                bullettin: bullettin\n            });\n        }, 700);\n    };\n    const removeBullettinFromCard = (bullettinId)=>{\n        setTimeout(()=>{\n            dispatch({\n                type: _reducer__WEBPACK_IMPORTED_MODULE_2__.REMOVE_BULLETIN,\n                bullettinId: bullettinId\n            });\n        }, 700);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            bullettins: bullettins,\n            card: state.card,\n            addBullettinToCard: addBullettinToCard,\n            removeBullettinFromCard: removeBullettinFromCard\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eylem\\\\Downloads\\\\bulletins-case\\\\src\\\\context\\\\Provider.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Qcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDdUI7QUFDbEI7QUFFNUMsTUFBTU8sUUFBUSxHQUFDLENBQUNDLEtBQUssR0FBRztJQUNwQixNQUFNQyxVQUFVLEdBQUMsRUFBRTtJQUNuQixNQUFNLEVBTlYsR0FNV0MsS0FBSyxHQU5oQixHQU1pQkMsUUFBUSxNQUFFVixpREFBVSxDQUFDQyw2Q0FBTyxFQUFDO1FBQUNVLElBQUksRUFBQyxFQUFFO0tBQUMsQ0FBQztJQUVwRCxNQUFNQyxrQkFBa0IsR0FBRyxDQUFDQyxTQUFTLEdBQUs7UUFDdENDLFVBQVUsQ0FBQyxJQUFJO1lBQ1hKLFFBQVEsQ0FBQztnQkFBQ0ssSUFBSSxFQUFDYixrREFBWTtnQkFBQ1csU0FBUyxFQUFDQSxTQUFTO2FBQUMsQ0FBQyxDQUFDO1NBQ3JELEVBQUMsR0FBRyxDQUFDLENBQUM7S0FDVjtJQUVELE1BQU1HLHVCQUF1QixHQUFHLENBQUNDLFdBQVcsR0FBSztRQUM3Q0gsVUFBVSxDQUFDLElBQUk7WUFDWEosUUFBUSxDQUFDO2dCQUFDSyxJQUFJLEVBQUNaLHFEQUFlO2dCQUFDYyxXQUFXLEVBQUNBLFdBQVc7YUFBQyxDQUFDLENBQUM7U0FDNUQsRUFBQyxHQUFHLENBQUMsQ0FBQztLQUNWO0lBRUQscUJBQ0ksOERBQUNiLHVEQUFnQjtRQUNiYyxLQUFLLEVBQUU7WUFDSFYsVUFBVSxFQUFDQSxVQUFVO1lBQ3JCRyxJQUFJLEVBQUNGLEtBQUssQ0FBQ0UsSUFBSTtZQUNmQyxrQkFBa0IsRUFBQ0Esa0JBQWtCO1lBQ3JDSSx1QkFBdUIsRUFBQ0EsdUJBQXVCO1NBQ2xEO2tCQUNBVCxLQUFLLENBQUNZLFFBQVE7Ozs7O2lCQUNBLENBQ3RCO0NBQ0o7QUFDRCxpRUFBZWIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtbmV4dGpzLy4vc3JjL2NvbnRleHQvUHJvdmlkZXIuanM/OGNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtyZWR1Y2VyLEFERF9CVUxMRVRJTixSRU1PVkVfQlVMTEVUSU59IGZyb20gJy4vcmVkdWNlcidcclxuaW1wb3J0IENvbnRleHQse2luaXRpYWxTdGF0ZX0gZnJvbSAnLi9zdG9yZSdcclxuXHJcbmNvbnN0IFByb3ZpZGVyPShwcm9wcyk9PntcclxuICAgIGNvbnN0IGJ1bGxldHRpbnM9W107XHJcbiAgICBjb25zdCBbc3RhdGUsZGlzcGF0Y2hdPXVzZVJlZHVjZXIocmVkdWNlcix7Y2FyZDpbXX0pO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ1bGxldHRpblRvQ2FyZCA9IChidWxsZXR0aW4pID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOkFERF9CVUxMRVRJTixidWxsZXR0aW46YnVsbGV0dGlufSk7XHJcbiAgICAgICAgfSw3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJ1bGxldHRpbkZyb21DYXJkID0gKGJ1bGxldHRpbklkKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpSRU1PVkVfQlVMTEVUSU4sYnVsbGV0dGluSWQ6YnVsbGV0dGluSWR9KTtcclxuICAgICAgICB9LDcwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0dGluczpidWxsZXR0aW5zLFxyXG4gICAgICAgICAgICAgICAgY2FyZDpzdGF0ZS5jYXJkLFxyXG4gICAgICAgICAgICAgICAgYWRkQnVsbGV0dGluVG9DYXJkOmFkZEJ1bGxldHRpblRvQ2FyZCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJ1bGxldHRpbkZyb21DYXJkOnJlbW92ZUJ1bGxldHRpbkZyb21DYXJkXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJBRERfQlVMTEVUSU4iLCJSRU1PVkVfQlVMTEVUSU4iLCJDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiUHJvdmlkZXIiLCJwcm9wcyIsImJ1bGxldHRpbnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FyZCIsImFkZEJ1bGxldHRpblRvQ2FyZCIsImJ1bGxldHRpbiIsInNldFRpbWVvdXQiLCJ0eXBlIiwicmVtb3ZlQnVsbGV0dGluRnJvbUNhcmQiLCJidWxsZXR0aW5JZCIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/Provider.js\n");

/***/ }),

/***/ "./src/context/reducer.js":
/*!********************************!*\
  !*** ./src/context/reducer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_BULLETIN\": () => (/* binding */ ADD_BULLETIN),\n/* harmony export */   \"REMOVE_BULLETIN\": () => (/* binding */ REMOVE_BULLETIN),\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst ADD_BULLETIN = \"ADD_BULLETIN\";\nconst REMOVE_BULLETIN = \"REMOVE_BULLETIN\";\nconst addBullettinToCard = (bullettin, state)=>{\n    const updateCard = [\n        ...state.card\n    ];\n    const updatedItemIndex = updateCard.findIndex((item)=>console.log(\"item: \", item)\n    );\n    if (updatedItemIndex < 0) {\n        updateCard.push({\n            ...bullettin,\n            quantity: 1\n        });\n    } else {\n        const updatedItem = {\n            ...updateCard[updatedItemIndex]\n        };\n        updatedItem.quantity++;\n        updateCard[updatedItemIndex] = updatedItem;\n    }\n    return {\n        ...state,\n        card: updateCard\n    };\n};\nconst removeBullettinFromCard = (bullettinId, state)=>{\n    console.log(\"Removing bullettinId: \", bullettinId);\n    const updateCard = [\n        ...state.card\n    ];\n    const updatedItemIndex = updateCard.findIndex((item)=>item.id === bullettin.id\n    );\n    const updatedItem = {\n        ...updateCard[updatedItemIndex]\n    };\n    updatedItem.quantity--;\n    if (updatedItem.quantity <= 0) {\n        updateCard.splice(updatedItemIndex, 1);\n    } else {\n        updateCard[updatedItemIndex] = updatedItem;\n    }\n    return {\n        ...state,\n        card: updateCard\n    };\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"ADD_BULLETIN\":\n            return addBullettinToCard(action.bullettin, state);\n        case \"REMOVE_BULLETIN\":\n            return removeBullettinFromCard(action.bullettinId, state);\n        default:\n            return state;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDcEMsTUFBTUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO0FBRWpELE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLFNBQVMsRUFBQ0MsS0FBSyxHQUFLO0lBQzVDLE1BQU1DLFVBQVUsR0FBRztXQUFJRCxLQUFLLENBQUNFLElBQUk7S0FBQztJQUNsQyxNQUFNQyxnQkFBZ0IsR0FBR0YsVUFBVSxDQUFDRyxTQUFTLENBQUMsQ0FBQ0MsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUNGLElBQUksQ0FBQztJQUFBLENBQUM7SUFFakYsSUFBR0YsZ0JBQWdCLEdBQUMsQ0FBQyxFQUFDO1FBQ2xCRixVQUFVLENBQUNPLElBQUksQ0FBQztZQUFDLEdBQUdULFNBQVM7WUFBQ1UsUUFBUSxFQUFDLENBQUM7U0FBQyxDQUFDLENBQUM7S0FDOUMsTUFBTTtRQUNILE1BQU1DLFdBQVcsR0FBRztZQUNoQixHQUFHVCxVQUFVLENBQUNFLGdCQUFnQixDQUFDO1NBQ2xDO1FBQ0RPLFdBQVcsQ0FBQ0QsUUFBUSxFQUFFLENBQUM7UUFDdkJSLFVBQVUsQ0FBQ0UsZ0JBQWdCLENBQUMsR0FBQ08sV0FBVyxDQUFDO0tBQzVDO0lBQ0QsT0FBTztRQUFDLEdBQUdWLEtBQUs7UUFBQ0UsSUFBSSxFQUFDRCxVQUFVO0tBQUMsQ0FBQztDQUNyQztBQUVELE1BQU1VLHVCQUF1QixHQUFHLENBQUNDLFdBQVcsRUFBQ1osS0FBSyxHQUFLO0lBQ25ETSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBQ0ssV0FBVyxDQUFDLENBQUM7SUFDbEQsTUFBTVgsVUFBVSxHQUFHO1dBQUlELEtBQUssQ0FBQ0UsSUFBSTtLQUFDO0lBQ2xDLE1BQU1DLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEdBQUdBLElBQUksQ0FBQ1EsRUFBRSxLQUFLZCxTQUFTLENBQUNjLEVBQUU7SUFBQSxDQUFDO0lBRS9FLE1BQU1ILFdBQVcsR0FBRztRQUNoQixHQUFHVCxVQUFVLENBQUNFLGdCQUFnQixDQUFDO0tBQ2xDO0lBQ0RPLFdBQVcsQ0FBQ0QsUUFBUSxFQUFFLENBQUM7SUFFdkIsSUFBR0MsV0FBVyxDQUFDRCxRQUFRLElBQUUsQ0FBQyxFQUFDO1FBQ3ZCUixVQUFVLENBQUNhLE1BQU0sQ0FBQ1gsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekMsTUFBTTtRQUNIRixVQUFVLENBQUNFLGdCQUFnQixDQUFDLEdBQUNPLFdBQVcsQ0FBQztLQUM1QztJQUNELE9BQU87UUFBQyxHQUFHVixLQUFLO1FBQUNFLElBQUksRUFBQ0QsVUFBVTtLQUFDLENBQUM7Q0FDckM7QUFFTSxNQUFNYyxPQUFPLEdBQUcsQ0FBQ2YsS0FBSyxFQUFDZ0IsTUFBTSxHQUFLO0lBQ3JDLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNmLEtBQUssY0FBYztZQUNmLE9BQU9uQixrQkFBa0IsQ0FBQ2tCLE1BQU0sQ0FBQ2pCLFNBQVMsRUFBQ0MsS0FBSyxDQUFDLENBQUM7UUFDdEQsS0FBSyxpQkFBaUI7WUFDbEIsT0FBT1csdUJBQXVCLENBQUNLLE1BQU0sQ0FBQ0osV0FBVyxFQUFDWixLQUFLLENBQUMsQ0FBQztRQUM3RDtZQUNJLE9BQU9BLEtBQUssQ0FBQztLQUNwQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1uZXh0anMvLi9zcmMvY29udGV4dC9yZWR1Y2VyLmpzPzI3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9CVUxMRVRJTiA9IFwiQUREX0JVTExFVElOXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQlVMTEVUSU4gPSBcIlJFTU9WRV9CVUxMRVRJTlwiO1xyXG5cclxuY29uc3QgYWRkQnVsbGV0dGluVG9DYXJkID0gKGJ1bGxldHRpbixzdGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlQ2FyZCA9IFsuLi5zdGF0ZS5jYXJkXTtcclxuICAgIGNvbnN0IHVwZGF0ZWRJdGVtSW5kZXggPSB1cGRhdGVDYXJkLmZpbmRJbmRleCgoaXRlbSk9PmNvbnNvbGUubG9nKCdpdGVtOiAnLGl0ZW0pKTtcclxuXHJcbiAgICBpZih1cGRhdGVkSXRlbUluZGV4PDApe1xyXG4gICAgICAgIHVwZGF0ZUNhcmQucHVzaCh7Li4uYnVsbGV0dGluLHF1YW50aXR5OjF9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XHJcbiAgICAgICAgICAgIC4uLnVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHVwZGF0ZWRJdGVtLnF1YW50aXR5Kys7XHJcbiAgICAgICAgdXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XT11cGRhdGVkSXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiB7Li4uc3RhdGUsY2FyZDp1cGRhdGVDYXJkfTtcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlQnVsbGV0dGluRnJvbUNhcmQgPSAoYnVsbGV0dGluSWQsc3RhdGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBidWxsZXR0aW5JZDogJyxidWxsZXR0aW5JZCk7XHJcbiAgICBjb25zdCB1cGRhdGVDYXJkID0gWy4uLnN0YXRlLmNhcmRdO1xyXG4gICAgY29uc3QgdXBkYXRlZEl0ZW1JbmRleCA9IHVwZGF0ZUNhcmQuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gYnVsbGV0dGluLmlkKTtcclxuICAgIFxyXG4gICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7XHJcbiAgICAgICAgLi4udXBkYXRlQ2FyZFt1cGRhdGVkSXRlbUluZGV4XVxyXG4gICAgfTtcclxuICAgIHVwZGF0ZWRJdGVtLnF1YW50aXR5LS07XHJcblxyXG4gICAgaWYodXBkYXRlZEl0ZW0ucXVhbnRpdHk8PTApe1xyXG4gICAgICAgIHVwZGF0ZUNhcmQuc3BsaWNlKHVwZGF0ZWRJdGVtSW5kZXgsMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVwZGF0ZUNhcmRbdXBkYXRlZEl0ZW1JbmRleF09dXBkYXRlZEl0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gey4uLnN0YXRlLGNhcmQ6dXBkYXRlQ2FyZH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJBRERfQlVMTEVUSU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIGFkZEJ1bGxldHRpblRvQ2FyZChhY3Rpb24uYnVsbGV0dGluLHN0YXRlKTtcclxuICAgICAgICBjYXNlIFwiUkVNT1ZFX0JVTExFVElOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZChhY3Rpb24uYnVsbGV0dGluSWQsc3RhdGUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJBRERfQlVMTEVUSU4iLCJSRU1PVkVfQlVMTEVUSU4iLCJhZGRCdWxsZXR0aW5Ub0NhcmQiLCJidWxsZXR0aW4iLCJzdGF0ZSIsInVwZGF0ZUNhcmQiLCJjYXJkIiwidXBkYXRlZEl0ZW1JbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInF1YW50aXR5IiwidXBkYXRlZEl0ZW0iLCJyZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZCIsImJ1bGxldHRpbklkIiwiaWQiLCJzcGxpY2UiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/reducer.js\n");

/***/ }),

/***/ "./src/context/store.js":
/*!******************************!*\
  !*** ./src/context/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({\n    bullettins: [],\n    total: 0,\n    card: [],\n    addBullettinToCard: (bullettin)=>{},\n    removeBullettinFromCard: (bullettinId)=>{}\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFFMUMsOEVBQWVBLDBEQUFtQixDQUFDO0lBQy9CRSxVQUFVLEVBQUMsRUFBRTtJQUNiQyxLQUFLLEVBQUUsQ0FBQztJQUNSQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxrQkFBa0IsRUFBRUMsQ0FBQUEsU0FBUyxHQUFJLEVBQUU7SUFDbkNDLHVCQUF1QixFQUFFQyxDQUFBQSxXQUFXLEdBQUksRUFBRTtDQUM3QyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LW5leHRqcy8uL3NyYy9jb250ZXh0L3N0b3JlLmpzPzI0MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICAgIGJ1bGxldHRpbnM6W10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIGNhcmQ6IFtdLFxyXG4gICAgYWRkQnVsbGV0dGluVG9DYXJkOiBidWxsZXR0aW4gPT4ge30sXHJcbiAgICByZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZDogYnVsbGV0dGluSWQgPT4ge31cclxufSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImJ1bGxldHRpbnMiLCJ0b3RhbCIsImNhcmQiLCJhZGRCdWxsZXR0aW5Ub0NhcmQiLCJidWxsZXR0aW4iLCJyZW1vdmVCdWxsZXR0aW5Gcm9tQ2FyZCIsImJ1bGxldHRpbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Provider */ \"./src/context/Provider.js\");\n\n// import \"./index.css\";\n\n\n// This default export is required in a new `pages/_app.js` file.\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Eylem\\\\Downloads\\\\bulletins-case\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 20\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Eylem\\\\Downloads\\\\bulletins-case\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQURBLHdCQUF3QjtBQUNNO0FBQ2E7QUFFM0MsaUVBQWlFO0FBQ2xELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3RELHFCQUFPLDhEQUFDSCx5REFBUTtrQkFBQyw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUFXLENBQUM7Q0FDMUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LW5leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvUHJvdmlkZXInO1xuXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiA8UHJvdmlkZXI+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();