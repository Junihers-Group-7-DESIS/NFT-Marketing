"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ \"./components/header.js\");\n/* harmony import */ var _components_Collections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Collections.js */ \"./components/Collections.js\");\n/* harmony import */ var _components_Info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Info.js */ \"./components/Info.js\");\n/* harmony import */ var _components_design_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/design.js */ \"./components/design.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ \"./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Index() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    function loadNFTs() {\n        return _loadNFTs.apply(this, arguments);\n    }\n    function _loadNFTs() {\n        _loadNFTs = _asyncToGenerator(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var provider, contract, data, items;\n            return C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.JsonRpcProvider();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_9__.abi, provider);\n                        _ctx1.next = 4;\n                        return contract.fetchMarketItems();\n                    case 4:\n                        data = _ctx1.sent;\n                        _ctx1.next = 7;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, searchParams, meta, price, item;\n                                return C_Users_Lenovo_Desktop_NFT_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return contract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            searchParams = new URLSearchParams();\n                                            searchParams.set(\"fileUrl\", tokenUri);\n                                            _ctx.next = 7;\n                                            return fetch(\"/api/data?\".concat(searchParams.toString())).then(function(r) {\n                                                return r.json();\n                                            });\n                                        case 7:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                image: tokenUri,\n                                                name: meta[\"name\"],\n                                                description: meta[\"description\"]\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 11:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 7:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 10:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _loadNFTs.apply(this, arguments);\n    }\n    // async function buyNft(nft) {\n    //   /* needs the user to sign the transaction, so will use Web3Provider and sign it */\n    //   const web3Modal = new Web3Modal()\n    //   const connection = await web3Modal.connect()\n    //   const provider = new ethers.providers.Web3Provider(connection)\n    //   const signer = provider.getSigner()\n    //   const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, signer)\n    //   /* user will be prompted to pay the asking proces to complete the transaction */\n    //   const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   \n    //   const transaction = await contract.createMarketSale(nft.tokenId, {\n    //     value: price\n    //   })\n    //   await transaction.wait()\n    //   loadNFTs()\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n            sx: {\n                backgroundColor: \"#F7FFFE\",\n                margin: \"-0.4%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {\n                sx: {\n                    backgroundColor: \"#F7FFFE\",\n                    margin: \"-0.4%\",\n                    marginRight: \"-0.1%\",\n                    marginBottom: \"-2%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        page: 1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    nfts.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Collections_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"NFT Collections\",\n                        nfts: nfts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    !nfts.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"No Items present\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 36\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 28\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Info_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: \"random\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_design_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\NFT\\\\pages\\\\index.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}; // export default Index\n_s(Index, \"tZQqWsB6a3tlmIWr5tsZK11RClg=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSx1RUFBdUU7SUFDdkUsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLElBQUk7SUFFSixxQkFDRSw4REFBQ2hCLG1EQUFHO2tCQUNGLDRFQUFDQSxtREFBRztZQUFDb0QsRUFBRSxFQUFFO2dCQUFFQyxlQUFlLEVBQUUsU0FBUztnQkFBRUMsTUFBTSxFQUFFLE9BQU87YUFBRTtzQkFDdEQsNEVBQUN0RCxtREFBRztnQkFDRm9ELEVBQUUsRUFBRTtvQkFDRkMsZUFBZSxFQUFFLFNBQVM7b0JBQzFCQyxNQUFNLEVBQUUsT0FBTztvQkFDZkMsV0FBVyxFQUFFLE9BQU87b0JBQ3BCQyxZQUFZLEVBQUUsS0FBSztpQkFDcEI7O2tDQUVELDhEQUFDdkQsNkRBQU07d0JBQUN3RCxJQUFJLEVBQUUsQ0FBQzs7Ozs7NEJBQUk7b0JBQ2xCN0MsSUFBSSxDQUFDOEMsTUFBTSxJQUFJLENBQUMsa0JBQ2YsOERBQUN4RCxrRUFBVzt3QkFBQ3lELEtBQUssRUFBQyxpQkFBaUI7d0JBQUMvQyxJQUFJLEVBQUVBLElBQUk7Ozs7OzRCQUFJO29CQUVwRCxDQUFDQSxJQUFJLENBQUM4QyxNQUFNLGtCQUFJLDhEQUFDRSxRQUFNO2tDQUFDLDRFQUFDQyxJQUFFO3NDQUFDLGtCQUFnQjs7Ozs7Z0NBQUs7Ozs7OzRCQUFTO2tDQUMzRCw4REFBQzFELDJEQUFJO3dCQUFDd0QsS0FBSyxFQUFDLFFBQVE7Ozs7OzRCQUFHO2tDQUN2Qiw4REFBQ3ZELDZEQUFNOzs7OzRCQUFHOzs7Ozs7b0JBQ047Ozs7O2dCQUNGOzs7OztZQUNGLENBQ1A7Q0FDRixFQUVELHVCQUF1QjtHQTlFQ08sS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIuanMnXHJcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL0NvbGxlY3Rpb25zLmpzJ1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0luZm8uanMnXHJcbmltcG9ydCBEZXNpZ24gZnJvbSAnLi4vY29tcG9uZW50cy9kZXNpZ24uanMnXHJcblxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXHJcblxyXG5pbXBvcnQge1xyXG4gIG1hcmtldHBsYWNlQWRkcmVzc1xyXG59IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBORlRNYXJrZXRwbGFjZSBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldHBsYWNlLnNvbC9ORlRNYXJrZXRwbGFjZS5qc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKCdub3QtbG9hZGVkJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRORlRzKClcclxuICB9LCBbXSlcclxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcclxuICAgIC8qIGNyZWF0ZSBhIGdlbmVyaWMgcHJvdmlkZXIgYW5kIHF1ZXJ5IGZvciB1bnNvbGQgbWFya2V0IGl0ZW1zICovXHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpXHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobWFya2V0cGxhY2VBZGRyZXNzLCBORlRNYXJrZXRwbGFjZS5hYmksIHByb3ZpZGVyKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKVxyXG5cclxuICAgIC8qXHJcbiAgICAqICBtYXAgb3ZlciBpdGVtcyByZXR1cm5lZCBmcm9tIHNtYXJ0IGNvbnRyYWN0IGFuZCBmb3JtYXQgXHJcbiAgICAqICB0aGVtIGFzIHdlbGwgYXMgZmV0Y2ggdGhlaXIgdG9rZW4gbWV0YWRhdGFcclxuICAgICovXHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIGkgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZClcclxuICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICAgIHNlYXJjaFBhcmFtcy5zZXQoJ2ZpbGVVcmwnLCB0b2tlblVyaSlcclxuICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGZldGNoKGAvYXBpL2RhdGE/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gKS50aGVuKHIgPT4gci5qc29uKCkpXHJcbiAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXHJcbiAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgIHByaWNlLFxyXG4gICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgaW1hZ2U6IHRva2VuVXJpLFxyXG4gICAgICAgIG5hbWU6IG1ldGFbXCJuYW1lXCJdLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhW1wiZGVzY3JpcHRpb25cIl0sXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGl0ZW1cclxuICAgIH0pKVxyXG4gICAgc2V0TmZ0cyhpdGVtcylcclxuICAgIHNldExvYWRpbmdTdGF0ZSgnbG9hZGVkJykgXHJcbiAgfVxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcclxuICAvLyAgIC8qIG5lZWRzIHRoZSB1c2VyIHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBzbyB3aWxsIHVzZSBXZWIzUHJvdmlkZXIgYW5kIHNpZ24gaXQgKi9cclxuICAvLyAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxyXG4gIC8vICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcclxuICAvLyAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXHJcbiAgLy8gICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG4gIC8vICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG1hcmtldHBsYWNlQWRkcmVzcywgTkZUTWFya2V0cGxhY2UuYWJpLCBzaWduZXIpXHJcblxyXG4gIC8vICAgLyogdXNlciB3aWxsIGJlIHByb21wdGVkIHRvIHBheSB0aGUgYXNraW5nIHByb2NlcyB0byBjb21wbGV0ZSB0aGUgdHJhbnNhY3Rpb24gKi9cclxuICAvLyAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMobmZ0LnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpICAgXHJcbiAgLy8gICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0LnRva2VuSWQsIHtcclxuICAvLyAgICAgdmFsdWU6IHByaWNlXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXHJcbiAgLy8gICBsb2FkTkZUcygpXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveCBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGRkZFJywgbWFyZ2luOiAnLTAuNCUnIH19PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0ZGRkUnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICctMC40JScsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLTAuMSUnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICctMiUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGVyIHBhZ2U9ezF9IC8+XHJcbiAgICAgICAgICB7bmZ0cy5sZW5ndGggIT0gMCAmJiAoXHJcbiAgICAgICAgICAgIDxDb2xsZWN0aW9ucyB0aXRsZT1cIk5GVCBDb2xsZWN0aW9uc1wiIG5mdHM9e25mdHN9IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgeyFuZnRzLmxlbmd0aCAmJiA8Y2VudGVyPjxoMT5ObyBJdGVtcyBwcmVzZW50PC9oMT48L2NlbnRlcj59XHJcbiAgICAgICAgICA8SW5mbyB0aXRsZT1cInJhbmRvbVwiIC8+XHJcbiAgICAgICAgICA8RGVzaWduIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGVyIiwiQ29sbGVjdGlvbnMiLCJJbmZvIiwiRGVzaWduIiwiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXZWIzTW9kYWwiLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJORlRNYXJrZXRwbGFjZSIsIkluZGV4IiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJkYXRhIiwiaXRlbXMiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJDb250cmFjdCIsImFiaSIsImZldGNoTWFya2V0SXRlbXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVXJpIiwic2VhcmNoUGFyYW1zIiwibWV0YSIsInByaWNlIiwiaXRlbSIsInRva2VuVVJJIiwidG9rZW5JZCIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsImZldGNoIiwidG9TdHJpbmciLCJ0aGVuIiwiciIsImpzb24iLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZ2UiLCJsZW5ndGgiLCJ0aXRsZSIsImNlbnRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});