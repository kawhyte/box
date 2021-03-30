webpackHotUpdate_N_E("pages/top",{

/***/ "./components/GameListItem.tsx":
/*!*************************************!*\
  !*** ./components/GameListItem.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/components/GameListItem.tsx\",\n    _this = undefined;\n\n\n\n\nvar GameListItem = function GameListItem(_ref) {\n  var todo = _ref.todo,\n      toggleTodo = _ref.toggleTodo;\n  console.log(todo === null || todo === void 0 ? void 0 : todo.cover.url);\n  var green = \"lg:text-green-300 text-green-500   text-xl leading-lg  pr-2\";\n  var gray = \"lg:text-gray-300 text-gray-500  text-xl leading-lg pr-2\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: todo.complete ? \" w-full h-full absolute z-10  opacity-80 bg-gray-900  \" : \"w-full h-full absolute z-10  opacity-0 bg-gray-900  \",\n        children: \"Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].img, {\n        initial: {\n          rotateY: 180,\n          opacity: 0\n        },\n        animate: {\n          rotateY: 0,\n          opacity: 1\n        },\n        transition: {\n          delay: 0.3\n        },\n        className: \"w-full col-span-2  block rounded \",\n        src: todo === null || todo === void 0 ? void 0 : todo.cover.url.replace(\"t_thumb\", \"t_cover_big\"),\n        alt: todo.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, _this)]\n    }, todo.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid place-items-center pt-4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-gray-200 \",\n        children: [\" \", todo.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-row justify-between  container py-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return toggleTodo(todo);\n        },\n        className: \"text-white opacity flex-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? green + \"far fa-check-circle\" : gray + \"far fa-check-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 6\n        }, _this), \"Played\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"text-white opacity flex-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? gamePlayed : gameNotPlayed\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 6\n        }, _this), \" \", \"Watchlist\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-white opacity flex-auto flex flex-row border px-1 rounded-lg py-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"text-white opacity flex-auto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-thumbs-up text-lg leading-lg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"text-white opacity flex-auto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-thumbs-down  text-lg leading-lg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: todo.complete ? \"line-through\" : undefined,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"checkbox\",\n        checked: todo.complete,\n        onChange: function onChange() {\n          return toggleTodo(todo);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"pl-2\",\n        children: \" Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"hover:scale-110 text-white opacity transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \"z-10 far fa-check-circle text-lg leading-lg mr-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, _this);\n}; // const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {\n//     return (\n//         <div>\n//             <li>\n//                 <label >\n//                 <input  type=\"checkbox\" checked={complete}/>\n//                 {games.name}\n//             </label>\n//             </li>\n//         </div>\n//     )\n// }\n\n\n_c = GameListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameListItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"GameListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lTGlzdEl0ZW0udHN4PzdmODciXSwibmFtZXMiOlsiR2FtZUxpc3RJdGVtIiwidG9kbyIsInRvZ2dsZVRvZG8iLCJjb25zb2xlIiwibG9nIiwiY292ZXIiLCJ1cmwiLCJncmVlbiIsImdyYXkiLCJjb21wbGV0ZSIsInJvdGF0ZVkiLCJvcGFjaXR5IiwiZGVsYXkiLCJyZXBsYWNlIiwibmFtZSIsImlkIiwiZ2FtZVBsYXllZCIsImdhbWVOb3RQbGF5ZWQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUF5QyxHQUFHLFNBQTVDQSxZQUE0QyxPQUEwQjtBQUFBLE1BQXZCQyxJQUF1QixRQUF2QkEsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixhQUFZQSxJQUFaLHVCQUFZQSxJQUFJLENBQUVJLEtBQU4sQ0FBWUMsR0FBeEI7QUFDRCxNQUFNQyxLQUFLLEdBQUUsNkRBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUUseURBQVo7QUFFQyxzQkFDQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNDO0FBQ0MsaUJBQVMsRUFDUlAsSUFBSSxDQUFDUSxRQUFMLEdBQ0csd0RBREgsR0FFRyxzREFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBU0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsZUFBTyxFQUFFO0FBQUVDLGlCQUFPLEVBQUUsR0FBWDtBQUFnQkMsaUJBQU8sRUFBRTtBQUF6QixTQURWO0FBRUMsZUFBTyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxpQkFBTyxFQUFFO0FBQXZCLFNBRlY7QUFHQyxrQkFBVSxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNB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O0FBQ0E7QUFDQTs7O0tBN0hNVCxZO0FBK0hTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FtZUxpc3RJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFuaW1hdGUsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEdhbWVMaXN0SXRlbTogUmVhY3QuRkM8R2FtZUxpc3RJdGVtUHJvcHM+ID0gKHsgdG9kbywgdG9nZ2xlVG9kbyB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKHRvZG8/LmNvdmVyLnVybCk7XG5jb25zdCBncmVlbj0gXCJsZzp0ZXh0LWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTUwMCAgIHRleHQteGwgbGVhZGluZy1sZyAgcHItMlwiXG5jb25zdCBncmF5PSBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCAgdGV4dC14bCBsZWFkaW5nLWxnIHByLTJcIlxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9Jyc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnIGtleT17dG9kby5pZH0+XG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0PyBcIiB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMTAgIG9wYWNpdHktODAgYmctZ3JheS05MDAgIFwiXG5cdFx0XHRcdFx0XHRcdDogXCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMTAgIG9wYWNpdHktMCBiZy1ncmF5LTkwMCAgXCJcblx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFBsYXllZFxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDxtb3Rpb24uaW1nXG5cdFx0XHRcdFx0aW5pdGlhbD17eyByb3RhdGVZOiAxODAsIG9wYWNpdHk6IDAgfX1cblx0XHRcdFx0XHRhbmltYXRlPXt7IHJvdGF0ZVk6IDAsIG9wYWNpdHk6IDEgfX1cblx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cblx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCBjb2wtc3Bhbi0yICBibG9jayByb3VuZGVkICdcblx0XHRcdFx0XHRzcmM9e3RvZG8/LmNvdmVyLnVybC5yZXBsYWNlKFwidF90aHVtYlwiLCBcInRfY292ZXJfYmlnXCIpfVxuXHRcdFx0XHRcdGFsdD17dG9kby5uYW1lfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgcHQtNCc+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9J3RleHQtZ3JheS0yMDAgJz4ge3RvZG8ubmFtZX08L2gyPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiAgY29udGFpbmVyIHB5LTQnPlxuXHRcdFx0XHR7LyoqIEl0ZW0vYnV0dG9uIDEgKiovfVxuXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlVG9kbyh0b2RvKX0gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG9wYWNpdHkgZmxleC1hdXRvJz5cblx0XHRcdFx0XHQ8aSBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHQ/IGdyZWVuICsgXCJmYXIgZmEtY2hlY2stY2lyY2xlXCJcblx0XHRcdFx0XHRcdFx0XHQ6IGdyYXkgKyBcImZhciBmYS1jaGVjay1jaXJjbGVcIlxuXHRcdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFBsYXllZFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgb3BhY2l0eSBmbGV4LWF1dG8nPlxuXHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0PyBnYW1lUGxheWVkXG5cdFx0XHRcdFx0XHRcdFx0OiBnYW1lTm90UGxheWVkXG5cdFx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+e1wiIFwifVxuXHRcdFx0XHRcdFdhdGNobGlzdFxuXHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBvcGFjaXR5IGZsZXgtYXV0byBmbGV4IGZsZXgtcm93IGJvcmRlciBweC0xIHJvdW5kZWQtbGcgcHktMSc+XG5cdFx0XHRcdFx0ey8qKiBJdGVtL2J1dHRvbiAyICoqL31cblxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG9wYWNpdHkgZmxleC1hdXRvJz5cblx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcImxnOnRleHQtZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIFwiICtcblx0XHRcdFx0XHRcdFx0XHRcdCAgXCIgZmFzIGZhLXRodW1icy11cCB0ZXh0LWxnIGxlYWRpbmctbGdcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0ey8qKiBJdGVtL2J1dHRvbiAzICoqL31cblxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG9wYWNpdHkgZmxleC1hdXRvJz5cblx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcImxnOnRleHQtZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIFwiICtcblx0XHRcdFx0XHRcdFx0XHRcdCAgXCIgZmFzIGZhLXRodW1icy1kb3duICB0ZXh0LWxnIGxlYWRpbmctbGdcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlID8gXCJsaW5lLXRocm91Z2hcIiA6IHVuZGVmaW5lZH0+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xuXHRcdFx0XHRcdGNoZWNrZWQ9e3RvZG8uY29tcGxldGV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHRvZ2dsZVRvZG8odG9kbyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBsLTJcIj4gUGxheWVkPC9zcGFuPlxuXHRcdFx0PC9sYWJlbD5cblxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J2hvdmVyOnNjYWxlLTExMCB0ZXh0LXdoaXRlIG9wYWNpdHkgdHJhbnNmb3JtIHRyYW5zbGF0ZS15LTMgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uJz5cblx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdD8gXCJsZzp0ZXh0LWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTUwMCBcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDAgXCIgK1xuXHRcdFx0XHRcdFx0XHRcdCAgXCJ6LTEwIGZhciBmYS1jaGVjay1jaXJjbGUgdGV4dC1sZyBsZWFkaW5nLWxnIG1yLTJcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG4vLyBjb25zdCBHYW1lTGlzdEl0ZW06UmVhY3QuRkMgPFRvZG9MaXN0SXRlbVByb3BzPiA9ICh7dG9kb30pID0+IHtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG5cbi8vICAgICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICAgICAgICA8bGFiZWwgPlxuXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjb21wbGV0ZX0vPlxuLy8gICAgICAgICAgICAgICAgIHtnYW1lcy5uYW1lfVxuLy8gICAgICAgICAgICAgPC9sYWJlbD5cblxuLy8gICAgICAgICAgICAgPC9saT5cblxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVMaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GameListItem.tsx\n");

/***/ })

})