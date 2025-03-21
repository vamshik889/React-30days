import React from 'react'

const Users = ({data,handleClick}) => {
  return (
    <div>
{        data.map((user)=>{
            return <button key={user.id} onClick={()=>{handleClick(user.id)}} autoFocus style={{display:"flex",minWidth:150,}}>{user.name}</button>
        })}
    </div>
  )
}

export default Users