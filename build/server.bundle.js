/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/common/actions/constants.js":
/*!*****************************************!*\
  !*** ./src/common/actions/constants.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar actionNames = {\n  GET_AUTH: 'GET_AUTH',\n  SHOW_LOGIN_FORM: 'SHOW_LOGIN_FORM',\n  HIDE_LOGIN_FORM: 'HIDE_LOGIN_FORM',\n  LOGIN_USER: 'LOGIN_USER',\n  GET_POSTS: 'GET_POSTS'\n};\n\nexports.default = actionNames;\n\n//# sourceURL=webpack:///./src/common/actions/constants.js?");

/***/ }),

/***/ "./src/common/actions/login.js":
/*!*************************************!*\
  !*** ./src/common/actions/login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loginActionCreator = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/common/actions/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _nameHelpers = __webpack_require__(/*! ./nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n\nvar _nameHelpers2 = _interopRequireDefault(_nameHelpers);\n\nvar _setShowLoginForm = __webpack_require__(/*! ./setShowLoginForm */ \"./src/common/actions/setShowLoginForm.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loginActionCreator = exports.loginActionCreator = function loginActionCreator(data) {\n  return function (dispatch, getState, _ref) {\n    var User = _ref.User;\n\n    dispatch(_nameHelpers2.default.actionPending(_constants2.default.LOGIN_USER));\n    User.logIn(data).then(function (response) {\n      dispatch(_nameHelpers2.default.actionFulfilled(_constants2.default.LOGIN_USER, response.data));\n      dispatch((0, _setShowLoginForm.hideLoginForm)());\n    }, function (error) {\n      dispatch(_nameHelpers2.default.actionRejected(_constants2.default.LOGIN_USER, error));\n      throw new Error(error);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/common/actions/login.js?");

/***/ }),

/***/ "./src/common/actions/nameHelpers.js":
/*!*******************************************!*\
  !*** ./src/common/actions/nameHelpers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar pendingType = function pendingType(name) {\n  return name + \"_PENDING\";\n};\nvar rejectedType = function rejectedType(name) {\n  return name + \"_REJECTED\";\n};\nvar fulfilledType = function fulfilledType(name) {\n  return name + \"_FULFILLED\";\n};\n\nvar actionPending = function actionPending(actionName) {\n  return {\n    type: pendingType(actionName),\n    payload: {}\n  };\n};\n\nvar actionRejected = function actionRejected(actionName, error) {\n  return {\n    type: rejectedType(actionName),\n    payload: {\n      error: error\n    }\n  };\n};\n\nvar actionFulfilled = function actionFulfilled(actionName, items) {\n  return {\n    type: fulfilledType(actionName),\n    payload: {\n      items: items\n    }\n  };\n};\n\nexports.default = {\n  pendingType: pendingType,\n  rejectedType: rejectedType,\n  fulfilledType: fulfilledType,\n  actionPending: actionPending,\n  actionRejected: actionRejected,\n  actionFulfilled: actionFulfilled\n};\n\n//# sourceURL=webpack:///./src/common/actions/nameHelpers.js?");

/***/ }),

/***/ "./src/common/actions/posts.js":
/*!*************************************!*\
  !*** ./src/common/actions/posts.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getPostsActionCreator = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/common/actions/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _nameHelpers = __webpack_require__(/*! ./nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n\nvar _nameHelpers2 = _interopRequireDefault(_nameHelpers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getPostsActionCreator = exports.getPostsActionCreator = function getPostsActionCreator() {\n  return function (dispatch, getState, _ref) {\n    var Posts = _ref.Posts;\n\n    dispatch(_nameHelpers2.default.actionPending(_constants2.default.GET_POSTS));\n    Posts.getTop().then(function (response) {\n      return dispatch(_nameHelpers2.default.actionFulfilled(_constants2.default.GET_POSTS, response.data));\n    }, function (error) {\n      dispatch(_nameHelpers2.default.actionRejected(_constants2.default.GET_POSTS, error));\n      throw new Error(error);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/common/actions/posts.js?");

/***/ }),

