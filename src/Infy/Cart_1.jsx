import React from 'react'
import { useCartContext } from './CartContext'

const Cart_1 = () => {
   const {items,increase,decrease} =  useCartContext();

  return (
    <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"20px"}}>
        {
            items && items.length>0?items.map((item)=><li key={item.id}>
                <span>{item.id} </span>
                <p>{item.title}</p>  <span>Quanrtity :{item.quantity}</span>
                <button onClick={()=>increase(item.id)}>+</button>
                <button onClick={()=>decrease(item.id)}>-</button>
            </li>):<div>Loading...</div>
        }
    </ul>
  )
}

export default Cart_1