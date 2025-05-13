import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFunction, subFunction } from "../action";

export const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addFunction(1)); //{type, payload}
  };
  const handleDecrease = () => {
    dispatch(subFunction(1));
    // dispatch({ type: SUB, payload: 1 })
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>increment</button>
      <button onClick={handleDecrease}>decrement</button>
    </div>
  );
};
