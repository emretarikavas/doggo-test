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
exports.id = "pages/favorites";
exports.ids = ["pages/favorites"];
exports.modules = {

/***/ "./Components/styles/favorites.module.css":
/*!************************************************!*\
  !*** ./Components/styles/favorites.module.css ***!
  \************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"verticalTimeline\": \"favorites_verticalTimeline__K14Tf\",\n\t\"date\": \"favorites_date__3ZmOL\",\n\t\"titleContainer\": \"favorites_titleContainer__35gaU\",\n\t\"icon\": \"favorites_icon__39RJk\",\n\t\"clone\": \"favorites_clone__omu-o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3N0eWxlcy9mYXZvcml0ZXMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9nZ28tZ2l0aHViLW5leHRqcy8uL0NvbXBvbmVudHMvc3R5bGVzL2Zhdm9yaXRlcy5tb2R1bGUuY3NzP2Y0MTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidmVydGljYWxUaW1lbGluZVwiOiBcImZhdm9yaXRlc192ZXJ0aWNhbFRpbWVsaW5lX19LMTRUZlwiLFxuXHRcImRhdGVcIjogXCJmYXZvcml0ZXNfZGF0ZV9fM1ptT0xcIixcblx0XCJ0aXRsZUNvbnRhaW5lclwiOiBcImZhdm9yaXRlc190aXRsZUNvbnRhaW5lcl9fMzVnYVVcIixcblx0XCJpY29uXCI6IFwiZmF2b3JpdGVzX2ljb25fXzM5UkprXCIsXG5cdFwiY2xvbmVcIjogXCJmYXZvcml0ZXNfY2xvbmVfX29tdS1vXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/styles/favorites.module.css\n");

/***/ }),

