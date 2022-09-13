import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [
        {
          id: note.id,
          note: note.note,
          date: new Date().toLocaleDateString(),
        },
        ...state.notes,
      ],
    })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter(note => note.id !== id)
  })),
  removeAllNotes: () => set((state) => ({notes: []}))
});

store = persist(store, { name: "all-notes" });

const useStore = create(store);

export default useStore;
