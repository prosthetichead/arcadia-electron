import React from "react";
import ReactDom from 'react-dom';
import GameList from "./components/GameList";
import Launcher from "./Launcher";
import RomDB from "./RomDB";

import config from "../config";

const launcher = new Launcher();

class App extends React.Component {

    constructor(){
        super();
        //rescan roms and get all nes roms 
        RomDB.rescanRomsDir();
        RomDB.getRomsByPlatformName('nes', (err, docs)=>{
            this.setState({gamesList : docs});
        });
        this.state = {
            gamesList: [],
            gameSelectedIndex: 0,
        };
    }
    
    componentDidMount(){
        document.addEventListener("keydown", (e)=> { this.keyDown(e) });
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", (e)=> { this.keyDown(e) });
    }

    keyDown(e){
        this.setState({gameSelectedIndex: this.state.gameSelectedIndex + 1});
    }

    launchGame(){

        let romFullPath = this.state.gamesList[this.state.gameSelectedIndex].romFullPath;
        let emulatorPath = "/applications/retroarch.app/Contents/MacOS/RetroArch";
        let core = "/applications/retroarch.app/Contents/Resources/cores/nestopia_libretro.dylib";
        launcher.spawnProcess(emulatorPath, ['-L', core, romFullPath], (exitCode)=>{
            console.log("Exit with Code " + exitCode);
        });
    }

    render() {
        return (    
            <div>
                <button onClick={()=>{ this.launchGame() } }/>
                <GameList gamesList={this.state.gamesList} selectedIndex={this.state.gameSelectedIndex} />
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);