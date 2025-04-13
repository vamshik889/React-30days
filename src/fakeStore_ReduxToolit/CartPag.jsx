import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from './store/cartSlice'

const CartPag = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.cart)
    const handleDelete = (item)=>{
        dispatch(deleteItem(item))
    }
  return (
    <div>
        {
           products.map((item)=><div>
            <img src={item.image} style={{height:"200px",width:"200px"}}/>
            <p>{item.title}</p>
            <button onClick={()=>{handleDelete(item)}}>Remove Item</button>
            
           </div>) 
        }
    </div>
  )
}

export default CartPag