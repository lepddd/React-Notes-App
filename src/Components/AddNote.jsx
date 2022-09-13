import { useState } from "react";
import useStore from "../../noteStore";

const Note = () => {
  const maxLength = 100;

  const [text, setText] = useState("");
  const [remaning, setRemaning] = useState(maxLength);
  const [isValid, setIsValid] = useState(true);

  const notes = useStore((state) => state.notes);
  const addNote = useStore((state) => state.addNote);

  function handleChange(e) {
    setText(e.target.value);
    setRemaning(maxLength - e.target.value.length);
  }

  function addNotes() {
    if (!text) {
      setIsValid(false);
      setTimeout(() => {
        setIsValid(true);
      }, 1000);
    } else {
      const newNote = {
        note:text,
        id:Math.random()+notes.length
      }
      addNote(newNote); //update store
      setRemaning(maxLength);
      setText(""); //reset textarea
      setIsValid(true);
    }
  }

  return (
    <div className="flex gap-3 flex-col p-3 w-[250px] h-[200px] bg-green-200 rounded drop-shadow-md">
      <textarea
        onChange={(e) => handleChange(e)}
        className={`resize-none bg-green-200 outline-none border rounded text-zinc-800 ${
          isValid ? "border-green-200" : "border-red-500"
        }`}
        value={text}
        maxLength={maxLength}
        cols="30"
        rows="10"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="flex justify-between items-center text-zinc-800">
        <p className="text-sm text-emerald-700">{remaning} Remaning</p>
        <button
          className="text-xs px-3 py-1 bg-zinc-800 text-neutral-50 rounded"
          onClick={addNotes}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default Note;
