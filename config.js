module.exports = {

    romDatabase: 'romdb',
    
    platforms: [
        {
            name: 'nes',
            displayName: 'Nintendo Entertainment System',
            enabled: true,
            
            emulatorPath: 'd',
            
            romsDir: '/Users/ash/roms/nes/roms/', //
            romsExtentions: ['.zip', '.ZIP', '.nes', '.NES'],
            romDirScan: true, //scan the romsdir for new roms?

            launchArguments: [], 
            launchScript: '%emulatorPath% %romfullpath%', //%romName% %romFullPath%
        },
    ],


}