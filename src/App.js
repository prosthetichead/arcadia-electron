import React from "react";
import ReactDom from 'react-dom';
import Greeting from "./components/Greeting";
import Launcher from "./Launcher";
import RomDB from "./RomDB";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            gameList: []
        };
    }

    render() {
        return (
                    <Greeting name='Kate' />
                
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('content')
);