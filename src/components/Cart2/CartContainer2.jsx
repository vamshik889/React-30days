import React, { useEffect, useState } from "react";
import CartItem2 from "./CartItem2";
import Total2 from "./Total2";

const items = [
  { id: 1, title: "Pizza", price: 100, quantity: 1 },
  { id: 2, title: "Burger", price: 150, quantity: 1 },
  { id: 3, title: "Chapati", price: 60, quantity: 1 },
  { id: 4, title: "Roti", price: 40, quantity: 1 },
  { id: 5, title: "Fruit Salad", price: 50, quantity: 1 },
];
const CartContainer2 = () => {
  const [item, setItem] = useState(items);
  const [total,setTotal] = useState(
    item.reduce((acc,cur)=>{
        return acc+cur.price*cur.quantity
    })
  )
  const increase = (id) => {
    const updated = item.map((item) => {
      return item.id ===id? { ...item, quantity: item.quantity + 1 } : item;
    });
    setItem(updated);
  };
  const decrease = (id) => {
    const updated = item.map((item) => {
      if (id === item.id) {
        return (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);
      }else {
        return item;
      }
    });
    setItem(updated);
  };

  useEffect(()=>{
    const totalVal = item.reduce((acc,cur)=>{return acc+cur.price*cur.quantity},0);
    setTotal(totalVal)
  },[item]);

  return (
    <div style={{display:"flex", gap:10,flexDirection:"row"}}>
      {item.map((item) => {
        return (
          <CartItem2
            key={item.id}
            item={item}
            increase={increase}
            decrease={decrease}
           
          />
        );
      })}

      <Total2 item={item} total={total}/>
    </div>
  );
};

export default CartContainer2;
