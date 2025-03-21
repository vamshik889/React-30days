import React, { useRef, useState } from "react";
import NoteItem from "./NoteItem";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const textfield = useRef("");

  const [enable,setEnable] = useState(true);
  const [text,setText] = useState("");
  const handleChange = (e)=>{
    setEnable(e.target.value === "")
  }

  const handleAdd = () => {
    const note = {
      id: Date.now(),
      body: textfield.current.value,
      status: false,
    };
    textfield.current.value &&
      setNotes((prev) => {
        return [...prev, note];
      });
    console.log(notes);
    setEnable(true)
    textfield.current.value = "";
   
  };
  const handleCancel = () => {
    textfield.current.value = "";
    setText("")
    setEnable(true)
  };
  const handleDelete = (id)=>{
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes)
  } 

  const handleEdit = (id)=>{

  }
  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="note-input">
        <label htmlFor="input">Create New Note </label>
        <textarea id="input" ref={textfield} onChange={handleChange}/>
      </div>
      <div className="add-cancel">
        
        <button onClick={handleAdd} disabled={enable} >Add Note</button>
        <button onClick={handleCancel} disabled={enable}>Cancel</button>
      </div>
      <div className="notesItems">
        {notes.map((item) => {
          return <NoteItem item={item} key={item.id} handleDelete={handleDelete} handleEdit = {handleEdit}/>;
        })}
      </div>
    </div>
  );
};

export default Notes;
