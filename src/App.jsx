import { useState, useEffect } from "react";
import Header from "./Components/Header";

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
    <div className="container bg-slate-500 mx-auto">
      <Header/>
    </div>
  );
}

export default App;
