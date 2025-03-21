# Understanding `useCallback` in React

## 📌 What is `useCallback`?
`useCallback` is a **React Hook** that returns a **memoized function** to prevent unnecessary re-creations across renders.

### 🔹 Syntax:
```javascript
const memoizedCallback = useCallback(
  () => {
    // Function logic
  },
  [dependencies]
);

Why Use useCallback?
React re-creates functions every time a component re-renders, which can cause: ✅ Unnecessary re-renders in child components
✅ Performance issues in large applications

useCallback solves this by ensuring a function maintains the same reference across renders.

1️⃣ Prevent Function Re-creation
Without useCallback (Function re-created on every render)

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  console.log("Function re-created");

  return <button onClick={increment}>Count: {count}</button>;
}


✅ Using useCallback (Memoizing the function)

import { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  console.log("Function NOT re-created");

  return <button onClick={increment}>Count: {count}</button>;
}
The function remains the same across renders.
