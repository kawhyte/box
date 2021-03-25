webpackHotUpdate_N_E("pages/xbox",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/components/Card.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Trending = function Trending(_ref) {\n  var games = _ref.games,\n      headerText = _ref.headerText,\n      startCountAt = _ref.startCountAt;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: \"grid container mx-auto pb-3  content-start items-center justify-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \" py-2 text-xl font-light leading-relaxed mt-0 mb-6 \",\n      children: headerText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-1\",\n        children: games.map(function (game, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n              href: \"/games/\".concat(game.id),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n                className: \"bg-gray-800 shadow-lg rounded p-1 max-w-sm cursor-pointer \",\n                animate: {\n                  y: 0,\n                  opacity: 1,\n                  transition: {\n                    duration: 0.6,\n                    ease: [0.6, -0.05, 0.01, 0.99]\n                  }\n                },\n                initial: {\n                  y: 60,\n                  opacity: 0\n                },\n                whileTap: {\n                  scale: 1\n                },\n                whileHover: {\n                  position: \"relative\",\n                  zIndex: 10,\n                  background: \"white\",\n                  scale: [1, 1.2, 1.1],\n                  transition: {\n                    duration: 0.3\n                  }\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"group relative\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    className: \"w-full  md:w-72 block rounded\",\n                    src: game.cover && game.cover.url.replace(\"t_thumb\", \"t_cover_big\"),\n                    alt: game.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 11\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"p-1 absolute top-0 left-0  ml-0 \",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: \"text-xl font-semibold py-1 px-2 rounded text-gray-800 align-middle bg-textwhite  \",\n                      children: [i + 4, \".\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 49,\n                      columnNumber: 12\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 11\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 10\n                }, _this)\n              }, game.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 9\n              }, _this)\n            }, game.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 8\n            }, _this)\n          }, void 0, false);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\n\nvar _c;\n\n$RefreshReg$(_c, \"Trending\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLnRzeD9jOTYwIl0sIm5hbWVzIjpbIlRyZW5kaW5nIiwiZ2FtZXMiLCJoZWFkZXJUZXh0Iiwic3RhcnRDb3VudEF0IiwibWFwIiwiZ2FtZSIsImkiLCJpZCIsInkiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInNjYWxlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiY292ZXIiLCJ1cmwiLCJyZXBsYWNlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBMEIsR0FBRyxTQUE3QkEsUUFBNkIsT0FBeUM7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFFM0Usc0JBQ0M7QUFBTSxhQUFTLEVBQUMsd0VBQWhCO0FBQUEsNEJBQ0M7QUFBRyxlQUFTLEVBQUMscURBQWI7QUFBQSxnQkFDRUQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJQztBQUFBLDZCQUNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGlCQUFTLEVBQUMsc0RBQXRCO0FBQUEsa0JBQ0VELEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDhCQUNWO0FBQUEsbUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxtQkFBWUQsSUFBSSxDQUFDRSxFQUFqQixDQUFWO0FBQUEscUNBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MseUJBQVMsRUFBQyw0REFEWDtBQUVDLHVCQUFPLEVBQUU7QUFDUkMsbUJBQUMsRUFBRSxDQURLO0FBRVJDLHlCQUFPLEVBQUUsQ0FGRDtBQUdSQyw0QkFBVSxFQUFFO0FBQ1hDLDRCQUFRLEVBQUUsR0FEQztBQUVYQyx3QkFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQUMsSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFGSztBQUhKLGlCQUZWO0FBVUMsdUJBQU8sRUFBRTtBQUFFSixtQkFBQyxFQUFFLEVBQUw7QUFBU0MseUJBQU8sRUFBRTtBQUFsQixpQkFWVjtBQVdDLHdCQUFRLEVBQUU7QUFBQ0ksdUJBQUssRUFBQztBQUFQLGlCQVhYO0FBWUMsMEJBQVUsRUFBRTtBQUNYQywwQkFBUSxFQUFFLFVBREM7QUFFWEMsd0JBQU0sRUFBRSxFQUZHO0FBR1hDLDRCQUFVLEVBQUUsT0FIRDtBQUlYSCx1QkFBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBSkk7QUFLWEgsNEJBQVUsRUFBRTtBQUNYQyw0QkFBUSxFQUFFO0FBREM7QUFMRCxpQkFaYjtBQUFBLHVDQXFCQztBQUFLLDJCQUFTLEVBQUMsZ0JBQWY7QUFBQSwwQ0FDQztBQUNDLDZCQUFTLEVBQUMsK0JBRFg7QUFFQyx1QkFBRyxFQUNGTixJQUFJLENBQUNZLEtBQUwsSUFDQVosSUFBSSxDQUFDWSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsT0FBZixDQUF1QixTQUF2QixFQUFrQyxhQUFsQyxDQUpGO0FBTUMsdUJBQUcsRUFBRWQsSUFBSSxDQUFDZTtBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREQsZUFVQztBQUFLLDZCQUFTLEVBQUMsa0NBQWY7QUFBQSwyQ0FDQztBQUNDLCtCQUFTLEVBQ1IsbUZBRkY7QUFBQSxpQ0FJRWQsQ0FBQyxHQUFHLENBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkQsaUJBQWlCRCxJQUFJLENBQUNFLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxlQUFzQ0YsSUFBSSxDQUFDRSxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsMkJBRFU7QUFBQSxTQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW9HQSxDQXRHRDs7S0FBTVAsUTtBQXdHU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgVHJlbmRpbmc6IFJlYWN0LkZDIDxJR2FtZT4gPSAoeyBnYW1lcywgaGVhZGVyVGV4dCwgc3RhcnRDb3VudEF0IH0pID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT0nZ3JpZCBjb250YWluZXIgbXgtYXV0byBwYi0zICBjb250ZW50LXN0YXJ0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG5cdFx0XHQ8cCBjbGFzc05hbWU9JyBweS0yIHRleHQteGwgZm9udC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgbXQtMCBtYi02ICc+XG5cdFx0XHRcdHtoZWFkZXJUZXh0fVxuXHRcdFx0PC9wPlxuXHRcdFx0PGRpdiA+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNSBnYXAtMSc+XG5cdFx0XHRcdFx0e2dhbWVzLm1hcCgoZ2FtZSwgaSkgPT4gKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9nYW1lcy8ke2dhbWUuaWR9YH0ga2V5PXtnYW1lLmlkfT5cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9e2dhbWUuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JnLWdyYXktODAwIHNoYWRvdy1sZyByb3VuZGVkIHAtMSBtYXgtdy1zbSBjdXJzb3ItcG9pbnRlciAnXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC42LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVhc2U6IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpbml0aWFsPXt7IHk6IDYwLCBvcGFjaXR5OiAwIH19XG5cdFx0XHRcdFx0XHRcdFx0XHR3aGlsZVRhcD17e3NjYWxlOjF9fVxuXHRcdFx0XHRcdFx0XHRcdFx0d2hpbGVIb3Zlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IDEwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlOiBbMSwgMS4yLCAxLjFdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyb3VwIHJlbGF0aXZlJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1mdWxsICBtZDp3LTcyIGJsb2NrIHJvdW5kZWQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhbWUuY292ZXIgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhbWUuY292ZXIudXJsLnJlcGxhY2UoXCJ0X3RodW1iXCIsIFwidF9jb3Zlcl9iaWdcIilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtnYW1lLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3AtMSBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgIG1sLTAgJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgcHktMSBweC0yIHJvdW5kZWQgdGV4dC1ncmF5LTgwMCBhbGlnbi1taWRkbGUgYmctdGV4dHdoaXRlICBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpICsgNH0uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyo8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYmctYmxhY2sgcm91bmRlZCBiZy1vcGFjaXR5LTAgZ3JvdXAtaG92ZXI6Ymctb3BhY2l0eS02MCB3LWZ1bGwgaC1mdWxsIHRvcC0wIGZsZXggaXRlbXMtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24ganVzdGlmeS1ldmVubHknPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0naG92ZXI6c2NhbGUtMTEwIHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zZm9ybSB0cmFuc2xhdGUteS0zIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9JzIwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PScyMCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9J2N1cnJlbnRDb2xvcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYmkgYmktaGVhcnQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTggMi43NDhsLS43MTctLjczN0M1LjYuMjgxIDIuNTE0Ljg3OCAxLjQgMy4wNTNjLS41MjMgMS4wMjMtLjY0MSAyLjUuMzE0IDQuMzg1LjkyIDEuODE1IDIuODM0IDMuOTg5IDYuMjg2IDYuMzU3IDMuNDUyLTIuMzY4IDUuMzY1LTQuNTQyIDYuMjg2LTYuMzU3Ljk1NS0xLjg4Ni44MzgtMy4zNjIuMzE0LTQuMzg1QzEzLjQ4Ni44NzggMTAuNC4yOCA4LjcxNyAyLjAxTDggMi43NDh6TTggMTVDLTcuMzMzIDQuODY4IDMuMjc5LTMuMDQgNy44MjQgMS4xNDNjLjA2LjA1NS4xMTkuMTEyLjE3Ni4xNzFhMy4xMiAzLjEyIDAgMCAxIC4xNzYtLjE3QzEyLjcyLTMuMDQyIDIzLjMzMyA0Ljg2NyA4IDE1eicgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2hvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHktMCB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPSc0MCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD0nNDAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPSdjdXJyZW50Q29sb3InXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2JpIGJpLXBsYXktY2lyY2xlLWZpbGwnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PScwIDAgMTYgMTYnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD0nTTE2IDhBOCA4IDAgMSAxIDAgOGE4IDggMCAwIDEgMTYgMHpNNi43OSA1LjA5M0EuNS41IDAgMCAwIDYgNS41djVhLjUuNSAwIDAgMCAuNzkuNDA3bDMuNS0yLjVhLjUuNSAwIDAgMCAwLS44MTRsLTMuNS0yLjV6JyAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0naG92ZXI6c2NhbGUtMTEwIHRleHQtd2hpdGUgb3BhY2l0eS0wIHRyYW5zZm9ybSB0cmFuc2xhdGUteS0zIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9JzIwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PScyMCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9J2N1cnJlbnRDb2xvcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nYmkgYmktdGhyZWUtZG90cydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9JzAgMCAxNiAxNic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPSdNMyA5LjVhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTUgMGExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNSAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzeicgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qPGRpdiBjbGFzc05hbWU9J3B4LTIgcHktMiAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LXNtIG15LTInPntnYW1lLm5hbWV9PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCB0ZXh0LXNtJz57Z2FtZS5nZW5yZXNbMF0ubmFtZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4qL31cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21haW4+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ })

})