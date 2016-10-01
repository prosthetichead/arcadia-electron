import React from "react";

export default class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", (e)=> { this.moveList(e) });
    }

    moveList(event){
        let currentIndex = this.state.selectedIndex;
        this.setState({selectedIndex: currentIndex + 1});
    }

    render() {
        let games = this.props.gamesList;
        let currentIndex = this.state.selectedIndex;
        
        if(games.length === 0){
            return (
                <div>
                    NO GAMES TO DISPLAY
                </div>
            ); 
        }
        else{
            return(
                <div>
                    {games[currentIndex].displayName}
                </div>
            );
        }
        
    }
}