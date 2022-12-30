import merge from 'deepmerge';
import { parse } from 'node-html-parser';
var defaultOptions = {
    tags: 'h1, h2, h3',
    dataForName: 'tagName',
};
function createTableOfContents(content, options) {
    if (options === void 0) { options = {}; }
    var createTocOptions = merge(defaultOptions, options);
    var root = parse(content);
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
export default createTableOfContents;
