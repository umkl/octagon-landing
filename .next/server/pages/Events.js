module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("m/4G");


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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
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

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fY1M":
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
	"headingLg": "event_headingLg__1A0HF",
	"headingMd": "event_headingMd__1UDkO",
	"headingMdFd": "event_headingMdFd__oMFWo",
	"headingSlFd": "event_headingSlFd__3J8vK",
	"textMd": "event_textMd__2AaR3",
	"textLg": "event_textLg__kiC6E",
	"textLgBl": "event_textLgBl__14H5k",
	"heading_home_1": "event_heading_home_1__YWIx7",
	"text_home_1": "event_text_home_1__cj84n",
	"sectionMargin": "event_sectionMargin__20pq4",
	"eventContainer": "event_eventContainer__2Ovs2",
	"eventContent": "event_eventContent__1Kb3B",
	"textpart": "event_textpart__sEPrz",
	"title": "event_title__1jOcE",
	"contentHTML": "event_contentHTML__3o8uA",
	"imagePart": "event_imagePart__Xj9Jz"
};


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h/F9":
/***/ (function(module, exports) {

module.exports = require("react-superellipse");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "l3JY":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pr_color": "#1000ba",
	"section": "events_section__1le1C",
	"upcmngHeader": "events_upcmngHeader__1p3mF"
};


/***/ }),

/***/ "m/4G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./lib/events.ts
var events = __webpack_require__("4cwT");

// EXTERNAL MODULE: ./styles/utils.module.scss
var utils_module = __webpack_require__("vnQH");
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);

// EXTERNAL MODULE: ./pages/Events/events.module.scss
var events_module = __webpack_require__("l3JY");
var events_module_default = /*#__PURE__*/__webpack_require__.n(events_module);

