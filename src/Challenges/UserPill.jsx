import React from 'react'

const UserPill = (props) => {
    const {user,handleRemoval} = props

  return (
    <span
    style={{display:"inline-block",backgroundColor:"grey",margin:"5px"}}
    >{user.firstName} {user.lastName}
     <span
    onClick={()=>handleRemoval(user.id)}
    >❌</span></span>
  )
}

export default UserPill