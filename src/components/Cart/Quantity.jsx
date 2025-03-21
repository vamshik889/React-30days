import React, { useState } from 'react'
import Price from './Price';

const Quantity = ({price,quantity}) => {
    const [qty,setQty] = useState(quantity);

    const reduceQty = ()=>{
            setQty((prev)=>(prev>1?prev-1:1))
    }
    const increaseQty = ()=>{
        setQty((prev)=>{
           return prev+1
        })

    }
  return (
    <div>
        <button onClick={reduceQty}>-</button>{qty}<button onClick={increaseQty}>+</button>
        <Price qty={qty} price={price}/>
    </div>
  )
}

export default Quantity