/***/ "./src/common/actions/setShowLoginForm.js":
/*!************************************************!*\
  !*** ./src/common/actions/setShowLoginForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.hideLoginForm = exports.showLoginForm = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/common/actions/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar showLoginForm = exports.showLoginForm = function showLoginForm() {\n  return {\n    type: _constants2.default.SHOW_LOGIN_FORM\n  };\n};\n\nvar hideLoginForm = exports.hideLoginForm = function hideLoginForm() {\n  return {\n    type: _constants2.default.HIDE_LOGIN_FORM\n  };\n};\n\n//# sourceURL=webpack:///./src/common/actions/setShowLoginForm.js?");

/***/ }),

/***/ "./src/common/components/LoginForm/LoginForm.jsx":
/*!*******************************************************!*\
  !*** ./src/common/components/LoginForm/LoginForm.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _TextInput = __webpack_require__(/*! Ui/TextInput/TextInput */ \"./src/common/components/Ui/TextInput/TextInput.jsx\");\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nvar _PasswordInput = __webpack_require__(/*! Ui/PasswordInput/PasswordInput */ \"./src/common/components/Ui/PasswordInput/PasswordInput.jsx\");\n\nvar _PasswordInput2 = _interopRequireDefault(_PasswordInput);\n\nvar _compose = __webpack_require__(/*! Utils/compose */ \"./src/utils/compose.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  container: {\n    width: '300px'\n  },\n  buttonContainer: {\n    display: 'flex',\n    flexDirection: 'row-reverse'\n  },\n  fieldsContainer: {\n    display: 'flex'\n  }\n};\n\nvar LoginForm = function (_Component) {\n  _inherits(LoginForm, _Component);\n\n  function LoginForm() {\n    _classCallCheck(this, LoginForm);\n\n    return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));\n  }\n\n  _createClass(LoginForm, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          handleSubmit = _props.handleSubmit,\n          classes = _props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.container },\n        _react2.default.createElement(\n          'form',\n          { onSubmit: handleSubmit },\n          _react2.default.createElement(_reduxForm.Field, { name: 'username', component: _TextInput2.default }),\n          _react2.default.createElement(_reduxForm.Field, { name: 'password', component: _PasswordInput2.default }),\n          _react2.default.createElement(\n            'div',\n            { className: classes.buttonContainer },\n            _react2.default.createElement(\n              _Button2.default,\n              { type: 'submit', variant: 'contained', color: 'primary' },\n              'Log in'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return LoginForm;\n}(_react.Component);\n\n;\n\nexports.default = (0, _compose.compose)((0, _styles.withStyles)(styles), (0, _reduxForm.reduxForm)({ form: 'login' }))(LoginForm);\n\n//# sourceURL=webpack:///./src/common/components/LoginForm/LoginForm.jsx?");

/***/ }),

/***/ "./src/common/components/Ui/Modal/Modal.jsx":
/*!**************************************************!*\
  !*** ./src/common/components/Ui/Modal/Modal.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Modal = __webpack_require__(/*! @material-ui/core/Modal */ \"@material-ui/core/Modal\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  modal: {\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    backgroundColor: 'white',\n    boxShadow: '5px 5px 5px 0px rgba(136,136,136,1)',\n    padding: '15px',\n    position: 'fixed'\n  },\n  overlay: {\n    position: 'absolute',\n    height: '100%',\n    width: '100%',\n    backgroundColor: 'rgba(0,0,0, 0.5)'\n  }\n};\n\nvar CustomModal = function CustomModal(_ref) {\n  var children = _ref.children,\n      open = _ref.open,\n      onClose = _ref.onClose,\n      onEscapeKeyDown = _ref.onEscapeKeyDown,\n      classes = _ref.classes;\n\n  var modalProps = {\n    open: open,\n    onClose: onClose,\n    onEscapeKeyDown: onEscapeKeyDown,\n    tabIndex: 1\n  };\n  return _react2.default.createElement(\n    _Modal2.default,\n    modalProps,\n    _react2.default.createElement(\n      'div',\n      { className: classes.modal },\n      children\n    )\n  );\n};\n\nCustomModal.propTypes = {\n  children: _propTypes2.default.node.isRequired,\n  open: _propTypes2.default.bool.isRequired,\n  onClose: _propTypes2.default.func.isRequired,\n  onEscapeKeyDown: _propTypes2.default.func.isRequired,\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(CustomModal);\n\n//# sourceURL=webpack:///./src/common/components/Ui/Modal/Modal.jsx?");

