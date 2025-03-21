import React from 'react'
import Quantity from './Quantity'
import Price from './Price'

const CartItem = ({title,price,quantity}) => {
  return (
    <div>
        <h4>{title}</h4>
        <Quantity price={price} quantity={quantity}/>
      
    </div>
  )
}

export default CartItem