var jsdom = require('jsdom');
const { JSDOM } = jsdom;
//require('babel-polyfill');

const dom = new JSDOM('<body><div id="content"></div></body>');

global.document = dom.window.document;
global.window = dom.window
global.__testing__ = true;
//Object.keys(global.window).forEach((property) => {
//    if (typeof global[property] === 'undefined') {
//	global[property] = global.window[property];
//    }
//});

global.navigator = {
    userAgent: 'node.js'
};
