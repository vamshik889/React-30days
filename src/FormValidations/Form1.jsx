import React, { useEffect, useState } from "react";

//showing errors upon submitting the form, if the mail dont have the @ we can show error and if the name field is empty we can show the error
const Form1 = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const [errors, setErros] = useState({
    name: false,
    email: false,
  });
const handleChange = (e)=>{
  const {name,value} = e.target;
  setFormState((prev)=>({...prev,[name]:value}))
}
const handleSubmit = (e)=>{
  e.preventDefault()
if(!formState.name.trim()){
  setErros((prev)=>({...prev,name:true}))
}
if(!formState.email.trim().includes("@")){
  setErros((prev)=>({...prev,email:true}))
}

}
useEffect(()=>{
  setErros((prev)=>({...prev,name:false,email:false}))
},[formState])
  return (
    <div>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formState.name}
          placeholder="enter name"
        />
        {errors.name && <p style={{color:"red"}}>invalid name</p>}
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={formState.email}
          placeholder="enter email"
        />
                {errors.email && <p style={{color:"red"}}>invalid email</p>}

        <button >Submit</button>
      </form>
    </div>
  );
};

export default Form1;
