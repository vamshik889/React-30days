import React from 'react'

const Child2 = (props) => {
    console.log("render in child-2")
  return (
    
    <div>{props.name}</div>
  )
}

export default Child2