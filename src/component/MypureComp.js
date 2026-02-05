import { PureComponent } from "react";

class MypureComp extends PureComponent{
    render(){
        console.log("Girish")
        return(
            <>
            <h2>This is PureComponent</h2>
            <p>My name is :{this.props.myname}</p>
            
             </>
    )
    }
}

export default MypureComp