/***/ }),

/***/ "./src/common/components/Ui/PasswordInput/PasswordInput.jsx":
/*!******************************************************************!*\
  !*** ./src/common/components/Ui/PasswordInput/PasswordInput.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PasswordInput = function PasswordInput(_ref) {\n  var input = _ref.input;\n  var value = input.value,\n      onChange = input.onChange,\n      name = input.name;\n\n  var upperCaseName = name.charAt(0).toUpperCase() + name.substr(1);\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_TextField2.default, {\n      label: upperCaseName,\n      value: value,\n      onChange: onChange,\n      margin: 'normal',\n      type: 'password'\n    })\n  );\n};\n\nPasswordInput.propTypes = {\n  input: _propTypes2.default.object.isRequired\n};\n\nexports.default = PasswordInput;\n\n//# sourceURL=webpack:///./src/common/components/Ui/PasswordInput/PasswordInput.jsx?");

/***/ }),

/***/ "./src/common/components/Ui/TextInput/TextInput.jsx":
/*!**********************************************************!*\
  !*** ./src/common/components/Ui/TextInput/TextInput.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TextInput = function TextInput(_ref) {\n  var input = _ref.input;\n  var value = input.value,\n      onChange = input.onChange,\n      name = input.name;\n\n  var upperCaseName = name.charAt(0).toUpperCase() + name.substr(1);\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_TextField2.default, {\n      label: upperCaseName,\n      value: value,\n      onChange: onChange,\n      margin: 'normal'\n    })\n  );\n};\n\nTextInput.propTypes = {\n  input: _propTypes2.default.object.isRequired\n};\n\nexports.default = TextInput;\n\n//# sourceURL=webpack:///./src/common/components/Ui/TextInput/TextInput.jsx?");

/***/ }),

/***/ "./src/common/components/UserMenu/UserMenu.jsx":
/*!*****************************************************!*\
  !*** ./src/common/components/UserMenu/UserMenu.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Menu = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _MenuItem = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nvar _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ \"@material-ui/core/ListItemIcon\");\n\nvar _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);\n\nvar _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _Icon = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UserMenu = function (_Component) {\n  _inherits(UserMenu, _Component);\n\n  function UserMenu(props) {\n    _classCallCheck(this, UserMenu);\n\n    var _this = _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).call(this, props));\n\n    _this._handleClick = _this._handleClick.bind(_this);\n    _this._handleClose = _this._handleClose.bind(_this);\n    _this._logOut = _this._logOut.bind(_this);\n\n    _this.state = {\n      anchorEl: null\n    };\n    return _this;\n  }\n\n  _createClass(UserMenu, [{\n    key: '_handleClick',\n    value: function _handleClick(event) {\n      var _props = this.props,\n          user = _props.user,\n          openLoginForm = _props.openLoginForm;\n\n      if ((user.data || {}).name) this.setState({ anchorEl: event.currentTarget });else openLoginForm();\n    }\n  }, {\n    key: '_handleClose',\n    value: function _handleClose() {\n      this.setState({ anchorEl: null });\n    }\n  }, {\n    key: '_logOut',\n    value: function _logOut() {\n      window.location.href = '/logout';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var anchorEl = this.state.anchorEl;\n      var user = this.props.user;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'user-menu' },\n        _react2.default.createElement(\n          _IconButton2.default,\n          {\n            onClick: this._handleClick,\n            className: 'user-menu__image',\n            'aria-owns': anchorEl ? 'simple-menu' : null,\n            'aria-haspopup': 'true'\n          },\n          _react2.default.createElement(\n            _Icon2.default,\n            null,\n            'account_circle'\n          )\n        ),\n        _react2.default.createElement(\n          _Menu2.default,\n          {\n            id: 'simple-menu',\n            anchorEl: anchorEl,\n            open: !!anchorEl,\n            onClose: this._handleClose\n          },\n          _react2.default.createElement(\n            _MenuItem2.default,\n            { disabled: true },\n            user && user.data && user.data.name\n          ),\n          _react2.default.createElement(\n            _MenuItem2.default,\n            { onClick: this._logOut },\n            _react2.default.createElement(\n              _ListItemIcon2.default,\n              null,\n              _react2.default.createElement(\n                _Icon2.default,\n                null,\n                'exit_to_app'\n              )\n            ),\n            _react2.default.createElement(_ListItemText2.default, { inset: true, primary: 'Sign out' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return UserMenu;\n}(_react.Component);\n\n;\n\nUserMenu.propTypes = {\n  user: _propTypes2.default.object,\n  openLoginForm: _propTypes2.default.func.isRequired\n};\n\nexports.default = UserMenu;\n\n//# sourceURL=webpack:///./src/common/components/UserMenu/UserMenu.jsx?");

/***/ }),

