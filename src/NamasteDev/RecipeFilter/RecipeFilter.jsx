import React, { useCallback, useEffect, useState } from "react";
import data from "./data";
import Item from "./Item";

const RecipeFilterApp = () => {
  const ratingsArr = [4.0, 4.3, 4.5, 4.7, 4.9];

  const [rating, setRating] = useState(ratingsArr[0]);
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);
  const handleChange = (e) => {
    setRating(e.target.value);
  };
  const handleAddToCart = useCallback((id) => {
    setCart((prev) => [...prev, Number(id)]);
  })
  const filterData = () => {
    const updatedItems = items.filter((item) => item.rating >= rating);
    setFilteredItems(updatedItems);
  };
  useEffect(() => {
    filterData();
  }, [rating]);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1>🍽️ Recipe Explorer</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          Filter by Rating:{" "}
          <select onChange={handleChange}>
            {ratingsArr &&
              ratingsArr.map((rating) => (
                <option key={rating} value={rating}>
                  {" "}
                  {rating} +
                </option>
              ))}
          </select>
        </div>
        <div>
          <h5>🛒 Cart Items: {cart.length}</h5>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {filteredItems &&
          filteredItems.length > 0 &&
          filteredItems.map((item) => (
            <Item {...item} key={item.id} handleAddToCart={handleAddToCart} />
          ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
