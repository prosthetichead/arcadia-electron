import childProcess from 'child_process';

export default class Launcher {
    constructor(){

        this.children = [];
        
    }

    spawnProcess(cmd, args, onExit){
        let child = childProcess.spawn(cmd, args);
        child.on('exit', onExit);
        this.children.push(child);
    }
}