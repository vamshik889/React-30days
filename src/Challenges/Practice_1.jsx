import React, { useState } from "react";

const Practice_1 = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
  };

  const [formState, setFormState] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState));
    setFormState(initialState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim()) {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter Name"
            value={formState.name}
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Enter email"
          />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            value={formState.password}
          />
          <input
            type="text"
            name="cPassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            value={formState.cPassword}
          />
          <button
            type="submit"
            disabled={
              !formState.email ||
              !formState.password ||
              !formState.name ||
              !formState.password ||
              !formState.cPassword
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Practice_1;
