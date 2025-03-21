import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  return (
    <div className="form-container">
      <h1>Form</h1>
      <div className="balance">
        <input
          type="text"
          value={balance}
          onChange={(e) => {
            setBalance(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({type:"deposit",payload:balance});
            setBalance("")
          }}
        >
          Deposit
        </button>
        <button
         onClick={() => {
          dispatch({type:"withdraw",payload:balance});
          setBalance("")
        }}
        >Withdraw</button>
      </div>
      <div className="mobile">
        <input type="text" value={number} onChange={(e) => setnumber(e.target.value)} />
        <button
         onClick={() => {
          dispatch({type:"mobile",payload:number});
          setnumber("")
        }}
        >Add Number</button>
      </div>
      <div className="name">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button
         onClick={() => {
          dispatch({type:"name",payload:name});
          setName("")
        }}
        >Add Name</button>
      </div>
      <div>

      <button onClick={()=>{
        dispatch({type:"reset"})
      }}>Reset</button>
      </div>
    </div>
  );
};

export default Form;
