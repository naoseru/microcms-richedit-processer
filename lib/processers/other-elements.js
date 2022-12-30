"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var otherElementsProcesser = function (element, options) {
    if (options.addAttributes !== undefined) {
        var attributes_1 = options.addAttributes;
        Object.keys(attributes_1).forEach(function (key) {
            element.setAttribute(key, attributes_1[key]);
        });
    }
    if (options.addClassName !== undefined) {
        var classNames = options.addClassName;
        classNames.forEach(function (className) {
            element.classList.add(className);
        });
    }
};
exports.default = otherElementsProcesser;
