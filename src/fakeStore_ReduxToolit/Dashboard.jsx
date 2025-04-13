import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './store/productSlice' 
const Dashboard = () => {
   
    const {data:products,status} = useSelector(state=>state.products) //{data:products}during destruction we are renaming the data to products ,means aliasing 
   const dispatch =  useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    if(status === "loading"){
        return <p>Loading...</p>
    }

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {
        products.map((product)=><Product product={product} key={product.id}/>)
    }
    </div>
  )
}

export default Dashboard