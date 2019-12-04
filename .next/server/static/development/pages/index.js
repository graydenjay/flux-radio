module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./actions/devicesActions.js":
/*!***********************************!*\
  !*** ./actions/devicesActions.js ***!
  \***********************************/
/*! exports provided: fetchAvailableDevices, fetchAvailableDevicesSuccess, fetchAvailableDevicesError, transferPlaybackToDevice, transferPlaybackToDeviceSuccess, transferPlaybackToDeviceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvailableDevices", function() { return fetchAvailableDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvailableDevicesSuccess", function() { return fetchAvailableDevicesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvailableDevicesError", function() { return fetchAvailableDevicesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferPlaybackToDevice", function() { return transferPlaybackToDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferPlaybackToDeviceSuccess", function() { return transferPlaybackToDeviceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferPlaybackToDeviceError", function() { return transferPlaybackToDeviceError; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var fetchAvailableDevices = function fetchAvailableDevices() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES"]
  };
};
var fetchAvailableDevicesSuccess = function fetchAvailableDevicesSuccess(list) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES_SUCCESS"],
    list: list
  };
};
var fetchAvailableDevicesError = function fetchAvailableDevicesError(error) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES_ERROR"],
    error: error
  };
};
var transferPlaybackToDevice = function transferPlaybackToDevice(deviceId) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TRANSFER_PLAYBACK_TO_DEVICE"],
    deviceId: deviceId
  };
};
var transferPlaybackToDeviceSuccess = function transferPlaybackToDeviceSuccess(list) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS"]
  };
};
var transferPlaybackToDeviceError = function transferPlaybackToDeviceError(list) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TRANSFER_PLAYBACK_TO_DEVICE_ERROR"],
    error: error
  };
};

/***/ }),

/***/ "./actions/playbackActions.js":
/*!************************************!*\
  !*** ./actions/playbackActions.js ***!
  \************************************/
/*! exports provided: playTrack, updateNowPlaying, playTrackSuccess, mutePlayback, unmutePlayback, fetchPlayingContextSuccess, fetchPlayingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playTrack", function() { return playTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNowPlaying", function() { return updateNowPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playTrackSuccess", function() { return playTrackSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutePlayback", function() { return mutePlayback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmutePlayback", function() { return unmutePlayback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlayingContextSuccess", function() { return fetchPlayingContextSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPlayingContext", function() { return fetchPlayingContext; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/app */ "./config/app.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");


 // playback

var playTrack = function playTrack(track, user, position) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["PLAY_TRACK"],
    track: track,
    user: user,
    position: position
  };
};
var updateNowPlaying = function updateNowPlaying(track, user, position) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_NOW_PLAYING"],
    track: track,
    user: user,
    position: position
  };
};
var playTrackSuccess = function playTrackSuccess(track, user, position) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["PLAY_TRACK_SUCCESS"],
    track: track,
    user: user,
    position: position
  };
};
var mutePlayback = function mutePlayback() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["MUTE_PLAYBACK"]
  };
};
var unmutePlayback = function unmutePlayback() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["UNMUTE_PLAYBACK"]
  };
};
var fetchPlayingContextSuccess = function fetchPlayingContextSuccess(playingContext) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_PLAYING_CONTEXT_SUCCESS"],
    playingContext: playingContext
  };
};
var fetchPlayingContext = function fetchPlayingContext() {
  return function (dispatch) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_app__WEBPACK_IMPORTED_MODULE_1___default.a.HOST, "/api/now-playing")).then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(fetchPlayingContextSuccess(res));
    });
  };
};

/***/ }),

/***/ "./actions/queueActions.js":
/*!*********************************!*\
  !*** ./actions/queueActions.js ***!
  \*********************************/
/*! exports provided: queueTrack, updateQueue, queueEnded, queueRemoveTrack, fetchQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueTrack", function() { return queueTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQueue", function() { return updateQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueEnded", function() { return queueEnded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueRemoveTrack", function() { return queueRemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQueue", function() { return fetchQueue; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/app */ "./config/app.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");



var queueTrack = function queueTrack(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["QUEUE_TRACK"],
    id: id
  };
};
var updateQueue = function updateQueue(queue) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_QUEUE"],
    data: queue
  };
};
var queueEnded = function queueEnded() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["QUEUE_ENDED"]
  };
};
var queueRemoveTrack = function queueRemoveTrack(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["QUEUE_REMOVE_TRACK"],
    id: id
  };
};
var fetchQueue = function fetchQueue() {
  return function (dispatch) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_app__WEBPACK_IMPORTED_MODULE_1___default.a.HOST, "/api/queue")).then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(updateQueue(res));
    });
  };
};

/***/ }),

/***/ "./actions/searchActions.js":
/*!**********************************!*\
  !*** ./actions/searchActions.js ***!
  \**********************************/
/*! exports provided: searchTracks, searchTracksSuccess, searchTracksReset, fetchTrack, fetchTrackSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracksSuccess", function() { return searchTracksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracksReset", function() { return searchTracksReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTrack", function() { return fetchTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTrackSuccess", function() { return fetchTrackSuccess; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var searchTracks = function searchTracks(query) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS"],
    query: query
  };
};
var searchTracksSuccess = function searchTracksSuccess(query, results) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS_SUCCESS"],
    query: query,
    results: results
  };
};
var searchTracksReset = function searchTracksReset() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS_RESET"]
  };
};
var fetchTrack = function fetchTrack(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRACK"],
    id: id
  };
};
var fetchTrackSuccess = function fetchTrackSuccess(id, track) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TRACK_SUCCESS"],
    id: id
  };
};

/***/ }),

/***/ "./actions/sessionActions.js":
/*!***********************************!*\
  !*** ./actions/sessionActions.js ***!
  \***********************************/
/*! exports provided: load, login, loginSuccess, loginFailure, updateToken, updateTokenSuccess, updateCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailure", function() { return loginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToken", function() { return updateToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTokenSuccess", function() { return updateTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUser", function() { return updateCurrentUser; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var load = function load() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOAD"]
  };
};
var login = function login() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]
  };
};
var loginSuccess = function loginSuccess() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]
  };
};
var loginFailure = function loginFailure(refresh_token) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILURE"],
    refresh_token: refresh_token
  };
};
var updateToken = function updateToken(refreshToken) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOKEN"],
    refreshToken: refreshToken
  };
};
var updateTokenSuccess = function updateTokenSuccess(access_token) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOKEN_SUCCESS"],
    access_token: access_token
  };
};
var updateCurrentUser = function updateCurrentUser(user) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CURRENT_USER"],
    user: user
  };
};

/***/ }),

/***/ "./actions/usersActions.js":
/*!*********************************!*\
  !*** ./actions/usersActions.js ***!
  \*********************************/
/*! exports provided: updateUsers, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUsers", function() { return updateUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/app */ "./config/app.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");



var updateUsers = function updateUsers(users) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USERS"],
    data: users
  };
};
var fetchUsers = function fetchUsers() {
  return function (dispatch) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_app__WEBPACK_IMPORTED_MODULE_1___default.a.HOST, "/api/users")).then(function (res) {
      return res.json();
    }).then(function (res) {
      return dispatch(updateUsers(res));
    });
  };
};

/***/ }),

/***/ "./actions/voteActions.js":
/*!********************************!*\
  !*** ./actions/voteActions.js ***!
  \********************************/
/*! exports provided: voteUp, voteUpSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUp", function() { return voteUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voteUpSuccess", function() { return voteUpSuccess; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var voteUp = function voteUp(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["VOTE_UP"],
    id: id
  };
};
var voteUpSuccess = function voteUpSuccess() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["VOTE_UP_SUCCESS"]
  };
};

/***/ }),

/***/ "./components/AddToQueue.js":
/*!**********************************!*\
  !*** ./components/AddToQueue.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_searchActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/searchActions */ "./actions/searchActions.js");
