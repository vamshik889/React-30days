import React, { useEffect, useState } from "react";

const TogglePassword = () => {
  const [input, setInput] = useState("");
  const [isVisible,setIsVisible] = useState(false);
  useEffect(()=>{
console.log(isVisible)
  },[isVisible])
  return (
    <div>
      <h2>Toggle Password</h2>
      <div style={{height:"30px",border:"1px solid black",borderRadius:"5px"}}>
        <input
          type={isVisible?"text":"password"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{border:"none",outline:"none"}}
        />
       {input && isVisible ?<span style={{cursor:"pointer"}} onClick={()=>setIsVisible(false)}>😵</span>:<span style={{cursor:"pointer"}} onClick = {()=>setIsVisible(true)}>👁️</span>}
      </div>
    </div>
  );
};

export default TogglePassword;
