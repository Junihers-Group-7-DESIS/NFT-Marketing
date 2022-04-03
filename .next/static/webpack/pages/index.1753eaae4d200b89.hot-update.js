/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Collections.js":
/*!***********************************!*\
  !*** ./components/Collections.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _ItemDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemDetail */ \"./components/ItemDetail.js\");\n/* harmony import */ var _ItemDetail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ItemDetail__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _logo_sampleImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/sampleImg.png */ \"./logo/sampleImg.png\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar Collections = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            margin: \"1%\",\n            backgroundColor: \"transparent\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                variant: \"h4\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\components\\\\Collections.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    marginTop: \"2%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                    container: true,\n                    spacing: {\n                        xs: 2,\n                        md: 3\n                    },\n                    columns: {\n                        xs: 4,\n                        sm: 8,\n                        md: 12\n                    },\n                    children: props.nfts.map(function(nft, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ItemDetail__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            img: nft.image,\n                            name: nft.name,\n                            // creator={nft.seller}\n                            description: nft.description,\n                            cost: nft.price\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\components\\\\Collections.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\components\\\\Collections.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\components\\\\Collections.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\components\\\\Collections.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_c = Collections;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collections);\nvar _c;\n$RefreshReg$(_c, \"Collections\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbGxlY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3dCO0FBQ2Q7QUFDRztBQUNGO0FBQ1E7QUFFN0MsSUFBTU0sV0FBVyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFFM0IscUJBQ0ksOERBQUNMLHlEQUFHO1FBQUNNLEVBQUUsRUFBRTtZQUFDQyxPQUFPLEVBQUMsTUFBTTtZQUFFQyxhQUFhLEVBQUMsUUFBUTtZQUFFQyxVQUFVLEVBQUMsUUFBUTtZQUFFQyxNQUFNLEVBQUMsSUFBSTtZQUFFQyxlQUFlLEVBQUMsYUFBYTtTQUFDOzswQkFDOUcsOERBQUNaLGdFQUFVO2dCQUFDYSxPQUFPLEVBQUMsSUFBSTswQkFDbkJQLEtBQUssQ0FBQ1EsS0FBSzs7Ozs7cUJBQ0g7MEJBQ2IsOERBQUNiLHlEQUFHO2dCQUFDTSxFQUFFLEVBQUU7b0JBQUNRLFNBQVMsRUFBQyxJQUFJO2lCQUFDOzBCQUNyQiw0RUFBQ1osK0NBQUk7b0JBQUNhLFNBQVM7b0JBQUNDLE9BQU8sRUFBRTt3QkFBRUMsRUFBRSxFQUFFLENBQUM7d0JBQUVDLEVBQUUsRUFBRSxDQUFDO3FCQUFFO29CQUFFQyxPQUFPLEVBQUU7d0JBQUVGLEVBQUUsRUFBRSxDQUFDO3dCQUFFRyxFQUFFLEVBQUUsQ0FBQzt3QkFBRUYsRUFBRSxFQUFFLEVBQUU7cUJBQUU7OEJBQ3ZFYixLQUFLLENBQUNnQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUNDLENBQUM7NkNBQ2xCLDhEQUFDdkIsb0RBQVc7NEJBQ1p3QixHQUFHLEVBQUVGLEdBQUcsQ0FBQ0csS0FBSzs0QkFDZEMsSUFBSSxFQUFFSixHQUFHLENBQUNJLElBQUk7NEJBQ2QsdUJBQXVCOzRCQUN2QkMsV0FBVyxFQUFFTCxHQUFHLENBQUNLLFdBQVc7NEJBQzVCQyxJQUFJLEVBQUVOLEdBQUcsQ0FBQ08sS0FBSzs7Ozs7a0NBQ2pCO3FCQUNELENBQUM7Ozs7O3lCQUVDOzs7OztxQkFDTDs7Ozs7O2FBQ0osQ0FDWDtDQUFDO0FBdEJFMUIsS0FBQUEsV0FBVztBQXdCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbGxlY3Rpb25zLmpzP2IzOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBJdGVtRGV0YWlscyBmcm9tICcuL0l0ZW1EZXRhaWwnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBzYW1wbGVJbWcgZnJvbSBcIi4uL2xvZ28vc2FtcGxlSW1nLnBuZ1wiXHJcblxyXG5jb25zdCBDb2xsZWN0aW9ucyA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Qm94IHN4PXt7ZGlzcGxheTonZmxleCcsIGZsZXhEaXJlY3Rpb246J2NvbHVtbicsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbjonMSUnLCBiYWNrZ3JvdW5kQ29sb3I6J3RyYW5zcGFyZW50J319ID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEJveCBzeD17e21hcmdpblRvcDonMiUnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogNCwgc206IDgsIG1kOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmZ0cy5tYXAoKG5mdCxpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e25mdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmZ0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0b3I9e25mdC5zZWxsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtuZnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3Q9e25mdC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICl9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25zOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlR5cG9ncmFwaHkiLCJCb3giLCJJdGVtRGV0YWlscyIsIkdyaWQiLCJzYW1wbGVJbWciLCJDb2xsZWN0aW9ucyIsInByb3BzIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YXJpYW50IiwidGl0bGUiLCJtYXJnaW5Ub3AiLCJjb250YWluZXIiLCJzcGFjaW5nIiwieHMiLCJtZCIsImNvbHVtbnMiLCJzbSIsIm5mdHMiLCJtYXAiLCJuZnQiLCJpIiwiaW1nIiwiaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb3N0IiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Collections.js\n");

/***/ }),

/***/ "./components/ItemDetail.js":
/*!**********************************!*\
  !*** ./components/ItemDetail.js ***!
  \**********************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});