/* harmony import */ var _actions_queueActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/queueActions */ "./actions/queueActions.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ResultsList =
/*#__PURE__*/
function (_Component) {
  _inherits(ResultsList, _Component);

  function ResultsList() {
    _classCallCheck(this, ResultsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResultsList).apply(this, arguments));
  }

  _createClass(ResultsList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          results = _this$props.results,
          focus = _this$props.focus;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3897911464" + " " + "add-to-queue__search-results"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3897911464",
        css: ".add-to-queue__search-results.jsx-3897911464{border:1px solid #999;list-style:none;margin:0;padding:0;}.add-to-queue__search-results-item.jsx-3897911464{padding:5px 0 5px 5px;}.add-to-queue__search-results-item--focused.jsx-3897911464{background-color:#eee;}.container.jsx-3897911464{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.album-img.jsx-3897911464{width:64;padding-right:1em;}.flex-item.jsx-3897911464{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.song-name.jsx-3897911464{font-size:1.3em;margin-bottom:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHbUMsQUFNQSxBQUdBLEFBR1QsQUFHRixBQUlHLEFBSUUsU0FQSSxPQVFBLE1BdkJKLEFBTWxCLEFBR0EsS0FPQSxTQVFBLEVBdkJXLFNBQ0MsVUFDWixjQWdCQSxHQVBBIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgeyBzZWFyY2hUcmFja3MsIHNlYXJjaFRyYWNrc1Jlc2V0IH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2hBY3Rpb25zJztcbmltcG9ydCB7IHF1ZXVlVHJhY2sgfSBmcm9tICcuLi9hY3Rpb25zL3F1ZXVlQWN0aW9ucyc7XG5cbmNsYXNzIFJlc3VsdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgZm9jdXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMtaXRlbS0tZm9jdXNlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFsYnVtLWltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDY0O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LWl0ZW17XG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc29uZy1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge3Jlc3VsdHMubWFwKChyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRm9jdXNlZCA9IGZvY3VzID09PSBpbmRleDtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPVxuICAgICAgICAgICAgJ2FkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMtaXRlbScgKyAoaXNGb2N1c2VkID8gJyBhZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0tLWZvY3VzZWQnIDogJycpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyLmlkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChyLmlkKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1pbWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyLmFsYnVtLmltYWdlc1syXS51cmx9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nLW5hbWVcIj57ci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj57ci5hcnRpc3RzWzBdLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBBZGRUb1F1ZXVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdGV4dDogdGhpcy5wcm9wcy50ZXh0IHx8ICcnLFxuICAgIGZvY3VzOiAtMVxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdGV4dCB9KTtcbiAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzKHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IC0xIH0pO1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3NSZXNldCgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVTZWxlY3RFbGVtZW50ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiAnJyB9KTtcbiAgICB0aGlzLnByb3BzLnF1ZXVlVHJhY2soaWQpO1xuICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgLy8gdG9kbzogdGhpcyBoYXBwZW5zIGJlZm9yZSB0aGUgaXRlbSBmcm9tIHRoZSBsaXN0IGlzIHNlbGVjdGVkLCBoaWRpbmcgdGhlXG4gICAgLy8gbGlzdCBvZiByZXN1bHRzLiBXZSBuZWVkIHRvIGRvIHRoaXMgaW4gYSBkaWZmZXJlbnQgd2F5LlxuICAgIC8qICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogLTEgfSk7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3NSZXNldCgpOyAqL1xuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3MoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdGhpcy5zdGF0ZS5mb2N1cyAtIDEgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRoaXMuc3RhdGUuZm9jdXMgKyAxIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6IHtcbiAgICAgICAgbGV0IGNvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZm9jdXMgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZVRyYWNrKHRoaXMucHJvcHMuc2VhcmNoLnJlc3VsdHNbdGhpcy5zdGF0ZS5mb2N1c10uaWQpO1xuICAgICAgICAgIGNvcnJlY3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnF1ZXVlVHJhY2sodGV4dCk7XG4gICAgICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvcnJlY3QpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogJycgfSk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hUcmFja3NSZXNldCgpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1czogLTEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3F1ZXVlLmFkZCd9KTtcbiAgICBjb25zdCByZXN1bHRzID0gdGhpcy5wcm9wcy5zZWFyY2gucmVzdWx0cztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8tcXVldWVcIiBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn0+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYWRkLXRvLXF1ZXVlX19pbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC10by1xdWV1ZV9faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAvPlxuICAgICAgICB7cmVzdWx0cyAmJiA8UmVzdWx0c0xpc3QgcmVzdWx0cz17cmVzdWx0c30gb25TZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0RWxlbWVudH0gZm9jdXM9e3RoaXMuc3RhdGUuZm9jdXN9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBxdWV1ZVRyYWNrOiB0ZXh0ID0+IGRpc3BhdGNoKHF1ZXVlVHJhY2sodGV4dCkpLFxuICBzZWFyY2hUcmFja3M6IHF1ZXJ5ID0+IGRpc3BhdGNoKHNlYXJjaFRyYWNrcyhxdWVyeSkpLFxuICBzZWFyY2hUcmFja3NSZXNldDogKCkgPT4gZGlzcGF0Y2goc2VhcmNoVHJhY2tzUmVzZXQoKSlcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzZWFyY2g6IHN0YXRlLnNlYXJjaFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKGluamVjdEludGwoQWRkVG9RdWV1ZSkpO1xuIl19 */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/AddToQueue.js */"
      }), results.map(function (r, index) {
        var isFocused = focus === index;
        var className = 'add-to-queue__search-results-item' + (isFocused ? ' add-to-queue__search-results-item--focused' : '');
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: r.id,
          onClick: function onClick() {
            return _this.props.onSelect(r.id);
          },
          className: "jsx-3897911464" + " " + (className || "")
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3897911464" + " " + "container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3897911464" + " " + "album-img"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: r.album.images[2].url,
          className: "jsx-3897911464"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3897911464" + " " + "flex-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3897911464" + " " + "song-name"
        }, r.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3897911464"
        }, r.artists[0].name))));
      }));
    }
  }]);

  return ResultsList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var AddToQueue =
/*#__PURE__*/
function (_Component2) {
  _inherits(AddToQueue, _Component2);

  function AddToQueue() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, AddToQueue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddToQueue)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      text: _this2.props.text || '',
      focus: -1
    });

    _defineProperty(_assertThisInitialized(_this2), "handleChange", function (e) {
      var text = e.target.value;

      _this2.setState({
        text: text
      });

      if (text !== '') {
        _this2.props.searchTracks(text);
      } else {
        _this2.setState({
          focus: -1
        });

        _this2.props.searchTracksReset();
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "handleSelectElement", function (id) {
      _this2.setState({
        text: ''
      });

      _this2.props.queueTrack(id);

      _this2.props.searchTracksReset();
    });

    _defineProperty(_assertThisInitialized(_this2), "handleBlur", function (e) {// todo: this happens before the item from the list is selected, hiding the
      // list of results. We need to do this in a different way.

      /*    this.setState({ focus: -1 });
      this.props.searchTracksReset(); */
    });

    _defineProperty(_assertThisInitialized(_this2), "handleFocus", function (e) {
      if (e.target.value !== '') {
        _this2.props.searchTracks(e.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "handleKeyDown", function (e) {
      switch (e.keyCode) {
        case 38:
          // up
          _this2.setState({
            focus: _this2.state.focus - 1
          });

          break;

        case 40:
          // down
          _this2.setState({
            focus: _this2.state.focus + 1
          });

          break;

        case 13:
          {
            var correct = false;

            if (_this2.state.focus !== -1) {
              _this2.props.queueTrack(_this2.props.search.results[_this2.state.focus].id);

              correct = true;
            } else {
              var text = e.target.value.trim();

              if (text.length !== 0) {
                _this2.props.queueTrack(text);

                correct = true;
              }
            }

            if (correct) {
              _this2.setState({
                text: ''
              });

              _this2.props.searchTracksReset();

              _this2.setState({
                focus: -1
              });
            }

            break;
          }
      }
    });

    return _this2;
  }

  _createClass(AddToQueue, [{
    key: "render",
    value: function render() {
      var placeholder = this.props.intl.formatMessage({
        id: 'queue.add'
      });
      var results = this.props.search.results;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onBlur: this.handleBlur,
        className: "jsx-3496109256" + " " + "add-to-queue"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3496109256",
        css: ".add-to-queue__input.jsx-3496109256{padding:5px;width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQWRkVG9RdWV1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SW9CLEFBR3lCLFlBQ0EsWUFDZCIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL0FkZFRvUXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGluamVjdEludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IHsgc2VhcmNoVHJhY2tzLCBzZWFyY2hUcmFja3NSZXNldCB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoQWN0aW9ucyc7XG5pbXBvcnQgeyBxdWV1ZVRyYWNrIH0gZnJvbSAnLi4vYWN0aW9ucy9xdWV1ZUFjdGlvbnMnO1xuXG5jbGFzcyBSZXN1bHRzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMsIGZvY3VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9fc2VhcmNoLXJlc3VsdHMge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cy1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0tLWZvY3VzZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbGJ1bS1pbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiA2NDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxleC1pdGVte1xuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNvbmctbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtyZXN1bHRzLm1hcCgociwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBmb2N1cyA9PT0gaW5kZXg7XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID1cbiAgICAgICAgICAgICdhZGQtdG8tcXVldWVfX3NlYXJjaC1yZXN1bHRzLWl0ZW0nICsgKGlzRm9jdXNlZCA/ICcgYWRkLXRvLXF1ZXVlX19zZWFyY2gtcmVzdWx0cy1pdGVtLS1mb2N1c2VkJyA6ICcnKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17ci5pZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25TZWxlY3Qoci5pZCl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0taW1nXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ci5hbGJ1bS5pbWFnZXNbMl0udXJsfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZy1uYW1lXCI+e3IubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3IuYXJ0aXN0c1swXS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQWRkVG9RdWV1ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRleHQ6IHRoaXMucHJvcHMudGV4dCB8fCAnJyxcbiAgICBmb2N1czogLTFcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHRleHQgfSk7XG4gICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrcyh0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiAtMSB9KTtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU2VsZWN0RWxlbWVudCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogJycgfSk7XG4gICAgdGhpcy5wcm9wcy5xdWV1ZVRyYWNrKGlkKTtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFRyYWNrc1Jlc2V0KCk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IGUgPT4ge1xuICAgIC8vIHRvZG86IHRoaXMgaGFwcGVucyBiZWZvcmUgdGhlIGl0ZW0gZnJvbSB0aGUgbGlzdCBpcyBzZWxlY3RlZCwgaGlkaW5nIHRoZVxuICAgIC8vIGxpc3Qgb2YgcmVzdWx0cy4gV2UgbmVlZCB0byBkbyB0aGlzIGluIGEgZGlmZmVyZW50IHdheS5cbiAgICAvKiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IC0xIH0pO1xuICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTsgKi9cbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRoaXMuc3RhdGUuZm9jdXMgLSAxIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0aGlzLnN0YXRlLmZvY3VzICsgMSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDEzOiB7XG4gICAgICAgIGxldCBjb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMucHJvcHMucXVldWVUcmFjayh0aGlzLnByb3BzLnNlYXJjaC5yZXN1bHRzW3RoaXMuc3RhdGUuZm9jdXNdLmlkKTtcbiAgICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5xdWV1ZVRyYWNrKHRleHQpO1xuICAgICAgICAgICAgY29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3JyZWN0KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6ICcnIH0pO1xuICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoVHJhY2tzUmVzZXQoKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IC0xIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdxdWV1ZS5hZGQnfSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucHJvcHMuc2VhcmNoLnJlc3VsdHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvLXF1ZXVlXCIgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFkZC10by1xdWV1ZV9faW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtdG8tcXVldWVfX2lucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cbiAgICAgICAgLz5cbiAgICAgICAge3Jlc3VsdHMgJiYgPFJlc3VsdHNMaXN0IHJlc3VsdHM9e3Jlc3VsdHN9IG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdEVsZW1lbnR9IGZvY3VzPXt0aGlzLnN0YXRlLmZvY3VzfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgcXVldWVUcmFjazogdGV4dCA9PiBkaXNwYXRjaChxdWV1ZVRyYWNrKHRleHQpKSxcbiAgc2VhcmNoVHJhY2tzOiBxdWVyeSA9PiBkaXNwYXRjaChzZWFyY2hUcmFja3MocXVlcnkpKSxcbiAgc2VhcmNoVHJhY2tzUmVzZXQ6ICgpID0+IGRpc3BhdGNoKHNlYXJjaFRyYWNrc1Jlc2V0KCkpXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoOiBzdGF0ZS5zZWFyY2hcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShpbmplY3RJbnRsKEFkZFRvUXVldWUpKTtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/AddToQueue.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: placeholder,
        value: this.state.text,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        onFocus: this.handleFocus,
        className: "jsx-3496109256" + " " + "add-to-queue__input"
      }), results && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ResultsList, {
        results: results,
        onSelect: this.handleSelectElement,
        focus: this.state.focus
      }));
    }
  }]);

  return AddToQueue;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    queueTrack: function queueTrack(text) {
      return dispatch(Object(_actions_queueActions__WEBPACK_IMPORTED_MODULE_5__["queueTrack"])(text));
    },
    searchTracks: function searchTracks(query) {
      return dispatch(Object(_actions_searchActions__WEBPACK_IMPORTED_MODULE_4__["searchTracks"])(query));
    },
    searchTracksReset: function searchTracksReset() {
      return dispatch(Object(_actions_searchActions__WEBPACK_IMPORTED_MODULE_4__["searchTracksReset"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(AddToQueue)));

/***/ }),

