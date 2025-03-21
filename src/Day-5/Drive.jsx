import React, { useState } from "react";

const Drive = (props) => {
  const currentYear = 2025;
  const [date, setDate] = useState(null);
  const [age, setAge] = useState(null);
  const [click,setClick] = useState(false)


  const handleChange = (e) => {
    const birthyear = e.target.value.toString().split("-")[0];
    setDate(birthyear);
    console.log(birthyear);
    const calculatedAge = currentYear - birthyear;
    setAge(calculatedAge);

    setClick(false)
  };

  const handleclick = ()=>{
    setClick(true)
  }
  
  return (
    <div>
      <input
        placeholder="select date of birth"
        type="date"
        onChange={handleChange}
      ></input>
      <input
        type="button"
        value="Validate"
        style={{ width: 100, cursor: "pointer" }}
        onClick={handleclick}
      ></input>
      {click && date && age !== null ? (
        age > 18 ? (
          <p>you are eligible for driving</p>
        ) : (
          <p>Your are not eligible for driving</p>
        )
      ) : (
        <p>Please select your date of birth</p>
      )}
    </div>
  );
};

export default Drive;