/***/ "./pages/favorites.js":
/*!****************************!*\
  !*** ./pages/favorites.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/GitHub */ \"@mui/icons-material/GitHub\");\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Star */ \"@mui/icons-material/Star\");\n/* harmony import */ var _mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/styles/favorites.module.css */ \"./Components/styles/favorites.module.css\");\n/* harmony import */ var _Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vertical-timeline-component */ \"react-vertical-timeline-component\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Favorites(props) {\n    const { 0: favorites1 , 1: setFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const data = localStorage.getItem('favorites');\n        if (data) {\n            setFavorites(JSON.parse(data));\n        }\n    });\n    const handleFavorites = (repo)=>{\n        let favorites = localStorage.getItem('favorites');\n        if (favorites) {\n            favorites = JSON.parse(favorites);\n            const index = favorites.findIndex((fav)=>{\n                return fav.id === repo.id;\n            });\n            if (index === -1) {\n                favorites.push(repo);\n            } else {\n                favorites.splice(index, 1);\n            }\n        } else {\n            favorites = [\n                repo\n            ];\n        }\n        localStorage.setItem('favorites', JSON.stringify(favorites));\n        setFavorites([\n            ...favorites\n        ]);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__.VerticalTimeline, {\n            className: (_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default().verticalTimeline),\n            /*style={{ display: repo.name ? 'block' : 'none' }}*/ lineColor: '#BBBBBB',\n            __source: {\n                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            },\n            __self: this,\n            children: favorites1.map((repo)=>{\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_4__.VerticalTimelineElement, {\n                    className: \"vertical-timeline-element--work\",\n                    contentStyle: {\n                        background: '#333333',\n                        color: '#fff'\n                    },\n                    contentArrowStyle: {\n                        borderRight: '7px solid  #333333'\n                    },\n                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    }),\n                    iconStyle: {\n                        background: '#333333',\n                        color: '#fff'\n                    },\n                    date: new Date(repo.created_at).toLocaleDateString('tr-TR'),\n                    dateClassName: (_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default().date),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default().titleContainer),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                    className: \"vertical-timeline-element-title\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: repo.full_name\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                    className: (_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon),\n                                    onClick: ()=>handleFavorites(repo)\n                                    ,\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_icons_material_Star__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        color: favorites1.some((fav)=>fav.id === repo.id\n                                        ) ? 'primary' : 'secondary',\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        },\n                                        __self: this\n                                    })\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                            className: \"vertical-timeline-element-subtitle\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: repo.language\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: repo.description\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            target: \"_blank\",\n                            className: (_Components_styles_favorites_module_css__WEBPACK_IMPORTED_MODULE_6___default().clone),\n                            href: repo.clone_url,\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\tarik\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\https\\\\doggo-github-NextJs\\\\pages\\\\favorites.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: \"Projeye Gitmek İ\\xe7in Tıklayın\"\n                        })\n                    ]\n                }, repo.id));\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorites);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2QsaUVBQVE7d0NBQ1A4QixLQUFLLEVBQ0h4QixVQUFTLENBQUN1QyxJQUFJLEVBQUU1QixHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsRUFBRSxLQUFLSixJQUFJLENBQUNJLEVBQUU7NENBQ3RDLENBQVMsV0FDVCxDQUFXOzs7Ozs7Ozs7Ozs2RkFNdEI0QixDQUFFOzs7Ozs7Ozs2RkFDRkMsQ0FBRTs0QkFBQ3ZCLFNBQVMsRUFBQyxDQUFvQzs7Ozs7OztzQ0FDL0NWLElBQUksQ0FBQ2tDLFFBQVE7OzZGQUVmQyxDQUFDOzs7Ozs7O3NDQUFFbkMsSUFBSSxDQUFDb0MsV0FBVzs7NkZBQ25CQyxDQUFDOzRCQUFDQyxNQUFNLEVBQUMsQ0FBUTs0QkFBQzVCLFNBQVMsRUFBRXZCLHNGQUFZOzRCQUFFcUQsSUFBSSxFQUFFeEMsSUFBSSxDQUFDeUMsU0FBUzs7Ozs7OztzQ0FBRSxDQUVsRTs7O21CQXJDS3pDLElBQUksQ0FBQ0ksRUFBRTtZQXdDbEIsQ0FBQzs7O0FBSVQsQ0FBQztBQUVELGlFQUFlZCxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9nZ28tZ2l0aHViLW5leHRqcy8uL3BhZ2VzL2Zhdm9yaXRlcy5qcz9iZjM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dpdEh1YidcbmltcG9ydCBTdGFySWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1N0YXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudHMvc3R5bGVzL2Zhdm9yaXRlcy5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQge1xuICBWZXJ0aWNhbFRpbWVsaW5lLFxuICBWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudFxufSBmcm9tICdyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnQnXG5pbXBvcnQgJ3JlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudC9zdHlsZS5taW4uY3NzJ1xuXG5mdW5jdGlvbiBGYXZvcml0ZXMocHJvcHMpIHtcbiAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKVxuICAgIGlmIChkYXRhKSB7XG4gICAgICBzZXRGYXZvcml0ZXMoSlNPTi5wYXJzZShkYXRhKSlcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlRmF2b3JpdGVzID0gKHJlcG8pID0+IHtcbiAgICBsZXQgZmF2b3JpdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpXG5cbiAgICBpZiAoZmF2b3JpdGVzKSB7XG4gICAgICBmYXZvcml0ZXMgPSBKU09OLnBhcnNlKGZhdm9yaXRlcylcblxuICAgICAgY29uc3QgaW5kZXggPSBmYXZvcml0ZXMuZmluZEluZGV4KChmYXYpID0+IHtcbiAgICAgICAgcmV0dXJuIGZhdi5pZCA9PT0gcmVwby5pZFxuICAgICAgfSlcblxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBmYXZvcml0ZXMucHVzaChyZXBvKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmF2b3JpdGVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmF2b3JpdGVzID0gW3JlcG9dXG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBKU09OLnN0cmluZ2lmeShmYXZvcml0ZXMpKVxuICAgIHNldEZhdm9yaXRlcyhbLi4uZmF2b3JpdGVzXSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcnRpY2FsVGltZWxpbmV9XG4gICAgICAgIC8qc3R5bGU9e3sgZGlzcGxheTogcmVwby5uYW1lID8gJ2Jsb2NrJyA6ICdub25lJyB9fSovXG4gICAgICAgIGxpbmVDb2xvcj17JyNCQkJCQkInfVxuICAgICAgPlxuICAgICAgICB7ZmF2b3JpdGVzLm1hcCgocmVwbykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VmVydGljYWxUaW1lbGluZUVsZW1lbnRcbiAgICAgICAgICAgICAga2V5PXtyZXBvLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LS13b3JrXCJcbiAgICAgICAgICAgICAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMzMzMzMzJywgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgICAgICBjb250ZW50QXJyb3dTdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnN3B4IHNvbGlkICAjMzMzMzMzJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXs8R2l0SHViSWNvbiAvPn1cbiAgICAgICAgICAgICAgaWNvblN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMzMzMzMzJywgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgICAgICBkYXRlPXtuZXcgRGF0ZShyZXBvLmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygndHItVFInKX1cbiAgICAgICAgICAgICAgZGF0ZUNsYXNzTmFtZT17c3R5bGVzLmRhdGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7cmVwby5mdWxsX25hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGYXZvcml0ZXMocmVwbyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFN0YXJJY29uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXMuc29tZSgoZmF2KSA9PiBmYXYuaWQgPT09IHJlcG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7cmVwby5sYW5ndWFnZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHA+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e3N0eWxlcy5jbG9uZX0gaHJlZj17cmVwby5jbG9uZV91cmx9PlxuICAgICAgICAgICAgICAgIFByb2pleWUgR2l0bWVrIMSww6dpbiBUxLFrbGF5xLFuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvVmVydGljYWxUaW1lbGluZUVsZW1lbnQ+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvVmVydGljYWxUaW1lbGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2l0SHViSWNvbiIsIlN0YXJJY29uIiwic3R5bGVzIiwiVmVydGljYWxUaW1lbGluZSIsIlZlcnRpY2FsVGltZWxpbmVFbGVtZW50IiwiRmF2b3JpdGVzIiwicHJvcHMiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImhhbmRsZUZhdm9yaXRlcyIsInJlcG8iLCJpbmRleCIsImZpbmRJbmRleCIsImZhdiIsImlkIiwicHVzaCIsInNwbGljZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJ2ZXJ0aWNhbFRpbWVsaW5lIiwibGluZUNvbG9yIiwibWFwIiwiY29udGVudFN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY29udGVudEFycm93U3R5bGUiLCJib3JkZXJSaWdodCIsImljb24iLCJpY29uU3R5bGUiLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXRlQ2xhc3NOYW1lIiwidGl0bGVDb250YWluZXIiLCJoMyIsImZ1bGxfbmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzb21lIiwiYnIiLCJoNCIsImxhbmd1YWdlIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsInRhcmdldCIsImNsb25lIiwiaHJlZiIsImNsb25lX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/favorites.js\n");

/***/ }),

/***/ "./node_modules/react-vertical-timeline-component/style.min.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-vertical-timeline-component/style.min.css ***!
  \**********************************************************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/GitHub":
/*!*********************************************!*\
  !*** external "@mui/icons-material/GitHub" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/GitHub");

/***/ }),

/***/ "@mui/icons-material/Star":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Star" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Star");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-vertical-timeline-component":
/*!****************************************************!*\
  !*** external "react-vertical-timeline-component" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-vertical-timeline-component");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/favorites.js"));
module.exports = __webpack_exports__;

})();