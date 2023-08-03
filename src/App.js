import React, { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Heading from "./components/Heading";

const App = () => {
  const [notes, setnotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "this is my second note!",
      date: "15/04/2021"
    },
    {
      id: nanoid(),
      text: "this is my third note!",
      date: "15/04/2021"
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setnotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setnotes(newNotes);
  }

  return (
    <div className="container">
      <Heading />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>

  )
}

export default App;