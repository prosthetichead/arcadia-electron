const execFile = require('child_process').execFile;

exports.launchCP = (file, args, options, callback) => {
    execFile(file, args, options, callback);
};
