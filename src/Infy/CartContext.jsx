import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const context = createContext();

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const url = "https://dummyjson.com/products";
  async function fetchProducts() {
    try {
      const res = await axios.get(url);
      const updated = res.data.products.map((product)=>({...product,quantity:0}))
      setItems(updated);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const increase = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updated);
  };

  const decrease = (id) => {
    const updated = items.map((item) => {
      if (item.id === id && item.quantity >= 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setItems(updated);
  };
  return (
    <context.Provider value={{ items, increase, decrease }}>
      {children}
    </context.Provider>
  );
};

export const useCartContext = () => useContext(context);
export default CartContext;
