import React, { useEffect, useState } from "react";

const Form333 = () => {
  const formInitialState = {
    name: "",
    email: "",
    password: "",
  };

  const [data,setData] = useState([])
  const errorState = {
    name:false,
    email:false,
    password:false
  }
  const [errors,setErrors] = useState(errorState)
  const [formData, setFormData] = useState(formInitialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,password} = formData;
    if(!name.trim() || name.length<6 ){
        setErrors((prev)=>({...prev,name:true}))
    }
       if(!email.trim() || !email.includes("@") ){
        setErrors((prev)=>({...prev,email:true}))
    }
       if(!password.trim() || password.length<6  ){
        setErrors((prev)=>({...prev,password:true}))
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
const URL = "https://dummyjson.com/users"
  const fetchdata = async(url)=>{
    try {
     const response =  await fetch(url);
      if(!response.ok) throw new Error;
     const data =  await response.json();
     setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchdata(URL);
    

  },[])
    useEffect(()=>{
  
    console.log(data)

  },[data])
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={handleChange} />
          <p>{errors.name && "invalid name"}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",   
            gap: "20px",
          }}
          onChange={handleChange}
        >
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <p>{errors.email && "invalid email"}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        ></div>
        <div>
          <label htmlFor="name">Password:</label>
          <input type="text" id="password" onChange={handleChange} />
          <br />
          <p>{errors.password && "invalid password"}</p>
        </div>
        <input type="submit" />
      </form>
      <ul>
        {
           data?.users?.length>0 ? data?.users.map((user)=><li key={user.id}>
            {user.firstName}
          </li>)
         :<h2>Loading...</h2>}
      </ul>
    </div>
  );
};

export default Form333;
