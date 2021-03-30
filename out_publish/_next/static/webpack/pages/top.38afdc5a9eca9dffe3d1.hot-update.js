webpackHotUpdate_N_E("pages/top",{

/***/ "./components/GameListItem.tsx":
/*!*************************************!*\
  !*** ./components/GameListItem.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/components/GameListItem.tsx\",\n    _this = undefined;\n\n\n\n\nvar GameListItem = function GameListItem(_ref) {\n  var todo = _ref.todo,\n      toggleTodo = _ref.toggleTodo;\n  console.log(todo === null || todo === void 0 ? void 0 : todo.cover.url);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: todo.complete ? \" w-full h-full absolute z-10  opacity-80 bg-gray-900  \" : \"w-full h-full absolute z-10  opacity-0 bg-gray-900  \",\n        children: \"Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].img, {\n        initial: {\n          rotateY: 180,\n          opacity: 0\n        },\n        animate: {\n          rotateY: 0,\n          opacity: 1\n        },\n        transition: {\n          delay: 0.3\n        },\n        className: \"w-full col-span-2  block rounded \",\n        src: todo === null || todo === void 0 ? void 0 : todo.cover.url.replace(\"t_thumb\", \"t_cover_big\"),\n        alt: todo.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 5\n      }, _this)]\n    }, todo.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid place-items-center pt-4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-gray-200 \",\n        children: [\" \", todo.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-row justify-between  container py-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return toggleTodo(todo);\n        },\n        className: \"text-white opacity flex-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? \"lg:text-green-300 text-green-500  far fa-check-circle text-xl leading-lg \" : \"lg:text-gray-300 text-gray-500  far fa-check-circle text-xl leading-lg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 6\n        }, _this), \"Playedd\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"text-white opacity flex-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-bookmark text-xl leading-lg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 6\n        }, _this), \" \", \"Watchlist\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-white opacity flex-auto flex flex-row border px-1 rounded-lg py-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"text-white opacity flex-auto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-thumbs-up text-lg leading-lg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"text-white opacity flex-auto\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-thumbs-down  text-lg leading-lg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: todo.complete ? \"line-through\" : undefined,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"checkbox\",\n        checked: todo.complete,\n        onChange: function onChange() {\n          return toggleTodo(todo);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"pl-2\",\n        children: \" Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"hover:scale-110 text-white opacity transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \"z-10 far fa-check-circle text-lg leading-lg mr-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n}; // const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {\n//     return (\n//         <div>\n//             <li>\n//                 <label >\n//                 <input  type=\"checkbox\" checked={complete}/>\n//                 {games.name}\n//             </label>\n//             </li>\n//         </div>\n//     )\n// }\n\n\n_c = GameListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameListItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"GameListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lTGlzdEl0ZW0udHN4PzdmODciXSwibmFtZXMiOlsiR2FtZUxpc3RJdGVtIiwidG9kbyIsInRvZ2dsZVRvZG8iLCJjb25zb2xlIiwibG9nIiwiY292ZXIiLCJ1cmwiLCJjb21wbGV0ZSIsInJvdGF0ZVkiLCJvcGFjaXR5IiwiZGVsYXkiLCJyZXBsYWNlIiwibmFtZSIsImlkIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBeUMsR0FBRyxTQUE1Q0EsWUFBNEMsT0FBMEI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUMzRUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVosYUFBWUEsSUFBWix1QkFBWUEsSUFBSSxDQUFFSSxLQUFOLENBQVlDLEdBQXhCO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQ1JMLElBQUksQ0FBQ00sUUFBTCxHQUNHLHdEQURILEdBRUcsc0RBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLGVBQU8sRUFBRTtBQUFFQyxpQkFBTyxFQUFFLEdBQVg7QUFBZ0JDLGlCQUFPLEVBQUU7QUFBekIsU0FEVjtBQUVDLGVBQU8sRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsaUJBQU8sRUFBRTtBQUF2QixTQUZWO0FBR0Msa0JBQVUsRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUhiO0FBSUMsaUJBQVMsRUFBQyxtQ0FKWDtBQUtDLFdBQUcsRUFBRVQsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVJLEtBQU4sQ0FBWUMsR0FBWixDQUFnQkssT0FBaEIsQ0FBd0IsU0FBeEIsRUFBbUMsYUFBbkMsQ0FMTjtBQU1DLFdBQUcsRUFBRVYsSUFBSSxDQUFDVztBQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURDtBQUFBLE9BQStCWCxJQUFJLENBQUNZLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQW1CQztBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNDO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBLHdCQUFpQ1osSUFBSSxDQUFDVyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJELGVBdUJDO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBR0M7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVYsVUFBVSxDQUFDRCxJQUFELENBQWhCO0FBQUEsU0FBakI7QUFBeUMsaUJBQVMsRUFBQyw4QkFBbkQ7QUFBQSxnQ0FDQztBQUNDLG1CQUFTLEVBQ1JBLElBQUksQ0FBQ00sUUFBTCxHQUNHLDJFQURILEdBRUc7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhELGVBY0M7QUFBUSxpQkFBUyxFQUFDLDhCQUFsQjtBQUFBLGdDQUNDO0FBQ0MsbUJBQVMsRUFDUk4sSUFBSSxDQUFDTSxRQUFMLEdBQ0csbUNBREgsR0FFRyxvQ0FDQTtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsRUFRSSxHQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRELGVBMEJDO0FBQUssaUJBQVMsRUFBQyx3RUFBZjtBQUFBLGdDQUdDO0FBQVEsbUJBQVMsRUFBQyw4QkFBbEI7QUFBQSxpQ0FDQztBQUNDLHFCQUFTLEVBQ1JOLElBQUksQ0FBQ00sUUFBTCxHQUNHLG1DQURILEdBRUcsb0NBQ0E7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRCxlQWdCQztBQUFRLG1CQUFTLEVBQUMsOEJBQWxCO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUNSTixJQUFJLENBQUNNLFFBQUwsR0FDRyxtQ0FESCxHQUVHLG9DQUNBO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkQsZUE4RUM7QUFBTyxlQUFTLEVBQUVOLElBQUksQ0FBQ00sUUFBTCxHQUFnQixjQUFoQixHQUFpQ08sU0FBbkQ7QUFBQSw4QkFDQztBQUNDLFlBQUksRUFBQyxVQUROO0FBRUMsZUFBTyxFQUFFYixJQUFJLENBQUNNLFFBRmY7QUFHQyxnQkFBUSxFQUFFO0FBQUEsaUJBQU1MLFVBQVUsQ0FBQ0QsSUFBRCxDQUFoQjtBQUFBO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBTUM7QUFBTSxpQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUVELGVBdUZDO0FBQUEsNkJBQ0M7QUFBUSxpQkFBUyxFQUFDLHlIQUFsQjtBQUFBLCtCQUNDO0FBQ0MsbUJBQVMsRUFDUkEsSUFBSSxDQUFDTSxRQUFMLEdBQ0csbUNBREgsR0FFRyxvQ0FDQTtBQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXNHQSxDQXpHRCxDLENBMkdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7O0tBM0hNUCxZO0FBNkhTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FtZUxpc3RJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFuaW1hdGUsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEdhbWVMaXN0SXRlbTogUmVhY3QuRkM8R2FtZUxpc3RJdGVtUHJvcHM+ID0gKHsgdG9kbywgdG9nZ2xlVG9kbyB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKHRvZG8/LmNvdmVyLnVybCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZScga2V5PXt0b2RvLmlkfT5cblx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHQ/IFwiIHctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgei0xMCAgb3BhY2l0eS04MCBiZy1ncmF5LTkwMCAgXCJcblx0XHRcdFx0XHRcdFx0OiBcInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgei0xMCAgb3BhY2l0eS0wIGJnLWdyYXktOTAwICBcIlxuXHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0UGxheWVkXG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PG1vdGlvbi5pbWdcblx0XHRcdFx0XHRpbml0aWFsPXt7IHJvdGF0ZVk6IDE4MCwgb3BhY2l0eTogMCB9fVxuXHRcdFx0XHRcdGFuaW1hdGU9e3sgcm90YXRlWTogMCwgb3BhY2l0eTogMSB9fVxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMyB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT0ndy1mdWxsIGNvbC1zcGFuLTIgIGJsb2NrIHJvdW5kZWQgJ1xuXHRcdFx0XHRcdHNyYz17dG9kbz8uY292ZXIudXJsLnJlcGxhY2UoXCJ0X3RodW1iXCIsIFwidF9jb3Zlcl9iaWdcIil9XG5cdFx0XHRcdFx0YWx0PXt0b2RvLm5hbWV9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdncmlkIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC00Jz5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTIwMCAnPiB7dG9kby5uYW1lfTwvaDI+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuICBjb250YWluZXIgcHktNCc+XG5cdFx0XHRcdHsvKiogSXRlbS9idXR0b24gMSAqKi99XG5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUb2RvKHRvZG8pfSBjbGFzc05hbWU9J3RleHQtd2hpdGUgb3BhY2l0eSBmbGV4LWF1dG8nPlxuXHRcdFx0XHRcdDxpIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdD8gXCJsZzp0ZXh0LWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTUwMCAgZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LXhsIGxlYWRpbmctbGcgXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwICBmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQteGwgbGVhZGluZy1sZ1wiXG5cdFx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0UGxheWVkZFxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgb3BhY2l0eSBmbGV4LWF1dG8nPlxuXHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0PyBcImxnOnRleHQtZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBcIiArXG5cdFx0XHRcdFx0XHRcdFx0ICBcIiBmYXMgZmEtYm9va21hcmsgdGV4dC14bCBsZWFkaW5nLWxnXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPntcIiBcIn1cblx0XHRcdFx0XHRXYXRjaGxpc3Rcblx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgb3BhY2l0eSBmbGV4LWF1dG8gZmxleCBmbGV4LXJvdyBib3JkZXIgcHgtMSByb3VuZGVkLWxnIHB5LTEnPlxuXHRcdFx0XHRcdHsvKiogSXRlbS9idXR0b24gMiAqKi99XG5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBvcGFjaXR5IGZsZXgtYXV0byc+XG5cdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHRcdD8gXCJsZzp0ZXh0LWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTUwMCBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OiBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHQgIFwiIGZhcyBmYS10aHVtYnMtdXAgdGV4dC1sZyBsZWFkaW5nLWxnXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdHsvKiogSXRlbS9idXR0b24gMyAqKi99XG5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBvcGFjaXR5IGZsZXgtYXV0byc+XG5cdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHRcdD8gXCJsZzp0ZXh0LWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTUwMCBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OiBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBcIiArXG5cdFx0XHRcdFx0XHRcdFx0XHQgIFwiIGZhcyBmYS10aHVtYnMtZG93biAgdGV4dC1sZyBsZWFkaW5nLWxnXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT17dG9kby5jb21wbGV0ZSA/IFwibGluZS10aHJvdWdoXCIgOiB1bmRlZmluZWR9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcblx0XHRcdFx0XHRjaGVja2VkPXt0b2RvLmNvbXBsZXRlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVUb2RvKHRvZG8pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwbC0yXCI+IFBsYXllZDwvc3Bhbj5cblx0XHRcdDwvbGFiZWw+XG5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSdob3ZlcjpzY2FsZS0xMTAgdGV4dC13aGl0ZSBvcGFjaXR5IHRyYW5zZm9ybSB0cmFuc2xhdGUteS0zIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbic+XG5cdFx0XHRcdFx0PGlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHQ/IFwibGc6dGV4dC1ncmVlbi0zMDAgdGV4dC1ncmVlbi01MDAgXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIFwiICtcblx0XHRcdFx0XHRcdFx0XHQgIFwiei0xMCBmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtbGcgbGVhZGluZy1sZyBtci0yXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuLy8gY29uc3QgR2FtZUxpc3RJdGVtOlJlYWN0LkZDIDxUb2RvTGlzdEl0ZW1Qcm9wcz4gPSAoe3RvZG99KSA9PiB7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuXG4vLyAgICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgICAgICAgPGxhYmVsID5cblxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Y29tcGxldGV9Lz5cbi8vICAgICAgICAgICAgICAgICB7Z2FtZXMubmFtZX1cbi8vICAgICAgICAgICAgIDwvbGFiZWw+XG5cbi8vICAgICAgICAgICAgIDwvbGk+XG5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lTGlzdEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameListItem.tsx\n");

/***/ })

})