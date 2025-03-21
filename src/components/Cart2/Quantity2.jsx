import React, { useEffect, useState } from "react";

const Quantity2 = ({ item,increase,decrease }) => {

  const [price,setPrice] = useState(item.price);
  useEffect(()=>{
    setPrice(item.price*item.quantity)
  },[item.quantity])

  return (
    <div>
      <button onClick={()=>{decrease(item.id)}}>-</button>
      {item.quantity}
      <button onClick={()=>{increase(item.id)}}>+</button>
      <p>{price}</p>
    </div>
  );
};

export default Quantity2;
