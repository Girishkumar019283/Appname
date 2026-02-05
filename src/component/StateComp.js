import { Component } from "react";

class StateComp extends Component{
    constructor(){
        super();

        this.state ={
            ename:"Girish",
            esalary:100000,
        };

        setTimeout(()=>{
            this.setState({ename:"Girishkumar",esalary:this.state.esalary+3000})
            
      
        },2000)
    }





    render(){
        return(<>
            <h3>This is State component{this.state.ename} and salary is {this.state.esalary}</h3>
            </>
        )
            
        
    }
}
export default StateComp