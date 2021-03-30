webpackHotUpdate_N_E("pages/top",{

/***/ "./components/GameListItem.tsx":
/*!*************************************!*\
  !*** ./components/GameListItem.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/Kenny/Gamebox/box/components/GameListItem.tsx\",\n    _this = undefined;\n\n\n\n\nvar GameListItem = function GameListItem(_ref) {\n  var todo = _ref.todo,\n      toggleTodo = _ref.toggleTodo;\n  console.log(todo === null || todo === void 0 ? void 0 : todo.cover.url);\n  var green = \"lg:text-green-300 text-green-500   text-xl leading-lg  pr-2\";\n  var gray = \"lg:text-gray-300 text-gray-500  text-xl leading-lg pr-2\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: todo.complete ? \" w-full h-full absolute z-10  opacity-80 bg-gray-900  \" : \"w-full h-full absolute z-10  opacity-0 bg-gray-900  \",\n        children: \"Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].img, {\n        initial: {\n          rotateY: 180,\n          opacity: 0\n        },\n        animate: {\n          rotateY: 0,\n          opacity: 1\n        },\n        transition: {\n          delay: 0.3\n        },\n        className: \"w-full col-span-2  block rounded \",\n        src: todo === null || todo === void 0 ? void 0 : todo.cover.url.replace(\"t_thumb\", \"t_cover_big\"),\n        alt: todo.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, _this)]\n    }, todo.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid place-items-center pt-4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"text-gray-200 \",\n        children: [\" \", todo.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid grid-col-2 place-items-center pt-4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"grid grid-col-2 place-items-center container py-4\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return toggleTodo(todo);\n          },\n          className: \"  flex-auto\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? green + \" far fa-check-circle\" : gray + \" far fa-check-circle\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 6\n          }, _this), \"Played\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"text-white opacity flex-auto\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: todo.complete ? green + \" fas fa-bookmark\" : gray + \" fas fa-bookmark\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 6\n          }, _this), \" \", \"Watchlist\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 5\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"text-white opacity flex-auto flex flex-row border px-1 rounded-lg py-1\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"text-white opacity flex-auto\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n              className: todo.complete ? green + \" fas fa-thumbs-up text-lg leading-lg \" : gray + \" fas fa-thumbs-up text-lg leading-lg \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 7\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"text-white opacity flex-auto\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n              className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \" fas fa-thumbs-down  text-lg leading-lg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 7\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 6\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 5\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 4\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: todo.complete ? \"line-through\" : undefined,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"checkbox\",\n        checked: todo.complete,\n        onChange: function onChange() {\n          return toggleTodo(todo);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"pl-2\",\n        children: \" Played\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"hover:scale-110 text-white opacity transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: todo.complete ? \"lg:text-green-300 text-green-500 \" : \"lg:text-gray-300 text-gray-500 \" + \"z-10 far fa-check-circle text-lg leading-lg mr-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, _this);\n}; // const GameListItem:React.FC <TodoListItemProps> = ({todo}) => {\n//     return (\n//         <div>\n//             <li>\n//                 <label >\n//                 <input  type=\"checkbox\" checked={complete}/>\n//                 {games.name}\n//             </label>\n//             </li>\n//         </div>\n//     )\n// }\n\n\n_c = GameListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameListItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"GameListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lTGlzdEl0ZW0udHN4PzdmODciXSwibmFtZXMiOlsiR2FtZUxpc3RJdGVtIiwidG9kbyIsInRvZ2dsZVRvZG8iLCJjb25zb2xlIiwibG9nIiwiY292ZXIiLCJ1cmwiLCJncmVlbiIsImdyYXkiLCJjb21wbGV0ZSIsInJvdGF0ZVkiLCJvcGFjaXR5IiwiZGVsYXkiLCJyZXBsYWNlIiwibmFtZSIsImlkIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBeUMsR0FBRyxTQUE1Q0EsWUFBNEMsT0FBMEI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUMzRUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVosYUFBWUEsSUFBWix1QkFBWUEsSUFBSSxDQUFFSSxLQUFOLENBQVlDLEdBQXhCO0FBQ0QsTUFBTUMsS0FBSyxHQUFFLDZEQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFFLHlEQUFaO0FBRUMsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDQztBQUNDLGlCQUFTLEVBQ1JQLElBQUksQ0FBQ1EsUUFBTCxHQUNHLHdEQURILEdBRUcsc0RBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLGVBQU8sRUFBRTtBQUFFQyxpQkFBTyxFQUFFLEdBQVg7QUFBZ0JDLGlCQUFPLEVBQUU7QUFBekIsU0FEVjtBQUVDLGVBQU8sRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsaUJBQU8sRUFBRTtBQUF2QixTQUZWO0FBR0Msa0JBQVUsRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUhiO0FBSUMsaUJBQVMsRUFBQyxtQ0FKWDtBQUtD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REQ7QUEwR0EsQ0EvR0QsQyxDQWlIQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7OztLQWpJTVQsWTtBQW1JU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVMaXN0SXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBHYW1lTGlzdEl0ZW06IFJlYWN0LkZDPEdhbWVMaXN0SXRlbVByb3BzPiA9ICh7IHRvZG8sIHRvZ2dsZVRvZG8gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyh0b2RvPy5jb3Zlci51cmwpO1xuY29uc3QgZ3JlZW49IFwibGc6dGV4dC1ncmVlbi0zMDAgdGV4dC1ncmVlbi01MDAgICB0ZXh0LXhsIGxlYWRpbmctbGcgIHByLTJcIlxuY29uc3QgZ3JheT0gXCJsZzp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS01MDAgIHRleHQteGwgbGVhZGluZy1sZyBwci0yXCJcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPScnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJyBrZXk9e3RvZG8uaWR9PlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdD8gXCIgdy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB6LTEwICBvcGFjaXR5LTgwIGJnLWdyYXktOTAwICBcIlxuXHRcdFx0XHRcdFx0XHQ6IFwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB6LTEwICBvcGFjaXR5LTAgYmctZ3JheS05MDAgIFwiXG5cdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRQbGF5ZWRcblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8bW90aW9uLmltZ1xuXHRcdFx0XHRcdGluaXRpYWw9e3sgcm90YXRlWTogMTgwLCBvcGFjaXR5OiAwIH19XG5cdFx0XHRcdFx0YW5pbWF0ZT17eyByb3RhdGVZOiAwLCBvcGFjaXR5OiAxIH19XG5cdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSd3LWZ1bGwgY29sLXNwYW4tMiAgYmxvY2sgcm91bmRlZCAnXG5cdFx0XHRcdFx0c3JjPXt0b2RvPy5jb3Zlci51cmwucmVwbGFjZShcInRfdGh1bWJcIiwgXCJ0X2NvdmVyX2JpZ1wiKX1cblx0XHRcdFx0XHRhbHQ9e3RvZG8ubmFtZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHB0LTQnPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPSd0ZXh0LWdyYXktMjAwICc+IHt0b2RvLm5hbWV9PC9oMj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbC0yIHBsYWNlLWl0ZW1zLWNlbnRlciBwdC00Jz5cblxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbC0yIHBsYWNlLWl0ZW1zLWNlbnRlciBjb250YWluZXIgcHktNCc+XG5cdFx0XHRcdHsvKiogSXRlbS9idXR0b24gMSAqKi99XG5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVUb2RvKHRvZG8pfSBjbGFzc05hbWU9JyAgZmxleC1hdXRvJz5cblx0XHRcdFx0XHQ8aSBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHQ/IGdyZWVuICsgXCIgZmFyIGZhLWNoZWNrLWNpcmNsZVwiXG5cdFx0XHRcdFx0XHRcdFx0OiBncmF5ICsgXCIgZmFyIGZhLWNoZWNrLWNpcmNsZVwiXG5cdFx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0UGxheWVkXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBvcGFjaXR5IGZsZXgtYXV0byc+XG5cdFx0XHRcdFx0PGlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdHRvZG8uY29tcGxldGVcblx0XHRcdFx0XHRcdFx0XHQ/IGdyZWVuICsgXCIgZmFzIGZhLWJvb2ttYXJrXCJcblx0XHRcdFx0XHRcdFx0XHQ6IGdyYXkgKyBcIiBmYXMgZmEtYm9va21hcmtcIlxuXHRcdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPntcIiBcIn1cblx0XHRcdFx0XHRXYXRjaGxpc3Rcblx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgb3BhY2l0eSBmbGV4LWF1dG8gZmxleCBmbGV4LXJvdyBib3JkZXIgcHgtMSByb3VuZGVkLWxnIHB5LTEnPlxuXHRcdFx0XHRcdHsvKiogSXRlbS9idXR0b24gMiAqKi99XG5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBvcGFjaXR5IGZsZXgtYXV0byc+XG5cdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyBcblx0XHRcdFx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IGdyZWVuICsgXCIgZmFzIGZhLXRodW1icy11cCB0ZXh0LWxnIGxlYWRpbmctbGcgXCJcblx0XHRcdFx0XHRcdFx0XHRcdDogZ3JheSArIFwiIGZhcyBmYS10aHVtYnMtdXAgdGV4dC1sZyBsZWFkaW5nLWxnIFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgIFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0ey8qKiBJdGVtL2J1dHRvbiAzICoqL31cblxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG9wYWNpdHkgZmxleC1hdXRvJz5cblx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0dG9kby5jb21wbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcImxnOnRleHQtZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFwibGc6dGV4dC1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIFwiICtcblx0XHRcdFx0XHRcdFx0XHRcdCAgXCIgZmFzIGZhLXRodW1icy1kb3duICB0ZXh0LWxnIGxlYWRpbmctbGdcIlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3RvZG8uY29tcGxldGUgPyBcImxpbmUtdGhyb3VnaFwiIDogdW5kZWZpbmVkfT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXG5cdFx0XHRcdFx0Y2hlY2tlZD17dG9kby5jb21wbGV0ZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gdG9nZ2xlVG9kbyh0b2RvKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGwtMlwiPiBQbGF5ZWQ8L3NwYW4+XG5cdFx0XHQ8L2xhYmVsPlxuXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT0naG92ZXI6c2NhbGUtMTEwIHRleHQtd2hpdGUgb3BhY2l0eSB0cmFuc2Zvcm0gdHJhbnNsYXRlLXktMyBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24nPlxuXHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlXG5cdFx0XHRcdFx0XHRcdFx0PyBcImxnOnRleHQtZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0OiBcImxnOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBcIiArXG5cdFx0XHRcdFx0XHRcdFx0ICBcInotMTAgZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWxnIGxlYWRpbmctbGcgbXItMlwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbi8vIGNvbnN0IEdhbWVMaXN0SXRlbTpSZWFjdC5GQyA8VG9kb0xpc3RJdGVtUHJvcHM+ID0gKHt0b2RvfSkgPT4ge1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cblxuLy8gICAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgICAgICAgIDxsYWJlbCA+XG5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NvbXBsZXRlfS8+XG4vLyAgICAgICAgICAgICAgICAge2dhbWVzLm5hbWV9XG4vLyAgICAgICAgICAgICA8L2xhYmVsPlxuXG4vLyAgICAgICAgICAgICA8L2xpPlxuXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUxpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GameListItem.tsx\n");

/***/ })

})