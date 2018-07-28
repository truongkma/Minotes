import db from '@/database/note-db'

const state = {
  notes: []
}

const mutations = {
  ADD_NOTE (state, note) {
    state.notes.push(note)
  },
  LOAD_NOTES (state, notes) {
    state.notes = notes
  }
}

const actions = {
  addNote (store, note) {
    db.insert(note, (err, note) => {
      if (!err) {
        store.commit('ADD_NOTE', note)
      }
    })
  },
  loadNotes (store) {
    db.find({}, (err, notes) => {
      if (!err) {
        store.commit('LOAD_NOTES', notes)
      }
    })
  }
}

const getters = {
  notes: state => state.notes
}

export default {
  state,
  mutations,
  actions,
  getters
}
