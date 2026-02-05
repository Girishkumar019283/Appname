import React from "react"

const MyReactMemoComp=()=>{
    console.log("memo")
    return(
        <>
        <h1>This is react components</h1>
        </>
    )

}
export default React.memo(MyReactMemoComp);