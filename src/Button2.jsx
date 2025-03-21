import React, { useState } from 'react'

const Button2 = (props) => {
    const{count,handleclick} = props

  return (
    <div>
        <button onClick={handleclick}>clicked {count} times</button>
    </div>
  )
}

export default Button2