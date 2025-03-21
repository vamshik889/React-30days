🎯 Summary of Steps
1️⃣ Install Redux Toolkit → npm install @reduxjs/toolkit react-redux
2️⃣ Create a Redux Store (store2.js) → Use createSlice() and configureStore()
3️⃣ Wrap App with <Provider> (main.jsx) → To make Redux available globally
4️⃣ Create Counter Component (Counter_333.jsx) → Use useSelector() & useDispatch()
5️⃣ Use Counter Component in App.jsx


🔹 Step 1: Install Dependencies
Before using Redux Toolkit, install the necessary packages in your React project:

sh
Copy
Edit
npm install @reduxjs/toolkit react-redux
🔹 Step 2: Create the Redux Store (store2.js)
We need to create a Redux store that manages our application's state.

📌 Steps in store2.js
Import Required Functions
configureStore (to create the store)
createSlice (to create a slice of state)
Define Initial State
The state contains:
js
Copy
Edit
const initialState = {
  count: 0,        // Counter value
  showCounter: true // Whether the counter is visible
};
Create a Slice using createSlice
createSlice() accepts an object with:
name: The slice name (counter)
initialState: The default state
reducers: Functions that modify the state
Redux Toolkit uses Immer internally, so we can mutate the state directly.
Set Up Reducers
Each function modifies the state:
js
Copy
Edit
increment(state) { state.count += 1; }
decrement(state) { state.count -= 1; }
reset(state) { state.count = 0; }
showCounter(state) { state.showCounter = !state.showCounter; }
increase(state, action) { state.count += action.payload.value; }
Configure the Store using configureStore()
We add counterSlice.reducer under counter.
Export Actions & Store
counterActions (for dispatching actions)
store2 (to provide the Redux store)
✅ Final store2.js Code
js
Copy
Edit
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Step 1: Define Initial State
const initialState = {
  count: 0,
  showCounter: true,
};

// Step 2: Create a Slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.count += action.payload.value;
    },
  },
});

// Step 3: Create Store & Register Reducer
const store2 = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Step 4: Export Actions & Store
export const counterActions = counterSlice.actions;
export default store2;
🔹 Step 3: Provide the Store to React (main.jsx or index.js)
To make Redux available throughout the app, we must wrap our application inside the <Provider> component from react-redux.

📌 Steps in main.jsx
Import Provider from react-redux
Import the Redux store (store2)
Wrap <App /> inside <Provider store={store2}>
✅ Final main.jsx Code
js
Copy
Edit
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store2 from "./store2"; // Import the Redux store
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store2}>
    <App />
  </Provider>
);
🔹 Why is this step important?

This makes the Redux store available to all components via useSelector() and useDispatch().
🔹 Step 4: Create the Counter Component (Counter_333.jsx)
Now, we create the React component that interacts with the Redux store.

📌 Steps in Counter_333.jsx
Import Hooks & Redux Actions
useSelector() to access state
useDispatch() to dispatch actions
counterActions from store2.js
Select State from Redux
Get count and showCounter using useSelector()
Dispatch Actions on Button Click
Use useDispatch() to update the Redux state
Wrap dispatch() inside an arrow function
✅ Final Counter_333.jsx Code
jsx
Copy
Edit
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './store2';

const Counter_333 = () => {
  // Step 1: Access state from Redux
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // Step 2: Destructure the state
  const { showCounter, count } = data;

  return (
    <div>
      {/* Step 3: Display Counter */}
      {showCounter && <p>Count: {count}</p>}

      {/* Step 4: Dispatch Actions */}
      <button onClick={() => dispatch(counterActions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterActions.decrement())}>Decrement</button>
      <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
      <button onClick={() => dispatch(counterActions.increase({ value: 10 }))}>Increase</button>
      <button onClick={() => dispatch(counterActions.showCounter())}>Toggle Counter</button>
    </div>
  );
};

export default Counter_333;
🔹 Step 5: Use Counter_333 in App.jsx
To display the counter, import Counter_333 inside App.jsx.

jsx
Copy
Edit
import React from "react";
import Counter_333 from "./Counter_333";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <Counter_333 />
    </div>
  );
}




