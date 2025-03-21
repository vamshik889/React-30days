import React from 'react'

const Button = ({label,style,onClick}) => {
  return (
    <div>
        <button onClick={onClick} style={style}>{label}</button>
    </div>
  )
}

export default Button