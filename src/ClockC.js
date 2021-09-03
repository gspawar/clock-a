import React, {Component} from "react";

export default class ClassComponent extends Component{

    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount(){
        setInterval(
            () => this.setState({time : new Date().toLocaleTimeString()}),
            1000
        )
    }
    render(){
        return(
            <div>
                <h2>Class Component</h2>
                <h1>{this.state.time}</h1>
            </div>
        );
    }

}
