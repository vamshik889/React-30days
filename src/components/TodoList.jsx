import React from "react";

const TodoList = ({ todo, handleDelete,handleToggle }) => {
  return (
    <>
      {todo.map((item) => {
        return (
          <>
            <li key={item.id}>
              {item.title}-
              {item.status == false ? "Not completed" : "Completed"}
            
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
            <button onClick={()=>{handleToggle(item.id)}}>Toggle</button>
            </li>
          </>
        );
      })}
    </>
  );
};

export default TodoList;
