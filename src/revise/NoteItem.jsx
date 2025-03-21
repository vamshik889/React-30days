import React from 'react'

const NoteItem = ({item,handleDelete}) => {
  return (
    <div className='note'>
        <h4></h4>
        <p>{item.body}</p>
        <div>
            <button onClick={()=>{handleEdit(id)}}>Edit</button>
            <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
        </div>

    </div>
  )
}

export default NoteItem