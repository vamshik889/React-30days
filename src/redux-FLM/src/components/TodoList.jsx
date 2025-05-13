import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../action";
import TodoInput from "./TodoInput";

const TodoList = () => {
  // first time --> the fetched data will be coming from db.json and added to store.
  // new todo item will get updated from store.
  //todoIItem, loading, error

  const { todo, isLoading, isError } = useSelector((store) => store);
  console.log(todo);
  //   const loading = useSelector((store) => store.isLoading);
  //   const error = useSelector((store) => store.isError);
  const dispatch = useDispatch();
  const getTodo = () => {
    dispatch(todoRequestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res.data);
        //add to the store --->success
        dispatch(todoSuccessAction(res.data));
      })
      .catch((error) => {
        console.log("error:", error);
        //add to the store --> error
        dispatch(todoFailureAction());
      });
  };

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Error....</h1>}
      <TodoInput />
      {todo.map((element) => {
        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
};

export default TodoList;
