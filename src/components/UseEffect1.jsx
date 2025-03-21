import React,{useEffect,useState} from 'react'

const UseEffect1 = () => {
    const [count,setCount] = useState(0)
      useEffect(()=>{
      let id =  setInterval(()=>{
          setCount(count+1);
          console.log(count)
        },1000);
        return()=>clearInterval(id)
      },[count])
  return (
    <div> 
      {count}
    </div>
  )
}

export default UseEffect1