/***/ "./src/common/containers/App/App.jsx":
/*!*******************************************!*\
  !*** ./src/common/containers/App/App.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _renderRoutes = __webpack_require__(/*! react-router-config/renderRoutes */ \"react-router-config/renderRoutes\");\n\nvar _renderRoutes2 = _interopRequireDefault(_renderRoutes);\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Header = __webpack_require__(/*! Containers/Header/Header */ \"./src/common/containers/Header/Header.jsx\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _theme = __webpack_require__(/*! Layouts/theme */ \"./src/common/layouts/theme.js\");\n\nvar _theme2 = _interopRequireDefault(_theme);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n\n  return _react2.default.createElement(\n    _styles.MuiThemeProvider,\n    { theme: _theme2.default },\n    _react2.default.createElement(_Header2.default, null),\n    (0, _renderRoutes2.default)(route.routes)\n  );\n};\n\nApp.propTypes = {\n  route: _propTypes2.default.object.isRequired\n};\n\nvar AppToExport = void 0;\n\nif (true) {\n  var _require = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\"),\n      hot = _require.hot;\n\n  AppToExport = hot(module)(App);\n} else {}\n\nexports.default = AppToExport;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/common/containers/App/App.jsx?");

/***/ }),

/***/ "./src/common/containers/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/common/containers/Header/Header.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Modal = __webpack_require__(/*! Ui/Modal/Modal */ \"./src/common/components/Ui/Modal/Modal.jsx\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _compose = __webpack_require__(/*! Utils/compose */ \"./src/utils/compose.js\");\n\nvar _UserMenu = __webpack_require__(/*! Components/UserMenu/UserMenu */ \"./src/common/components/UserMenu/UserMenu.jsx\");\n\nvar _UserMenu2 = _interopRequireDefault(_UserMenu);\n\nvar _setShowLoginForm = __webpack_require__(/*! Actions/setShowLoginForm */ \"./src/common/actions/setShowLoginForm.js\");\n\nvar _LoginForm = __webpack_require__(/*! Components/LoginForm/LoginForm */ \"./src/common/components/LoginForm/LoginForm.jsx\");\n\nvar _LoginForm2 = _interopRequireDefault(_LoginForm);\n\nvar _login = __webpack_require__(/*! Actions/login */ \"./src/common/actions/login.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  logo: {\n    height: '40px'\n  },\n  toolbar: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between'\n  }\n};\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          classes = _props.classes,\n          user = _props.user,\n          onLogin = _props.onLogin,\n          hideLoginForm = _props.hideLoginForm,\n          showLoginForm = _props.showLoginForm,\n          openLoginForm = _props.openLoginForm;\n\n      var showModal = showLoginForm;\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Modal2.default,\n          {\n            open: showModal,\n            onClose: hideLoginForm,\n            onEscapeKeyDown: hideLoginForm,\n            onBackdropClick: hideLoginForm\n          },\n          _react2.default.createElement(_LoginForm2.default, { onSubmit: onLogin })\n        ),\n        _react2.default.createElement(\n          _AppBar2.default,\n          { position: 'static', color: 'primary' },\n          _react2.default.createElement(\n            _Toolbar2.default,\n            { className: classes.toolbar },\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/about' },\n                _react2.default.createElement('img', { className: classes.logo, src: '/static/logo.png', alt: 'logo' })\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(_UserMenu2.default, { user: user, openLoginForm: openLoginForm })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nHeader.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  user: _propTypes2.default.object,\n  onLogin: _propTypes2.default.func.isRequired,\n  openLoginForm: _propTypes2.default.func.isRequired,\n  hideLoginForm: _propTypes2.default.func.isRequired,\n  showLoginForm: _propTypes2.default.bool.isRequired\n};\n\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    openLoginForm: function openLoginForm() {\n      return dispatch((0, _setShowLoginForm.showLoginForm)());\n    },\n    hideLoginForm: function hideLoginForm() {\n      return dispatch((0, _setShowLoginForm.hideLoginForm)());\n    },\n    onLogin: function onLogin(data) {\n      return dispatch((0, _login.loginActionCreator)(data));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user,\n    showLoginForm: state.showLoginForm\n  };\n};\n\nexports.default = (0, _compose.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _styles.withStyles)(styles))(Header);\n\n//# sourceURL=webpack:///./src/common/containers/Header/Header.jsx?");

