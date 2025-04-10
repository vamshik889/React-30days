import React from 'react'
import Quantity from './Quantity'
import Price from './Price'

const CartItem = ({item,updateQty}) => {
  const {title} = item;
  return (
    <div>
        <h4>{title}</h4>
        <Quantity item= {item} updateQty={updateQty} />
      
    </div>
  )
}

export default CartItem