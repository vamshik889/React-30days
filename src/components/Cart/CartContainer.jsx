import React, { useState } from "react";
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

  return <div>{
    cartItems.map((item)=>{
      return  <CartItem key={item.id} {...item} />
      
    })
    
    }
     <Total items = {cartItems}/>
  </div>;
};

export default CartContainer;