/***/ "./components/ButtonDarkStyle.js":
/*!***************************************!*\
  !*** ./components/ButtonDarkStyle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".btn--dark.jsx-1492783532{background-color:#bbc8d5;border:1px solid #bbc8d5;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQnV0dG9uRGFya1N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0Qix5QkFDQSx5QkFDZCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQnV0dG9uRGFya1N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuYnRuLS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYzhkNTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYzhkNTtcbiAgY29sb3I6ICMzMzM7XG59YDtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/ButtonDarkStyle.js */");

_defaultExport.__hash = "1492783532";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/ButtonStyle.js":
/*!***********************************!*\
  !*** ./components/ButtonStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".btn.jsx-194504614{background-color:transparent;border:1px solid #666;border-radius:50px;color:#666;cursor:pointer;line-height:28px;padding:0 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvQnV0dG9uU3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWdDLDZCQUNQLHNCQUNILG1CQUNSLFdBQ0ksZUFDRSxpQkFDRixlQUNqQiIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL0J1dHRvblN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59YDtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/ButtonStyle.js */");

_defaultExport.__hash = "194504614";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/Devices.js":
/*!*******************************!*\
  !*** ./components/Devices.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ButtonStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonStyle */ "./components/ButtonStyle.js");
/* harmony import */ var _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonDarkStyle */ "./components/ButtonDarkStyle.js");
/* harmony import */ var _actions_devicesActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/devicesActions */ "./actions/devicesActions.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Devices =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Devices, _React$PureComponent);

  function Devices() {
    _classCallCheck(this, Devices);

    return _possibleConstructorReturn(this, _getPrototypeOf(Devices).apply(this, arguments));
  }

  _createClass(Devices, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          devices = _this$props.devices,
          isFetching = _this$props.isFetching,
          fetchAvailableDevices = _this$props.fetchAvailableDevices,
          transferPlaybackToDevice = _this$props.transferPlaybackToDevice;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingBottom: '10px'
        },
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "devices.title"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: _ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash,
        css: _ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash,
        css: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        disabled: isFetching,
        onClick: function onClick() {
          fetchAvailableDevices();
        },
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash) + " " + "btn btn--dark"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "devices.fetch"
      })), devices.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "devices.empty"
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
      }, devices.map(function (device) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, device.is_active ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, "Active ->") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: function onClick() {
            transferPlaybackToDevice(device.id);
          },
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
          id: "devices.transfer"
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, device.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, device.type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_4__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_5__["default"].__hash)
        }, device.volume));
      }))));
    }
  }]);

  return Devices;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAvailableDevices: function fetchAvailableDevices(index) {
      return dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_6__["fetchAvailableDevices"])(index));
    },
    transferPlaybackToDevice: function transferPlaybackToDevice(deviceId) {
      return dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_6__["transferPlaybackToDevice"])(deviceId));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isFetching: Object(_reducers__WEBPACK_IMPORTED_MODULE_7__["getIsFetchingDevices"])(state),
    devices: Object(_reducers__WEBPACK_IMPORTED_MODULE_7__["getDevices"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Devices));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/sessionActions */ "./actions/sessionActions.js");
/* harmony import */ var _actions_playbackActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/playbackActions */ "./actions/playbackActions.js");
/* harmony import */ var _ButtonStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonStyle */ "./components/ButtonStyle.js");
/* harmony import */ var _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonDarkStyle */ "./components/ButtonDarkStyle.js");









var linkStyle = {
  lineHeight: '30px',
  marginRight: 15
};
var mainLinkStyle = {
  float: 'left',
  marginRight: '10px'
};
var headerStyle = {
  backgroundColor: '#e3ebf4',
  padding: '20px 40px'
};

var getNameFromUser = function getNameFromUser(user) {
  return user.display_name || user.id;
};

