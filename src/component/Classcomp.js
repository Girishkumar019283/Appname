import { Component } from "react";

class Classcomp extends Component{
    render(){
        return (<div>
            <h2>Class component</h2>
            <p>My name is {this.props.ename} I am {this.props.epost}</p>
        </div>)
    }
}

export default Classcomp