// EXTERNAL MODULE: ./components/elements/event.module.scss
var event_module = __webpack_require__("fY1M");
var event_module_default = /*#__PURE__*/__webpack_require__.n(event_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-superellipse"
var external_react_superellipse_ = __webpack_require__("h/F9");
var external_react_superellipse_default = /*#__PURE__*/__webpack_require__.n(external_react_superellipse_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./assets/Illustrations/image-event-1-mello_live_music.svg
var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _path11, _path12, _path13, _path14, _path15, _path16, _path17, _path18, _path19, _path20, _path21, _path22, _path23, _path24, _path25, _path26, _path27, _path28, _path29, _path30, _path31, _path32, _path33, _path34, _path35;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var image_event_1_mello_live_music_SvgImageEvent1MelloLiveMusic = function SvgImageEvent1MelloLiveMusic(props) {
  return /*#__PURE__*/external_react_default.a.createElement("svg", _extends({
    viewBox: "0 0 2000 2000",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  }, props), _path || (_path = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M507.23 698.614s-209.247 72.069-249.376 138.595c-40.13 66.523 249.376-138.595 249.376-138.595z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M145.69 929.297a10.2 10.2 0 01-7.937-2.929c-6.51-5.863-1.19-16.95 3.376-24.78 61.217-104.94 369.026-215.527 382.096-220.182l28.15-10.025-24.105 17.658c-.89.654-90.436 66.2-182.105 127.949-142.516 96.008-184.827 112.31-199.474 112.31zM495.869 701.02c-80.824 31.284-298.636 121.72-347.193 204.968-6.468 11.084-5.099 13.867-5.08 13.892 1.307 1.409 17.847 10.268 195.627-109.414 61.973-41.72 123.113-85.289 156.646-109.446z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M502.695 626.629s-192.83-19.821-251.325 14.05c-58.497 33.874 251.325-14.05 251.325-14.05z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path4 || (_path4 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M239.931 659.027c-67.498 0-72.133-10.82-74.256-15.767-4.241-9.9 7.565-19.22 11.444-22.284 83.696-66.082 337.916.7 348.697 3.572l20.676 5.514-21.182 3.027c-.852.121-86.029 12.237-171.987 19.82-50.129 4.424-86.685 6.118-113.392 6.118zm59.15-58.232c-47.543 0-91.035 6.888-116.55 27.031-7.699 6.078-9.607 10.178-8.828 11.992 1.958 4.56 20.635 18.356 178.854 4.394 58.96-5.203 117.545-12.542 148.662-16.657-39.868-9.177-126.175-26.76-202.138-26.76z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path5 || (_path5 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M557.878 592.667s-96.99-232.89-73.491-255.942c23.5-23.053 73.491 255.942 73.491 255.942z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path6 || (_path6 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M563.242 613.153l-12.06-30.814c-.293-.756-29.802-76.346-54.119-154.17-50.087-160.274-29.557-173.96-22.812-178.458a11.37 11.37 0 0111.592-.978c37.83 17.627 70.182 299.456 73.745 331.534l3.654 32.886zm-82.35-356.832a3.22 3.22 0 00-1.798.654c-24.103 16.07 24.76 174.278 67.714 289.431-14.733-118.734-41.862-279.14-64.652-289.762a3 3 0 00-1.264-.323z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path7 || (_path7 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M594.538 643.88s52.058-235.4 106.597-235.4c54.538 0-106.597 235.4-106.597 235.4z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path8 || (_path8 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M580.803 660.125l5.15-19.384c3.78-14.211 93.668-348.11 191.932-348.11 13.472 0 19.282 6.321 21.79 11.621 26.2 55.491-182.274 311.388-206.131 340.384l-12.74 15.49zm197.082-358.762c-78.432 0-156.397 247.893-177.775 321.362 70.345-87.398 210.557-274.735 191.669-314.744-.776-1.637-3.126-6.618-13.894-6.618z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path9 || (_path9 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M625.096 646.23s178.981-113.104 545.675-78.578c366.693 34.525-545.675 78.577-545.675 78.577z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path10 || (_path10 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M612.886 650.946l9.371-8.03c1.898-1.629 47.525-40.197 138.946-71.212 84.129-28.548 224.367-55.44 414.7-21.445 80.415 14.36 90.856 25.059 90.155 34.483-.689 9.31-2.308 31.117-323.6 51.331-157.007 9.878-315.652 14.475-317.238 14.52l-12.334.353zm390.276-107.834c-206.742 0-328.969 73.458-364.407 98.328 41.953-1.344 173.132-5.899 303.173-14.082 298.552-18.785 315.132-39.333 315.422-43.26.035-.42-.188-10.461-82.98-25.245a973.1 973.1 0 00-171.208-15.741z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path11 || (_path11 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M738.596 659.493s313.511-4.184 331.126 29.292c17.614 33.476-331.126-29.292-331.126-29.292z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path12 || (_path12 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1109.87 745.034c-100.073 0-340.614-71.857-372.54-81.531l-26.163-7.927 27.332-.614c40.102-.897 392.446-6.76 414.61 64.175 2.626 8.404-.418 13.795-3.436 16.84-6.31 6.362-20.424 9.057-39.804 9.057zM767.191 663.29c147.056 43.102 351.25 91.797 376.282 66.537 1.356-1.368 2.728-3.524 1.305-8.086-15.747-50.394-256.058-59.275-377.587-58.451z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path13 || (_path13 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M677.48 694.249s189.363 87.524 152.361 114.454c-37.002 26.93-152.36-114.454-152.36-114.454z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path14 || (_path14 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M947.828 914.597c-91.6 0-278.11-220.326-286.786-230.635l-12.277-14.596 17.407 7.803c12.698 5.693 311.118 140.208 317.651 207.586.864 8.934-3.058 16.75-11.34 22.598a41.726 41.726 0 01-24.655 7.244zM680.58 693.337c72.02 82.628 232.261 245.44 286.864 206.885 5.815-4.105 8.256-8.75 7.69-14.625-4.699-48.444-199.708-148.335-294.554-192.26z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path15 || (_path15 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M991.79 799.018s157.154 65.481 122.23 109.135c-34.923 43.654-122.23-109.135-122.23-109.135zM699.308 746.633s327.405 357.963 296.847 379.79c-30.558 21.827-296.847-379.79-296.847-379.79zM638.192 720.44s137.846 229.582 109.714 251.902c-28.132 22.32-109.714-251.901-109.714-251.901z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path16 || (_path16 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M794.218 1058.342a16.136 16.136 0 01-5.057-.849c-50.534-16.6-152.39-314.805-163.835-348.754l-10.18-30.191 17.925 26.34c.535.787 54.113 79.649 101.66 161.233 87.895 150.822 80.609 180.479 67.484 189.667a13.751 13.751 0 01-7.997 2.554zM644.703 738.108c37.152 105.463 111.947 299.518 147.182 311.094a5.54 5.54 0 005.324-.567c7.213-5.049 14.832-32.509-70.003-178.085-30.099-51.647-62.634-102.216-82.503-132.442z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path17 || (_path17 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M579.876 711.71s-124.063 366.073-47.934 362.3c76.13-3.774 47.934-362.3 47.934-362.3z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path18 || (_path18 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M501.062 1135.187c-13.361 0-23.634-5.22-30.558-15.537-49.115-73.203 96.38-396.034 102.596-409.743l6.636-14.629 1.68 15.975c1.378 13.074 32.886 321.146-38.492 403.446-11.284 13.008-24.707 19.887-39.898 20.45-.66.027-1.317.038-1.964.038zm73.204-406.291c-28.761 66.139-137.13 325.352-96.511 385.889 5.534 8.254 13.693 12.078 24.948 11.642 12.858-.477 23.856-6.185 33.627-17.448 59.666-68.8 43.548-313.61 37.936-380.083z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path19 || (_path19 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M537.026 729.907S328.775 968.093 347.833 993.18c19.06 25.088 189.193-263.272 189.193-263.272z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path20 || (_path20 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M285.182 1080.01a12.188 12.188 0 01-7.635-2.528c-3-2.439-4.807-6.06-4.953-9.923-5.231-59.172 271.976-367.502 283.778-380.599l27.904-30.962-20.883 36.072c-8.901 15.372-218.622 376.618-275.093 387.626-1.028.203-2.07.31-3.118.314zM533.41 725.895c-91.843 104.31-255.751 299.817-252.12 340.895a4.784 4.784 0 001.622 3.804 4.25 4.25 0 003.716.532c39.03-7.606 175.367-225.043 246.782-345.23z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path21 || (_path21 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M474.52 569.519s-181.559-214.464-349.45-193.68c-167.891 20.785 349.45 193.68 349.45 193.68z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path22 || (_path22 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M498.72 579.54l-14.289-3.266c-1.147-.262-115.895-26.58-229.345-60.154C22.772 447.372 22.024 415.758 21.781 405.37c-.299-12.533 12.46-22.227 39.005-29.637 98.516-27.498 209.754 26.668 285.695 76.963a949.995 949.995 0 01142.064 116.29l10.175 10.554zM117.165 377.002a200.274 200.274 0 00-54.032 7.142c-21.222 5.923-32.805 13.388-32.626 21.02.992 41.914 258.628 116.651 440.823 159.123-43.07-41.314-205.787-187.285-354.165-187.285z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path23 || (_path23 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M332.614 554.556S92.517 537.094 109.98 580.748c17.461 43.654 222.635-26.192 222.635-26.192zM393.73 393.036s-13.096-61.116-34.923-48.02c-21.827 13.097 34.923 48.02 34.923 48.02zM614.907 436.28s59.903-251.716 32.754-252.64c-27.15-.923-32.754 252.64-32.754 252.64z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path24 || (_path24 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M603.76 492.009l-.491-33.428c-.157-10.737-3.486-263.355 29.356-296.688a13.789 13.789 0 019.932-4.589 11.63 11.63 0 019.354 4.79c25.271 32.37-33.281 270.44-40.044 297.481l-8.108 32.434zm38.797-325.974c-.435 0-1.756 0-3.713 1.986-21.69 22.015-26.725 168.466-27.019 254.596 24.043-102.629 48.548-235.501 33.205-255.15a2.947 2.947 0 00-2.473-1.432z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path25 || (_path25 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M891.385 471.613s26.193-65.48 52.385-48.02c26.192 17.462-52.385 48.02-52.385 48.02zM642.557 1052.211s-34.923 257.559 30.558 253.193c65.481-4.365-30.558-253.193-30.558-253.193z",
    fill: "#1000ba",
    fillRule: "nonzero"
  })), _path26 || (_path26 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M825.237 993.638s-33.46-55.767-33.46-94.803c0 0-58.556-61.346-41.825-78.074 16.73-16.73 52.979 47.4 52.979 47.4s-66.922-75.285-47.403-86.439c19.518-11.152 83.651 72.498 83.651 72.498l22.307-11.152s-47.381-116.861-13.943-119.9c15.337-1.395 50.192 111.533 50.192 111.533l36.248 92.016s13.943 33.46 8.364 52.98a368.253 368.253 0 00-8.364 36.248l-108.746-22.307z",
    fill: "#ffb9b9",
    fillRule: "nonzero"
  })), _path27 || (_path27 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M911.677 1007.58s19.518-30.672 12.453-77.507c-7.063-46.833-45.914-73.065-45.914-73.065s-25.096 19.52 0 69.71c0 0-30.673 27.884-5.578 72.496",
    fillOpacity: 0.1,
    fillRule: "nonzero"
  })), _path28 || (_path28 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M922.829 1007.58s19.518-30.672 12.455-77.507c-7.065-46.833-45.916-73.065-45.916-73.065s-25.094 19.52 0 69.71c0 0-30.67 27.884-5.576 72.496",
    fill: "#ffb9b9",
    fillRule: "nonzero"
  })), _path29 || (_path29 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M846.15 852.826l-15.337-23.7s-72.497-11.155-64.131 13.942c8.364 25.094 41.825 13.942 41.825 13.942l19.518 19.518 18.124-23.702z",
    fillOpacity: 0.1,
    fillRule: "nonzero"
  })), _path30 || (_path30 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M858.698 851.432l-22.309-30.67s-72.495-11.155-64.131 13.94c8.364 25.096 41.825 13.942 41.825 13.942l19.518 19.518 25.097-16.73zM1375.938 1218.1l-13.942 111.535 217.492 13.942v-133.84l-203.55 8.363z",
    fill: "#ffb9b9",
    fillRule: "nonzero"
  })), _path31 || (_path31 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1978.215 1842.693l-176.372-352.758c-10.536-34.892-43.442-91.722-145.676-128.233l-76.68-64.867-57.16-2.055-228.647-33.458s-175.665-11.155-289.987 58.555l-30.673-13.942s-50.191-178.456-27.885-306.72l-128.264-11.153s-69.707 303.93-36.249 395.946c33.46 92.016 156.15 158.937 156.15 158.937l108.745 108.746 41.825 189.608h652.477l10.381-49.747 50.962 49.747 177.053 1.394z",
    fill: "#cfcce0",
    fillRule: "nonzero"
  })), _path32 || (_path32 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1731.614 1209.75c-205.43 55.473-407.338 59.395-604.979.855-23.234-6.882-39.116-27.28-39.116-50.432V582.827c0-25.834 19.655-47.871 46.444-52.071 186.442-29.239 383.954-26.975 590.533 1.091 27.295 3.71 47.558 25.998 47.558 52.235v574.87c0 23.638-16.543 44.345-40.44 50.798z",
    fill: "#cfcce0",
    fillRule: "nonzero"
  })), _path33 || (_path33 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1307.954 814.673s-47.249-69.058-18.173-87.231c29.078-18.173 72.692 32.712 72.692 32.712s54.519-47.249 83.596-29.076c29.078 18.173-29.077 83.595-29.077 83.595s43.616 10.904 47.25 39.98c3.634 29.077 18.173 105.403-43.614 109.04-33.1 1.946-51.598-7.58-61.64-16.848-7.524-6.742-19-6.88-26.68-.316-20.954 17.652-58.687 38-86.141-11.914-10.905-76.326 61.787-119.942 61.787-119.942zM1656.876 821.943s47.251-69.058 18.173-87.23c-29.077-18.174-72.691 32.711-72.691 32.711s-54.52-47.25-83.597-29.077c-29.075 18.173 29.078 83.596 29.078 83.596s-43.617 10.903-47.25 39.98c-3.635 29.078-18.174 105.404 43.616 109.038 33.1 1.946 51.598-7.58 61.639-16.845 7.522-6.745 18.999-6.88 26.68-.316 20.953 17.651 58.688 37.998 86.14-11.917 10.904-76.326-61.788-119.94-61.788-119.94zM1250.592 1010.68s68.18 54.893 213.568 51.433c145.389-3.462 192.405-9.396 223.482-43.665 31.077-34.267 40.287 5.31 30.637 31.254-9.65 25.945-22.043 70.217-94.47 77.393-47.684 4.723-150.741 5.843-215.597 6.057a331.468 331.468 0 01-145.735-32.42c-.6-.292-1.202-.585-1.798-.88-28.097-13.877-45.96-42.613-45.971-73.95.006-12.228 2.158-18.834 10.118-21.242 14.342-4.339 25.766 6.02 25.766 6.02z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path34 || (_path34 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1459.154 1262.172a1101.126 1101.126 0 01-327.716-49.714c-26.873-8.231-45.326-33.24-45.269-61.345V474.75c-.09-31.324 22.837-58.338 53.757-63.34 200.236-33.003 421.957-32.577 659 1.27 31.396 4.637 54.932 31.802 55.05 63.54v673.464c-.118 28.631-19.274 53.922-46.805 61.791-116.076 32.942-230.831 49.993-341.08 50.677-2.304.014-4.63.02-6.937.02zm-7.725-870.462a1911.426 1911.426 0 00-310.732 24.377c-28.638 4.63-49.873 29.652-49.787 58.663v676.363c-.053 26.033 17.044 49.2 41.937 56.819 211.846 65.947 438.283 65.605 673.03-1.016l.647 2.28-.647-2.28c25.5-7.284 43.247-30.71 43.358-57.232V476.219c-.106-29.393-21.902-54.552-50.98-58.846a2457.44 2457.44 0 00-346.826-25.663z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })), _path35 || (_path35 = /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M1436.87 491.995c-52.212 0-96.894-2.341-133.478-5.514-115.062-9.981-177.066-30.122-177.68-30.326l1.487-4.5c.607.201 62.237 20.203 176.825 30.123 105.759 9.16 279.553 11.35 506.87-30.205l.85 4.664c-149.34 27.3-275.676 35.758-374.874 35.758z",
    fill: "#3f3d56",
    fillRule: "nonzero"
  })));
};

/* harmony default export */ var image_event_1_mello_live_music = (image_event_1_mello_live_music_SvgImageEvent1MelloLiveMusic);
// EXTERNAL MODULE: ./components/elements/date.tsx + 2 modules
var elements_date = __webpack_require__("53Nq");

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// CONCATENATED MODULE: ./components/elements/event.tsx











const Event = eventData => {
  const {
    0: isVisible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const springProps = Object(external_react_spring_["useSpring"])({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? "0px" : "-500px"
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_visibility_sensor_default.a, {
    partialVisibility: true,
    onChange: sensorTriggered => {
      if (sensorTriggered && isVisible != true) {
        setVisible(true);
      }
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_spring_["animated"].div, {
      style: springProps,
      className: event_module_default.a.eventContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/Events/${eventData.id}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_superellipse_default.a, {
          r1: 0.0000006,
          r2: 0.232,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 9999,
            backgroundColor: utils_module_default.a.se_blue_light
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: event_module_default.a.eventContent,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: event_module_default.a.imagePart,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_event_1_mello_live_music, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: event_module_default.a.textpart,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
                className: event_module_default.a.title,
                children: eventData.title
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_date["a" /* default */], {
                dateString: eventData.date
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: event_module_default.a.contentHTML,
                dangerouslySetInnerHTML: {
                  __html: eventData.contentHtml
                }
              })]
            })]
          })
        })
      })
    })
  });
};
/* harmony default export */ var elements_event = (Event);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/Events/index.tsx









