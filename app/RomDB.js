"use strict";

var config = require('../config');
var fs = require("fs");
var path = require("path");
var Datastore = require('nedb'),
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
