var jsdom = require('jsdom');
const { JSDOM } = jsdom;
//require('babel-polyfill');

const dom = new JSDOM('<body><div id="content"></div></body>');

global.document = dom.window.document;
global.window = dom.window;

// this tells the DOM ( if it needs to know ) that it is in test mode
global.__testing__ = true;

// this is a dummy handler standin for mdl component handler
global.componentHandler = {
    upgradeDom() {
    }
}
//Object.keys(global.window).forEach((property) => {
//    if (typeof global[property] === 'undefined') {
//	global[property] = global.window[property];
//    }
//});

global.navigator = {
    userAgent: 'node.js'
};
