import React, { useEffect, useRef,useState } from 'react'
const list = []
const UserefHook = () => {
    const obj = {name:"vamshi"}
    const ref = useRef(obj);
    const ref1 = useRef(null); //

    list.push(ref.current);
    if(list.length>1){
        console.log(list[0]===list[1])
        console.log(list,list.length)
    }

    const [count,setCount] = useState(0)
  return (
    <div>
        {count}
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button ref={ref1} onClick={()=>{ref1.current.innerText = "Vamshi"}}>click me</button>
    </div>
  )
}

export default UserefHook