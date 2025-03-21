import React from 'react'
import Quantity2 from './Quantity2'

const CartItem2 = ({item,increase,decrease}) => {
  return (
    <div style={{border:2 , border:"solid", padding:10,height:150,display:"flex",flexDirection:"column" }}>
        <p>{item.title}</p>
        <Quantity2 item = {item} increase = {increase} decrease= {decrease} price={item.price}/>
    </div>
  )
}

export default CartItem2