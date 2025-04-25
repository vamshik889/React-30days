import React from 'react'

const Child =  React.memo( ({name})=>{
    console.log("render in child-1")

  return (
    <div>{name}{}</div>
  )
})

export default Child

