import React, { useState } from 'react'

const AddTodo = ({handleAdd,handleChange,input}) => {
    
  return (
    <div>
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={()=>{handleAdd(input)}}>Add</button>
    
    </div>
  )
}

export default AddTodo