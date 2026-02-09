import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { Link, Outlet } from 'react-router-dom'
 
const ProductDetailsComp = () => {
const[products,setProducts]=useState([])
 
    useEffect(() =>{
 
                fetchData();
            }, []);
 
            const fetchData=()=>{
                axios.get("http://localhost:3008/products").then((res)=>{
                    console.log(res.data);
                    setProducts(res.data)
                }).catch((error)=>{})
            }
    return (
        <div>
            <h2>this is product detail Component</h2>
            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>s.no</th><th>name</th><th>Price</th><th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length >0 && products.map((value,index)=>(
                              <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.pname}</td>
                                <td>{value.pprice}</td>
                                <td>{value.pcompany}</td>
 
                            </tr>
 
                        ))
                    }
                </tbody>
            </table>
 
 
            
        </div>
    )
}
 
export default ProductDetailsComp
