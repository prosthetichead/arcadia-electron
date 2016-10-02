import childProcess from 'child_process';

export default class Launcher {
    constructor(){

        this.children = [];

    }

    spawnProcess(cmd, args, onExit){
        console.log( "Launching:: " + cmd + " With Args:: [" + args + "]" );

        let child = childProcess.spawn(cmd, args);
        child.on('exit', onExit);
        this.children.push(child);
    }

    ///startEmulator
    // takes a platform object and a game object and boots it up
    startEmulator(platform, game, onExit){
        let launchArguments = platform.launchArguments.slice(0);
        let emulatorPath = platform.emulatorPath;
        launchArguments = this.checkPlaceholders(launchArguments, game);

        this.spawnProcess(emulatorPath, launchArguments, onExit);
    }

    checkPlaceholders(check, game){
        if(Array.isArray(check)){
            for(let i = 0; i < check.length; i++){
                check[i] = this.stringPlaceholders(check[i], game);
            }
        }

        return check;
    }

    stringPlaceholders(str, game){
       str = str.replace('%romFullPath%', game.romFullPath);
       str = str.replace('%romFileName%', game.romFileName);
       str = str.replace('%romBaseName%', game.romBaseName);

       return str;
    }
}