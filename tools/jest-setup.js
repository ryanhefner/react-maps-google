import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const { window } = new JSDOM('<!doctype HTML><html><body><div id="root"></div></body></html>');
const { document } = window;

global.window = window;
global.document = document;
global.navigator = window.navigator;

global.document.scrollingElement = {
  clientWidth: 1024,
  clientHeight: 768,
  scrollTop: 0,
  scrollLeft: 0,
};

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.document.scrollingElement = Object.assign({}, global.document.scrollingElement, {
    clientWidth: global.window.innerWidth,
    clientHeight: global.window.innerHeight,
  });
  global.window.dispatchEvent(new Event('resize'));
};

global.window.scrollTo = (top, left) => {
  global.document.scrollingElement = Object.assign({}, global.document.scrollingElement, {
    scrollTop: top || global.document.scrollingElement.scrollTop,
    scrollLeft: left || global.document.scrollingElement.scrollLeft,
  });
  global.window.dispatchEvent(new Event('scroll'));
};

global.window.Element.prototype.getBoundingClientRect = () => {
  return {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };
};
