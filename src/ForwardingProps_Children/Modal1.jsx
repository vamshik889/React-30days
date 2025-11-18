import React from 'react'
import Input1 from './Input1'

const Modal1 = ({title,children,...rest}) => {
    // console.log(rest) //so we are destructuring only 2 props and remaining we are collecting into rest object the name can be anything 
    //like ...remaining and we can forward the same as below to some other component like below
  return (
    <div>
        <h2>{title}</h2>
        {children}
        <Input1 {...rest}/>
    </div>
  )
}

export default Modal1