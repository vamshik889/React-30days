import { configureStore, createSlice } from "@reduxjs/toolkit";

//  install redux tool kit from npm i @reduxjs/toolkit
//create the initial state
//create a slice of a state using createSlice which accepts an object with a name, state, reducers properties
// .create store using the configureStore from redux toolkit
//
const initialState = {
  count: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      return { ...state, count: state.count + 1 };
    },
    decrement(state) {
      return { ...state, count: state.count - 1 };
    },
    reset(state) {
      return { ...state, count: 0 };
    },
    showCounter(state) {
      return { ...state, showCounter: !state.showCounter };
    },
    increase(state, action) {
      return { ...state, count: state.count + action.payload.value };
    },
  },
});

const store2 = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;
export default store2;
