import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("allNotes")) ||[]);

  useEffect(()=> {
    localStorage.setItem("allNotes", JSON.stringify(notes))
  },[notes])

  function addNote() {
    const newNote = {
      title: "olá",
      data: "09/09/22",
    };
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes);
  }

  return (
    <>
      <p>{notes.length}</p>
      <button onClick={addNote}>sub</button>
    </>
  );
}

export default App;
