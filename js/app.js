/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _greeting = __webpack_require__(3);

	var _greeting2 = _interopRequireDefault(_greeting);

	var _Launcher = __webpack_require__(4);

	var _Launcher2 = _interopRequireDefault(_Launcher);

	var _RomDB = __webpack_require__(6);

	var _RomDB2 = _interopRequireDefault(_RomDB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_greeting2.default, { name: "Kate" });
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Greeting = function (_React$Component) {
	    _inherits(Greeting, _React$Component);

	    function Greeting(props) {
	        _classCallCheck(this, Greeting);

	        return _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).call(this, props));
	    }

	    _createClass(Greeting, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "greeting" },
	                "Hello, ",
	                this.props.name,
	                "!"
	            );
	        }
	    }]);

	    return Greeting;
	}(_react2.default.Component);

	exports.default = Greeting;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var execFile = __webpack_require__(5).execFile;

	exports.launchCP = function (file, args, options, callback) {
	    execFile(file, args, options, callback);
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var config = __webpack_require__(7);
	var fs = __webpack_require__(8);
	var path = __webpack_require__(9);
	var Datastore = __webpack_require__(10),
	    romDB = new Datastore({ filename: config.romDatabase, autoload: true });

	//setup romDB indexes
	romDB.ensureIndex({ fieldName: 'romFullPath', unique: true });
	romDB.ensureIndex({ fieldName: 'platformName', unique: false });

	module.exports = {

	    //addRom
	    //inserts a rom into the db. If rom already exists nothing happens
	    addRom: function addRom(rom) {
	        romDB.insert(rom, function (err, newDoc) {});
	    },

	    //rescanRomsDir.
	    //scan all platforms rom dirs looking for any new files to load into the db
	    rescanRomsDir: function rescanRomsDir() {
	        var _this = this;

	        for (var i = 0; i < config.platforms.length; i++) {

	            //some platforms we may not want to pickup roms using a scan.
	            if (config.platforms[i].romDirScan) {
	                (function () {

	                    //Read the roms dir files
	                    var romDir = config.platforms[i].romsDir;
	                    var platformName = config.platforms[i].name;
	                    var romExts = config.platforms[i].romsExtentions;

	                    fs.readdir(romDir, function (err, files) {
	                        if (err) {
	                            console.log(err);
	                        } else {
	                            for (var j = 0; j < files.length; j++) {
	                                var romFileName = files[j];
	                                var ext = path.extname(romFileName);
	                                var romFullPath = path.join(romDir, romFileName);
	                                var romBaseName = path.basename(romFileName, ext);

	                                //is the file in platforms list of watched extenstions
	                                if (romExts.indexOf(ext) != -1) {
	                                    _this.addRom({
	                                        displayName: romBaseName,
	                                        romBaseName: romBaseName,
	                                        romFileName: romFileName,
	                                        romFullPath: romFullPath,
	                                        platformName: platformName,
	                                        created: new Date(),
	                                        _id: platformName + '#' + romFileName
	                                    });
	                                }
	                            }
	                        }
	                    });
	                    console.log('Rom Scan Complete For ' + platformName);
	                })();
	            }
	        }
	    }

	}; //module.exports END

	//var rom = {
	//    displayName: 'Super Mario Bros.',
	//    romName: 'smb',
	//    romFileName: 'smb.nes',
	//    romFullPath: '/roms/smb.nes',
	//    platformName: 'nes',
	//    _id: 'nes#smb.nes',
	//};

	//

	//romDB.insert(rom, function (err, newDoc) {   // Callback is optional
	// newDoc is the newly inserted document, including its _id
	// newDoc has no key called notToBeSaved since its value was undefined
	//});

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    romDatabase: 'romdb',

	    platforms: [{
	        name: 'nes',
	        displayName: 'Nintendo Entertainment System',
	        enabled: true,

	        emulatorPath: 'd',

	        romsDir: '/Users/ash/roms/nes/roms/', //
	        romsExtentions: ['.zip', '.ZIP', '.nes', '.NES'],
	        romDirScan: true, //scan the romsdir for new roms?

	        launchArguments: [],
	        launchScript: '%emulatorPath% %romfullpath%' }]

	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("nedb");

/***/ }
/******/ ]);