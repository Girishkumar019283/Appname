import React,{usestate} from 'react'

const UseStateComp = () => {
  const[count,setCount]=usestate(0)
  const[name,setName]=usestate("Girish")
  const[course,setcourse]=usestate("python","java","DSA")

   const updatecount=()=>{
    setCount(count+1);
   }


  return (
    <div>
      <h1>use state component</h1>
      <button type='button' onClick={()=updatecount}>Cunt++</button>
      <button onClick={()=>setName("girishkumar")}>Name change</button>
   </div>
  )
}

export default UseStateComp
