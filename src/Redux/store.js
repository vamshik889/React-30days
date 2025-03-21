import React from "react";
import { createStore } from "redux";
const initialState = {
  name: "",
  mobile: null,
  balance: 0,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "reset":
      return initialState
    default:
      return state;
  }
}

const store = createStore(accountReducer);
export default store;
