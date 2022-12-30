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
import fetch from 'node-fetch';
import sizeOf from 'image-size';
import { buildImgixUrl } from 'ts-imgix';
var imgProcesser = function (imgElement, options) { return __awaiter(void 0, void 0, void 0, function () {
    var attributes_1, getSrcAttr, splitSrc, size, _a, imgixParams, imgixUrl, params, width, height, srcset, classNames;
    var _b, _c, _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                if (options.img.addAttributes !== undefined) {
                    attributes_1 = options.img.addAttributes;
                    Object.keys(attributes_1).forEach(function (key) {
                        imgElement.setAttribute(key, attributes_1[key]);
                    });
                }
                getSrcAttr = function () {
                    var src = imgElement.getAttribute('src');
                    if (src === undefined) {
                        throw Error('Some of the img tags do not have src set.');
                    }
                    return src;
                };
                splitSrc = getSrcAttr().split('?');
                _a = sizeOf;
                return [4 /*yield*/, fetch(splitSrc[0])
                        .then(function (res) { return res.arrayBuffer(); })
                        .then(function (arrayBuffer) { return Buffer.from(arrayBuffer); })];
            case 1:
                size = _a.apply(void 0, [_h.sent()]);
                imgixParams = Object.assign({}, new URLSearchParams(splitSrc[1]), options.img.parameters);
                imgixUrl = buildImgixUrl(splitSrc[0])(imgixParams);
                params = new URLSearchParams(new URL(imgixUrl).search);
                width = params.get('w');
                height = params.get('h');
                srcset = options.img.deviceSizes
                    .map(function (size) {
                    var imgixParamsForSrcSet = Object.assign(imgixParams, {
                        w: size.toString(),
                        h: undefined,
                    });
                    if (width !== null && height !== null) {
                        Object.assign(imgixParamsForSrcSet, {
                            h: Math.round(size * (Number(height) / Number(width))).toString(),
                        });
                    }
                    return "".concat(buildImgixUrl(splitSrc[0])(imgixParamsForSrcSet), " ").concat(size, "w");
                })
                    .join(', ');
                imgElement.setAttribute('src', imgixUrl);
                imgElement.setAttribute('srcset', srcset);
                imgElement.setAttribute('sizes', options.img.sizes);
                if (width === null) {
                    imgElement.setAttribute('width', (_c = (_b = size.width) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : '');
                }
                else {
                    imgElement.setAttribute('width', width);
                }
                if (height === null) {
                    imgElement.setAttribute('height', (_e = (_d = size.height) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : '');
                }
                else {
                    imgElement.setAttribute('height', height);
                }
                if (options.img.addClassName !== undefined) {
                    classNames = options.img.addClassName;
                    classNames.forEach(function (className) {
                        imgElement.classList.add(className);
                    });
                }
                if (options.img.provider === 'lazysizes') {
                    if (options.img.lazy) {
                        imgElement.setAttribute('data-src', getSrcAttr());
                        imgElement.setAttribute('data-srcset', (_f = imgElement.getAttribute('srcset')) !== null && _f !== void 0 ? _f : '');
                        imgElement.setAttribute('data-sizes', (_g = imgElement.getAttribute('sizes')) !== null && _g !== void 0 ? _g : '');
                        imgElement.removeAttribute('srcset');
                        imgElement.removeAttribute('sizes');
                        imgElement.classList.add('lazyload');
                        if (options.img.placeholder) {
                            imgElement.setAttribute('data-lowsrc', splitSrc[0] + '?w=50&q=30&blur=10');
                            imgElement.removeAttribute('data-src');
                        }
                        imgElement.removeAttribute('src');
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
export default imgProcesser;
