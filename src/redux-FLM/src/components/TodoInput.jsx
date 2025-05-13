import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  todoPostFailureAction,
  todoPostRequestAction,
  todoPostSuccessAction,
} from "../action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const postTodo = () => {
    dispatch(todoPostRequestAction()); //for loading
    const newTodo = {
      title: title,
    };
    axios
      .post("http://localhost:3000/todos", newTodo)
      .then((res) => {
        //to the store -->success
        dispatch(todoPostSuccessAction(res.data)); // to store the data in redux store
      })
      .catch((error) => {
        // to the store---> error
        dispatch(todoPostFailureAction); // for error
      });
  };

  const addTodo = () => {
    postTodo();
    setTitle("");
  };

  //post
  //want to add todo to redux store
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>submit</button>
    </div>
  );
};

export default TodoInput;
