import React, { useEffect, useState } from "react";


//validating the form in realtime

const Validation = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: false, email: false });

  useEffect(() => {
    if (!data.name.trim()) {
      setError((prev) => ({ ...prev, name: true }));
    } else {
      setError((prev) => ({ ...prev, name: false }));
    }
    if (!data.email.trim().includes("@")) {
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form style={{display:"flex",flexDirection:"column"}}>
        <input
          type="text"
          onChange={handleChange}
          value={data.name}
          name="name"
        />
        {error.name && <p> invalid name</p>}
        <input
          type="text"
          onChange={handleChange}
          value={data.email}
          name="email"
        />
        {error.email && <p>invalid email</p>}
        <input type="submit" disabled={error.name || error.email} />
      </form>
    </>
  );
};

export default Validation;
