"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./pages/favorites.js":
/*!****************************!*\
  !*** ./pages/favorites.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Repos/Repos.module.css */ \"./Components/Repos/Repos.module.css\");\n/* harmony import */ var _Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/GitHub */ \"./node_modules/@mui/icons-material/GitHub.js\");\n/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Star */ \"./node_modules/@mui/icons-material/Star.js\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-vertical-timeline-component */ \"./node_modules/react-vertical-timeline-component/dist-es6/index.js\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction Favorites(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), favorites1 = ref[0], setFavorites = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var data = localStorage.getItem('favorites');\n        if (data) {\n            setFavorites(JSON.parse(data));\n        }\n    });\n    var handleFavorites = function(repo) {\n        var favorites = localStorage.getItem('favorites');\n        if (favorites) {\n            favorites = JSON.parse(favorites);\n            var index = favorites.findIndex(function(fav) {\n                return fav.id === repo.id;\n            });\n            if (index === -1) {\n                favorites.push(repo);\n            } else {\n                favorites.splice(index, 1);\n            }\n        } else {\n            favorites = [\n                repo\n            ];\n        }\n        localStorage.setItem('favorites', JSON.stringify(favorites));\n        setFavorites(_toConsumableArray(favorites));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__.VerticalTimeline, {\n            className: (_Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4___default().verticalTimeline),\n            /*style={{ display: repo.name ? 'block' : 'none' }}*/ lineColor: '#BBBBBB',\n            __source: {\n                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            },\n            __self: this,\n            children: favorites1.map(function(repo) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__.VerticalTimelineElement, {\n                    className: \"vertical-timeline-element--work\",\n                    contentStyle: {\n                        background: '#333333',\n                        color: '#fff'\n                    },\n                    contentArrowStyle: {\n                        borderRight: '7px solid  #333333'\n                    },\n                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    }),\n                    iconStyle: {\n                        background: '#333333',\n                        color: '#fff'\n                    },\n                    date: new Date(repo.created_at).toLocaleDateString('tr-TR'),\n                    dateClassName: (_Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4___default().date),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleContainer),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                    className: \"vertical-timeline-element-title\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: repo.name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                    className: (_Components_Repos_Repos_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon),\n                                    onClick: function() {\n                                        return handleFavorites(repo);\n                                    },\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        color: favorites1.some(function(fav) {\n                                            return fav.id === repo.id;\n                                        }) ? 'primary' : 'secondary',\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                            className: \"vertical-timeline-element-subtitle\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: repo.language\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            },\n                            __self: _this,\n                            children: repo.description\n                        })\n                    ]\n                }, repo.id));\n            })\n        })\n    }));\n}\n_s(Favorites, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Favorites;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorites);\nvar _c;\n$RefreshReg$(_c, \"Favorites\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMbkIsU0FBUyxFQUFFekIsZ0ZBQVc7b0NBQ3RCNkMsT0FBTyxFQUFFLFFBQVE7d0NBQUYvQixNQUFNLENBQU5BLGVBQWUsQ0FBQ0MsSUFBSTs7Ozs7Ozs7bUhBRWxDYixnRUFBUTt3Q0FDUDZCLEtBQUssRUFDSHhCLFVBQVMsQ0FBQ3VDLElBQUksQ0FBQyxRQUFRLENBQVA1QixHQUFHOzRDQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0MsRUFBRSxLQUFLSixJQUFJLENBQUNJLEVBQUU7NkNBQ3RDLENBQVMsV0FDVCxDQUFXOzs7Ozs7Ozs7Ozs2RkFNdEI0QixDQUFFOzs7Ozs7Ozs2RkFDRkMsQ0FBRTs0QkFBQ3ZCLFNBQVMsRUFBQyxDQUFvQzs7Ozs7OztzQ0FDL0NWLElBQUksQ0FBQ2tDLFFBQVE7OzZGQUVmQyxDQUFDOzs7Ozs7O3NDQUFFbkMsSUFBSSxDQUFDb0MsV0FBVzs7O21CQS9CZnBDLElBQUksQ0FBQ0ksRUFBRTtZQWtDbEIsQ0FBQzs7O0FBSVQsQ0FBQztHQWhGUWQsU0FBUztLQUFUQSxTQUFTO0FBa0ZsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXZvcml0ZXMuanM/YmYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Db21wb25lbnRzL1JlcG9zL1JlcG9zLm1vZHVsZS5jc3MnXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YidcbmltcG9ydCBTdGFySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXInXG5cbmltcG9ydCB7XG4gIFZlcnRpY2FsVGltZWxpbmUsXG4gIFZlcnRpY2FsVGltZWxpbmVFbGVtZW50XG59IGZyb20gJ3JlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudCdcbmltcG9ydCAncmVhY3QtdmVydGljYWwtdGltZWxpbmUtY29tcG9uZW50L3N0eWxlLm1pbi5jc3MnXG5cbmZ1bmN0aW9uIEZhdm9yaXRlcyhwcm9wcykge1xuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHNldEZhdm9yaXRlcyhKU09OLnBhcnNlKGRhdGEpKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBoYW5kbGVGYXZvcml0ZXMgPSAocmVwbykgPT4ge1xuICAgIGxldCBmYXZvcml0ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJylcblxuICAgIGlmIChmYXZvcml0ZXMpIHtcbiAgICAgIGZhdm9yaXRlcyA9IEpTT04ucGFyc2UoZmF2b3JpdGVzKVxuXG4gICAgICBjb25zdCBpbmRleCA9IGZhdm9yaXRlcy5maW5kSW5kZXgoKGZhdikgPT4ge1xuICAgICAgICByZXR1cm4gZmF2LmlkID09PSByZXBvLmlkXG4gICAgICB9KVxuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGZhdm9yaXRlcy5wdXNoKHJlcG8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYXZvcml0ZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmYXZvcml0ZXMgPSBbcmVwb11cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIEpTT04uc3RyaW5naWZ5KGZhdm9yaXRlcykpXG4gICAgc2V0RmF2b3JpdGVzKFsuLi5mYXZvcml0ZXNdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFZlcnRpY2FsVGltZWxpbmVcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmVydGljYWxUaW1lbGluZX1cbiAgICAgICAgLypzdHlsZT17eyBkaXNwbGF5OiByZXBvLm5hbWUgPyAnYmxvY2snIDogJ25vbmUnIH19Ki9cbiAgICAgICAgbGluZUNvbG9yPXsnI0JCQkJCQid9XG4gICAgICA+XG4gICAgICAgIHtmYXZvcml0ZXMubWFwKChyZXBvKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudFxuICAgICAgICAgICAgICBrZXk9e3JlcG8uaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtLXdvcmtcIlxuICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3sgYmFja2dyb3VuZDogJyMzMzMzMzMnLCBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgICAgIGNvbnRlbnRBcnJvd1N0eWxlPXt7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICc3cHggc29saWQgICMzMzMzMzMnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGljb249ezxHaXRIdWJJY29uIC8+fVxuICAgICAgICAgICAgICBpY29uU3R5bGU9e3sgYmFja2dyb3VuZDogJyMzMzMzMzMnLCBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgICAgIGRhdGU9e25ldyBEYXRlKHJlcG8uY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCd0ci1UUicpfVxuICAgICAgICAgICAgICBkYXRlQ2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtdGl0bGVcIj57cmVwby5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZhdm9yaXRlcyhyZXBvKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U3Rhckljb25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlcy5zb21lKChmYXYpID0+IGZhdi5pZCA9PT0gcmVwby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidmVydGljYWwtdGltZWxpbmUtZWxlbWVudC1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIHtyZXBvLmxhbmd1YWdlfVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8cD57cmVwby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmVFbGVtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1ZlcnRpY2FsVGltZWxpbmU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkdpdEh1Ykljb24iLCJTdGFySWNvbiIsIlZlcnRpY2FsVGltZWxpbmUiLCJWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudCIsIkZhdm9yaXRlcyIsInByb3BzIiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJoYW5kbGVGYXZvcml0ZXMiLCJyZXBvIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJmYXYiLCJpZCIsInB1c2giLCJzcGxpY2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwidmVydGljYWxUaW1lbGluZSIsImxpbmVDb2xvciIsIm1hcCIsImNvbnRlbnRTdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsImNvbnRlbnRBcnJvd1N0eWxlIiwiYm9yZGVyUmlnaHQiLCJpY29uIiwiaWNvblN0eWxlIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF0ZUNsYXNzTmFtZSIsInRpdGxlQ29udGFpbmVyIiwiaDMiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsInNvbWUiLCJiciIsImg0IiwibGFuZ3VhZ2UiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/favorites.js\n");

/***/ })

});