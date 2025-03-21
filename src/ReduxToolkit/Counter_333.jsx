import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {counterActions} from "./store2"
const Counter_333 = () => { 
  const data = useSelector((state)=>state.counter);
  const dispatch = useDispatch()
  const {showCounter,count} = data ;//destructuring the object
  return (
    <div>
      {showCounter&&<p>Count:{count} </p>}
      <button onClick={()=>dispatch(counterActions.increment())}>Increment</button>
      <button onClick={()=>dispatch(counterActions.decrement())}>Decrement</button>
      <button onClick={()=>dispatch(counterActions.reset())}>Reset</button>
      <button onClick={()=>dispatch(counterActions.increase({value:10}))}>Increase</button>
      <button onClick={()=>dispatch(counterActions.showCounter())}>Toggle Counter</button>
    </div>
  )
}

export default Counter_333