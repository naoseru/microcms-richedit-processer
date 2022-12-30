"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var deepmerge_1 = __importDefault(require("deepmerge"));
var node_html_parser_1 = require("node-html-parser");
var defaultOptions = {
    tags: 'h1, h2, h3',
    dataForName: 'tagName',
};
function createTableOfContents(content, options) {
    if (options === void 0) { options = {}; }
    var createTocOptions = (0, deepmerge_1.default)(defaultOptions, options);
    var root = (0, node_html_parser_1.parse)(content);
    var headingElements = root.querySelectorAll(createTocOptions.tags);
    if (createTocOptions.dataForName === 'tagName') {
        return headingElements.map(function (heading) { return ({
            id: heading.id,
            text: heading.textContent,
            name: heading.tagName.toLowerCase(),
        }); });
    }
    return headingElements.map(function (heading) { return ({
        id: heading.id,
        text: heading.textContent,
    }); });
}
exports.default = createTableOfContents;
