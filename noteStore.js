import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({
      notes: [
        {
          id: state.notes.length,
          note: note,
          date: new Date().toLocaleDateString(),
        },
        ...state.notes,
      ],
    })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter(note => note.id !== id)
  }))
});

store = persist(store, { name: "Teste-Notes-Persist" });

const useStore = create(store);

export default useStore;
