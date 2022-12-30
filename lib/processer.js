"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deepmerge_1 = __importDefault(require("deepmerge"));
var node_html_parser_1 = require("node-html-parser");
var code_1 = __importDefault(require("./processers/code"));
var iframe_1 = __importDefault(require("./processers/iframe"));
var img_1 = __importDefault(require("./processers/img"));
var other_elements_1 = __importDefault(require("./processers/other-elements"));
var defaultOptions = {
    img: {
        parameters: {
            auto: {
                format: true,
            },
        },
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        sizes: '100vw',
        enabled: true,
        lazy: true,
        placeholder: false,
        provider: 'lazysizes',
    },
    iframe: {
        enabled: true,
        lazy: true,
        provider: 'lazysizes',
    },
    code: {
        enabled: false,
        lib: 'highlight.js',
    },
    otherElements: {},
};
var processer = function (content, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var processOptions, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    processOptions = (0, deepmerge_1.default)(defaultOptions, options, {
                        arrayMerge: function (_, sourceArray) { return sourceArray; },
                    });
                    root = (0, node_html_parser_1.parse)(content, {
                        blockTextElements: {
                            code: true,
                        },
                    });
                    if (!processOptions.img.enabled) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(root
                            .querySelectorAll('img')
                            .map(function (imgElement) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, img_1.default)(imgElement, processOptions)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!processOptions.iframe.enabled) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all(root
                            .querySelectorAll('iframe')
                            .map(function (iframeElement) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, iframe_1.default)(iframeElement, processOptions)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!processOptions.code.enabled) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.all(root
                            .querySelectorAll('pre code')
                            .map(function (codeElement) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, code_1.default)(codeElement, processOptions)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (Object.keys(processOptions.otherElements).length !== 0) {
                        ;
                        Object.keys(processOptions.otherElements).forEach(function (key) {
                            root.querySelectorAll(key).forEach(function (element) {
                                var _a;
                                (0, other_elements_1.default)(element, (_a = processOptions.otherElements[key]) !== null && _a !== void 0 ? _a : {});
                            });
                        });
                    }
                    return [2 /*return*/, root.toString()];
            }
        });
    });
};
exports.default = processer;
