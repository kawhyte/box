webpackHotUpdate_N_E("pages/xbox",{

/***/ "./components/HighestRatedCard.tsx":
false,

/***/ "./node_modules/deepmerge/dist/cjs.js":
false,

/***/ "./node_modules/load-script/index.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-player/lib/Player.js":
false,

/***/ "./node_modules/react-player/lib/Preview.js":
false,

/***/ "./node_modules/react-player/lib/ReactPlayer.js":
false,

/***/ "./node_modules/react-player/lib/patterns.js":
false,

/***/ "./node_modules/react-player/lib/players/YouTube.js":
false,

/***/ "./node_modules/react-player/lib/props.js":
false,

/***/ "./node_modules/react-player/lib/utils.js":
false,

/***/ "./node_modules/react-player/youtube.js":
false,

/***/ "./pages/xbox.tsx":
/*!************************!*\
  !*** ./pages/xbox.tsx ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SectionHeaderText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SectionHeaderText */ \"./components/SectionHeaderText.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.tsx\");\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/pages/xbox.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar xbox = function xbox(_ref) {\n  var games = _ref.games;\n  var sortedGames = games.sort(function (a, b) {\n    return b.total_rating - a.total_rating;\n  }).sort(function (a, b) {\n    return b.rating_count - a.rating_count;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"GameBox | Xbox\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeaderText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      headerText: \"Best Xbox Games\",\n      paragraphText: \"We watched a lot of films in 2020. But it wasn’t just about how many\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      games: sortedGames,\n      headerText: \"Check out the top 50 best video games, according to players:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 1\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (xbox);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMveGJveC50c3g/YTE5NCJdLCJuYW1lcyI6WyJ4Ym94IiwiZ2FtZXMiLCJzb3J0ZWRHYW1lcyIsInNvcnQiLCJhIiwiYiIsInRvdGFsX3JhdGluZyIsInJhdGluZ19jb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7O0FBSUEsSUFBTUEsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkIsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNqRCxNQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FDdkJFLElBRGtCLENBQ2IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDZixXQUFPQSxDQUFDLENBQUNDLFlBQUYsR0FBaUJGLENBQUMsQ0FBQ0UsWUFBMUI7QUFDQSxHQUhrQixFQUlsQkgsSUFKa0IsQ0FJYixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNmLFdBQU9BLENBQUMsQ0FBQ0UsWUFBRixHQUFpQkgsQ0FBQyxDQUFDRyxZQUExQjtBQUNBLEdBTmtCLENBQXBCO0FBUUEsc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQztBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFPQyxxRUFBQyxxRUFBRDtBQUNDLGdCQUFVLEVBQUUsaUJBRGI7QUFFQyxtQkFBYSxFQUNaO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBY0YscUVBQUMsd0RBQUQ7QUFDSSxXQUFLLEVBQUVMLFdBRFg7QUFFSSxnQkFBVSxFQUNUO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBd0JBLENBakNEOzs7QUFtQ2VGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMveGJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzXCI7XG5pbXBvcnQgU2VjdGlvbkhlYWRlclRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlclRleHRcIjtcbmltcG9ydCBIaWdoZXN0UmF0ZWRDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0hpZ2hlc3RSYXRlZENhcmRcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgZ2V0R2FtZXMgfSBmcm9tIFwiLi4vdXRpbC9nZXRHYW1lc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6R2V0U3RhdGljUHJvcHMgPSBnZXRHYW1lcyhcIigxNjksNDkpXCIpO1xuXG5jb25zdCB4Ym94OiBSZWFjdC5GQyA8SUdhbWVGdWxsPiA9ICh7IGdhbWVzIH0pID0+IHtcblx0Y29uc3Qgc29ydGVkR2FtZXMgPSBnYW1lc1xuXHRcdC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRyZXR1cm4gYi50b3RhbF9yYXRpbmcgLSBhLnRvdGFsX3JhdGluZztcblx0XHR9KVxuXHRcdC5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRyZXR1cm4gYi5yYXRpbmdfY291bnQgLSBhLnJhdGluZ19jb3VudDtcblx0XHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkdhbWVCb3ggfCBYYm94PC90aXRsZT5cblx0XHRcdFx0PGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XG5cdFx0XHQ8U2VjdGlvbkhlYWRlclRleHRcblx0XHRcdFx0aGVhZGVyVGV4dD17XCJCZXN0IFhib3ggR2FtZXNcIn1cblx0XHRcdFx0cGFyYWdyYXBoVGV4dD17XG5cdFx0XHRcdFx0XCJXZSB3YXRjaGVkIGEgbG90IG9mIGZpbG1zIGluIDIwMjAuIEJ1dCBpdCB3YXNu4oCZdCBqdXN0IGFib3V0IGhvdyBtYW55XCJcblx0XHRcdFx0fVxuXHRcdFx0Lz5cblxuPENhcmRcblx0XHRcdFx0Z2FtZXM9e3NvcnRlZEdhbWVzfVxuXHRcdFx0XHRoZWFkZXJUZXh0PXtcblx0XHRcdFx0XHRcIkNoZWNrIG91dCB0aGUgdG9wIDUwIGJlc3QgdmlkZW8gZ2FtZXMsIGFjY29yZGluZyB0byBwbGF5ZXJzOlwiXG5cdFx0XHRcdH1cblx0XHRcdC8+XG5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeGJveDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/xbox.tsx\n");

/***/ })

})