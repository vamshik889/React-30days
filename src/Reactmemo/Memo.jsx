import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

const Memo = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <Child name="vamshi" />
        <Child2 name="krishna"/>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default Memo