/***/ }),

/***/ "./src/common/containers/Home/Home.jsx":
/*!*********************************************!*\
  !*** ./src/common/containers/Home/Home.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _posts = __webpack_require__(/*! Actions/posts */ \"./src/common/actions/posts.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {}\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'HOME'\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getPosts: dispatch((0, _posts.getPostsActionCreator)())\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/common/containers/Home/Home.jsx?");

/***/ }),

/***/ "./src/common/layouts/login.js":
/*!*************************************!*\
  !*** ./src/common/layouts/login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Configs = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n\nexports.default = function () {\n  var host = _Configs.DEV_SERVER ? 'http://localhost:3330/' : '/';\n  return '\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>Login</title>\\n      </head>\\n      <body>\\n        <div id=\"root\"></div>\\n      </body>\\n      <style>\\n        body {\\n            margin: 0;\\n        }\\n      </style>\\n      <script src=\"' + host + 'build/login.bundle.js\"></script>\\n    </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./src/common/layouts/login.js?");

/***/ }),

/***/ "./src/common/layouts/main.js":
/*!************************************!*\
  !*** ./src/common/layouts/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Configs = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n\nexports.default = function (_ref) {\n  var body = _ref.body,\n      preloadedState = _ref.preloadedState,\n      title = _ref.title;\n\n  var host = _Configs.DEV_SERVER ? 'http://localhost:3330/' : '/';\n  return '\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>' + title + '</title>\\n        <link rel=\"stylesheet\" href=\"' + host + 'build/styles.css\">\\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\\n      </head>\\n      \\n      <body>\\n        <div id=\"root\">' + body + '</div>\\n      </body>\\n      <script>\\n        // WARNING: See the following for security issues around embedding JSON in HTML:\\n        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\\n        window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\\\u003c') + '\\n      </script>\\n      <script src=\"' + host + 'build/client.bundle.js\"></script>\\n    </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./src/common/layouts/main.js?");

/***/ }),

/***/ "./src/common/layouts/theme.js":
/*!*************************************!*\
  !*** ./src/common/layouts/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _green = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n\nvar _green2 = _interopRequireDefault(_green);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theme = (0, _styles.createMuiTheme)({\n  palette: {\n    primary: _green2.default\n  }\n});\n\nexports.default = theme;\n\n//# sourceURL=webpack:///./src/common/layouts/theme.js?");

/***/ }),

/***/ "./src/common/reducers/defaultState.js":
/*!*********************************************!*\
  !*** ./src/common/reducers/defaultState.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar defaultState = {\n  isPending: false,\n  isFulfilled: false,\n  isRejected: false,\n  error: null,\n  data: {}\n};\n\nexports.default = defaultState;\n\n//# sourceURL=webpack:///./src/common/reducers/defaultState.js?");

/***/ }),

/***/ "./src/common/reducers/helpers.js":
/*!****************************************!*\
  !*** ./src/common/reducers/helpers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//# sourceURL=webpack:///./src/common/reducers/helpers.js?");

/***/ }),

