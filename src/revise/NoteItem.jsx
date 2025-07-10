import React, { useCallback, useState } from 'react'

const NoteItem = ({item,notes,setNotes,handleDelete}) => {
    const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState("");
    const handleEdit = (id) => {
    setIsEdit(true);
  }
  const saveEditedNote = useCallback((id)=>{
   const updatedNotes =  notes.map((note)=>note.id ===id ?{...note,body:editedText}:note);
   setNotes(updatedNotes);
   setIsEdit(false)
  })
  return (
    <div className='note'>
        <h4></h4>
        {isEdit ? <input type="text" value={editedText} onChange={(e)=>setEditedText(e.target.value)} />: <p >{item.body}</p>}
        {isEdit && <span onClick={()=>saveEditedNote(item.id)}>✅</span>}
        <div>
            <button onClick={()=>{handleEdit(item.id)

              setEditedText(item.body)
            }}>Edit</button>
            <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
        </div>

    </div>
  )
}

export default React.memo(NoteItem)