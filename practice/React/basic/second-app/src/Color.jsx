import React from "react";

class Color extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand : "Ford",
            model : "Mustag",
            color : "Red"
        }
    }

    changeColor = () => {
        this.setState({color : "blue"});
    }

    render(){
        return(
            <div>
                <h1>This is {this.state.brand}</h1>
                <p>
                    This is {this.state.color} and model is {this.state.model}
                </p>

                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Color;