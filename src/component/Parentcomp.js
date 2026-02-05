import { Component } from "react";
import ChildComp from "./ChildComp";
import MypureComp from "./MypureComp";
import MyReactMemoComp from "./MyReactMemoComp";
import "./External.css"
class Parentcomp extends Component{
    constructor(){
        super();
        this.state ={
            ename:"Girish",
            esalary:100000,
        };
    }

updateSal=()=>{
    this.setState((prevstate)=>({ename:"Girishkumar",esalary:prevstate.esalary+1000}))
}
     render(){
         const {ename,esalary}=this.state
         return(<div>
            <div className="text">Employee name:<strong>{ename}</strong></div>
            <div>Employee Salary:<strong>{esalary}</strong></div>
            <button onClick={()=>this.updateSal()}>Increment</button>
            <ChildComp name={ename} salary={esalary} update={this.updateSal}/>
            <MypureComp myname={ename}/>
            <MyReactMemoComp/>
        </div>


        )
    }
}

export default Parentcomp