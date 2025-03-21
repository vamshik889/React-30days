import React, { useEffect, useState } from 'react'

const Counter = ({reset,id,setReset,deleteCounter}) => {
    console.log(id)
    const [count,setCount] = useState(0);
    const Increase = ()=>{
        setCount((prev)=>prev+1)
    }
    const Decrease = ()=>{
        count>0?setCount((prev)=>prev-1):0
    }
   useEffect(()=>{
        if(reset){
            setCount(0);
            setReset(false)
        }
   },[reset]);

  return (
    <div style={{display:"flex", gap:10,margin:10,padding:10}}>
        <button onClick={Increase}>Increase</button>
        <p>{count}</p>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={()=>{deleteCounter(id)}}>Delete</button>
    </div>
  )
}

export default Counter