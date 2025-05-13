import React from "react";
import { Counter } from "./components/Counter";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  return (
    <>
      <Counter />

      <TodoList />
    </>
  );
};

export default App;