/***/ "./src/common/reducers/index.js":
/*!**************************************!*\
  !*** ./src/common/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"redux-form\");\n\nvar _user = __webpack_require__(/*! ./user */ \"./src/common/reducers/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _showLoginForm = __webpack_require__(/*! ./showLoginForm */ \"./src/common/reducers/showLoginForm.js\");\n\nvar _showLoginForm2 = _interopRequireDefault(_showLoginForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar myApp = {\n  user: _user2.default,\n  form: _reduxForm.reducer,\n  showLoginForm: _showLoginForm2.default\n};\n\nexports.default = myApp;\n\n//# sourceURL=webpack:///./src/common/reducers/index.js?");

/***/ }),

/***/ "./src/common/reducers/showLoginForm.js":
/*!**********************************************!*\
  !*** ./src/common/reducers/showLoginForm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _constants = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initialState = false;\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants2.default.SHOW_LOGIN_FORM:\n      return true;\n    case _constants2.default.HIDE_LOGIN_FORM:\n      return false;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/common/reducers/showLoginForm.js?");

/***/ }),

/***/ "./src/common/reducers/user.js":
/*!*************************************!*\
  !*** ./src/common/reducers/user.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _handlers;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _defaultState = __webpack_require__(/*! ./defaultState */ \"./src/common/reducers/defaultState.js\");\n\nvar _defaultState2 = _interopRequireDefault(_defaultState);\n\nvar _constants = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _nameHelpers = __webpack_require__(/*! Actions/nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n\nvar _nameHelpers2 = _interopRequireDefault(_nameHelpers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = _extends({}, _defaultState2.default);\n\nvar handlers = (_handlers = {}, _defineProperty(_handlers, _nameHelpers2.default.pendingType(_constants2.default.LOGIN_USER), function (state, action) {\n  return _extends({}, initialState, {\n    isPending: true\n  });\n}), _defineProperty(_handlers, _nameHelpers2.default.rejectedType(_constants2.default.LOGIN_USER), function (state, action) {\n  return _extends({}, initialState, {\n    isRejected: true\n  });\n}), _defineProperty(_handlers, _nameHelpers2.default.fulfilledType(_constants2.default.LOGIN_USER), function (state, action) {\n  return _extends({}, initialState, {\n    isFulfilled: true,\n    data: action.payload.items\n  });\n}), _handlers);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  var handler = handlers[action.type];\n  if (handler) {\n    return handler(state, action);\n  }\n  return state;\n};\n\n//# sourceURL=webpack:///./src/common/reducers/user.js?");

/***/ }),

/***/ "./src/common/routes.js":
/*!******************************!*\
  !*** ./src/common/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Home = __webpack_require__(/*! Containers/Home/Home */ \"./src/common/containers/Home/Home.jsx\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _App = __webpack_require__(/*! Containers/App/App */ \"./src/common/containers/App/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _App2.default,\n  routes: [{\n    path: '/',\n    component: _Home2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/common/routes.js?");

/***/ }),

/***/ "./src/common/services/Posts.js":
/*!**************************************!*\
  !*** ./src/common/services/Posts.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _request = __webpack_require__(/*! ./request */ \"./src/common/services/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Posts = function () {\n  function Posts() {\n    _classCallCheck(this, Posts);\n  }\n\n  _createClass(Posts, [{\n    key: 'getTop',\n\n    /**\r\n     * Get top posts\r\n     * @returns promise with response data\r\n     */\n    value: function getTop() {\n      return (0, _request2.default)('/posts', 'GET');\n    }\n  }]);\n\n  return Posts;\n}();\n\nexports.default = Posts;\n\n//# sourceURL=webpack:///./src/common/services/Posts.js?");

/***/ }),

/***/ "./src/common/services/User.js":
/*!*************************************!*\
  !*** ./src/common/services/User.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _request = __webpack_require__(/*! ./request */ \"./src/common/services/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function () {\n  function User() {\n    _classCallCheck(this, User);\n  }\n\n  _createClass(User, [{\n    key: 'logIn',\n    value: function logIn(data) {\n      return (0, _request2.default)('/auth', 'POST', null, data);\n    }\n  }]);\n\n  return User;\n}();\n\nexports.default = User;\n\n//# sourceURL=webpack:///./src/common/services/User.js?");

/***/ }),

