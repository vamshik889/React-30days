import React, { useReducer } from "react";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log(action.payload)
      return {...state,count:state.count + 1}

    case "decrement":
      if(state.count>0){

        return {...state,count:state.count-1}
      }
      return state
    default:
      return state;
  }
};

function Counter() {
  const [initialState, dispatch] = useReducer(reducerFunc, { count: 10 });
  return (
    <div>
      <button onClick={() => dispatch({type:"increment",payload:"hi"})}>+</button>
      <p>{initialState.count}</p>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  );
}

export default Counter;
