webpackHotUpdate_N_E("pages/playstation",{

/***/ "./pages/playstation.tsx":
/*!*******************************!*\
  !*** ./pages/playstation.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SectionHeaderText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionHeaderText */ \"./components/SectionHeaderText.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.tsx\");\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/pages/playstation.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar playstation = function playstation(_ref) {\n  var games = _ref.games,\n      startCountAt = _ref.startCountAt;\n  var sortedGames = games.sort(function (a, b) {\n    return b.total_rating - a.total_rating;\n  }).sort(function (a, b) {\n    return b.rating_count - a.rating_count;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"GameBox | Playstation\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeaderText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      headerText: \"Best PS Games\",\n      paragraphText: \"We watched a lot of films in 2020. But it wasn’t just about how many\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      games: sortedGames,\n      startCountAt: true,\n      headerText: \"Check out the top 50 best video games, according to players:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 3\n  }, _this);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (playstation);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheXN0YXRpb24udHN4PzI3ZTkiXSwibmFtZXMiOlsicGxheXN0YXRpb24iLCJnYW1lcyIsInN0YXJ0Q291bnRBdCIsInNvcnRlZEdhbWVzIiwic29ydCIsImEiLCJiIiwidG90YWxfcmF0aW5nIiwicmF0aW5nX2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQTs7QUFNQSxJQUFNQSxXQUFpQyxHQUFHLFNBQXBDQSxXQUFvQyxPQUE2QjtBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3RFLE1BQU1DLFdBQVcsR0FBR0YsS0FBSyxDQUN2QkcsSUFEa0IsQ0FDYixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNmLFdBQU9BLENBQUMsQ0FBQ0MsWUFBRixHQUFpQkYsQ0FBQyxDQUFDRSxZQUExQjtBQUNBLEdBSGtCLEVBSWxCSCxJQUprQixDQUliLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2YsV0FBT0EsQ0FBQyxDQUFDRSxZQUFGLEdBQWlCSCxDQUFDLENBQUNHLFlBQTFCO0FBQ0EsR0FOa0IsQ0FBcEI7QUFRQSxzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQU1DLHFFQUFDLHFFQUFEO0FBQ0MsZ0JBQVUsRUFBRSxlQURiO0FBRUMsbUJBQWEsRUFDWjtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORCxlQVlDLHFFQUFDLHdEQUFEO0FBQ0MsV0FBSyxFQUFFTCxXQURSO0FBRUMsa0JBQVksTUFGYjtBQUdDLGdCQUFVLEVBQ1Q7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1QkEsQ0FoQ0Q7OztBQWtDZUgsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wbGF5c3RhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlclRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlclRleHRcIjtcbmltcG9ydCBIaWdoZXN0UmF0ZWRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0hpZ2hlc3RSYXRlZENhcmRcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0J1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5pbXBvcnQgeyBnZXRHYW1lcyB9IGZyb20gXCIuLi91dGlsL2dldEdhbWVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyA9IGdldEdhbWVzKFwiKDE2Nyw0OClcIik7XG5cbmNvbnN0IHBsYXlzdGF0aW9uIDogUmVhY3QuRkM8SUdhbWVGdWxsPiA9ICh7IGdhbWVzLCBzdGFydENvdW50QXQgfSkgPT4ge1xuXHRjb25zdCBzb3J0ZWRHYW1lcyA9IGdhbWVzXG5cdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdHJldHVybiBiLnRvdGFsX3JhdGluZyAtIGEudG90YWxfcmF0aW5nO1xuXHRcdH0pXG5cdFx0LnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdHJldHVybiBiLnJhdGluZ19jb3VudCAtIGEucmF0aW5nX2NvdW50O1xuXHRcdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+R2FtZUJveCB8IFBsYXlzdGF0aW9uPC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxTZWN0aW9uSGVhZGVyVGV4dFxuXHRcdFx0XHRoZWFkZXJUZXh0PXtcIkJlc3QgUFMgR2FtZXNcIn1cblx0XHRcdFx0cGFyYWdyYXBoVGV4dD17XG5cdFx0XHRcdFx0XCJXZSB3YXRjaGVkIGEgbG90IG9mIGZpbG1zIGluIDIwMjAuIEJ1dCBpdCB3YXNu4oCZdCBqdXN0IGFib3V0IGhvdyBtYW55XCJcblx0XHRcdFx0fVxuXHRcdFx0Lz5cblx0XHRcdDxDYXJkXG5cdFx0XHRcdGdhbWVzPXtzb3J0ZWRHYW1lc31cblx0XHRcdFx0c3RhcnRDb3VudEF0XG5cdFx0XHRcdGhlYWRlclRleHQ9e1xuXHRcdFx0XHRcdFwiQ2hlY2sgb3V0IHRoZSB0b3AgNTAgYmVzdCB2aWRlbyBnYW1lcywgYWNjb3JkaW5nIHRvIHBsYXllcnM6XCJcblx0XHRcdFx0fVxuXHRcdFx0Lz5cblx0XHRcblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheXN0YXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/playstation.tsx\n");

/***/ })

})