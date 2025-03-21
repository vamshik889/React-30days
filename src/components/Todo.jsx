import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const addItem = () => {
    const newitem = {
      title: input,
      status: false,
      id: Math.random() + Date.now(),
    };
    setTodo([...todo, newitem]);
    console.log(todo);
    setInput("");
  };
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleToggle = (id)=>{
      const updatedtodo = todo.map((item)=>{
       return item.id===id?{...item,status:!item.status}:item
      })
      console.log(updatedtodo)
      setTodo(updatedtodo)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter to do item"
        onChange={handleChange}
        value={input}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        <TodoList todo = {todo} handleDelete={handleDelete} handleToggle= {handleToggle}/>

      </ul>
    </div>
  );
};

export default Todo;
