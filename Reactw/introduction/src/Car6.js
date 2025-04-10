import React from "react";

class Car6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color : "Green"
        };
    }
    changeColor = () => {
        this.setState({color : "Pink"})
    }

    render() {
        return (
            <div>
                <h1>This is {this.state.color} color</h1>
                <button type="button" onClick={this.changeColor}>Change to Pink</button>
            </div>
        )
    }
}
export default Car6;