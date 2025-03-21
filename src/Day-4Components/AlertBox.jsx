import React from 'react'

const AlertBox = ({type, message}) => {
    const styles ={

        warning: {backgroundColor:"red",color:"black"},
        success: {backgroundColor:"green",color:"white"}
    }
  return (
    <div style={styles[type]}>
        <p>{message}</p>
    </div>
   
  )
}

export default AlertBox