module.exports = {

    romDatabase: 'romdb',
    
    platforms: [
        {
            name: 'nes',
            displayName: 'Nintendo Entertainment System',
            enabled: true,
            
            emulatorPath: '/Applications/RetroArch.app/Contents/MacOS/RetroArch',
            
            romsDir: '/Users/ash/roms/nes/roms/', //
            romsExtentions: ['.zip', '.ZIP', '.nes', '.NES'],
            romDirScan: true, //scan the romsdir for new roms?

            launchArguments: ['-L', '/Applications/RetroArch.app/Contents/Resources/cores/fceumm_libretro.dylib'], 
            launchScript: '%emulatorPath% %romfullpath%', //%romName% %romFullPath%
        },
    ],


}