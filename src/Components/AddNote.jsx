import { useState } from "react";
import useNoteStore from "../../noteStore";
const Note = () => {
  let date = new Date();
  let maxLength = 100;

  const [remaning, setRemaning] = useState(maxLength);
  const [text, setText] = useState("");

  const [isValid,setIsValid] = useState(true)
  const notes = useNoteStore((state) => state.notes);
  const addNote = useNoteStore((state) => state.updateNotes);

  function handleChange(e) {
    setText(e.target.value);
    setRemaning(maxLength - e.target.value.length);
  }

  function addNotes() {
    if(!text){
      setIsValid(false)
      setTimeout(()=>{
        setIsValid(true)
      },1000)
    }else{
      const newNote = {
        id: notes.length,
        note: text,
        date: date.toLocaleDateString(),
      };
      addNote([...notes, newNote]); //update store 
      setIsValid(true)
      setRemaning(maxLength)
      setText(""); //reset textarea
    }
  }

  return (
    <div className="flex gap-3 flex-col p-3 w-[250px] h-[200px] bg-green-200 rounded drop-shadow-md">
      <textarea
        onChange={(e) => handleChange(e)}
        className={`resize-none bg-green-200 outline-none border rounded ${isValid?'border-green-200':'border-red-500'}`}
        value={text}
        maxLength={maxLength}
        cols="30"
        rows="10"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="flex justify-between items-center text-zinc-800">
        <p className="text-sm text-zinc-800">Remaning {remaning}</p>
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
