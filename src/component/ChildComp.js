import { Component } from "react";
import food4 from '../shared/images/food1.jpg'
import burger from '../shared/images/burger.jfif'
class ChildComp extends Component{
    render(){
        return(
            <div>
            <h1>Child components</h1>
            <h1>name:{this.props.name}</h1>
            <h1>salary:{this.props.salary}</h1>
            <button onClick={()=>this.props.update()}>Increment</button>
            <img src={food4} alt="img"></img>
            <img src={burger} alt="img"></img>
            </div>
        )
    }
}

export default ChildComp