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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header.js */ \"./components/header.js\");\n/* harmony import */ var _components_Collections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Collections.js */ \"./components/Collections.js\");\n/* harmony import */ var _components_Info_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Info.js */ \"./components/Info.js\");\n/* harmony import */ var _components_design_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/design.js */ \"./components/design.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ \"./artifacts/contracts/NFT.sol/NFT.json\");\n/* harmony import */ var _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarket.sol/NFTMarket.json */ \"./artifacts/contracts/NFTMarket.sol/NFTMarket.json\");\n\n\n\n\n\n\n\n\n\n\n\n\n//importing abis\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('not-loaded'), loadingState = ref1[0], setLoadingState = ref1[1];\n    //we want to load all the NFTs when the screen is loaded\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    function loadNFTs() {\n        return _loadNFTs.apply(this, arguments);\n    }\n    function _loadNFTs() {\n        _loadNFTs = //function for loading the NFTs\n        _asyncToGenerator(_home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var provider, tokenContract, marketContract, data, items;\n            return _home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.providers.JsonRpcProvider();\n                        tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_9__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_10__.abi, provider);\n                        marketContract = new ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.Contract(_config_js__WEBPACK_IMPORTED_MODULE_9__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_11__.abi, provider);\n                        _ctx1.next = 5;\n                        return marketContract.fetchMarketItems();\n                    case 5:\n                        data = _ctx1.sent;\n                        _ctx1.next = 8;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(_home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return _home_evasharma_Desktop_Inquesto_DESIS_NFT_Marketing_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return tokenContract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_7___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_12__.ethers.utils.formatUnits(i.price.toString(), 'ether');\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                image: meta.data.image,\n                                                name: meta.data.name,\n                                                description: meta.data.description\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 9:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 8:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState('loaded');\n                        console.log(nfts);\n                    case 12:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _loadNFTs.apply(this, arguments);\n    }\n    // async function buyNft(nft) {\n    //   //this will look for a instance of ethereum injected into the browser\n    //   const web3modal = new Web3Modal()\n    //   //if the user is connected, then we will have a connection that we can work with\n    //   const connection = await web3modal.connect()\n    //   //creating a provider with the user's addredd/connection\n    //   //we are using Web3Provider here\n    //   const provider = new ethers.providers.Web3Provider(connection)\n    //   //we need the user to sign in to execute an actual transaction\n    //   //thus we are creating a signer\n    //   const signer = provider.getSigner()\n    //   //instead of passing in the provider as in the previous func, we are passing\n    //   //in the signer here as the third argument\n    //   const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)\n    //   //getting a reference to the price\n    //   const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')\n    //   //to create a market sale, we will call a function from our contract\n    //   const transation = await contract.createMarketSale(\n    //     nftaddress,\n    //     nft.tokenId,\n    //     {\n    //       value: price,\n    //     },\n    //   )\n    //   //waiting till the transaction is executed\n    //   await transation.wait()\n    //   //after the transaction is complete, we wanna reload the nfts\n    //   loadNFTs()\n    // }\n    // if (loadingState === 'loaded' && !nfts.length)\n    //   return <h1>No items in marketplace!</h1>\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {\n            sx: {\n                backgroundColor: '#F7FFFE',\n                margin: '-0.4%'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {\n                sx: {\n                    backgroundColor: '#F7FFFE',\n                    margin: '-0.4%',\n                    marginRight: '-0.1%',\n                    marginBottom: '-2%'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        page: 1\n                    }, void 0, false, {\n                        fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, _this),\n                    nfts.length != 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Collections_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"NFT Collections\",\n                        nfts: nfts\n                    }, void 0, false, {\n                        fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n                        lineNumber: 129,\n                        columnNumber: 13\n                    }, _this),\n                    !nfts.length && \"No Items present.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Info_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: \"random\"\n                    }, void 0, false, {\n                        fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_design_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/evasharma/Desktop/Inquesto/DESIS/NFT-Marketing/pages/index.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, _this));\n};\n_s(Index, \"tZQqWsB6a3tlmIWr5tsZK11RClg=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUMvQyxFQUErRTtJQUUvRSxFQUF1QztJQUN2QyxFQUF5RTtJQUV6RSxFQUF5RTtJQUN6RSxFQUF3RDtJQUN4RCxFQUFrQjtJQUNsQixFQUFtQjtJQUNuQixFQUFRO0lBQ1IsRUFBc0I7SUFDdEIsRUFBUztJQUNULEVBQU07SUFDTixFQUErQztJQUMvQyxFQUE0QjtJQUU1QixFQUFrRTtJQUNsRSxFQUFlO0lBQ2YsRUFBSTtJQUVKLEVBQWlEO0lBQ2pELEVBQTZDO0lBRTdDLE1BQU0sNkVBQ0hwQixtREFBRzs4RkFDREEsbURBQUc7WUFBQ3FELEVBQUUsRUFBRSxDQUFDO2dCQUFDQyxlQUFlLEVBQUUsQ0FBUztnQkFBRUMsTUFBTSxFQUFFLENBQU87WUFBQyxDQUFDO2tHQUNyRHZELG1EQUFHO2dCQUNGcUQsRUFBRSxFQUFFLENBQUM7b0JBQ0hDLGVBQWUsRUFBRSxDQUFTO29CQUMxQkMsTUFBTSxFQUFFLENBQU87b0JBQ2ZDLFdBQVcsRUFBRSxDQUFPO29CQUNwQkMsWUFBWSxFQUFFLENBQUs7Z0JBQ3JCLENBQUM7O2dHQUVBeEQsNkRBQU07d0JBQUN5RCxJQUFJLEVBQUUsQ0FBQzs7Ozs7O29CQUNkMUMsSUFBSSxDQUFDMkMsTUFBTSxJQUFFLENBQUMsZ0ZBQ1p6RCxrRUFBVzt3QkFBQzBELEtBQUssRUFBQyxDQUFpQjt3QkFBQzVDLElBQUksRUFBSUEsSUFBSTs7Ozs7O3FCQUVqREEsSUFBSSxDQUFDMkMsTUFBTSxJQUNWLENBQW1CO2dHQUVyQnhELDJEQUFJO3dCQUFDeUQsS0FBSyxFQUFDLENBQVE7Ozs7OztnR0FDbkJ4RCw2REFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCLENBQUM7R0ExSEtXLEtBQUs7S0FBTEEsS0FBSztBQTRIWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL0NvbGxlY3Rpb25zLmpzJ1xuaW1wb3J0IEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9JbmZvLmpzJ1xuaW1wb3J0IERlc2lnbiBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2lnbi5qcydcblxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5cbmltcG9ydCB7IG5mdGFkZHJlc3MsIG5mdG1hcmtldGFkZHJlc3MscnBjX3VybCB9IGZyb20gJy4uL2NvbmZpZy5qcydcblxuLy9pbXBvcnRpbmcgYWJpc1xuaW1wb3J0IE5GVCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb24nXG5pbXBvcnQgTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvbidcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoJ25vdC1sb2FkZWQnKVxuXG4gIC8vd2Ugd2FudCB0byBsb2FkIGFsbCB0aGUgTkZUcyB3aGVuIHRoZSBzY3JlZW4gaXMgbG9hZGVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZE5GVHMoKVxuICB9LCBbXSlcblxuICAvL2Z1bmN0aW9uIGZvciBsb2FkaW5nIHRoZSBORlRzXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xuICAgIC8vc2V0dGluZyB1cCBhIHByb3ZpZGVyXG4gICAgLy91c2luZyBhIGdlbmVyaWMgSnNvblJwY1Byb3ZpZGVyIGZyb20gdGhlIGV0aGVycyBsaWJyYXJ5XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKVxuICAgIC8vIHRha2luZyByZWZlcmVuY2UgdG8gdGhlIE5GVCBjb250cmFjdFxuICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdGFkZHJlc3MsIE5GVC5hYmksIHByb3ZpZGVyKVxuICAgIC8vdGFraW5nIHJlZmVyZW5jZSB0byB0aGUgTWFya2V0IGNvbnRyYWN0XG4gICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgbmZ0bWFya2V0YWRkcmVzcyxcbiAgICAgIE1hcmtldC5hYmksXG4gICAgICBwcm92aWRlcixcbiAgICApXG5cbiAgICAvL2dldHRpbmcgdGhlIGRhdGFcbiAgICAvL2dldHRpbmcgYWxsIHRoZSB1bnNvbGQgaXRlbXMgdGhyb3VnaCBjYWxsaW5nIGEgZnVuY3Rpb24gb2Ygb3VyIGNvbnRyYWN0XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKVxuXG4gICAgLy8gbWFwcGluZyBvdmVyIGFsbCB0aGUgaXRlbXNcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgLy9jYWxsaW5nIHRoZSB0b2tlbkNvbnRyYWN0IGFuZCBnZXR0aW5nIHRoZSB0b2tlblVyaVxuXG4gICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpXG5cbiAgICAgICAgLy9pbiBpcGZzLCB3ZSB3aWxsIGJlIHN0b3Jpbmcgb3VyIHRva2VuIGluIGpzb24gZm9ybWF0LCB3aXRoIHRoZWlyIG5hbWVzLCBkZXNjcmlwdGlvbnMsIGV0Y1xuICAgICAgICAvL0xldCdzIGdldCB0aGF0IGRhdGE6XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXG4gICAgICAgIC8vY3JlYXRpbmcgYSB2YWx1ZSBwcmljZSwgYW5kIGZvcm1hdHRpbmcgaXQgdG8gYSBkZXNpcmFibGUgZm9ybWF0XG4gICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXG5cbiAgICAgICAgbGV0IGl0ZW0gPSB7XG4gICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXG4gICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbiAgICAgICAgICBvd25lcjogaS5vd25lcixcbiAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxuICAgICAgICAgIG5hbWU6IG1ldGEuZGF0YS5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgfSksXG4gICAgKVxuXG4gICAgc2V0TmZ0cyhpdGVtcylcbiAgICBzZXRMb2FkaW5nU3RhdGUoJ2xvYWRlZCcpXG4gICAgY29uc29sZS5sb2cobmZ0cylcbiAgfVxuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcbiAgLy8gICAvL3RoaXMgd2lsbCBsb29rIGZvciBhIGluc3RhbmNlIG9mIGV0aGVyZXVtIGluamVjdGVkIGludG8gdGhlIGJyb3dzZXJcbiAgLy8gICBjb25zdCB3ZWIzbW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgLy8gICAvL2lmIHRoZSB1c2VyIGlzIGNvbm5lY3RlZCwgdGhlbiB3ZSB3aWxsIGhhdmUgYSBjb25uZWN0aW9uIHRoYXQgd2UgY2FuIHdvcmsgd2l0aFxuICAvLyAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzbW9kYWwuY29ubmVjdCgpXG5cbiAgLy8gICAvL2NyZWF0aW5nIGEgcHJvdmlkZXIgd2l0aCB0aGUgdXNlcidzIGFkZHJlZGQvY29ubmVjdGlvblxuICAvLyAgIC8vd2UgYXJlIHVzaW5nIFdlYjNQcm92aWRlciBoZXJlXG4gIC8vICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcblxuICAvLyAgIC8vd2UgbmVlZCB0aGUgdXNlciB0byBzaWduIGluIHRvIGV4ZWN1dGUgYW4gYWN0dWFsIHRyYW5zYWN0aW9uXG4gIC8vICAgLy90aHVzIHdlIGFyZSBjcmVhdGluZyBhIHNpZ25lclxuXG4gIC8vICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgLy8gICAvL2luc3RlYWQgb2YgcGFzc2luZyBpbiB0aGUgcHJvdmlkZXIgYXMgaW4gdGhlIHByZXZpb3VzIGZ1bmMsIHdlIGFyZSBwYXNzaW5nXG4gIC8vICAgLy9pbiB0aGUgc2lnbmVyIGhlcmUgYXMgdGhlIHRoaXJkIGFyZ3VtZW50XG4gIC8vICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpZ25lcilcblxuICAvLyAgIC8vZ2V0dGluZyBhIHJlZmVyZW5jZSB0byB0aGUgcHJpY2VcbiAgLy8gICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKG5mdC5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKVxuXG4gIC8vICAgLy90byBjcmVhdGUgYSBtYXJrZXQgc2FsZSwgd2Ugd2lsbCBjYWxsIGEgZnVuY3Rpb24gZnJvbSBvdXIgY29udHJhY3RcbiAgLy8gICBjb25zdCB0cmFuc2F0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0U2FsZShcbiAgLy8gICAgIG5mdGFkZHJlc3MsXG4gIC8vICAgICBuZnQudG9rZW5JZCxcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdmFsdWU6IHByaWNlLFxuICAvLyAgICAgfSxcbiAgLy8gICApXG4gIC8vICAgLy93YWl0aW5nIHRpbGwgdGhlIHRyYW5zYWN0aW9uIGlzIGV4ZWN1dGVkXG4gIC8vICAgYXdhaXQgdHJhbnNhdGlvbi53YWl0KClcblxuICAvLyAgIC8vYWZ0ZXIgdGhlIHRyYW5zYWN0aW9uIGlzIGNvbXBsZXRlLCB3ZSB3YW5uYSByZWxvYWQgdGhlIG5mdHNcbiAgLy8gICBsb2FkTkZUcygpXG4gIC8vIH1cblxuICAvLyBpZiAobG9hZGluZ1N0YXRlID09PSAnbG9hZGVkJyAmJiAhbmZ0cy5sZW5ndGgpXG4gIC8vICAgcmV0dXJuIDxoMT5ObyBpdGVtcyBpbiBtYXJrZXRwbGFjZSE8L2gxPlxuXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxCb3ggc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI0Y3RkZGRScsIG1hcmdpbjogJy0wLjQlJyB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGRkZFJyxcbiAgICAgICAgICAgIG1hcmdpbjogJy0wLjQlJyxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLTAuMSUnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTIlJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlYWRlciBwYWdlPXsxfSAvPlxuICAgICAgICAgIHtuZnRzLmxlbmd0aCE9MCAmJihcbiAgICAgICAgICAgIDxDb2xsZWN0aW9ucyB0aXRsZT1cIk5GVCBDb2xsZWN0aW9uc1wiIG5mdHMgPSB7bmZ0c30vPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFuZnRzLmxlbmd0aCAmJihcbiAgICAgICAgICAgICBcIk5vIEl0ZW1zIHByZXNlbnQuXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxJbmZvIHRpdGxlPVwicmFuZG9tXCIgLz5cbiAgICAgICAgICA8RGVzaWduIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsiQm94IiwiSGVhZGVyIiwiQ29sbGVjdGlvbnMiLCJJbmZvIiwiRGVzaWduIiwiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIldlYjNNb2RhbCIsIm5mdGFkZHJlc3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwicnBjX3VybCIsIk5GVCIsIk1hcmtldCIsIkluZGV4IiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwidG9rZW5Db250cmFjdCIsIm1hcmtldENvbnRyYWN0IiwiZGF0YSIsIml0ZW1zIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiQ29udHJhY3QiLCJhYmkiLCJmZXRjaE1hcmtldEl0ZW1zIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVyaSIsIm1ldGEiLCJwcmljZSIsIml0ZW0iLCJ0b2tlblVSSSIsInRva2VuSWQiLCJnZXQiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJ0b051bWJlciIsInNlbGxlciIsIm93bmVyIiwiaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZ2UiLCJsZW5ndGgiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});