const Events = ({
  allEventsData
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Events - Octagon"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        className: `${events_module_default.a.section}`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: utils_module_default.a.headingLg,
          children: "Unforgettable Moments"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: utils_module_default.a.headingMdFd,
          children: "Enjoy memorable occasions with your friends and family at Octagon Events."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: utils_module_default.a.textMd,
          children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eius iste sed. Nesciunt officia doloremque fuga porro quam quod sequi cumque odit excepturi voluptates voluptatibus amet aut error, eos corporis? Libero quae voluptatum ad magnam fugiat ab ducimus. Inventore, accusantium! Laudantium suscipit fugit quis voluptates voluptatibus laborum nisi, iste temporibus repudiandae dolorum quos a expedita at? Similique exercitationem quo dolore."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: events_module_default.a.upcmngHeader,
          children: "Upcoming Events"
        })]
      }), allEventsData.map(({
        id,
        date,
        title,
        contentHtml
      }) => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(elements_event, {
          id: id,
          title: title,
          contentHtml: contentHtml,
          date: date
        }, id);
      })]
    })]
  });
};

/* harmony default export */ var pages_Events = __webpack_exports__["default"] = (Events);
const getStaticProps = async () => {
  const allEventsData = await Object(events["b" /* getCompleteSortedEventsData */])();
  return {
    props: {
      allEventsData
    }
  };
};

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });