import React, { useState } from 'react'

const Button1 = () => {
    const [count,setCount] = useState(0);

    
console.log("render",count)
  return (

    <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
  )
}

export default Button1