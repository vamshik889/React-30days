import React, { useState } from 'react'
import Counter from './Counter';

const MainCounter = () => {
  const[counterNum,addCounter] = useState([]);
  const [reset,setReset] = useState(false);

  const handleClick = ()=>{
    addCounter((prev)=>[...prev,{id:Date.now()}])
  }
  const resetAll = ()=>{
    setReset(!reset);
    console.log("re-render")
  }
  const deleteCounter = (id)=>{
    const countersAfterDelete = counterNum.filter((counter)=>{
     return counter.id !== id;
    })
    addCounter(countersAfterDelete)
  }
  // const total = ()=>{
  
  //   const totalSum = counterNum.reduce((sum, counter) => sum + counter.countValue, 0);
  //   setSum(totalSum);
  //   console.log(counterNum)
  // }

  return (
    <div style={{ display:"flex",flexDirection:"row",flexWrap:"wrap" ,margin:10, padding:5}}>
        <button onClick={handleClick}>Add counter</button>
        <button onClick={resetAll}>Reset all</button>
        {/* <button onClick={total}>Show total sum</button> */}
        
        {
          counterNum.map((element)=>{

            return <Counter key={element.id} reset={reset} id={element.id} setReset={setReset} deleteCounter={deleteCounter} addCounter={addCounter} />
          })
        }
    

    </div>
  )
}

export default MainCounter