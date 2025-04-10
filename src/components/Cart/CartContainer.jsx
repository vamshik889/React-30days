import React, { useEffect, useState } from "react";
import Quantity from "./Quantity";
import CartItem from "./CartItem";
import Total from "./Total";
const items = [
  { id: 1, title: "Pizza", quantity: 1, price: 100 },
  { id: 2, title: "Coke", quantity: 1, price: 50 },
  { id: 3, title: "Chapati", quantity: 1, price: 40 },
  { id: 4, title: "Burger", quantity: 1, price: 200 },
];

const CartContainer = () => {
  const [cartItems ,setCartItems] = useState(items);

  const updateQty = (id,qty)=>{
    console.log(id,qty)
   const updatedItems =  cartItems.map(item=>item.id===id?{...item,quantity:qty}:item);
   setCartItems(updatedItems)

  }
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  return <div>{
    cartItems.map((item)=>{
      return  <CartItem key={item.id} item = {item} updateQty={updateQty} />
      
    })
    
    }
     <Total items = {cartItems}/>
  </div>;
};

export default CartContainer;
