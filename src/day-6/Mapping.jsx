import React from 'react'

const Mapping = () => {
    const arr = [1,2,3,4,5];
    const obj = [{name:"vamshi",age:24},{name:"jag", age:25}]
  return (
    <div>
      
      <ul><p>Mapping of array items with numbers</p>
      
      { arr.map((e,i)=><li key={i}>{e}</li>)}
      </ul>
      <ul>
      {
           
           obj.map((e,i)=><li key={i}>{e.name + e.age}</li>)
       }
      </ul>
        
    </div>
  )
}

export default Mapping