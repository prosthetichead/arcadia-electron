import React from "react";
import ReactDom from 'react-dom';
import GameList from "./components/GameList";
import Launcher from "./Launcher";
import RomDB from "./RomDB";

class App extends React.Component {
    constructor(){
        super();
        RomDB.rescanRomsDir();
        RomDB.getRomsByPlatformName('nes', (err, docs)=>{
            this.setState({gamesList : docs});
        });
        this.state = {
            gamesList: []
        };
    }

    render() {
        return (
                    <GameList gamesList={this.state.gamesList} />
                
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);