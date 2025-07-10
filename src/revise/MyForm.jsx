import React, { useState } from "react";

const MyForm = () => {
  const initialState = { name: "", email: "", password: "" };
  const errorState = { name: false, email: false, password: false };
  const [error, setError] = useState(errorState);
  const [formState, setFormState] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const validateDetails = ()=>{
    const { name, email, password } = formState;

      if (name.length < 6) {
        setError((prev) => {
          return { ...prev, name: true };
        });
      }
      if (!email.includes("@") || !email.includes(".")) {
        setError((prev) => {
          return { ...prev, email: true };
        });
      }
      if (password.length < 8) {
        setError((prev) => {
          return { ...prev, password: true };
        });
      }
      if(!error.name && !error.email && !error.password ){

        alert(JSON.stringify(formState));
        setFormState(initialState);
      }
      else{
        alert("Enter the name , email and passowrd as per requirements");

      }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formState;

 if (name.trim() && email.trim() && password.trim()) {
   validateDetails()
    } else {
      alert("Please enter valid details");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="enter name"
          style={{
            borderColor: error.name ? "red" : "black",
            outlineColor: error.name ? "red" : "black",
          }}
        />
        {error.name && <p>Enter a valid name</p>}
        <input
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="enter email"
        />
        {error.email && <p>Enter a valid email</p>}

        <input
          type="text"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="enter password"
        />
        {error.password && <p>Enter a valid password</p>}

        <input type="submit" />
      </form>
    </>
  );
};

export default MyForm;
