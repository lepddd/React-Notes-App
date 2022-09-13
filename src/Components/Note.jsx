import { Icon } from "@iconify/react";
import useNoteStore from "../../noteStore";
const Note = ({ date, note, index }) => {
  const notes = useNoteStore((state) => state.notes);
  const deleteNotes = useNoteStore((state) => state.updateNotes);

  function deleteNote(id) {
    const filtered = notes.filter((el) => el.id !== id);
    deleteNotes(filtered);
  }

  return (
    <div className="flex gap-3 flex-col p-3 w-[250px] h-[200px] bg-yellow-200 rounded drop-shadow-md">
      <p className="bg-yellow-200 w-full h-full text-zinc-800">{note}</p>
      <div className="flex justify-between items-center text-zinc-800">
        <p className="text-sm text-zinc-800">{date}</p>
        <button onClick={() => deleteNote(index)}>
          <Icon icon="wpf:full-trash" color="#27272a" width="22" height="22" />
        </button>
      </div>
    </div>
  );
};

export default Note;
