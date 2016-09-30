'use strict';

var execFile = require('child_process').execFile;

exports.launchCP = function (file, args, options, callback) {
    execFile(file, args, options, callback);
};
