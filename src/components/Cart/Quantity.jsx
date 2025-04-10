import React, { useEffect, useState } from "react";
import Price from "./Price";

const Quantity = ({ item, updateQty }) => {
  const { quantity, id,price } = item;
  const [qty, setQty] = useState(quantity);

  const reduceQty = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const increaseQty = () => {
    setQty((prev) => {
      return prev + 1;
    });
  };

  useEffect(()=>{
    updateQty(id,qty);
  },[qty])
  const handleReduce = (id) => {
    reduceQty();
    // updateQty(id,qty);  
  };
  const handleIncrease = (id) => {
    increaseQty();
   
  };

  return (
    <div>
      <button onClick={() => handleReduce(id)}>-</button>
      {qty}
      <button onClick={() => handleIncrease(id)}>+</button>
      <Price qty={qty} price={price} />
    </div>
  );
};

export default Quantity;
