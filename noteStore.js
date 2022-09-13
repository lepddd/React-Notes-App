import create from "zustand";
import {persist} from "zustand/middleware"

const useNoteStore = create(
    persist(
      (set, get) => ({
        notes: [],
        updateNotes: (newNotes) => set({ notes: newNotes }),
      }),
      {
        name: 'all-notes', // unique name
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )

export default useNoteStore