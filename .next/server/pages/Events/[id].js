module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("x+bI");


/***/ }),

/***/ "4cwT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSortedEventsData */
/* unused harmony export getUpcomingEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllEventIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCompleteSortedEventsData; });
/* unused harmony export getStaticProps */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1VTK");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/Ikq");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const eventsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "events");
function getSortedEventsData() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(eventsDirectory);
  const allEventsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(eventsDirectory, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    return _objectSpread({
      id
    }, matterResult.data);
  });
  return allEventsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });
}
async function getUpcomingEvent() {
  const allEvents = getSortedEventsData();
  return allEvents[0];
}
function getAllEventIds() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(eventsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}
async function getEventData(id) {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(eventsDirectory, `${id}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, "utf8");
  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_4___default.a).process(matterResult.content);
  const contentHtml = processedContent.toString();
  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}
async function getCompleteSortedEventsData() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(eventsDirectory);
  const allEventsData = await Promise.all(fileNames.map(async fileName => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(eventsDirectory, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_4___default.a).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return _objectSpread({
      id,
      contentHtml
    }, matterResult.data);
  }));
  allEventsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });
  return allEventsData;
}
async function getStaticProps() {
  const allEventsData = getCompleteSortedEventsData();
  return {
    props: {
      allPostsData: allEventsData
    }
  };
}

/***/ }),

/***/ "53Nq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ date_Date; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// EXTERNAL MODULE: ./components/elements/date.module.scss
var date_module = __webpack_require__("sH99");
var date_module_default = /*#__PURE__*/__webpack_require__.n(date_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./assets/Icons/Calendar.svg
var _path, _circle, _circle2, _circle3, _circle4, _circle5, _circle6, _g, _g2, _g3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Calendar_SvgCalendar = function SvgCalendar(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", _extends({
    viewBox: "0 0 500 500",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5
  }, props), _path || (_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M444.088 145.333a68.282 68.282 0 00-68.281-68.28H124.193a68.28 68.28 0 00-68.28 68.28v251.614a68.28 68.28 0 0068.28 68.28h251.614a68.282 68.282 0 0068.28-68.28V145.333z",
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 29.17
  })), _circle || (_circle = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 185.133 183.335)"
  })), _circle2 || (_circle2 = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 301.248 183.335)"
  })), _circle3 || (_circle3 = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 69.018 183.335)"
  })), _circle4 || (_circle4 = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 185.133 298.957)"
  })), _circle5 || (_circle5 = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 301.248 298.957)"
  })), _circle6 || (_circle6 = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 146.843,
    cy: 174.35,
    r: 32.093,
    fill: "#1000ba",
    stroke: "#1000ba",
    strokeWidth: 28.3,
    transform: "matrix(.44174 0 0 .44174 69.018 298.957)"
  })), _g || (_g = /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M55.913 189.099h388.174",
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 29.17
  }))), _g2 || (_g2 = /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M139.321 38.826v84.26",
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 33.25,
    transform: "matrix(.7339 0 0 1 66.525 0)"
  }))), _g3 || (_g3 = /*#__PURE__*/external_react_default.a.createElement("g", null, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M139.321 38.826v84.26",
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 33.25,
    transform: "matrix(.7339 0 0 1 228.979 0)"
  }))));
};

/* harmony default export */ var Calendar = (Calendar_SvgCalendar);
// CONCATENATED MODULE: ./assets/Icons/Clock.svg
var Clock_circle, Clock_path;

function Clock_extends() { Clock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Clock_extends.apply(this, arguments); }



var Clock_SvgClock = function SvgClock(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", Clock_extends({
    viewBox: "0 0 500 500",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5
  }, props), Clock_circle || (Clock_circle = /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: 248.725,
    cy: 268.489,
    r: 202.833,
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 39.58,
    transform: "translate(1.275 -18.49)"
  })), Clock_path || (Clock_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M250 128.005V250l72.531 68.508",
    fill: "none",
    stroke: "#1000ba",
    strokeWidth: 39.5868845
  })));
};

/* harmony default export */ var Clock = (Clock_SvgClock);
// CONCATENATED MODULE: ./components/elements/date.tsx






function date_Date({
  dateString
}) {
  const date = Object(external_date_fns_["parseISO"])(dateString);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: date_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: date_module_default.a.icon,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Calendar, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("time", {
        className: date_module_default.a.value,
        dateTime: dateString,
        children: Object(external_date_fns_["format"])(date, "LLLL d, yyyy")
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: date_module_default.a.icon,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Clock, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("time", {
        className: date_module_default.a.value,
        dateTime: dateString,
        children: Object(external_date_fns_["format"])(date, "HH:mm")
      })]
    })]
  });
}

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sH99":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"container": "date_container__j21TQ",
	"icon": "date_icon__1AvS9",
	"value": "date_value__R5b18"
};


/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "vnQH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"small_phone": "280px",
	"phone": "320px",
	"large_phone": "380px",
	"tablet": "768px",
	"large_tablet": "1000px",
	"desktop": "1024px",
	"large_desktop": "1300px",
	"hSmall": "600px",
	"hMedium": "1000px",
	"hLarge": "1300px",
	"drk_color": "#000",
	"se_blue": "#81a6bd",
	"se_blue_light": "#8eabbd",
	"gray": "#bababa",
	"gray_text": "#818181",
	"headingLg": "utils_headingLg__3uZpz",
	"headingMd": "utils_headingMd___QbOh",
	"headingMdFd": "utils_headingMdFd__2hYUB",
	"headingSlFd": "utils_headingSlFd__keE6V",
	"textMd": "utils_textMd__ZBXMB",
	"textLg": "utils_textLg__3GsPH",
	"textLgBl": "utils_textLgBl__GWgct",
	"heading_home_1": "utils_heading_home_1__1-6HU",
	"text_home_1": "utils_text_home_1__2OivL",
	"sectionMargin": "utils_sectionMargin__2JhfV"
};


/***/ }),

/***/ "x+bI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4cwT");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_elements_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("53Nq");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vnQH");
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);







function EventDetail({
  eventData
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: eventData.title
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("article", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,
        children: eventData.title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_elements_date__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        dateString: eventData.date
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.textMd,
        dangerouslySetInnerHTML: {
          __html: eventData.contentHtml
        }
      })]
    })]
  });
}
const getStaticPaths = async () => {
  const paths = Object(_lib_events__WEBPACK_IMPORTED_MODULE_1__[/* getAllEventIds */ "a"])();
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const eventData = await Object(_lib_events__WEBPACK_IMPORTED_MODULE_1__[/* getEventData */ "c"])(params.id);
  return {
    props: {
      eventData
    }
  };
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });