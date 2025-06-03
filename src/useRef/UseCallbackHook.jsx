import React, { useCallback, useState } from 'react'
import CallBackHook2 from './CallBackHook2';

const UseCallbackHook = () => {
    const[count,setCount] = useState(0);
    const inc = useCallback(()=>{
        setCount(count+1)
    },[])
  return (
    <div>
        {count}
        <button onClick={inc}>Increase</button>
        <CallBackHook2 inc={inc}/>
    </div>
  )
}

export default UseCallbackHook