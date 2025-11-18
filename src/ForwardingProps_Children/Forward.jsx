import React from 'react'

const Forward = ({text,...props}) => {
    console.log(props)
  return (
    
        text?<input {...props}/>:<textarea {...props}/>

  )
}

export default Forward