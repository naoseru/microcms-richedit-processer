import hljs from 'highlight.js';
var highlight = function (content) { return hljs.highlightAuto(content).value; };
export default highlight;
