import React, { useState } from "react";

const StarRating = ({ stars  }) => {
  const arr = Array.from({ length: stars }, (_, i) => i + 1);
  console.log(arr)
  const [selected, setSelected] = useState(null);
  const style = {
    height: "20px",
    width: "20px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    margin: "2px",
  };
 const handleSelection = (i) => {
    setSelected(i+1);

  };
  const starsUI = arr.map((star, i) => {
          return (
            <div style={{...style,backgroundColor:selected !==null && i<selected?"gold":"white"}} key={i} onClick={() => handleSelection(i)}></div>
          );
        })

 const handleReset = ()=>{
    setSelected(null)
 }
  return (
    <div style={{ display: "flex",flexDirection:"column", marginTop: "50px" }}>
      <div style={{display:"flex"}}>
        {starsUI}
      </div>
      <div>Current Rating: {selected ===null?"0":selected}</div>
      <div style={{margin:"auto",marginTop:"10px"}}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StarRating;
