import React from "react";

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
         return (
             <div className="greeting">
                Hello, {this.props.name}!
             </div>
        );
    }
}