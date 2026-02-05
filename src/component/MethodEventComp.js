import { Component } from "react";

class MethodEventComp extends Component {

    greet = () => {
        window.alert("Good morning")
    }

    welcome = (...std) => {
        window.alert(`welcome you ${std} in my  react session`)
    }

    render() {
        return (
            <div>
                
            <button type="button" onClick={this.greet}>Greet</button>{"   "}
            <button type="button" onClick={()=>this.greet()}>Greet 1</button>{"   "}
            <button type="button" onClick={()=>this.welcome("girish","Nixen")}>Welcome </button>
            <button onMouseOver={()=>this.welcome("Girish","Nixen")}>Hover mouse in over me </button>
        

            </div>
        )
            
    }
}

export default MethodEventComp