import create from "zustand";
import { nanoid } from "nanoid";
import { persist } from "zustand/middleware";

let store = (set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [
        ...state.notes,
        { id: nanoid(), content: note, date: new Date().toLocaleDateString() },
      ],
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
  removeAllNotes: () => set({ notes: [] }),
});

store = persist(store, { name: "all-notes" });

const useStore = create(store);

export default useStore;

/* addNote: (note) =>
    set((state) => ({
      notes: [
        {
          id: nanoid(),
          note: note.note,
          date: new Date().toLocaleDateString(),
        },
        ...state.notes,
      ],
    })), */