/***/ "./src/common/services/index.js":
/*!**************************************!*\
  !*** ./src/common/services/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _User = __webpack_require__(/*! ./User */ \"./src/common/services/User.js\");\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _Posts = __webpack_require__(/*! ./Posts */ \"./src/common/services/Posts.js\");\n\nvar _Posts2 = _interopRequireDefault(_Posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  User: new _User2.default(),\n  Posts: new _Posts2.default()\n};\n\n//# sourceURL=webpack:///./src/common/services/index.js?");

/***/ }),

/***/ "./src/common/services/request.js":
/*!****************************************!*\
  !*** ./src/common/services/request.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _nameHelpers = __webpack_require__(/*! Actions/nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n\nvar _nameHelpers2 = _interopRequireDefault(_nameHelpers);\n\nvar _Configs = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar actionPending = function actionPending(actionName) {\n  return {\n    type: _nameHelpers2.default.pendingType(actionName),\n    payload: {}\n  };\n};\n\nvar actionRejected = function actionRejected(actionName, error) {\n  return {\n    type: _nameHelpers2.default.rejectedType(actionName),\n    payload: {\n      error: error\n    }\n  };\n};\n\nvar actionFulfilled = function actionFulfilled(actionName, items) {\n  return {\n    type: _nameHelpers2.default.fulfilledType(actionName),\n    payload: {\n      items: items\n    }\n  };\n};\n\nexports.default = function (url, method, params, data) {\n  //dispatch(actionPending(actionName));\n\n  var config = Object.assign({ url: _Configs.API_URL + '/' + url }, { method: method }, params ? { params: params } : null, data ? { data: data } : null);\n\n  console.log(config);\n\n  return (0, _axios2.default)(config); /*.then(\r\n                                       response => dispatch(actionFulfilled(actionName, response.data)),\r\n                                       error => {\r\n                                       dispatch(actionRejected(actionName, error));\r\n                                       throw new Error(error);\r\n                                       }\r\n                                       );*/\n};\n\n//# sourceURL=webpack:///./src/common/services/request.js?");

/***/ }),

/***/ "./src/configs.js":
/*!************************!*\
  !*** ./src/configs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar PORT = process.env.PORT;\nvar NODE_ENV = \"development\";\nvar API_URL = \"http://localhost:3000/api/v1\";\nvar DEV_SERVER = process.env.DEV_SERVER;\nvar API_HOST = process.env.API_HOST;\nvar AUTH_ENDPOINT = process.env.AUTH_ENDPOINT;\nvar AUTH_ENDPOINT_BACK = \"\";\n\nmodule.exports = {\n  PORT: PORT,\n  NODE_ENV: NODE_ENV,\n  API_URL: API_URL,\n  DEV_SERVER: DEV_SERVER,\n  API_HOST: API_HOST,\n  AUTH_ENDPOINT: AUTH_ENDPOINT,\n  AUTH_ENDPOINT_BACK: AUTH_ENDPOINT_BACK\n};\n\n//# sourceURL=webpack:///./src/configs.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _Configs = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n\nvar _logger = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _ssr = __webpack_require__(/*! ./middleware/ssr */ \"./src/server/middleware/ssr.js\");\n\nvar _session = __webpack_require__(/*! ./middleware/session */ \"./src/server/middleware/session.js\");\n\nvar _login = __webpack_require__(/*! Layouts/login */ \"./src/common/layouts/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cookieParser2.default)()).use('/build', _express2.default.static('build')).use('/static', _express2.default.static('static')).get('/ping', function (req, res) {\n  res.send('pong');\n}).get('/favicon.ico', function (req, res) {\n  res.send('');\n}).use(_session.session, function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = res;\n            _context.next = 3;\n            return (0, _ssr.middlewareSsr)(req);\n\n          case 3:\n            _context.t1 = _context.sent;\n\n            _context.t0.send.call(_context.t0, _context.t1);\n\n          case 5:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(_Configs.PORT || 3333, function () {\n  return _logger2.default.info('App listening on port ' + (_Configs.PORT || 3333));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middleware/session.js":
/*!******************************************!*\
  !*** ./src/server/middleware/session.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.session = exports.sessionLogin = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Configs = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n\nvar _logger = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar sessionLogin = exports.sessionLogin = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            next();\n\n          case 1:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function sessionLogin(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar session = exports.session = function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            next();\n\n          case 1:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function session(_x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/middleware/session.js?");

/***/ }),

