import React from 'react'
import useToggle from './useToggle'

const Button = () => {
    const [toggle,isToggle] = useToggle(true)
  return (
    <div>
        <button onClick={toggle}>{isToggle?"hide ":"show "}content</button>
        <p>{isToggle&&"Content showing"}</p>
    </div>
  )
}

export default Button