var Header = function Header(_ref) {
  var session = _ref.session,
      muted = _ref.muted,
      mutePlayback = _ref.mutePlayback,
      unmutePlayback = _ref.unmutePlayback,
      login = _ref.login;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: headerStyle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: Object.assign({}, linkStyle, mainLinkStyle)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/c-icon-128.png",
    height: "30"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "about"
  }))), session.user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-687546826" + " " + "media user-header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "687546826",
    css: ".user-header.jsx-687546826{float:right;width:150px;}.user-image.jsx-687546826{border-radius:50%;}.user-name.jsx-687546826{line-height:30px;}.media.jsx-687546826,.media__bd.jsx-687546826{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-687546826 .media__img.jsx-687546826{float:left;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDc0IsQUFHMkIsQUFJTSxBQUdELEFBSUQsQUFLTCxXQUNPLENBaEJOLElBV00sQ0FKcEIsQ0FIQSxNQUhBLEtBZ0JBLEtBTFMsT0FDVCIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb25BY3Rpb25zJztcbmltcG9ydCB7IG11dGVQbGF5YmFjaywgdW5tdXRlUGxheWJhY2sgfSBmcm9tICcuLi9hY3Rpb25zL3BsYXliYWNrQWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uU3R5bGUgZnJvbSAnLi9CdXR0b25TdHlsZSc7XG5pbXBvcnQgQnV0dG9uRGFya1N0eWxlIGZyb20gJy4vQnV0dG9uRGFya1N0eWxlJztcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gIG1hcmdpblJpZ2h0OiAxNVxufTtcblxuY29uc3QgbWFpbkxpbmtTdHlsZSA9IHtcbiAgZmxvYXQ6ICdsZWZ0JyxcbiAgbWFyZ2luUmlnaHQ6ICcxMHB4J1xufTtcblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNlM2ViZjQnLFxuICBwYWRkaW5nOiAnMjBweCA0MHB4J1xufTtcblxuY29uc3QgZ2V0TmFtZUZyb21Vc2VyID0gdXNlciA9PiB7XG4gIHJldHVybiB1c2VyLmRpc3BsYXlfbmFtZSB8fCB1c2VyLmlkO1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgc2Vzc2lvbiwgbXV0ZWQsIG11dGVQbGF5YmFjaywgdW5tdXRlUGxheWJhY2ssIGxvZ2luIH0pID0+IChcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICA8YSBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgbGlua1N0eWxlLCBtYWluTGlua1N0eWxlKX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9jLWljb24tMTI4LnBuZ1wiIGhlaWdodD1cIjMwXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJhYm91dFwiIC8+PC9hPlxuICAgIDwvTGluaz5cbiAgICB7c2Vzc2lvbi51c2VyXG4gICAgICA/IDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgdXNlci1oZWFkZXJcIj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudXNlci1oZWFkZXIge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lZGlhLFxuICAgICAgICAgICAgLm1lZGlhX19iZCB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIF9vdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgem9vbTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZWRpYSAubWVkaWFfX2ltZyB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFfX2ltZ1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAoc2Vzc2lvbi51c2VyLmltYWdlcyAmJiBzZXNzaW9uLnVzZXIuaW1hZ2VzLmxlbmd0aCAmJiBzZXNzaW9uLnVzZXIuaW1hZ2VzWzBdLnVybCkgfHxcbiAgICAgICAgICAgICAgICAgICcvc3RhdGljL3VzZXItaWNvbi5wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgYWx0PXtnZXROYW1lRnJvbVVzZXIoc2Vzc2lvbi51c2VyKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLW5hbWUgbWVkaWFfX2JkXCI+XG4gICAgICAgICAgICB7Z2V0TmFtZUZyb21Vc2VyKHNlc3Npb24udXNlcil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tLWRhcmtcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBvbkNsaWNrPXtsb2dpbn0+XG4gICAgICAgICAgPHN0eWxlIGpzeD57QnV0dG9uU3R5bGV9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntCdXR0b25EYXJrU3R5bGV9PC9zdHlsZT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImxvZ2luXCIgLz5cbiAgICAgICAgPC9idXR0b24+fVxuICAgIHtzZXNzaW9uLnVzZXJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJwbGF5YmFjay1jb250cm9sXCI+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtCdXR0b25TdHlsZX1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7QnV0dG9uRGFya1N0eWxlfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBsYXliYWNrLWNvbnRyb2wge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZGFya1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG11dGVkID8gdW5tdXRlUGxheWJhY2soKSA6IG11dGVQbGF5YmFjaygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bXV0ZWQgPyAnVW5tdXRlJyA6ICdNdXRlJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA6IG51bGx9XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW46ICgpID0+IGRpc3BhdGNoKGxvZ2luKCkpLFxuICBtdXRlUGxheWJhY2s6ICgpID0+IGRpc3BhdGNoKG11dGVQbGF5YmFjaygpKSxcbiAgdW5tdXRlUGxheWJhY2s6ICgpID0+IGRpc3BhdGNoKHVubXV0ZVBsYXliYWNrKCkpXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgbXV0ZWQ6IHN0YXRlLnBsYXliYWNrLm11dGVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/Header.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-687546826" + " " + "media__img"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: session.user.images && session.user.images.length && session.user.images[0].url || '/static/user-icon.png',
    width: "30",
    height: "30",
    alt: getNameFromUser(session.user),
    className: "jsx-687546826" + " " + "user-image"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-687546826" + " " + "user-name media__bd"
  }, getNameFromUser(session.user))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      float: 'right'
    },
    onClick: login,
    className: "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "btn btn--dark"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    css: _ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"].__hash,
    css: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "login"
  })), session.user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1578298220 " + "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "playback-control"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    css: _ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"].__hash,
    css: _ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1578298220",
    css: ".playback-control.jsx-1578298220{float:right;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGc0IsQUFHMkIsWUFDQSxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbkFjdGlvbnMnO1xuaW1wb3J0IHsgbXV0ZVBsYXliYWNrLCB1bm11dGVQbGF5YmFjayB9IGZyb20gJy4uL2FjdGlvbnMvcGxheWJhY2tBY3Rpb25zJztcbmltcG9ydCBCdXR0b25TdHlsZSBmcm9tICcuL0J1dHRvblN0eWxlJztcbmltcG9ydCBCdXR0b25EYXJrU3R5bGUgZnJvbSAnLi9CdXR0b25EYXJrU3R5bGUnO1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgbWFyZ2luUmlnaHQ6IDE1XG59O1xuXG5jb25zdCBtYWluTGlua1N0eWxlID0ge1xuICBmbG9hdDogJ2xlZnQnLFxuICBtYXJnaW5SaWdodDogJzEwcHgnXG59O1xuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2UzZWJmNCcsXG4gIHBhZGRpbmc6ICcyMHB4IDQwcHgnXG59O1xuXG5jb25zdCBnZXROYW1lRnJvbVVzZXIgPSB1c2VyID0+IHtcbiAgcmV0dXJuIHVzZXIuZGlzcGxheV9uYW1lIHx8IHVzZXIuaWQ7XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyBzZXNzaW9uLCBtdXRlZCwgbXV0ZVBsYXliYWNrLCB1bm11dGVQbGF5YmFjaywgbG9naW4gfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBsaW5rU3R5bGUsIG1haW5MaW5rU3R5bGUpfT5cbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2MtaWNvbi0xMjgucG5nXCIgaGVpZ2h0PVwiMzBcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImFib3V0XCIgLz48L2E+XG4gICAgPC9MaW5rPlxuICAgIHtzZXNzaW9uLnVzZXJcbiAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJtZWRpYSB1c2VyLWhlYWRlclwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC51c2VyLWhlYWRlciB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVkaWEsXG4gICAgICAgICAgICAubWVkaWFfX2JkIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgX292ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lZGlhIC5tZWRpYV9faW1nIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYV9faW1nXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIChzZXNzaW9uLnVzZXIuaW1hZ2VzICYmIHNlc3Npb24udXNlci5pbWFnZXMubGVuZ3RoICYmIHNlc3Npb24udXNlci5pbWFnZXNbMF0udXJsKSB8fFxuICAgICAgICAgICAgICAgICAgJy9zdGF0aWMvdXNlci1pY29uLnBuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICBhbHQ9e2dldE5hbWVGcm9tVXNlcihzZXNzaW9uLnVzZXIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItbmFtZSBtZWRpYV9fYmRcIj5cbiAgICAgICAgICAgIHtnZXROYW1lRnJvbVVzZXIoc2Vzc2lvbi51c2VyKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi0tZGFya1wiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IG9uQ2xpY2s9e2xvZ2lufT5cbiAgICAgICAgICA8c3R5bGUganN4PntCdXR0b25TdHlsZX08L3N0eWxlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e0J1dHRvbkRhcmtTdHlsZX08L3N0eWxlPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibG9naW5cIiAvPlxuICAgICAgICA8L2J1dHRvbj59XG4gICAge3Nlc3Npb24udXNlclxuICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cInBsYXliYWNrLWNvbnRyb2xcIj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge0J1dHRvblN0eWxlfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtCdXR0b25EYXJrU3R5bGV9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGxheWJhY2stY29udHJvbCB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLS1kYXJrXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbXV0ZWQgPyB1bm11dGVQbGF5YmFjaygpIDogbXV0ZVBsYXliYWNrKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttdXRlZCA/ICdVbm11dGUnIDogJ011dGUnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDogbnVsbH1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpbjogKCkgPT4gZGlzcGF0Y2gobG9naW4oKSksXG4gIG11dGVQbGF5YmFjazogKCkgPT4gZGlzcGF0Y2gobXV0ZVBsYXliYWNrKCkpLFxuICB1bm11dGVQbGF5YmFjazogKCkgPT4gZGlzcGF0Y2godW5tdXRlUGxheWJhY2soKSlcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICBtdXRlZDogc3RhdGUucGxheWJhY2subXV0ZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuIl19 */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/Header.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      muted ? unmutePlayback() : mutePlayback();
    },
    className: "jsx-1578298220 " + "jsx-".concat(_ButtonStyle__WEBPACK_IMPORTED_MODULE_7__["default"].__hash, " jsx-").concat(_ButtonDarkStyle__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "btn btn--dark"
  }, muted ? 'Unmute' : 'Mute')) : null);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login() {
      return dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__["login"])());
    },
    mutePlayback: function mutePlayback() {
      return dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_6__["mutePlayback"])());
    },
    unmutePlayback: function unmutePlayback() {
      return dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_6__["unmutePlayback"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    session: state.session,
    muted: state.playback.muted
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2127561053"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2127561053",
    css: "div.jsx-2127561053{color:#333;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR29CLFdBQ2dELHdEQUM1QyxlQUNqQiIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXIgLz5cbiAgICA8ZGl2PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/MyLayout.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2127561053"
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NowPlaying.js":
/*!**********************************!*\
  !*** ./components/NowPlaying.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NowPlaying =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(NowPlaying, _React$PureComponent);

  function NowPlaying() {
    var _this;

    _classCallCheck(this, NowPlaying);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NowPlaying).call(this));
    _this.state = {
      start: Date.now(),
      currentPosition: 0
    };
    _this.timer = null;

    _this.tick = function () {
      _this.setState({
        currentPosition: Date.now() - _this.state.start + (_this.props.position || 0)
      });
    };

    return _this;
  }

  _createClass(NowPlaying, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (this.props.position !== props.position || this.props.track !== props.track) {
        this.setState({
          start: Date.now(),
          currentPosition: 0
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timer = setInterval(this.tick, 300);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var percentage = +(this.state.currentPosition * 100 / this.props.track.duration_ms).toFixed(2) + '%';
      var userName = this.props.user.display_name || this.props.user.id;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3942739481",
        css: ".now-playing.jsx-3942739481{background-color:#424d58;color:#fff;height:250px;position:relative;width:100%;}.now-playing__text.jsx-3942739481{padding:40px;}.now-playing__bd.jsx-3942739481{padding-left:30px;}.now-playing__track-name.jsx-3942739481{font-size:2em;padding-top:1.2em;}.now-playing__artist-name.jsx-3942739481{font-size:1.2em;padding-bottom:2em;padding-top:0.5em;}.now-playing__user.jsx-3942739481{padding-top:0.5em;}.now-playing__progress_bar.jsx-3942739481{bottom:0;background-color:#222;height:5px;position:absolute;width:100%;}.media.jsx-3942739481,.media__bd.jsx-3942739481{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-3942739481 .media__img.jsx-3942739481{float:left;margin-right:10px;}.user-image.jsx-3942739481{border-radius:50%;}.user-name.jsx-3942739481{line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvTm93UGxheWluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBR3NDLEFBT1osQUFHSyxBQUdKLEFBSUUsQUFLRSxBQUdULEFBUU8sQUFLTCxBQUlPLEFBR0QsU0FuQkssRUFhSixFQS9CcEIsQ0FNb0IsRUFJQyxBQWdCRCxDQVlwQixDQW5DQSxBQVlBLEFBb0JBLE9BMUNhLElBdUNiLEVBYmEsQ0FaYixFQW9CUyxDQWhCVyxDQWpCTCxLQWtDZixDQVJvQixPQXpCQSxJQWlCcEIsT0FTYSxPQXpCQSxJQTBCYixPQXpCQSIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL05vd1BsYXlpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBOb3dQbGF5aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgY3VycmVudFBvc2l0aW9uOiAwXG4gICAgfTtcbiAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB0aGlzLnRpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uOiBEYXRlLm5vdygpIC0gdGhpcy5zdGF0ZS5zdGFydCArICh0aGlzLnByb3BzLnBvc2l0aW9uIHx8IDApXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gcHJvcHMucG9zaXRpb24gfHwgdGhpcy5wcm9wcy50cmFjayAhPT0gcHJvcHMudHJhY2spIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGFydDogRGF0ZS5ub3coKSxcbiAgICAgICAgY3VycmVudFBvc2l0aW9uOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMudGljaywgMzAwKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKyh0aGlzLnN0YXRlLmN1cnJlbnRQb3NpdGlvbiAqIDEwMCAvIHRoaXMucHJvcHMudHJhY2suZHVyYXRpb25fbXMpLnRvRml4ZWQoMikgKyAnJSc7XG4gICAgY29uc3QgdXNlck5hbWUgPSB0aGlzLnByb3BzLnVzZXIuZGlzcGxheV9uYW1lIHx8IHRoaXMucHJvcHMudXNlci5pZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ1wiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5vdy1wbGF5aW5nIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjRkNTg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdy1wbGF5aW5nX190ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3ctcGxheWluZ19fYmQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm93LXBsYXlpbmdfX3RyYWNrLW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4yZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3ctcGxheWluZ19fYXJ0aXN0LW5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3ctcGxheWluZ19fdXNlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3ctcGxheWluZ19fcHJvZ3Jlc3NfYmFyIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWVkaWEsXG4gICAgICAgICAgLm1lZGlhX19iZCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgX292ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgICAgem9vbTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1lZGlhIC5tZWRpYV9faW1nIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmdfX3RleHQgbWVkaWFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhX19pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnRyYWNrLmFsYnVtLmltYWdlc1sxXS51cmx9IHdpZHRoPVwiMTcwXCIgaGVpZ2h0PVwiMTcwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdy1wbGF5aW5nX19iZCBtZWRpYV9fYmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmdfX3RyYWNrLW5hbWVcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhY2submFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ19fYXJ0aXN0LW5hbWVcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudHJhY2suYXJ0aXN0cy5tYXAoYSA9PiBhLm5hbWUpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFfX2ltZ1wiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnVzZXIuaW1hZ2VzICYmIHRoaXMucHJvcHMudXNlci5pbWFnZXMubGVuZ3RoICYmIHRoaXMucHJvcHMudXNlci5pbWFnZXNbMF0udXJsKSB8fFxuICAgICAgICAgICAgICAgICAgICAnL3N0YXRpYy91c2VyLWljb24ucG5nJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgYWx0PXt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dXNlck5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1uYW1lIG1lZGlhX19iZFwiPlxuICAgICAgICAgICAgICB7dXNlck5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm93LXBsYXlpbmdfX3Byb2dyZXNzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ctcGxheWluZ19fcHJvZ3Jlc3NfYmFyXCIgc3R5bGU9e3sgd2lkdGg6IHBlcmNlbnRhZ2UgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vd1BsYXlpbmc7XG4iXX0= */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/NowPlaying.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing__text media"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "media__img"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.props.track.album.images[1].url,
        width: "170",
        height: "170",
        className: "jsx-3942739481"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing__bd media__bd"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing__track-name"
      }, this.props.track.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing__artist-name"
      }, this.props.track.artists.map(function (a) {
        return a.name;
      }).join(', ')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "media__img"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.props.user.images && this.props.user.images.length && this.props.user.images[0].url || '/static/user-icon.png',
        width: "30",
        height: "30",
        alt: userName,
        title: userName,
        className: "jsx-3942739481" + " " + "user-image"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "user-name media__bd"
      }, userName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3942739481" + " " + "now-playing__progress"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: percentage
        },
        className: "jsx-3942739481" + " " + "now-playing__progress_bar"
      })));
    }
  }]);

  return NowPlaying;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (NowPlaying);

/***/ }),

/***/ "./components/PageWithIntl.js":
/*!************************************!*\
  !*** ./components/PageWithIntl.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.

if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(function (lang) {
    Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["addLocaleData"])(window.ReactIntlLocaleData[lang]);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function (Page) {
  var IntlPage = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Page);
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(PageWithIntl, _Component);

      function PageWithIntl() {
        _classCallCheck(this, PageWithIntl);

        return _possibleConstructorReturn(this, _getPrototypeOf(PageWithIntl).apply(this, arguments));
      }

      _createClass(PageWithIntl, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              locale = _this$props.locale,
              messages = _this$props.messages,
              now = _this$props.now,
              props = _objectWithoutProperties(_this$props, ["locale", "messages", "now"]);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
            locale: locale,
            messages: messages,
            initialNow: now
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IntlPage, props));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
            var props, req, _ref, locale, messages, now;

            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(typeof Page.getInitialProps === 'function')) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return Page.getInitialProps(context);

                  case 3:
                    props = _context.sent;

                  case 4:
                    // Get the `locale` and `messages` from the request object on the server.
                    // In the browser, use the same values that the server serialized.
                    req = context.req; // todo: for some reason it is not props.initialProps, but props in the example

                    _ref = req || window.__NEXT_DATA__.props.initialProps, locale = _ref.locale, messages = _ref.messages; // Always update the current time on page load/transition because the
                    // <IntlProvider> will be a new instance even with pushState routing.

                    now = Date.now();
                    return _context.abrupt("return", _objectSpread({}, props, {
                      locale: locale,
                      messages: messages,
                      now: now
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return PageWithIntl;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
  );
});

/***/ }),

/***/ "./components/Queue.js":
/*!*****************************!*\
  !*** ./components/Queue.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _QueueItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueueItem */ "./components/QueueItem.js");
/* harmony import */ var _actions_queueActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/queueActions */ "./actions/queueActions.js");
/* harmony import */ var _actions_voteActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/voteActions */ "./actions/voteActions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Queue =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Queue, _React$PureComponent);

  function Queue() {
    _classCallCheck(this, Queue);

    return _possibleConstructorReturn(this, _getPrototypeOf(Queue).apply(this, arguments));
  }

  _createClass(Queue, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          items = _this$props.items,
          session = _this$props.session;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingBottom: '10px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "queue.title"
      })), items.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "queue.empty"
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
        className: "jsx-1423284646" + " " + "queue"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1423284646",
        css: ".queue.jsx-1423284646{max-width:550px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvUXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIwQixBQUdtQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2pvc2VwaHBhcmF0YS9Eb3dubG9hZHMvYy1tYXN0ZXIvY29tcG9uZW50cy9RdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgUXVldWVJdGVtIGZyb20gJy4vUXVldWVJdGVtJztcbmltcG9ydCB7IHF1ZXVlUmVtb3ZlVHJhY2sgfSBmcm9tICcuLi9hY3Rpb25zL3F1ZXVlQWN0aW9ucyc7XG5pbXBvcnQgeyB2b3RlVXAgfSBmcm9tICcuLi9hY3Rpb25zL3ZvdGVBY3Rpb25zJztcblxuY2xhc3MgUXVldWUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMsIHNlc3Npb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PlxuICAgICAgICA8aDI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJxdWV1ZS50aXRsZVwiIC8+PC9oMj5cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gPHA+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJxdWV1ZS5lbXB0eVwiIC8+PC9wPlxuICAgICAgICAgIDogPHRhYmxlIGNsYXNzTmFtZT1cInF1ZXVlXCI+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucXVldWUge1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UXVldWVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l9XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgb25Wb3RlVXA9eygpID0+IHRoaXMucHJvcHMudm90ZVVwKGkuaWQpfVxuICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09eygpID0+IHRoaXMucHJvcHMucXVldWVSZW1vdmVUcmFjayhpLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdm90ZVVwOiBpZCA9PiBkaXNwYXRjaCh2b3RlVXAoaWQpKSxcbiAgcXVldWVSZW1vdmVUcmFjazogaWQgPT4gZGlzcGF0Y2gocXVldWVSZW1vdmVUcmFjayhpZCkpXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcXVldWU6IHN0YXRlLnF1ZXVlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUXVldWUpO1xuIl19 */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/Queue.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        className: "jsx-1423284646"
      }, items.map(function (i, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QueueItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: i,
          session: session,
          index: index,
          key: index,
          onVoteUp: function onVoteUp() {
            return _this.props.voteUp(i.id);
          },
          onRemoveItem: function onRemoveItem() {
            return _this.props.queueRemoveTrack(i.id);
          }
        });
      }))));
    }
  }]);

  return Queue;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    voteUp: function voteUp(id) {
      return dispatch(Object(_actions_voteActions__WEBPACK_IMPORTED_MODULE_6__["voteUp"])(id));
    },
    queueRemoveTrack: function queueRemoveTrack(id) {
      return dispatch(Object(_actions_queueActions__WEBPACK_IMPORTED_MODULE_5__["queueRemoveTrack"])(id));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    queue: state.queue
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Queue));

/***/ }),

/***/ "./components/QueueItem.js":
/*!*********************************!*\
  !*** ./components/QueueItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var index = _ref.index,
      item = _ref.item,
      session = _ref.session,
      onRemoveItem = _ref.onRemoveItem,
      onVoteUp = _ref.onVoteUp;
  var voteUp = item.voters && session.user && item.voters.filter(function (v) {
    return v.id === session.user.id;
  }).length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onVoteUp
  }, "\u25B2") : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      paddingRight: '10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item.track.album.images[2].url,
    width: "40",
    height: "40"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      paddingRight: '10px'
    }
  }, index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      paddingRight: '10px'
    }
  }, item.track.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      paddingRight: '10px'
    }
  }, item.track.artists.map(function (a) {
    return a.name;
  }).join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      paddingRight: '10px'
    }
  }, item.user && (item.user.display_name || item.user.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.user && session.user && item.user.id === session.user.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      onRemoveItem(item.id);
    }
  }, "X") : voteUp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.voters && item.voters.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.voters.length === 1 ? '1 vote' : item.voters.length + ' votes') : ''));
});

/***/ }),

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1123997634"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1123997634",
    css: ".user-list.jsx-1123997634{list-style:none;margin:0;padding:0;}.user-list__item.jsx-1123997634{display:block;margin-bottom:0.5em;}.user-image.jsx-1123997634{border-radius:50%;}.user-name.jsx-1123997634{line-height:30px;}.media.jsx-1123997634,.media__bd.jsx-1123997634{overflow:hidden;_overflow:visible;zoom:1;}.media.jsx-1123997634 .media__img.jsx-1123997634{float:left;margin-right:10px;}.header-2.jsx-1123997634{color:#999;font-size:11px;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL2NvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBRzJCLEFBS0YsQUFJSSxBQUdELEFBSUQsQUFLTCxBQUlBLFdBSE8sQUFJSCxHQXBCSyxFQUxYLEFBZ0JTLENBSnBCLENBSEEsT0FSWSxDQXlCZSxHQUozQixLQWhCQSxBQVdTLENBZlQsTUFnQkEsVUFTQSIsImZpbGUiOiIvVXNlcnMvam9zZXBocGFyYXRhL0Rvd25sb2Fkcy9jLW1hc3Rlci9jb21wb25lbnRzL1VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaXRlbXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC51c2VyLWxpc3Qge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItbGlzdF9faXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVkaWEsXG4gICAgICAgIC5tZWRpYV9fYmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgX292ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIHpvb206IDE7XG4gICAgICAgIH1cbiAgICAgICAgLm1lZGlhIC5tZWRpYV9faW1nIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci0yIHtcbiAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRlci0yXCI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJvbmxpbmVcIiAvPjwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwidXNlci1saXN0XCI+XG4gICAgICAgIHtpdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlck5hbWUgPSBpLmRpc3BsYXlfbmFtZSB8fCBpLmlkO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidXNlci1saXN0X19pdGVtIG1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFfX2ltZ1wiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXItaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgc3JjPXsoaS5pbWFnZXMgJiYgaS5pbWFnZXMubGVuZ3RoICYmIGkuaW1hZ2VzWzBdLnVybCkgfHwgJy9zdGF0aWMvdXNlci1pY29uLnBuZyd9XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17dXNlck5hbWV9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17dXNlck5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1uYW1lIG1lZGlhX19iZFwiPlxuICAgICAgICAgICAgICAgIHt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/components/Users.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1123997634" + " " + "header-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "online"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1123997634" + " " + "user-list"
  }, items.map(function (i, index) {
    var userName = i.display_name || i.id;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-1123997634" + " " + "user-list__item media"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1123997634" + " " + "media__img"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: i.images && i.images.length && i.images[0].url || '/static/user-icon.png',
      width: "30",
      height: "30",
      alt: userName,
      title: userName,
      className: "jsx-1123997634" + " " + "user-image"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1123997634" + " " + "user-name media__bd"
    }, userName));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      clear: 'both'
    },
    className: "jsx-1123997634"
  }));
});

/***/ }),

/***/ "./config/app.js":
/*!***********************!*\
  !*** ./config/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  HOST: 'http://localhost:3000/auth/callback'
};

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: QUEUE_TRACK, UPDATE_QUEUE, QUEUE_ENDED, QUEUE_REMOVE_TRACK, SEARCH_TRACKS, SEARCH_TRACKS_SUCCESS, SEARCH_TRACKS_RESET, FETCH_TRACK, FETCH_TRACK_SUCCESS, FETCH_PLAYING_CONTEXT_SUCCESS, UPDATE_USERS, LOAD, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_CURRENT_USER, PLAY_TRACK, UPDATE_NOW_PLAYING, PLAY_TRACK_SUCCESS, MUTE_PLAYBACK, UNMUTE_PLAYBACK, FETCH_AVAILABLE_DEVICES, FETCH_AVAILABLE_DEVICES_SUCCESS, FETCH_AVAILABLE_DEVICES_ERROR, TRANSFER_PLAYBACK_TO_DEVICE, TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS, TRANSFER_PLAYBACK_TO_DEVICE_ERROR, VOTE_UP, VOTE_UP_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUEUE_TRACK", function() { return QUEUE_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QUEUE", function() { return UPDATE_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUEUE_ENDED", function() { return QUEUE_ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUEUE_REMOVE_TRACK", function() { return QUEUE_REMOVE_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TRACKS", function() { return SEARCH_TRACKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TRACKS_SUCCESS", function() { return SEARCH_TRACKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TRACKS_RESET", function() { return SEARCH_TRACKS_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRACK", function() { return FETCH_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TRACK_SUCCESS", function() { return FETCH_TRACK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PLAYING_CONTEXT_SUCCESS", function() { return FETCH_PLAYING_CONTEXT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USERS", function() { return UPDATE_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOKEN", function() { return UPDATE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOKEN_SUCCESS", function() { return UPDATE_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CURRENT_USER", function() { return UPDATE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_TRACK", function() { return PLAY_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NOW_PLAYING", function() { return UPDATE_NOW_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_TRACK_SUCCESS", function() { return PLAY_TRACK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE_PLAYBACK", function() { return MUTE_PLAYBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMUTE_PLAYBACK", function() { return UNMUTE_PLAYBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AVAILABLE_DEVICES", function() { return FETCH_AVAILABLE_DEVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AVAILABLE_DEVICES_SUCCESS", function() { return FETCH_AVAILABLE_DEVICES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AVAILABLE_DEVICES_ERROR", function() { return FETCH_AVAILABLE_DEVICES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFER_PLAYBACK_TO_DEVICE", function() { return TRANSFER_PLAYBACK_TO_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS", function() { return TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFER_PLAYBACK_TO_DEVICE_ERROR", function() { return TRANSFER_PLAYBACK_TO_DEVICE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_UP", function() { return VOTE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE_UP_SUCCESS", function() { return VOTE_UP_SUCCESS; });
var QUEUE_TRACK = 'QUEUE_TRACK';
var UPDATE_QUEUE = 'UPDATE_QUEUE';
var QUEUE_ENDED = 'QUEUE_ENDED';
var QUEUE_REMOVE_TRACK = 'QUEUE_REMOVE_TRACK';
var SEARCH_TRACKS = 'SEARCH_TRACKS';
var SEARCH_TRACKS_SUCCESS = 'SEARCH_TRACKS_SUCCESS';
var SEARCH_TRACKS_RESET = 'SEARCH_TRACKS_RESET';
var FETCH_TRACK = 'FETCH_TRACK';
var FETCH_TRACK_SUCCESS = 'FETCH_TRACK_SUCCESS';
var FETCH_PLAYING_CONTEXT_SUCCESS = 'FETCH_PLAYING_CONTEXT_SUCCESS';
var UPDATE_USERS = 'UPDATE_USERS';
var LOAD = 'LOAD';
var LOGIN = 'LOGIN';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILURE = 'LOGIN_FAILURE';
var UPDATE_TOKEN = 'UPDATE_TOKEN';
var UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
var UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
var PLAY_TRACK = 'PLAY_TRACK';
var UPDATE_NOW_PLAYING = 'UPDATE_NOW_PLAYING';
var PLAY_TRACK_SUCCESS = 'PLAY_TRACK_SUCCESS';
var MUTE_PLAYBACK = 'MUTE_PLAYBACK';
var UNMUTE_PLAYBACK = 'UNMUTE_PLAYBACK';
var FETCH_AVAILABLE_DEVICES = 'FETCH_AVAILABLE_DEVICES';
var FETCH_AVAILABLE_DEVICES_SUCCESS = 'FETCH_AVAILABLE_DEVICES_SUCCESS';
var FETCH_AVAILABLE_DEVICES_ERROR = 'FETCH_AVAILABLE_DEVICES_ERROR';
var TRANSFER_PLAYBACK_TO_DEVICE = 'TRANSFER_PLAYBACK_TO_DEVICE';
var TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS = 'TRANSFER_PLAYBACK_TO_DEVICE_SUCCESS';
var TRANSFER_PLAYBACK_TO_DEVICE_ERROR = 'TRANSFER_PLAYBACK_TO_DEVICE_ERROR';
var VOTE_UP = 'VOTE_UP';
var VOTE_UP_SUCCESS = 'VOTE_UP_SUCCESS';

/***/ }),

/***/ "./middlewares/devicesMiddleware.js":
/*!******************************************!*\
  !*** ./middlewares/devicesMiddleware.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/devicesActions */ "./actions/devicesActions.js");



var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      switch (action.type) {
        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_AVAILABLE_DEVICES"]:
          {
            isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(SPOTIFY_API_BASE, "/me/player/devices"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(store.getState().session.access_token)
              }
            }).then(function (r) {
              return r.json();
            }).then(function (r) {
              if (r.error) {
                store.dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__["fetchAvailableDevicesError"])(r.error));
              } else {
                store.dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__["fetchAvailableDevicesSuccess"])(r.devices));
              }
            });
            break;
          }

        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["TRANSFER_PLAYBACK_TO_DEVICE"]:
          {
            isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(SPOTIFY_API_BASE, "/me/player"), {
              method: 'PUT',
              headers: {
                Authorization: "Bearer ".concat(store.getState().session.access_token)
              },
              body: JSON.stringify({
                device_ids: [action.deviceId]
              })
            }).then(function (r) {
              return r.json();
            }).then(function (r) {
              if (r.error) {
                store.dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__["transferPlaybackToDeviceError"])(r.error));
              } else {
                store.dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__["transferPlaybackToDeviceSuccess"])());
                store.dispatch(Object(_actions_devicesActions__WEBPACK_IMPORTED_MODULE_2__["fetchAvailableDevices"])());
              }
            });
            break;
          }

        default:
          break;
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./middlewares/loggerMiddleware.js":
/*!*****************************************!*\
  !*** ./middlewares/loggerMiddleware.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);
      console.log(action);
    };
  };
});

/***/ }),

/***/ "./middlewares/playbackMiddleware.js":
/*!*******************************************!*\
  !*** ./middlewares/playbackMiddleware.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_playbackActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/playbackActions */ "./actions/playbackActions.js");
/* harmony import */ var _actions_devicesActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/devicesActions */ "./actions/devicesActions.js");




var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      switch (action.type) {
        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["PLAY_TRACK"]:
          {
            if (false) {}

            break;
          }

        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["UNMUTE_PLAYBACK"]:
          {
            var _store$getState$playb = store.getState().playback,
                track = _store$getState$playb.track,
                user = _store$getState$playb.user,
                position = _store$getState$playb.position,
                startTime = _store$getState$playb.startTime;
            var currentPosition = Date.now() - startTime + position;
            store.dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_2__["playTrack"])(track, user, currentPosition));
            break;
          }

        default:
          break;
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./middlewares/searchMiddleware.js":
/*!*****************************************!*\
  !*** ./middlewares/searchMiddleware.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_searchActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/searchActions */ "./actions/searchActions.js");



var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var searchTracks = function searchTracks(query) {
  return function (dispatch, getState) {
    var shouldAddWildcard = false;

    if (query.length > 1) {
      var words = query.split(' ');
      var lastWord = words[words.length - 1];

      if (/^[a-z0-9\s]+$/i.test(lastWord) && query.lastIndexOf('*') !== query.length - 1) {
        shouldAddWildcard = true;
      }
    }

    var wildcardQuery = "".concat(query).concat(shouldAddWildcard ? '*' : ''); // Trick to improve search results

    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(SPOTIFY_API_BASE, "/search?q=").concat(encodeURIComponent(wildcardQuery), "&type=track&limit=10"), {
      headers: {
        Authorization: 'Bearer ' + getState().session.access_token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(Object(_actions_searchActions__WEBPACK_IMPORTED_MODULE_2__["searchTracksSuccess"])(query, res.tracks.items));
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      switch (action.type) {
        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SEARCH_TRACKS"]:
          {
            return store.dispatch(searchTracks(action.query));
            break;
          }

        default:
          break;
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./middlewares/sessionMiddleware.js":
/*!******************************************!*\
  !*** ./middlewares/sessionMiddleware.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/sessionActions */ "./actions/sessionActions.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app */ "./config/app.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_app__WEBPACK_IMPORTED_MODULE_3__);




var SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

var getCurrentUser = function getCurrentUser() {
  return function (dispatch, getState) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(SPOTIFY_API_BASE, "/me"), {
      headers: {
        Authorization: 'Bearer ' + getState().session.access_token
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["updateCurrentUser"])(res));
    });
  };
};

var updateToken = function updateToken() {
  return function (dispatch, getState) {
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_app__WEBPACK_IMPORTED_MODULE_3__["HOST"], "/auth/token"), {
      method: 'POST',
      body: JSON.stringify({
        refresh_token: getState().session.refresh_token
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["updateTokenSuccess"])(res.access_token));
    });
  };
}; // todo: set a timer, both client-side and server-side


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      switch (action.type) {
        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD"]:
          {
            var session = store.getState().session;
            var expiresIn = session.expires_in;
            var needsToUpdate = !expiresIn || expiresIn - Date.now() < 10 * 60 * 1000;

            if (needsToUpdate) {
              console.log('sessionMiddleware > needs to update access token');
              var refreshToken = session.refresh_token;

              if (refreshToken) {
                console.log('sessionMiddleware > using refresh token');
                store.dispatch(updateToken()).then(function () {
                  return store.dispatch(getCurrentUser());
                }).then(function () {
                  store.dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])());
                });
              }
            } else {
              console.log('sessionMiddleware > no need to update access token');
              store.dispatch(getCurrentUser()).then(function () {
                store.dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])());
              });
            }

            break;
          }

        case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
          {
            var getLoginURL = function getLoginURL(scopes) {
              return "".concat(_config_app__WEBPACK_IMPORTED_MODULE_3__["HOST"], "/auth/login?scope=").concat(encodeURIComponent(scopes.join(' ')));
            };

            var width = 450,
                height = 730,
                left = window.screen.width / 2 - width / 2,
                top = window.screen.height / 2 - height / 2;

            var messageFn = function messageFn(event) {
              try {
                var hash = JSON.parse(event.data);

                if (hash.type === 'access_token') {
                  window.removeEventListener('message', messageFn, false);
                  var accessToken = hash.access_token;
                  var _expiresIn = hash.expires_in;

                  if (accessToken === '') {// todo: implement login error
                  } else {
                    var _refreshToken = hash.refresh_token;
                    localStorage.setItem('refreshToken', _refreshToken);
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('expiresIn', Date.now() + _expiresIn * 1000);
                    store.dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["updateTokenSuccess"])(accessToken));
                    store.dispatch(getCurrentUser()).then(function () {
                      return store.dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])());
                    });
                  }
                }
              } catch (e) {
                // do nothing
                console.error(e);
              }
            };

            window.addEventListener('message', messageFn, false);
            var url = getLoginURL(['user-read-playback-state', 'user-modify-playback-state']);
            window.open(url, 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
            break;
          }

        default:
          break;
      }

      return result;
    };
  };
});

/***/ }),

/***/ "./middlewares/socketMiddleware.js":
/*!*****************************************!*\
  !*** ./middlewares/socketMiddleware.js ***!
  \*****************************************/
/*! exports provided: socketMiddleware, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketMiddleware", function() { return socketMiddleware; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/usersActions */ "./actions/usersActions.js");
/* harmony import */ var _actions_queueActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/queueActions */ "./actions/queueActions.js");
/* harmony import */ var _actions_playbackActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/playbackActions */ "./actions/playbackActions.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/app */ "./config/app.js");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);






var socket = null;

var getIdFromTrackString = function getIdFromTrackString() {
  var trackString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var matches = trackString.match(/^https:\/\/open\.spotify\.com\/track\/(.*)/);

  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^https:\/\/play\.spotify\.com\/track\/(.*)/);

  if (matches) {
    return matches[1];
  }

  matches = trackString.match(/^spotify:track:(.*)/);

  if (matches) {
    return matches[1];
  }

  return null;
};

function socketMiddleware(store) {
  return function (next) {
    return function (action) {
      var result = next(action);

      if (socket) {
        switch (action.type) {
          case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["QUEUE_TRACK"]:
            {
              var trackId = getIdFromTrackString(action.id);

              if (trackId === null) {
                trackId = action.id;
              }

              socket.emit('queue track', trackId);
              break;
            }

          case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["QUEUE_REMOVE_TRACK"]:
            {
              socket.emit('remove track', action.id);
              break;
            }

          case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
            var user = store.getState().session.user;
            socket.emit('user login', user);
            break;

          case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["VOTE_UP"]:
            socket.emit('vote up', action.id);
            break;

          default:
            break;
        }
      }

      return result;
    };
  };
}
/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default.a.connect(_config_app__WEBPACK_IMPORTED_MODULE_4___default.a.HOST);
  socket.on('update queue', function (data) {
    store.dispatch(Object(_actions_queueActions__WEBPACK_IMPORTED_MODULE_2__["updateQueue"])(data));
  });
  socket.on('queue ended', function () {
    store.dispatch(Object(_actions_queueActions__WEBPACK_IMPORTED_MODULE_2__["queueEnded"])());
  });
  socket.on('play track', function (track, user, position) {
    // we should also set repeat to false!
    store.dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_3__["playTrack"])(track, user, position));
  });
  socket.on('update users', function (data) {
    store.dispatch(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_1__["updateUsers"])(data));
  });
  socket.on('update now playing', function (track, user, position) {
    store.dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_3__["updateNowPlaying"])(track, user, position));
  }); // todo: manage end song, end queue
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _actions_queueActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/queueActions */ "./actions/queueActions.js");
/* harmony import */ var _actions_usersActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/usersActions */ "./actions/usersActions.js");
/* harmony import */ var _actions_playbackActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/playbackActions */ "./actions/playbackActions.js");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Users */ "./components/Users.js");
/* harmony import */ var _components_Queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Queue */ "./components/Queue.js");
/* harmony import */ var _components_AddToQueue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AddToQueue */ "./components/AddToQueue.js");
/* harmony import */ var _components_NowPlaying__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/NowPlaying */ "./components/NowPlaying.js");
/* harmony import */ var _components_Devices__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Devices */ "./components/Devices.js");
/* harmony import */ var _components_PageWithIntl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PageWithIntl */ "./components/PageWithIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_15__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, _getPrototypeOf(Main).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, this.props.playing.track ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NowPlaying__WEBPACK_IMPORTED_MODULE_12__["default"], {
        track: this.props.playing.track,
        user: this.props.playing.user,
        position: this.props.playing.position
      }) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3454113804" + " " + "app"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3454113804",
        css: ".app.jsx-3454113804{margin:20px;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhwYXJhdGEvRG93bmxvYWRzL2MtbWFzdGVyL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DYSxBQUc2QixZQUNDLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvc2VwaHBhcmF0YS9Eb3dubG9hZHMvYy1tYXN0ZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBmZXRjaFF1ZXVlIH0gZnJvbSAnLi4vYWN0aW9ucy9xdWV1ZUFjdGlvbnMnO1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcnNBY3Rpb25zJztcbmltcG9ydCB7IGZldGNoUGxheWluZ0NvbnRleHQgfSBmcm9tICcuLi9hY3Rpb25zL3BsYXliYWNrQWN0aW9ucyc7XG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2Vycyc7XG5pbXBvcnQgUXVldWUgZnJvbSAnLi4vY29tcG9uZW50cy9RdWV1ZSc7XG5pbXBvcnQgQWRkVG9RdWV1ZSBmcm9tICcuLi9jb21wb25lbnRzL0FkZFRvUXVldWUnO1xuaW1wb3J0IE5vd1BsYXlpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3dQbGF5aW5nJztcbmltcG9ydCBEZXZpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvRGV2aWNlcyc7XG5pbXBvcnQgUGFnZVdpdGhJbnRsIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVdpdGhJbnRsJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXEsIHN0b3JlLCBpc1NlcnZlciB9KSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGZldGNoUXVldWUoKSksXG4gICAgICBzdG9yZS5kaXNwYXRjaChmZXRjaFVzZXJzKCkpLFxuICAgICAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hQbGF5aW5nQ29udGV4dCgpKVxuICAgIF0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAge3RoaXMucHJvcHMucGxheWluZy50cmFja1xuICAgICAgICAgID8gPE5vd1BsYXlpbmdcbiAgICAgICAgICAgICAgdHJhY2s9e3RoaXMucHJvcHMucGxheWluZy50cmFja31cbiAgICAgICAgICAgICAgdXNlcj17dGhpcy5wcm9wcy5wbGF5aW5nLnVzZXJ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXt0aGlzLnByb3BzLnBsYXlpbmcucG9zaXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmFwcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcgfX0+XG4gICAgICAgICAgICA8UXVldWUgaXRlbXM9e3RoaXMucHJvcHMucXVldWV9IHNlc3Npb249e3RoaXMucHJvcHMuc2Vzc2lvbn0gLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNlc3Npb24udXNlciAhPT0gbnVsbCA/IDxBZGRUb1F1ZXVlIC8+IDogbnVsbH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNlc3Npb24udXNlciAhPT0gbnVsbCA/IDxEZXZpY2VzIC8+IDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCB3aWR0aDogJzE1MHB4JyB9fT5cbiAgICAgICAgICAgIDxVc2VycyBpdGVtcz17dGhpcy5wcm9wcy51c2Vyc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHBsYXlpbmc6IHN0YXRlLnBsYXliYWNrLFxuICBxdWV1ZTogc3RhdGUucXVldWUsXG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoUGFnZVdpdGhJbnRsKE1haW4pKTtcbiJdfQ== */\n/*@ sourceURL=/Users/josephparata/Downloads/c-master/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          float: 'left'
        },
        className: "jsx-3454113804"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Queue__WEBPACK_IMPORTED_MODULE_10__["default"], {
        items: this.props.queue,
        session: this.props.session
      }), this.props.session.user !== null ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddToQueue__WEBPACK_IMPORTED_MODULE_11__["default"], null) : null, this.props.session.user !== null ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Devices__WEBPACK_IMPORTED_MODULE_13__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          float: 'right',
          width: '150px'
        },
        className: "jsx-3454113804"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Users__WEBPACK_IMPORTED_MODULE_9__["default"], {
        items: this.props.users
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          store = _ref.store,
          isServer = _ref.isServer;
      return Promise.all([store.dispatch(Object(_actions_queueActions__WEBPACK_IMPORTED_MODULE_6__["fetchQueue"])()), store.dispatch(Object(_actions_usersActions__WEBPACK_IMPORTED_MODULE_7__["fetchUsers"])()), store.dispatch(Object(_actions_playbackActions__WEBPACK_IMPORTED_MODULE_8__["fetchPlayingContext"])())]);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    playing: state.playback,
    queue: state.queue,
    users: state.users,
    session: state.session
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_store__WEBPACK_IMPORTED_MODULE_5__["initStore"], mapStateToProps, null)(Object(_components_PageWithIntl__WEBPACK_IMPORTED_MODULE_14__["default"])(Main)));

/***/ }),

/***/ "./reducers/devicesReducer.js":
/*!************************************!*\
  !*** ./reducers/devicesReducer.js ***!
  \************************************/
/*! exports provided: default, getIsFetching, getDevices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsFetching", function() { return getIsFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevices", function() { return getDevices; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  isFetching: false,
  data: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES"]:
      return _objectSpread({}, state, {
        isFetching: true
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES_SUCCESS"]:
      return _objectSpread({}, state, {
        isFetching: false,
        data: action.list
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_AVAILABLE_DEVICES_ERROR"]:
      return initialState;

    default:
      return state ? state : initialState;
  }
});
var getIsFetching = function getIsFetching(state) {
  return state.isFetching;
};
var getDevices = function getDevices(state) {
  return state.data;
};

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: reducers, getDevices, getIsFetchingDevices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevices", function() { return getDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsFetchingDevices", function() { return getIsFetchingDevices; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_queueReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/queueReducer */ "./reducers/queueReducer.js");
/* harmony import */ var _reducers_sessionReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/sessionReducer */ "./reducers/sessionReducer.js");
/* harmony import */ var _reducers_playbackReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/playbackReducer */ "./reducers/playbackReducer.js");
/* harmony import */ var _reducers_devicesReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/devicesReducer */ "./reducers/devicesReducer.js");
/* harmony import */ var _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/usersReducer */ "./reducers/usersReducer.js");
/* harmony import */ var _reducers_searchReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/searchReducer */ "./reducers/searchReducer.js");







var reducers = function reducers() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    queue: _reducers_queueReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    playback: _reducers_playbackReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
    session: _reducers_sessionReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
    users: _reducers_usersReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    search: _reducers_searchReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
    devices: _reducers_devicesReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
};
var getDevices = function getDevices(state) {
  return _reducers_devicesReducer__WEBPACK_IMPORTED_MODULE_4__["getDevices"](state.devices);
};
var getIsFetchingDevices = function getIsFetchingDevices(state) {
  return _reducers_devicesReducer__WEBPACK_IMPORTED_MODULE_4__["getIsFetching"](state.devices);
};

/***/ }),

/***/ "./reducers/playbackReducer.js":
/*!*************************************!*\
  !*** ./reducers/playbackReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  muted: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_PLAYING_CONTEXT_SUCCESS"]:
      return _objectSpread({}, state, {
        track: action.playingContext.track,
        user: action.playingContext.user,
        position: 0
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["PLAY_TRACK_SUCCESS"]:
      return _objectSpread({}, state, {
        track: action.track,
        user: action.user,
        position: action.position,
        startTime: new Date()
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_NOW_PLAYING"]:
      return _objectSpread({}, state, {
        track: action.track,
        user: action.user,
        position: action.position,
        startTime: new Date()
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["QUEUE_ENDED"]:
      {
        return initialState;
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["MUTE_PLAYBACK"]:
      return _objectSpread({}, state, {
        muted: true
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UNMUTE_PLAYBACK"]:
      return _objectSpread({}, state, {
        muted: false
      });

    default:
      return state ? state : initialState;
  }
});

/***/ }),

/***/ "./reducers/queueReducer.js":
/*!**********************************!*\
  !*** ./reducers/queueReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QUEUE"]:
      return action.data;

    default:
      return state ? state : initialState;
  }
});

/***/ }),

/***/ "./reducers/searchReducer.js":
/*!***********************************!*\
  !*** ./reducers/searchReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS"]:
      return {
        query: action.query
      };

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS_SUCCESS"]:
      if (state.query === action.query) {
        return {
          query: action.query,
          results: action.results
        };
      } else {
        return state;
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_TRACKS_RESET"]:
      return initialState;

    default:
      return state ? state : initialState;
  }
});

/***/ }),

/***/ "./reducers/sessionReducer.js":
/*!************************************!*\
  !*** ./reducers/sessionReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var initialState = {
  refresh_token: null,
  //'localStorage' in window && localStorage.getItem('refreshToken'),
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOAD"]:
      if (false) { var expiresIn, accessToken, refreshToken; } else {
        return state;
      }

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOKEN_SUCCESS"]:
      return Object.assign({}, state, {
        access_token: action.access_token
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      if (action.refresh_token) {
        return Object.assign({}, state, {
          refresh_token: action.refresh_token
        });
      }

      return state;

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CURRENT_USER"]:
      return Object.assign({}, state, {
        user: action.user
      });

    default:
      return state ? state : initialState;
  }
});

/***/ }),

/***/ "./reducers/usersReducer.js":
/*!**********************************!*\
  !*** ./reducers/usersReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");

var initialState = [{
  id: 'something',
  name: 'Adrian'
}, {
  id: 'something',
  name: 'Bea'
}, {
  id: 'something',
  name: 'Carlos'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USERS"]:
      return action.data;

    default:
      return state ? state : initialState;
  }
});

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _middlewares_sessionMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/sessionMiddleware */ "./middlewares/sessionMiddleware.js");
/* harmony import */ var _middlewares_playbackMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares/playbackMiddleware */ "./middlewares/playbackMiddleware.js");
/* harmony import */ var _middlewares_devicesMiddleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middlewares/devicesMiddleware */ "./middlewares/devicesMiddleware.js");
/* harmony import */ var _middlewares_socketMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/socketMiddleware */ "./middlewares/socketMiddleware.js");
/* harmony import */ var _middlewares_loggerMiddleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/loggerMiddleware */ "./middlewares/loggerMiddleware.js");
/* harmony import */ var _middlewares_searchMiddleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../middlewares/searchMiddleware */ "./middlewares/searchMiddleware.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/sessionActions */ "./actions/sessionActions.js");











var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["reducers"])(), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, _middlewares_sessionMiddleware__WEBPACK_IMPORTED_MODULE_3__["default"], _middlewares_socketMiddleware__WEBPACK_IMPORTED_MODULE_6__["socketMiddleware"], _middlewares_playbackMiddleware__WEBPACK_IMPORTED_MODULE_4__["default"], _middlewares_devicesMiddleware__WEBPACK_IMPORTED_MODULE_5__["default"], _middlewares_loggerMiddleware__WEBPACK_IMPORTED_MODULE_7__["default"], _middlewares_searchMiddleware__WEBPACK_IMPORTED_MODULE_8__["default"]));
  Object(_middlewares_socketMiddleware__WEBPACK_IMPORTED_MODULE_6__["default"])(store);
  store.dispatch(Object(_actions_sessionActions__WEBPACK_IMPORTED_MODULE_9__["load"])());
  return store;
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map