/***/ "./src/server/middleware/ssr.js":
/*!**************************************!*\
  !*** ./src/server/middleware/ssr.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.middlewareSsr = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _url = __webpack_require__(/*! url */ \"url\");\n\nvar _url2 = _interopRequireDefault(_url);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reduxConnect = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _logger = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nvar _main = __webpack_require__(/*! Layouts/main */ \"./src/common/layouts/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _reducers = __webpack_require__(/*! Common/reducers */ \"./src/common/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _routes = __webpack_require__(/*! Common/routes */ \"./src/common/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _helpers = __webpack_require__(/*! Reducers/helpers */ \"./src/common/reducers/helpers.js\");\n\nvar helpers = _interopRequireWildcard(_helpers);\n\nvar _Services = __webpack_require__(/*! Services */ \"./src/common/services/index.js\");\n\nvar _Services2 = _interopRequireDefault(_Services);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar middlewareSsr = exports.middlewareSsr = function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {\n    var store, location;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = (0, _redux.createStore)((0, _redux.combineReducers)(_extends({\n              reduxAsyncConnect: _reduxConnect.reducer\n            }, _reducers2.default)), {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_Services2.default)));\n            location = _url2.default.parse(req.url);\n            return _context.abrupt('return', (0, _reduxConnect.loadOnServer)({ store: store, location: location, routes: _routes2.default, helpers: helpers }).then(function () {\n              return (0, _main2.default)({\n                body: (0, _server.renderToString)(_react2.default.createElement(\n                  _reactRedux.Provider,\n                  { store: store, key: 'provider' },\n                  _react2.default.createElement(\n                    _reactRouterDom.StaticRouter,\n                    { location: req.url, context: {} },\n                    _react2.default.createElement(_reduxConnect.ReduxAsyncConnect, { routes: _routes2.default, helpers: helpers })\n                  )\n                )),\n                preloadedState: store.getState(),\n                title: 'App'\n              });\n            }).catch(function (error) {\n              _logger2.default.error(error.message);\n              console.log(error.stack);\n            }));\n\n          case 3:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function middlewareSsr(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/middleware/ssr.js?");

/***/ }),

/***/ "./src/utils/compose.js":
/*!******************************!*\
  !*** ./src/utils/compose.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar compose = exports.compose = function compose() {\n  for (var _len = arguments.length, functionsToApply = Array(_len), _key = 0; _key < _len; _key++) {\n    functionsToApply[_key] = arguments[_key];\n  }\n\n  return function (initialValue) {\n    return functionsToApply.reduceRight(function (value, functionToApply) {\n      return functionToApply(value);\n    }, initialValue);\n  };\n};\n\n//# sourceURL=webpack:///./src/utils/compose.js?");

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar moment = __webpack_require__(/*! moment */ \"moment\");\nvar winston = __webpack_require__(/*! winston */ \"winston\");\n\nvar _process$env$VERBOSE = process.env.VERBOSE,\n    VERBOSE = _process$env$VERBOSE === undefined ? 'info' : _process$env$VERBOSE;\n\n\nvar logger = new winston.Logger({\n  transports: [new winston.transports.Console({\n    timestamp: function timestamp() {\n      return moment().format();\n    },\n    formatter: function formatter(options) {\n      // Return string will be passed to logger.\n      return '[' + options.timestamp() + ']' + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\\n\\t' + JSON.stringify(options.meta) : '');\n    },\n    level: VERBOSE,\n    colorize: true\n  })]\n});\n\nmodule.exports = logger;\n\n//# sourceURL=webpack:///./src/utils/logger.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./src/server/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/server/index.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemIcon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemIcon%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Modal\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Modal%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/green%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config/renderRoutes":
/*!***************************************************!*\
  !*** external "react-router-config/renderRoutes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config/renderRoutes\");\n\n//# sourceURL=webpack:///external_%22react-router-config/renderRoutes%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-connect":
/*!********************************!*\
  !*** external "redux-connect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-connect\");\n\n//# sourceURL=webpack:///external_%22redux-connect%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });