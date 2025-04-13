import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar_1 = () => {
 const state=  useSelector((state)=>state.cart)
  return (
    <div style={{height:"100px",backgroundColor:"lightblue"}}>
      <NavLink to="/cart">Cart</NavLink>
      <div>My bag:{state.length}</div>
    </div>
  )
}

export default Navbar_1