import React from "react";

export default class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }



    render() {
        let games = this.props.gamesList;
        let currentIndex = this.props.selectedIndex;
        
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