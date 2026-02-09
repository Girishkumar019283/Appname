import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const AddproductComp = () => {
    const nav =useNavigate();
    const [product,setProducts]=useState({
        pname:"",
        pprice:"",
        pcompany:""
    })
    const  inputchangeHandler =(Event)=>{
        const{name,value} = Event.target;
        setProducts({...product,[name]:value})
    }
    const addproductData=(Event)=>{
        axios.post('http://localhost:8888/products',products).then(()=>{
            window.alert("product addedx succesfully")
            nav("/dashboard/productdetail")
    }).catch((error)=>{})

    }
  return (
    <div>
      
    </div>
  )
}

export default AddproductComp
