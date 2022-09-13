import useNoteStore from "../noteStore";
import AddNote from "./Components/AddNote";
import Header from "./Components/Header";
import Note from "./Components/Note";

function App() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <div className="container mx-auto">
      <Header />
      <div className=" flex flex-wrap gap-2.5 items-center justify-center md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {notes.map(({ note, date, id }) => (
          <Note key={id} note={note} date={date} index={id} />
        ))}
        <AddNote />
      </div>
    </div>
  );
}

export default App;
