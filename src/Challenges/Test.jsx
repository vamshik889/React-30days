import React, { useRef, useState } from 'react';

const Test = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [editId, setEditId] = useState(null); // New state
    const inputRef = useRef(null)
    const handleAdd = () => {
        if (title.trim() === "") return;

        if (isOpen && editId !== null) {
            const updated = notes.map((note) => {
                if (note.id === editId) {
                    return { ...note, title: title };
                } else {
                    return note;
                }
            });
            setNotes(updated);
            setIsOpen(false);
            setEditId(null);
        } else {
            const newNote = {
                title: title,
                id: Date.now(),
            };
            setNotes((prev) => [...prev, newNote]);
        }

        setTitle("");
    };

    const handleEdit = (id) => {

        const note = notes.find((note) => note.id === id);
        setTitle(note.title);
        setIsOpen(true);
        setEditId(id); // Track which note we're editing
        inputRef.current.focus()
    };

    const handleDelete = (id) => {
        const updatedAfterDelete = notes.filter((note) => note.id !== id);
        setNotes(updatedAfterDelete);

        if (editId === id) {
            setIsOpen(false);
            setEditId(null);
            setTitle("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputRef}
            />
            <button onClick={handleAdd}>
                {isOpen ? "Update" : "Add"}
            </button>

            <div>
                <h2>Notes</h2>
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note.id}>
                            {note.title}
                            <button onClick={() => handleDelete(note.id)}>❌</button>
                            <button onClick={() => handleEdit(note.id)}>✒️</button>
                        </div>
                    ))
                ) : (
                    <div>No Notes available</div>
                )}
            </div>
        </div>
    );
};

export default Test;
