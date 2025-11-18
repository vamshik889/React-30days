import React from 'react'

const Input1 = (props) => {
    console.log(props)  //  {"isOpen": false,  "data": "Delete modal","onclose":}  so these props are forwarded from parent component
  return (
    <div>Input1</div>
  )
}

export default Input1