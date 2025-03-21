import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";

const Todo1 = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setTodos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//Add a todo

  const handleAdd = async (text) => {
    try {
      const newObj = {
        title: text,
        status: false,
      };
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
    const newTodos = await response.json();
    setTodos((prev)=>[...prev,newTodos]);
    setInput("")
      
    } catch (error) {
        console.log(error);
    }
    
  };
  const [input,setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
  }
//Delete todo

const handleDelete = async (id) => {
  try {
   
    const res = await fetch(`http://localhost:3000/todos/${id}`)
    if(!res.ok){
      console.log("Todo not found, skipping delete.");
      return 
    }
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    });
  
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    
  } catch (error) {
      console.log(error)
  }
  
};

  return (
    <div>
      <AddTodo handleAdd={handleAdd} handleChange={handleChange} input={input}/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <span>{todo.title}</span> -{" "}
            <span>{todo.status ? "Completed" : "Pending"}</span>
            <button onClick={()=>{handleDelete(todo.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo1;
