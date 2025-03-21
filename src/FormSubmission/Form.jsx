import React, { useEffect, useRef, useState } from "react";
import "./Form.css";

const Form = () => {
  const obj = {
    username: "",
    password: "",
  };
  const admin = {
    username: "vamshi",
    password: 1234,
  };

  const [formState, setFormState] = useState(obj);
  const [success, setSuccess] = useState(null);
  let message = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let login =
      admin.password === Number(formState.password) &&
      admin.username === formState.username;
    console.log(login);
    setSuccess(login);
    console.log(message, message.current.classList);
    if (login) {
      message.current.classList.add("success");
      message.current.classList.remove("fail");
    } else if (
      success &&
      formState.password !== null &&
      formState.username !== null
    ) {
      message.current.classList.remove("success");
      message.current.classList.add("success");
    } else {
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState((prev) => ({ ...prev, [name]: value }));

    //console.log(obj);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div id="container">
        <h1 className="heading">Login</h1>
        <div className="userName input-group">
          <label htmlFor="userName">UserName:</label>

          <input
            type="text"
            id="userName"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div className="password input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <input type="Submit" className="submit" />

        {<div className={`message ${success === true ?"success":success === false?"fail":" "}`} ref={message}>
            {success === true ?"Login success":success === false?"Login failed!":""}
            </div>}
      </div>
    </form>
  );
};

export default Form;
