import { useState } from "react";
import useStore from "../store/noteStore";

const Note = () => {
  const [text, setText] = useState("");

  const addNote = useStore((state) => state.addNote);

  const maxLength = 100;

  const remaning = maxLength - text.length;

  function handleChange(e) {
    setText(e.target.value);
  }

  function addNotes(e) {
    e.preventDefault();
    addNote(text);
    setText("");
  }

  return (
    <form
      className="flex gap-3 flex-col p-3 w-[250px] h-[200px] bg-green-200 rounded drop-shadow-md"
      onSubmit={(e) => addNotes(e)}
    >
      <textarea
        onChange={(e) => handleChange(e)}
        className="resize-none bg-green-200 outline-none border rounded border-green-200 text-zinc-800"
        value={text}
        maxLength={maxLength}
        cols="30"
        rows="10"
        placeholder="Type to add a note..."
        required
      />
      <div className="flex justify-between items-center text-zinc-800">
        <p className="text-sm text-emerald-700">{remaning} Remaning</p>
        <button className="text-xs px-3 py-1 bg-zinc-800 text-neutral-50 rounded">
          save
        </button>
      </div>
    </form>
  );
};

export default Note;
